import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({isMainPage}) => {
    return <>
        <Link className="menu__logo logo header__logo " to={isMainPage ? `#0` : `/`} aria-label="На главную">
            {/* <img src="../img/logo3.svg" width="100" height="100" alt="Logo AK programming"></img> */}
            <span className={`logo__name logo__name--${isMainPage ? `` : `rest-pages`}`}>A.K.</span>
        </Link>
    </>
}

export default Logo;