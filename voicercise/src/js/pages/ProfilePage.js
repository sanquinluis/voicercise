import React from 'react';
import Documentitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';
import DocumentTitle from 'react-document-title';
import Header from './Header.js'

export default class ProfilePage extends React.Component {
	render() {
		return (
			<DocumentTitle title={`My Profile`}>
				<div>
				<Header />
				<div className="container">

					<img src="http://placehold.it/200x200" alt="image" className="img-circle" />
					<div id="user-info">
						<div className="col-md-6">
							<h3>Info</h3>
							
							<p>Username</p>
							<p>Voicercise level</p>
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