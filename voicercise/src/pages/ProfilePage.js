import React from 'react';
import Documentitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';
import DocumentTitle from 'react-document-title';
import Header from './Header.js'

import axios from "axios";

export default class ProfilePage extends React.Component {
	static contextTypes = {
    authenticated: React.PropTypes.bool,
    user: React.PropTypes.object
	};

	constructor(props){
		super(props);

		this.getRange = this.getRange.bind(this); 
	}


    getRange(){
    	axios
    	.get('/getRange/'+this.context.user.username)
    	.then(function(response)
    	{
    		console.log(response);
    		console.log("hello");
    	})
    }
  	
  	componentDidMount()
	{
  		console.log("running")
  		this.getRange()
  	}

	render() {

		return (
			<DocumentTitle title={`My Profile`}>
				<div>
				<div className="container">

					<img src="http://placehold.it/200x200" alt="image" className="img-circle" />
					<div id="user-info">
						<div className="col-md-6">
							<h3>Info</h3>
							
							<p>{this.context.user.givenName}</p>
							<p>Vocal Range</p>
							<p></p>
						</div>
						<div className="col-md-offset-1 col-md-5">
							<h3>About User</h3>
							<p>Hello my name is user. I started this in hopes to improve my singing range.</p>
						</div>
						
					</div>
				</div>
			</div>
			</DocumentTitle>
		);
	}
}