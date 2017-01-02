import React from 'react';
import Header from './Header.js'
import { Link } from 'react-router';
import { LoginLink } from 'react-stormpath';
import DocumentTitle from 'react-document-title';

export default class Exersices extends React.Component{
	render(){
		return(

			<DocumentTitle title="Voicercise / Exersices">
				<div>
					<Header />


				</div>
			</DocumentTitle>

			)
	}
}