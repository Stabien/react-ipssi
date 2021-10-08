import React from "react";
import '../styles/Header.css';
import { useState } from "react"
import {NavLink} from "react-router-dom";


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
                    <NavLink exact to="./dashboard" className="navbar-link">
                        Accueil
                    </NavLink>
                </li>
                <li className="navbar-item slideInDown-2">
                    <NavLink exact to="./--" className="navbar-link">
                        Mes Dépenses
                    </NavLink>
                </li>
                <li className="navbar-item slideInDown-3">
                    <NavLink exact to="./--" className="navbar-link">
                       Gestion
                    </NavLink>
                </li>
                <li className="navbar-item slideInDown-4">
                    <NavLink exact to="./mon-profil" className="navbar-link">
                        Mon profil
                    </NavLink>
                </li>
            </ul>
            <button className="navbar-burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>

        </nav>
    )


}
export default Header
