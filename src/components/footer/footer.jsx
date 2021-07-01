import React from 'react';
import { footerSocialInfo } from '../const/const';

const Footer = () => {
    return <>
        <footer className="footer container">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__social social-footer">
            <ul className="list social-footer__list">
              {footerSocialInfo.map((social) => {
                return <li key={social.name} className="social-footer__item">
                  <a href="#" className="social-footer__link">
                    <img src={social.src} alt={social.name}></img>
                  </a>
                </li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </>
}

export default Footer;