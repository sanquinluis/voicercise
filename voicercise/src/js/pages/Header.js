import React from 'react';
// import { Link } from 'react-router';
// import { LoginLink, LogoutLink, Authenticated, NotAuthenticated } from 'react-stormpath';

export default class Header extends React.Component {
	render() {
		return(
		
			<nav className="navbar navbar-default navbar-static-top">
				<div className="container-fluid">
					<div className="navbar-header">
						{/*Collaped button*/}
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						{/*Homepage link*/}
						<a className="navbar-brand" href="#">Voicercize</a> 
					</div>

					{/*left of nav bar*/}
					<ul className="nav navbar-nav">
						<li><a href="#">Exercises</a></li>
						<li><a href="#">Profile</a></li>
					</ul>

					{/*right of nav bar*/}
					<ul className="nav navbar-nav navbar-right">
						<li><a href="#">Logout</a></li>
					</ul>

					{/*end of container*/}

				</div>
				{/*end of nav bar*/} 				
			</nav> 
		);
	}
}