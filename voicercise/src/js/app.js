import React from 'react';
import ReactDOM from 'react-dom';
import ReactStormpath, { Router, AuthenticatedRoute, LoginLink } from 'react-stormpath';
// import { Router, IndexRouter, Route, browserHistory } from 'react-router';
import { MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage } from './pages';


ReactStormpath.init();

ReactDOM.render(
	<HomeRoute history={browserHistory}>
		<Route path='/' component={MasterPage}>
			<IndexRoute component={IndexPage} />
			<LoginRoute path='/login' component={LoginPage} />
			<Route path='/register' component={RegistrationPage} />
			<AuthenticatedRoute> 
			 <HomeRoute path='/profile' component={ProfilePage} />
			</AuthenticatedRoute>
		</Route>
	</HomeRoute>,
	document.getElementById('app-container') 
	);