import React from 'react';
import { Link } from 'react-router';
import { LoginLink, LogoutLink, Authenticated, NotAuthenticated } from 'react-stormpath';

export default class Header extends React.Component {
	render() {
		return(
		<Authenticated>
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
						<Link className="navbar-brand" to="/home">Voicercize</Link> 
					</div>

					{/*left of nav bar*/}
					<ul className="nav navbar-nav">
						<li><Link to="/exercises">Exercises</Link></li>
						<li><Link to="/profile">Profile</Link></li>
					</ul>

					{/*right of nav bar*/}
					<ul className="nav navbar-nav navbar-right">
						<li><LogoutLink /></li>
					</ul>

					{/*end of container*/}

				</div>
					{/*end of nav bar*/} 			
			</nav> 
		</Authenticated>
		);
	}
}