import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

// Image import
import footerImage from "../../public/img/footer_img.jpg";
import Link from "next/link";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer
            className="p-footer l-footer"
            data-scroll
        >
            <div className="l-footer__inner">
                <div className="p-footer__contents">
                    <div className="p-footer__head p-footer-head">
                        <Link href="/contact/" className="p-footer-head__link">
                            <div className="p-footer-head__heading">
                                <span className="p-footer-head__heading-text">
                                    <picture className="p-footer-head__picture">
                                        <Image
                                            src={footerImage}
                                            alt=""
                                            width={200}
                                            height={200}
                                            loading="lazy"
                                            className="p-footer-head__img"
                                            style={{
                                                objectFit: "cover",
                                                // add filter
                                                filter: "grayscale(100%)",
                                            }}
                                        />
                                    </picture>
                                    Let’s<span data-text="work"> create</span>
                                </span>
                                <span className="p-footer-head__heading-text">
                                    together<span data-text="→">.</span>
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className="p-footer__foot p-footer-foot">
                        <div className="p-footer-foot__left">
                            <p className="p-footer-foot__text">FOLLOW ME</p>
                            <ul className="p-footer-foot__sns p-sns">
                                <li className="p-sns__item">
                                    <a
                                        href="https://twitter.com/spaysheeps"
                                        className="p-sns__link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="u-visually-hidden">
                                            Twitter
                                        </span>
                                        <FaTwitter
                                            size={20}
                                            className="c-svg p-sns__svg"
                                        />
                                        <span className="p-sns__border"></span>
                                    </a>
                                </li>
                                <li className="p-sns__item">
                                    <a
                                        href="https://linkedin.com/in/sean-relampagos"
                                        className="p-sns__link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="u-visually-hidden">
                                            LinkedIn
                                        </span>
                                        <FaLinkedinIn
                                            size={20}
                                            className="c-svg p-sns__svg"
                                        />
                                        <span className="p-sns__border"></span>
                                    </a>
                                </li>
                                <li className="p-sns__item">
                                    <a
                                        href="https://github.com/seangjr"
                                        className="p-sns__link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="u-visually-hidden">
                                            GitHub
                                        </span>
                                        <FaGithub
                                            size={20}
                                            className="c-svg p-sns__svg"
                                        />
                                        <span className="p-sns__border"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <ul className="p-footer-foot__nav">
                            <li className="p-footer-foot__nav-item">
                                <Link
                                    href="/about/"
                                    className="p-footer-foot__nav-link"
                                >
                                    ABOUT
                                </Link>
                            </li>
                            <li className="p-footer-foot__nav-item">
                                <Link
                                    href="/contact/"
                                    className="p-footer-foot__nav-link"
                                >
                                    CONTACT
                                </Link>
                            </li>
                            <li className="p-footer-foot__nav-item">
                                <Link
                                    href="https://youtu.be/dQw4w9WgXcQ"
                                    className="p-footer-foot__nav-link p-footer-foot__nav-link--blank"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    BLOG
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="p-footer__copyright">
                    <small lang="en">© Sean Relampagos {year}</small>
                </p>
            </div>
        </footer>
    );
};
export default Footer;
