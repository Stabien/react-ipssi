import React from "react";
import '../styles/Header.css';
import { useState } from "react"


function Header() {
    const[showLinks, setShowLinks] = useState(false)
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }


    return (
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            <div className=".navbar-logo">Logo</div>
            <ul className="navbar-links">
                <li className="navbar-item slideInDown-1">
                    <a href="#home" className="navbar-link">
                        Accueil
                    </a>
                </li>
                <li className="navbar-item slideInDown-2">
                    <a href="#home" className="navbar-link">
                        Mes Depenses
                    </a>
                </li>
                <li className="navbar-item slideInDown-3">
                    <a href="#home" className="navbar-link">
                        Gestion
                    </a>
                </li>
                <li className="navbar-item slideInDown-4">
                    <a href="#home" className="navbar-link">
                        Mon Profil
                    </a>
                </li>
            </ul>
            <button className="navbar-burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>

        </nav>
    )


}
export default Header
