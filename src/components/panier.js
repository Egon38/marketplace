import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { withAutorization } from '../Autorization.js';

class Panier extends Component{

	handleClick = (event) => {
		if (event.target.id == 'cov19'){
			this.props.del19();
		}
		else if (event.target.id == 'cov18'){
			this.props.del18();
		}
		else if (event.target.id == 'cov17'){
			this.props.del17();
		}
		else if (event.target.id == 'allCov19'){
			this.props.delAll19();
		}
		else if (event.target.id == 'allCov18'){
			this.props.delAll19();
		}
		else if (event.target.id == 'allCov17'){
			this.props.delAll19();
		}
		


		console.log("test");
	}


	render(){
		return(
				<div class="box-panier box-2-panier">
					<h1>{this.props.inCart ? `Vous avez un panier avec ${this.props.quantity} éléments` : "Votre panier est vide"}</h1>
					<h3>
					{this.props.covid19 != 0 ? `Vous avez ${this.props.covid19} Covid-19` : ""}
					</h3>
					{this.props.covid19 != 0 ? React.createElement('button', { class: 'bouton' , id: 'cov19', onClick: this.handleClick }, 'Supprimer 1') : ""}
					{this.props.covid19 != 0 ? React.createElement('button', { class: 'bouton', id: 'allCov19', onClick: this.handleClick  }, 'Tout supprimer ') : ""}
					
					<h3>
					{this.props.covid18 != 0 ? `Vous avez ${this.props.covid18} Covid-18` : ""}
					</h3>
					{this.props.covid18 != 0 ? React.createElement('button', { class: 'bouton', id: 'cov18', onClick: this.handleClick }, 'Supprimer 1') : ""}
					{this.props.covid18 != 0 ? React.createElement('button', { class: 'bouton', id: 'allCov18', onClick: this.handleClick  }, 'Tout supprimer ') : ""}
					<h3>
					{this.props.covid17 != 0 ? `Vous avez ${this.props.covid17} Covid-17` : ""}
					</h3>
					{this.props.covid17 != 0 ? React.createElement('button', { class: 'bouton', id: 'cov17', onClick: this.handleClick }, 'Supprimer 1') : ""}
					{this.props.covid17 != 0 ? React.createElement('button', { class: 'bouton', id: 'allCov17', onClick: this.handleClick  }, 'Tout supprimer ') : ""}
				</div>	
			)
	}

    
}

export default withAutorization(Panier);
