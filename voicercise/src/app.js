import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './pages/Landing.js'
import LoginPage from './pages/LoginPage.js'
import RegistrationPage from './pages/RegistrationPage.js'
import Container from './pages/Container.js'
import Home from './pages/MasterPage.js'
import Profile from './pages/ProfilePage.js'
import Forgot from './pages/ForgotPage.js'
import FindVocalRange from './pages/FindVocalRange.js'
import ExercisePage from './pages/Exercises.js'
import { IndexRoute, Route, browserHistory } from 'react-router';
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute} from 'react-stormpath';


ReactStormpath.init();

ReactDOM.render(
	<Router history={browserHistory}>

		<HomeRoute path="/landing" component={Landing} />
		<Route path='/register' component={RegistrationPage} />
		<Route path='/forgot' component={Forgot} />
		<LoginRoute path='/login' component={LoginPage} />
		<Route path='/' component={Container}>

			<AuthenticatedRoute>
				<HomeRoute path='/home' component={Home} />
			</AuthenticatedRoute>

			<AuthenticatedRoute>
				<IndexRoute component={Home} />
			</AuthenticatedRoute>
			<AuthenticatedRoute path='/profile' component={Profile} />
			<AuthenticatedRoute path='/exercises' component={ExercisePage} />
			<AuthenticatedRoute path='/range' component={FindVocalRange} />
		</Route>
	</Router>
	// <FindVocalRange />
	,
	
	document.getElementById('app-container') 
	);