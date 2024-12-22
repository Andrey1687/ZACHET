import "./AboutUs.css";

export const AboutUs = () => {
    return (
        <div className="about">
            <div className="about__container">
                <section className="services">
                    <div className="services__columns">
                        <div className="services__column">
                            <div className="services__attend">
                                <div className="attend__logo">
                                </div>
                                <h3 className="attend__title">
                                    Fast and safe delivery
                                </h3>
                                <div className="attend__description">
                                    <p className="attend__content">
                                        Please login and buy our products, safe
                                        delivery guaranteed
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="services__column">
                            <div className="services__attend">
                                <div className="attend__logo">
                                </div>
                                <h3 className="attend__title">
                                    Quick and easy returns
                                </h3>
                                <div className="attend__description">
                                    <p className="attend__content">
                                        Items that do not match we are ready to
                                        replace, please return
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="services__column">
                            <div className="services__attend">
                                <div className="attend__logo">
                                </div>
                                <h3 className="attend__title">
                                    24 hour customer service
                                </h3>
                                <div className="attend__description">
                                    <p className="attend__content">
                                        Our customer service is ready to serve
                                        you at any time, don't hesitate to
                                        contact us
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="services__column">
                            <div className="services__attend">
                                <div className="attend__logo">
                                </div>
                                <h3 className="attend__title">
                                    The price match is very fitting
                                </h3>
                                <div className="attend__description">
                                    <p className="attend__content">
                                        The price of the products we offer is
                                        very in accordance with the quality of
                                        the goods
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
