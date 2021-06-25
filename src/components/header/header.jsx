import React from 'react';

const Header = ({isLogoLinkInHeader}) => {

    return <>
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    {/* Logo of my site */}
                    {/* <Logo isLogoLinkInHeader={isLogoLinkInHeader}/> */}
                    <nav className="header__nav">
                        <ul className="list main-nav site-list">
                            {/* {allNavSiteLinks.map((siteLink) => {
                            return <li key={siteLink} className="site-list__item" onClick={() => {
                                handleActiveLink();
                            }}>
                                <a href="#" className={`site-list__link ${siteLink === activeLink ? `site-list__link--active` : ``}`} data-link={siteLink} >{siteLink}</a>
                            </li>;
                            })} */}
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