import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "../App.css"
import { withAutorization } from '../Autorization.js';

class Navigation extends Component{

  constructor(props){
    super(props)
  }
  
  render(){
    return(
    
      <div>
        <ul class="test">
          <li class="f-left">
          <a>
            <Link to="/">Accueil</Link>
          </a>
          </li>
          <li class="f-left">
          <a>
            <Link to="/connexion">Se connecter</Link>
          </a>
          </li>
          <li class="f-right">
          <a>
            <Link to="/panier">Panier({this.props.quantity}) - {this.props.isLogged ? "Vous êtes connecté" : "Vous êtes déconnecté" }</Link>
          </a>
          </li>
        </ul>
      </div>
      
    
      )
}
    
}

export default withAutorization(Navigation);
