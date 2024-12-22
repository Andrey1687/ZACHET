import "../footer/Footer.css";

export const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer__container">
                <div className="footer__rows">
                    <div className="footer__description footer-left">
                        <div className="footer__logo">
                            <p className="logo__image">Panto</p>
                        </div>
                        <div className="footer__text">
                            The advantage of hiring a workspace with us is that
                            givees you comfortable service and all-around
                            facilities.
                        </div>
                    </div>
                    <div className="footer__columns footer-right">
                        <div className="footer__column">
                            
                        </div>
                        <div className="footer__column">
                            <h3 className="footer__subtitle">Follow Us</h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <div className="footer__social">
                                        <a
                                            href="https://www.facebook.com"
                                            className="footer__link"
                                        >
                                            Вконтакте
                                        </a>
                                    </div>
                                </li>
                                <li className="footer__item">
                                    <div className="footer__social">
                                        <a
                                            href="https://www.twitter.com"
                                            className="footer__link"
                                        >
                                            Twitter
                                        </a>
                                    </div>
                                </li>
                                <li className="footer__item">
                                    <div className="footer__social">
                                        <a
                                            href="https://www.instagram.com"
                                            className="footer__link"
                                        >
                                            Instagram
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__policies">
                    <div className="footer__copyright">Copyright © 2021</div>
                    <div className="footer__policy">
                        <div className="footer__terms">
                            <a href="" className="terms__link">
                                Terms & Conditions
                            </a>
                        </div>
                        <div className="footer__privacy">
                            <a href="" className="privacy__link">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
