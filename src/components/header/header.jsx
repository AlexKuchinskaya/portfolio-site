import React from 'react';
import {useState} from "react";
import { allNavSiteLinks } from '../const/const';
import Logo from '../logo/logo';

const Header = ({isLogoLinkInHeader}) => {
    const defaultActiveLink = ``;
    const [activeLink, setActiveLink] = useState(defaultActiveLink);
    const handleActiveLink = (evt) => {
        setActiveLink(evt.target.dataset.link);
    };
    console.log(`activeLink`, activeLink)
    return <>
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    {/* Logo of my site */}
                    <Logo/>
                    <nav className="header__nav">
                        <ul className="list main-nav site-list">
                            {allNavSiteLinks.map((siteLink) => {
                            return <li key={siteLink} className="site-list__item">
                                <a href="#" onClick={handleActiveLink} className={`site-list__link ${siteLink === activeLink ? `site-list__link--active` : ``}`} data-link={siteLink} >{siteLink}</a>
                            </li>;
                            })}
                        </ul>
                    </nav>
                    <div className="user-language"> 
                    {/* переключатель языков */}
                        <a className="user-language__link" href="#">
                            {/* some svg with language icon */}
                            <span className="user-language__option">ENG</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    </ >;
  };
  
//   Header.propTypes = {
//     isLogoLinkInHeader: PropTypes.bool.isRequired,
//   };
  export default Header;