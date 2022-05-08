import React from 'react'
import { Social, socialInfo } from '../const/const'
import { ReactComponent as LinkedIn } from '../../img/linkedin.svg'
import { ReactComponent as Facebook } from '../../img/facebook.svg'
import { ReactComponent as Instagram } from '../../img/instagram.svg'
import { ReactComponent as GitHub } from '../../img/github.svg'

const Footer = ({ isMainPageFooter }) => {
    const returnSvg = (link) => {
        switch (link) {
            case Social.LINKEDIN:
                return <LinkedIn />
            case Social.GITHUB:
                return <GitHub />
            case Social.FACEBOOK:
                return <Facebook />
            case Social.INSTAGRAM:
                return <Instagram />
            default:
                return ``
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return <>
        <footer className={`footer ${isMainPageFooter ? `` : `footer--rest-pages`}`}>
            <div className="container-site">
                <div className="footer__wrapper">
                    {isMainPageFooter ?
                        <button className="footer__button-up" onClick={scrollToTop}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 class="bi bi-chevron-double-up footer__arrow" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" />
                                <path fill-rule="evenodd"
                                      d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                            </svg>
                        </button>
                        :
                        null
                    }
                    <div
                        className={`footer__social social-footer ${isMainPageFooter ? `` : `social-footer--rest-pages`}`}>
                        <ul className="list social-footer__list">
                            {socialInfo.map((social) => {
                                return <li key={social.name} className="social-footer__item">
                                    <a href={social.src} className="social-footer__link" aria-label={social.name}>
                                        {returnSvg(social.id)}
                                    </a>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="footer__copyright">
                        <p className={`footer__author ${isMainPageFooter ? `` : `footer__author--rest-pages`}`}>Alexandra
                            Kuchinskaya
                            <span className="footer__year">@2021</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </>
}

export default Footer
