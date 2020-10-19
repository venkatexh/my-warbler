import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
	render() {
		return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					Home
				</Link>
			
				<ul className="nav navbar-nav navbar-right">
					<li><Link to="signup">Signup</Link></li>
					<li><Link to="login">Log in</Link></li>
				</ul>
			</div>
		</nav>)
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser
	};
}

export default connect(mapStateToProps, null)(Navbar);