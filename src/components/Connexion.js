import React from 'react';
import Navigation from './Navigation';
import '../styles/Connexion.css';

const Connexion = () => {
    return (
        <>
            <Navigation />
            <div className="Connexion">
                <h1>Se Connecter</h1>
                <form action="Post" className="Formulaire_Connexion">
                    <input type="text" placeholder="Votre Mail" className="ini"></input><br/>
                    <input type="text" placeholder="Votre Mot de passe" className="ini"></input><br/>
                    <button type="button" className="ini buto">Connexion</button>


                </form>
            </div>
        </>

    );
};

export default Connexion;