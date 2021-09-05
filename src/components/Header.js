import React from 'react'
import FyloLogo from "../assets/logo.svg"
import "../scss/_header.scss";

function Header() {
    return (
        <header className="header">
            <div>
                <img src={FyloLogo} alt="Fylo landing page logo" />
            </div>
            <nav>
                <ul>
                    <li>Features</li>
                    <li>Team</li>
                    <li>Sign in</li>
                </ul>
            </nav>
        </header>
            
    )
}

export default Header
