import React, { Component } from 'react';
import { Route , withRouter} from 'react-router-dom';
import { withAutorization } from '../Autorization.js';

class Button extends Component{
	state = {
		email: "",
		password_: "",
	}

	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.props.toLogIn(this.state.email, this.state.password_);
		this.props.history.push('/connexion')
	}	

	handleChange = (event) => {
		console.log("event.target:", event.target)
		this.setState({[event.target.name]: event.target.value});
	}

	handleSubmit = (event) =>{
		console.log("email:", this.state.email);
		console.log("password:", this.state.password_);
		event.preventDefault();
	}

	



	render(){
    return(
    	<React.Fragment>
    	<h1 class="center">{this.props.isLogged ? "Connecté" : "Déconnecté" } </h1>
          <div class="wrapper">
    <form class="form-signin" onSubmit={this.handleSubmit}>       
      <h2 class="form-signin-heading">Se connecter</h2>
      <input type="text" class="form-control" name="username" placeholder="Email Address (ne sert a rien)" onChange={this.handleChange} required="" autofocus="" />
      <input type="password" class="form-control" name="password" placeholder="Password (ne sert a rien)" onChange={this.handleChange} required=""/>      
      <label class="checkbox">
        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
      </label>
      <button class="btn btn-lg btn-primary btn-block" onClick={this.handleClick}>  {this.props.isLogged ? "Se déconnecter" : "Se connecter"}</button>   
    </form>
  </div>
 		</React.Fragment>
      )
  }

    
}


export default withRouter(withAutorization(Button));
