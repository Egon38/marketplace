import React, {Component} from 'react'

export const AutorizationContext = React.createContext(null);

export class AutorizationProvider extends Component{
	state = {
		email: "",
		password_:"",
		isLogged: false,
		toLogIn: (email, passwd) => this.setState({
			isLogged: !this.state.isLogged,
			email: email,
			password_: passwd,
		}),
		quantity:0,
		covid19: 0,
		covid18: 0,
		covid17: 0,
		inCart: false,
		addInCart: () => this.setState({
			inCart: true,
			quantity: this.state.quantity + 1,
		}),
		add19: () => this.setState({
			covid19: this.state.covid19 + 1,
		}),
		add18: () => this.setState({
			covid18: this.state.covid18 + 1,
		}),
		add17: () => this.setState({
			covid17: this.state.covid17 + 1,
		}),
		del19: () => this.setState({
			covid19: this.state.covid19 - 1,
		}),
		del18: () => this.setState({
			covid18: this.state.covid18 - 1,
		}),
		del17: () => this.setState({
			covid17: this.state.covid17 - 1,
		}),

		delAll19: () => this.setState({
			quantity: this.state.quantity - this.state.covid19,
			covid19: 0,
		}),
		delAll18: () => this.setState({
			covid18: 0,
		}),
		delAll17: () => this.setState({
			covid17: 0,
		}),



	};

	render(){
		console.log("Auth + pass:", this.state.email, " ", this.state.password_)
		return(
			<AutorizationContext.Provider value = {this.state}>
			{this.props.children}
			</AutorizationContext.Provider>
			);
	}
}



export const withAutorization = (Component) => {
	class NewComponent extends React.Component {
		render(){
			return (
				<AutorizationContext.Consumer>
				{value => <Component {...value} {...this.props} />}
				</AutorizationContext.Consumer>
				)
		}
	
	}
	return NewComponent;
}