import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './pages/Landing.js'
import LoginPage from './pages/LoginPage.js'
import RegistrationPage from './pages/RegistrationPage.js'
import Home from './pages/MasterPage.js'
import Profile from './pages/ProfilePage.js'
import Forgot from './pages/ForgotPage.js'
import { IndexRoute, Route, browserHistory } from 'react-router';
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';


ReactStormpath.init();

ReactDOM.render(
	<Router history={browserHistory}>
		<HomeRoute path='/' component={Landing} />
		<Route path='/register' component={RegistrationPage} />
		<Route path='/forgot' component={Forgot} />
		<LoginRoute path='/login' component={LoginPage} />
		<AuthenticatedRoute>
		  <HomeRoute path='/home' component={Home} />
		</AuthenticatedRoute>


	</Router>
	,
	
	document.getElementById('app-container') 
	);