import React, {Fragment} from 'react';
import { useState } from 'react';
import Navigation from './Navigation';
import '../styles/Inscription.css';
import { validEmail, validPassword, validTelephone} from './Regex';



const Inscription = () => {
    const [nameSize, tailleNom] = useState('');
    const [surnameSize, tailleSurname] = useState('');
    const [height, setHeight] = useState(400);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const [nameErr, setNameError] = useState(false);
    const [surnameErr, setSurnameError] = useState(false);
    //Vérification Champs
    const validate = () => {
        //Vérif Mail + Mot de passe
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
        //Vérif taille Nom

        if(nameSize.length < 1)
        {
            setNameError(true);
        }
        else
        {
            setNameError(false);
        }

        //Vérif taille prénom

        if(surnameSize.length < 1)
        {
            setSurnameError(true);
        }
        else
        {
            setSurnameError(false);
        }
    };






    return (
        <>
            <Navigation />
            <div className="Inscription" style={{height: height}}>
                <h1>S'inscrire</h1>
                <form action="Post" className="Formulaire_Inscription">

                    <input type="text" placeholder="Votre Nom" value={ nameSize } onChange={(e) => tailleNom(e.target.value)} className="in"></input><br/>
                    {nameErr && <p className='texterreur'>Your Name is invalid</p>}
                    <input type="text" placeholder="Votre Prénom" value={ surnameSize } onChange={(e) => tailleSurname(e.target.value)}className="in"></input><br/>
                    {surnameErr && <p className='texterreur'>Your Name is invalid</p>}
                    <input type="text" placeholder="Votre Téléphone" className="in"></input><br/>
                    <input type="text" placeholder="Votre Mail" value={ email } onChange={(e) => setEmail(e.target.value)} className="in"></input><br/>
                    {emailErr && <p className='texterreur'>Your email is invalid</p>}
                    <input type="text" placeholder="Votre Mot de passe" className="in" value={ password } onChange={(e) => setPassword(e.target.value)}></input><br/>
                    {pwdError && <p className='texterreur'>Your password is invalid</p>}
                    <button type="button" onClick= { validate } className="in but">Inscription</button>

                </form>
            </div>
        </>

    );
};

export default Inscription;