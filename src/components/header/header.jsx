import React from 'react';

import Logo from '../logo/logo';
import NavigationSite from '../navigation-site/navigation-site';

const Header = ({isLogoLinkInHeader}) => {
   
    return <>
        <header className="header">
            <NavigationSite />
            {/* <div className="container">
                <div className="header__wrapper">
                    <Logo/>
                    <NavigationSite />
                    <div className="user-language"> 
                        <a className="user-language__link" href="#">
                            <span className="user-language__option">ENG</span>
                        </a>
                    </div>
                </div>
            </div> */}
        </header>
    </ >;
  };
  
//   Header.propTypes = {
//     isLogoLinkInHeader: PropTypes.bool.isRequired,
//   };
  export default Header;