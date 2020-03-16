import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { withAutorization } from '../Autorization.js';

class Content extends Component{

	state = {
		covid19: 0,
		covid18: 0,
		covid17: 0,
	}

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {

  	var bool19 = false;
  	var bool18 = false;
  	var bool17 = false;

  	if (this.props.isLogged == true){
  		if (event.target.id == "covid-19"){
  		this.props.add19();
  		}
  		else if (event.target.id == "covid-18"){
		this.props.add18();
  		}
  		else if (event.target.id == "covid-17"){
		this.props.add17();
  		}
  		this.props.addInCart();
  		  	console.log(this.props.quantity);
  		  	console.log("19:", this.props.covid19);
  		  	console.log("18:", this.props.covid18);
  		  	console.log("17:", this.props.covid17);
  	}
  	else {
  	 	alert("Il faut être connecté");
  	}


	console.log("event.target", event.target.id);
  	console.log(this.props.quantity);
  	
  }

	render(){
		return(
			<div>
				<div class="box box-2">
					<img src={require('./corona.jpg')}/>
					<h1>Covid-19</h1>
					<button onClick={this.handleClick} id="covid-19">Add Covid-19</button>
				</div>	
							<div class="box box-2">
					<img src={require('./corona.jpg')}/>
					<h1>Covid-18</h1>
					<button onClick={this.handleClick} id="covid-18">Add Covid-18</button>
				</div>	
								<div class="box box-2">
					<img src={require('./corona.jpg')}/>
					<h1>Covid-17</h1>
					<button onClick={this.handleClick} id="covid-17">Add Covid-17</button>
				</div>	
			</div>
		
			)
	}

    
}

export default withAutorization(Content);
