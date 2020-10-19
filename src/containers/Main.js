import React from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';

const Main = props => {
	return(
	<div className="container">
		<Switch>
			<Route exact path="/" render ={ props => <Homepage {...props} />} />
			<Route exact path="/login" render={props => {
				return(
				<AuthForm buttonText="Login" heading="Welcome back!" {...props}/>
				)
			}}/>
			<Route exact path="/signup" render={props => {
				return(
				<AuthForm signup buttonText="Sign up" heading="Join Warbler now!" {...props}/>
				)
			}}/>
		</Switch>
	</div>)
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser
	};
}
export default withRouter(connect(mapStateToProps, null)(Main));