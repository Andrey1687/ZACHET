import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import { increaseQuantity, decreaseQuantity, clearCart } from "../../../store/store"; // Импортируем новое действие
import "./ShopBasket.css";

export const ShopBasket: React.FC = () => {
    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const totalCost = items.reduce(
        (acc, item) => acc + Number(item.price.slice(1)) * item.quantity,
        0
    );

    // Обработчик нажатия на кнопку "Buy"
    const handleBuyClick = () => {
        // Логика для оформления покупки (например, отправка данных на сервер)
        console.log("Покупка оформлена!");

        // Очистка корзины
        dispatch(clearCart());
    };

    const handleIncrease = (title: string) => {
        dispatch(increaseQuantity(title));
    };

    const handleDecrease = (title: string) => {
        dispatch(decreaseQuantity(title));
    };

    return (
        <section className="basket">
            <div className="basket__container">
                <h2 className="basket__title">Shopping Cart</h2>
                {items.length === 0 ? (
                    <p className="basket__status">Your cart is empty</p>
                ) : (
                    <>
                        <ul className="basket__list">
                            {items.map((item, index) => (
                                <li key={index} className="basket__item">
                                    <img
                                        src={item.img_src}
                                        alt={item.img_alt}
                                        className="basket__image"
                                    />
                                    <div className="basket__details">
                                        <h3 className="basket__title">
                                            {item.title}
                                        </h3>
                                        <p className="basket__price">
                                            {item.price}
                                        </p>
                                        <div className="basket__stars">
                                            {"★".repeat(item.stars)}
                                        </div>
                                        <div className="basket__quantity">
                                            <p className="quantity__title">
                                                Quantity:
                                            </p>
                                            <div className="quantity__controls">
                                                <button
                                                    className="quantity__button"
                                                    onClick={() =>
                                                        handleDecrease(item.title)
                                                    }
                                                >
                                                    -
                                                </button>
                                                <p className="quantity__amount">
                                                    {item.quantity}
                                                </p>
                                                <button
                                                    className="quantity__button"
                                                    onClick={() =>
                                                        handleIncrease(item.title)
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="basket__total">
                            <p className="basket__cost">Total Cost:</p>
                            <div className="basket__amount">
                                ${totalCost.toFixed(2)}
                            </div>
                        </div>
                        <button className="slider__button" onClick={handleBuyClick}>
                            Buy
                        </button>
                    </>
                )}
            </div>
        </section>
    );
};

export default ShopBasket;
