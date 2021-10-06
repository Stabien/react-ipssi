import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom"
import Connexion from './components/Connexion';
import Introuvable from './components/Introuvable';
import Inscription from './components/Inscription';
import Navigation from './components/Navigation';
function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Switch>
    <Route path="/Connexion" exact component={ Connexion } />
    <Route path="/Inscription" exact component={ Inscription } />

    </Switch>
    </BrowserRouter>
  );
}

export default App;
