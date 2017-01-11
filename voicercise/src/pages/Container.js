import React from 'react';
import { Link } from 'react-router';
import { LoginLink } from 'react-stormpath';
import DocumentTitle from 'react-document-title';
 
import Header from './Header';



export default class is extends React.Component{

	render(){
		return(
			<div>
				<Header />
				{ this.props.children }
			</div>
		)
	}
}