import "./Header.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import bag from "../../img/svg/cart.svg";

export const Header = () => {
    const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const footer = document.getElementById("footer");
        if (footer) {
            footer.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <header className="header">
            <div className="header__body">
                <div className="header__container">
                    <div className="header__logo">
                        <NavLink className="logo__image" to="/Home">
                            Panto
                        </NavLink>
                    </div>
                    <div className="menu__body">
                        <nav className="header__menu">
                            <ul className="header__list">
                                <li className="menu__item">
                                    <NavLink className="menu__link" to="/Shop">
                                        Магазин
                                    </NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink
                                        className="menu__link"
                                        to="AboutUs"
                                    >
                                        О нас
                                    </NavLink>
                                </li>
                                <li className="menu__item">
                                    <a
                                        href="#"
                                        className="menu__link"
                                        onClick={handleContactClick}
                                    >
                                        Контакты
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__actions">
                        <div className="cart__body">
                            <NavLink className="cart__list" to="/ShopBasket">
                                <img src={bag} alt="" className="cart__image" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
