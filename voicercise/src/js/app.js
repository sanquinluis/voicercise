import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './pages/Landing.js'
import Login from './pages/LoginPage.js'
import SignUp from './pages/RegistrationPage.js'
import Home from './pages/MasterPage.js'
import Profile from './pages/ProfilePage.js'
import Forgot from './pages/ForgotPage.js'
// import ReactStormpath, { Router, AuthenticatedRoute, LoginLink } from 'react-stormpath';
import { Router, Route, browserHistory } from 'react-router'
import { MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage } from './pages';


// ReactStormpath.init();

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Landing} />
		<Route path="/login" component={Login} />
		<Route path="/signup" component={SignUp} />
		<Route path="/home" component={Home} />
		<Route path="/profile" component={Profile} />
		<Route path="/forgot" component={Forgot} />
	</Router>
	,
	// <HomeRoute history={browserHistory}>
		// <Route path='/' component={MasterPage}>
			// <IndexRoute component={IndexPage} />
			// <LoginRoute path='/login' component={LoginPage} />
			// <Route path='/register' component={RegistrationPage} />
			// <AuthenticatedRoute> 
			 // <HomeRoute path='/profile' component={ProfilePage} />
			// </AuthenticatedRoute>
		// </Route>
	// </HomeRoute>,
	document.getElementById('app-container') 
	);