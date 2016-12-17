import React from 'react';
import Header from './Header.js'
import { Link } from 'react-router';
import { LoginLink } from 'react-stormpath';
import DocumentTitle from 'react-document-title';

// import AmCharts from 'amcharts'


export default class is extends React.Component {


	render() {
		return (
			<DocumentTitle title='My React App'>
				<div>
					
				<Header />
					
					<div id="chartDiv" style={{width:'100%',height:'300px'}}></div>
					<div className="col-md-6">
						<h1>Forums</h1>
						<div id="forums"></div>
					</div>

					<div className="col-md-6">
						<h1>Updates</h1>
						<div id="updates"></div>
					</div>
				</div>
			</DocumentTitle>
		);
	}
}