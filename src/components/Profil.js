import React from 'react';
import { useState } from 'react';
import '../styles/Profil.css';
import { validEmail, validPassword } from './Regex';
import Header from "./Header";

const Profil = () => {
    
    const [height, setHeight] = useState(400);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const validate = () => {
       if (!validEmail.test(email)) {
          setEmailErr(true);
          setHeight(500);
       }
       if (!validPassword.test(password)) {
          setPwdError(true);
          setHeight(500);
       }
       if(validEmail.test(email) && (validPassword.test(password))){
        setHeight(400);
       }
        if (validEmail.test(email)) {
        setEmailErr(false);
        }
        if (validPassword.test(password)) {
            setPwdError(false);
            }
    };
    return (
        <div>
            <Header />
            <div className="Formulaire_profil" style={{height: height}}>
                <h1>Mon profil</h1>
                <form action="Post">
                    <input type="text" placeholder="Votre Nom" className="in"></input><br/>
                    <input type="text" placeholder="Votre Prénom" className="in"></input><br/>
                    <input type="text" placeholder="Votre Téléphone" className="in"></input><br/>
                    <input type="text" placeholder="Votre Mail" value={ email } onChange={(e) => setEmail(e.target.value)} className="in"></input><br/>
                    {emailErr && <p className='texterreur'>Your email is invalid</p>}
                    <input type="text" placeholder="Votre Mot de passe" className="in" value={ password } onChange={(e) => setPassword(e.target.value)}></input><br/>
                    {pwdError && <p className='texterreur'>Your password is invalid</p>}
                    <button type="button" onClick= { validate } className="inf bouttonpage">Modifier</button>
                </form>
            </div>
        </div>

    );
};

export default Profil;