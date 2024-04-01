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
                <a href="/courses">
                    <button className="login">Start</button>
                </a>
            </div>

        </header>
    );
}

export default Header;