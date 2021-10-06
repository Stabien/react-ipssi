import React from 'react';
import Navigation from './Navigation';
import '../styles/Inscription.css';

const Inscription = () => {
    return (
        <div className="Inscription">
            <h1>S'inscrire</h1>
            <form action="Post" className="Formulaire_Inscription">
                <input type="text" placeholder="Votre Nom" className="in"></input><br/>
                <input type="text" placeholder="Votre Prénom" className="in"></input><br/>
                <input type="text" placeholder="Votre Téléphone" className="in"></input><br/>
                <input type="text" placeholder="Votre Mail" className="in"></input><br/>
                <input type="text" placeholder="Votre Mot de passe" className="in"></input><br/>
                <button type="button" className="in but">Inscription</button>

            </form>
        </div>
    );
};

export default Inscription;