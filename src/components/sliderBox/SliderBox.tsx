import React from "react";
import { useDispatch } from "react-redux";
import { showNextSlide, showPreviousSlide } from "../../store/store";
import SliderElement from "../sliderElement/SliderElement";

const SliderBox: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <div className="slider__block">
            <button
                onClick={() => dispatch(showPreviousSlide())}
                className="prev-button"
            >
                &lt;
            </button>
            <SliderElement />
            <button
                onClick={() => dispatch(showNextSlide())}
                className="next-button"
            >
                &gt;
            </button>
        </div>
    );
};

export default SliderBox;
