import React from 'react';
import Documentitle from 'react-document-title';
import { IndexRoute, Route, browserHistory } from 'react-router';
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import Header from './Header.js'
import Profile from './ProfilePage.js'
import Home from './MasterPage.js'
import FindVocalRange from './FindVocalRange.js'
import ExercisePage from './Exercises.js'



export default class Container extends React.Component{

	render(){
		return(
			<div>
				<Header />
				<Router history={browserHistory}>
				
					<HomeRoute path='/home' component={Home} />
					<Route path='/profile' component={Profile} />
					<Route path='/exercises' component={ExercisePage} />
					<Route path='/range' component={FindVocalRange} />
				</Router>
			</div>
		)
	}
}