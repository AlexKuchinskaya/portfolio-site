import React from 'react';
import {useState} from "react";
import { allNavSiteLinks, MenuNav } from '../const/const';
import Logo from '../logo/logo';
import { ReactComponent as About } from '../../img/person.svg';
import { ReactComponent as Skills } from '../../img/pencil-square.svg';
import { ReactComponent as Interface } from '../../img/laptop.svg';
import { ReactComponent as Projects } from '../../img/image.svg';
import { ReactComponent as Contacts } from '../../img/envelope.svg';
import { ReactComponent as Close } from '../../img/x.svg';


const NavigationSite = () => {
    // console.log(`sectionsBlocks`, sectionsBlocks)
    const defaultActiveLink = ``;
    const [isMenuOpened, setIsMenuOpened]= useState(false)
    const [activeLink, setActiveLink] = useState(defaultActiveLink);
    const handleActiveLink = (evt) => {
        setActiveLink(evt.target.dataset.link);
    };
    console.log(`activeLink`, activeLink)
    const returnSvgMenu = (link) => {
        switch (link) {
            case MenuNav.ABOUT:
                return <About /> ;
            case MenuNav.SKILLS:
                return  <Skills />;
            case MenuNav.INTERFACE:
                return <Interface />;
            case MenuNav.PROJECTS:
                return <Projects />;
            case MenuNav.CONTACT:
                return <Contacts />;
            default:
                return ``;
        }
    }
    const handleMenuOnClick = () => {
        if(isMenuOpened === false) {
            setIsMenuOpened(true)
        } else {
            setIsMenuOpened(false)
        }
    }
    //in main.jsx собрать все рефы в массив и предать сюда, функция фитьотрации совпадение ссылки на элемент
    const scrollToBlock = (block) => {
        window.scrollTo(0, block.offsetTop) 
    }
    const handleActiveLinkOnClick = (evt) => {
        setActiveLink(evt.target.dataset.link);
        // const sectionsBlocks = document.querySelectorAll(`section[id]`);
        // sectionsBlocks.map((section) => {
        //     if(section === activeLink) {
        //         scrollToBlock(section)
        //     }
        //     return null
        // })
    }
    return <>
        <header className="header">
            <nav className={`header__nav menu ${isMenuOpened ? `menu--opened` : `menu--closed`} container-site`}>
                <Logo />
                <div className="menu__nav">
                    <ul className="list grid menu__list">
                        {allNavSiteLinks.map((siteLink) => {
                        return <li key={siteLink.linkName} className="menu__item ">
                            <a href={`#${siteLink.href}`} onClick={(evt) => handleActiveLink(evt)} className={`menu__link ${siteLink.href === activeLink ? `menu__link--active` : ``}`} data-link={siteLink.href}>
                                {returnSvgMenu(siteLink.id)}
                                {siteLink.linkName}
                            </a>
                        </li>;
                        })}
                    </ul>
                </div>
                <button className="menu__toggle" type="button" onClick={handleMenuOnClick}>
                    <span className="visually-hidden">Open menu</span>
                </button>
            </nav>
        </header>
    </>
}

export default NavigationSite;