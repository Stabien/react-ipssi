import React from 'react';
import Header from './components/Header';
import './App.css';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom"
import Connexion from './components/Connexion';
import Introuvable from './components/Introuvable';
import Inscription from './components/Inscription';
import Navigation from './components/Navigation';
import Profil from './components/Profil';
import Dashboard from "./components/Dashboard";

function App() {

  return (
    <div>

    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Navigation} />
      <Route path="/Connexion" exact component={ Connexion } />
      <Route path="/Inscription" exact component={ Inscription } />
      <Route path="/dashboard" exact component={ Dashboard } />
      <Route path="/mon-profil" exact component={ Profil } />
    </Switch>

    </BrowserRouter>
    </div>
    
  );
}

export default App;

