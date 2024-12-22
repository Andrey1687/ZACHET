import React from "react";
import Upin from "../../../img/svg/upin.svg";
import Ibuk from "../../../img/svg/ibuk.svg";
import Mpok from "../../../img/svg/mpok.svg";
import star from "../../../img/svg/star.svg";
export const Home = () => {
    return (
        <div className="home">
            <section className="intro">
                <div className="intro__container">
                    <div className="intro__description">
                        <h1 className="intro__title">
                            Make Your Interior More Minimalistic & Modern
                        </h1>
                        <div className="intro__subtitle">
                            <p className="subtitle__text">
                                Turn your room with panto into a lot more
                                minimalist and modern with ease and speed
                            </p>
                        </div>
                        <div className="intro__slogan">
                            <p className="slogan__text">
                                Search your furniture
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="why">
                <div className="why__container">
                    <div className="why__columns">
                        <div className="why__column narrative">
                            <div className="why__description">
                                <h4 className="why__subtitle">
                                    Luxury facilities
                                </h4>
                                <div className="why__narrative">
                                    The advantage of hiring a workspace with us
                                    is that givees you comfortable service and
                                    all-around facilities.
                                </div>
                            </div>
                        </div>
                        <div className="why__column narrative">
                            {" "}
                            <div className="why__description">
                                <h4 className="why__subtitle">
                                    Affordable Price
                                </h4>
                                <div className="why__narrative">
                                    You can get a workspace of the highst
                                    quality at an affordable price and still
                                    enjoy the facilities that are oly here.
                                </div>
                            </div>
                        </div>
                        <div className="why__column narrative">
                            <div className="why__description">
                                <h4 className="why__subtitle">Many Choices</h4>
                                <div className="why__narrative">
                                    We provide many unique work space choices so
                                    that you can choose the workspace to your
                                    liking.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="experiences">
                <div className="experiences__container">
                    <div className="experiences__description">
                        <h3 className="experiences__subtitle">EXPERIENCES</h3>
                        <h2 className="experiences__title">
                            We Provide You The Best Experience
                        </h2>
                        <p className="experiences__text">
                            You don’t have to worry about the result because all
                            of these interiors are made by people who are
                            professionals in their fields with an elegant and
                            lucurious style and with premium quality materials
                        </p>
                    </div>
                </div>
            </section>
            <section className="reviews">
                <div className="reviews__container">
                    <div className="reviews__name">
                        <h3 className="reviews__subtitle">Testimonials</h3>
                        <h2 className="reviews__title">Our Client Reviews</h2>
                    </div>
                    <div className="reviews__columns">
                        <div className="reviews__column upin-column">
                            <div className="column__content">
                                <div className="column__image">
                                    <img src={Upin} alt="Bang Upin" />
                                </div>
                                <div className="column__man">
                                    <div className="column__name">
                                        Bang Upin
                                    </div>
                                    <div className="column__job">
                                        Pedagang Asongan
                                    </div>
                                </div>
                                <div className="column__review">
                                    “Terimakasih banyak, kini ruanganku menjadi
                                    lebih mewah dan terlihat mahal“
                                </div>
                                <div className="column__rating">
                                    <ul className="column__stars">
                                        <li className="column__star">
                                            <img src={star} alt="Star" />
                                        </li>
                                        <li className="column__star">
                                            <img src={star} alt="Star" />
                                        </li>
                                        <li className="column__star">
                                            <img src={star} alt="Star" />
                                        </li>
                                        <li className="column__star">
                                            <img src={star} alt="Star" />
                                        </li>
                                        <li className="column__star">
                                            <img src={star} alt="Star" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="reviews__column ibuk-column">
                            <div className="column__content">
                                <div className="column__image">
                                    <img src={Ibuk} alt="Ibuk Sukijan" />
                                </div>
                                <div className="column__man">
                                    <div className="column__name">
                                        Ibuk Sukijan
                                    </div>
                                    <div className="column__job">
                                        Ibu Rumah Tangga
                                    </div>
                                </div>
                                <div className="column__review">
                                    “Makasih Panto, aku sekarang berasa tinggal
                                    di apartment yang terlihat mewah“
                                </div>
                                <div className="column__rating">
                                    <ul className="column__stars">
                                        <li className="column__star">
                                            <img src={star} alt="Star" />
                                        </li>
                                        <li className="column__star">
                                            <img src={star} alt="Star" />
                                        </li>
                                        <li className="column__star">
                                            <img src={star} alt="Star" />
                                        </li>
                                        <li className="column__star">
                                            <img src={star} alt="Star" />
                                        </li>
                                        <li className="column__star">
                                            <img src={star} alt="Star" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="reviews__column mpok-column">
                            <div className="column__content">
                                <div className="column__image">
                                    <img src={Mpok} alt="Mpok Ina" />
                                </div>
                                <div className="column__man">
                                    <div className="column__name">Mpok Ina</div>
                                    <div className="column__job">
                                        Karyawan Swasta
                                    </div>
                                </div>
                                <div className="column__review">
                                    “Sangat terjangkau untuk kantong saya yang
                                    tidak terlalu banyak“
                                </div>
                                <div className="column__rating">
                                    <ul className="column__stars">
                                        <li className="column__star">
                                            <img src={star} alt="Star" />
                                        </li>
                                        <li className="column__star">
                                            <img src={star} alt="Star" />
                                        </li>
                                        <li className="column__star">
                                            <img src={star} alt="Star" />
                                        </li>
                                        <li className="column__star">
                                            <img src={star} alt="Star" />
                                        </li>
                                        <li className="column__star">
                                            <img src={star} alt="Star" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
