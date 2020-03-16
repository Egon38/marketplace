import Navigation from './components/navigation'
import Title from './components/title'
import Content from './components/content'
import Panier from './components/panier'
import Button from './components/button'
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./App.css"
import { withRouter } from 'react-router-dom'
import { withAutorization, AutorizationProvider } from './Autorization'





const Button2 = withAutorization(Button);



class App extends Component{
	render(){
		return(
			<AutorizationProvider>
		<Router>
			<div>
			<Navigation/>
		
			<Switch>
			  <Route exact path="/">
					<Title/>	
					<Content/>     
			  </Route>
	          <Route path="/connexion">
	            	<Button2/>
	          </Route>
	          <Route path="/panier">
	          	<Panier/>
	          </Route>
	          </Switch>
	       </div>
       	</Router>
  	     	</AutorizationProvider>
       		
			
		)
	}
}





export default App;