import React from 'react';
import Header from './Header.js'
import { Link } from 'react-router';
import { LoginLink, AuthenticatedRoute } from 'react-stormpath';
import DocumentTitle from 'react-document-title';


export default class Exersices extends React.Component{
	render(){
		return(

			<DocumentTitle title="Voicercise / Exersices">
				<div>
					<Header />
					<h1>Exersices</h1>
					<Link to='/range'>Vocal Range Test</Link>
					<Link to='#'>Exercise #</Link>
					<Link to='#'>Exercise #</Link>
					<Link to='#'>Exercise #</Link>
					<Link to='#'>Exercise #</Link>
					<Link to='#'>Exercise #</Link>

				</div>
			</DocumentTitle>

			)
	}
}