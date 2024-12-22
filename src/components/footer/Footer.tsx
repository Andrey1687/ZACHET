import "../footer/Footer.css";
import vk from "../../img/svg/vk.svg";
import odnokl from "../../img/svg/odnokl.svg";
import hhh from "../../img/svg/hhh.svg";

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
                                        <img
                                            src={vk}
                                            alt="Facebook"
                                            className="footer__icon"
                                        />
                                        <a
                                            href="https://vk.com"
                                            className="footer__link"
                                        >
                                            Вконтакте
                                        </a>
                                    </div>
                                </li>
                                <li className="footer__item">
                                    <div className="footer__social">
                                        <img
                                            src={odnokl}
                                            alt="odnokl"
                                            className="footer__icon"
                                        />
                                        <a
                                            href="https://ok.ru/"
                                            className="footer__link"
                                        >
                                            Однокласники
                                        </a>
                                    </div>
                                </li>
                                <li className="footer__item">
                                    <div className="footer__social">
                                        <img
                                            src={hhh}
                                            alt="hhh"
                                            className="footer__icon"
                                        />
                                        <a
                                            href="https://hoff.ru/"
                                            className="footer__link"
                                        >
                                            Hoff
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
