import React from 'react';
import { NavLink } from "react-router-dom"
import '../styles/Navigation.css';
const Navigation = () => {
    return (
        <div className="Navigation">

            <NavLink exact to="./Connexion" className="Navi">
                Connexion
                </NavLink>

            <NavLink exact to="./Inscription" className="Navi">
                Inscription
                </NavLink>

        </div>
    );
};

export default Navigation;