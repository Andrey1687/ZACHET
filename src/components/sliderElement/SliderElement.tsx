import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, Slide } from "../../store/store";
import { addItemToCart } from "../../store/store";

const SliderElement: React.FC = () => {
    const dispatch = useDispatch();
    const { slides, slideIndex } = useSelector((state: RootState) => state.slider);

    const visibleSlides = 4;

    const totalSlides = [...slides, ...slides.slice(0, visibleSlides)];

    const handleAddToCart = (slide: Slide) => {
        dispatch(addItemToCart(slide));
    };

    return (
        <div className="slider">
            <div
                className="slides__wrapper"
                style={{
                    transform: `translateX(-${slideIndex * (100 / visibleSlides)}%)`,
                }}
            >
                {totalSlides.map((slide, index) => (
                    <div key={index} className="slide">
                        <div className="slider__content">
                            <div className="slider__image">
                                <img
                                    src={slide.img_src}
                                    alt={slide.img_alt}
                                    className="slider__picture"
                                />
                            </div>
                            <div className="slider__details">
                                <h3 className="slider__name">{slide.title}</h3>
                                <p className="slider__price">{slide.price}</p>
                                <div className="slider__stars">
                                    {"★".repeat(slide.stars)}
                                </div>
                                <button
                                    className="slider__button"
                                    onClick={() => handleAddToCart(slide)}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SliderElement;
