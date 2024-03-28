import React from 'react';
import UnityWhitLogo from "../../UnityWhiteLogo.png";
import "./Header.scss"

function Header() {
    return (
        <header>

            <div className="logo">
                <img src={UnityWhitLogo} alt=""/>
            </div>

            <div className="Login">
                <button className="login">Start</button>
            </div>

        </header>
    );
}

export default Header;