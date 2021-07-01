import React from 'react';
import {useState} from "react";
import { allNavSiteLinks } from '../const/const';

const NavigationSite = () => {
    const defaultActiveLink = ``;
    const [activeLink, setActiveLink] = useState(defaultActiveLink);
    const handleActiveLink = (evt) => {
        setActiveLink(evt.target.dataset.link);
    };
    return <>
        <nav className="header__nav">
            <ul className="list main-nav site-list">
                {allNavSiteLinks.map((siteLink) => {
                return <li key={siteLink} className="site-list__item">
                    <a href="#" onClick={handleActiveLink} className={`site-list__link ${siteLink === activeLink ? `site-list__link--active` : ``}`} data-link={siteLink} >{siteLink}</a>
                </li>;
                })}
            </ul>
        </nav>
    </>
}

export default NavigationSite;