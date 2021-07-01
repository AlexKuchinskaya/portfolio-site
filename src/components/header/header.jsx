import React from 'react';

import Logo from '../logo/logo';
import NavigationSite from '../navigation-site/navigation-site';

const Header = ({isLogoLinkInHeader}) => {
   
    return <>
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    {/* Logo of my site */}
                    <Logo/>
                    <NavigationSite />
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