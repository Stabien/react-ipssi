import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom"
import Connexion from './components/Connexion';
import Introuvable from './components/Introuvable';
import Inscription from './components/Inscription';
import Navigation from './components/Navigation';
import ExpenseTable from "./components/ExpenseTable";

function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Switch>
    <Route path="/Connexion" exact component={ Connexion } />
    <Route path="/Inscription" exact component={ Inscription } />
    </Switch>
      <Route path="/tableau-de-bord" exact component={ ExpenseTable } />
    </BrowserRouter>
  );
}

export default App;
