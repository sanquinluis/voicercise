import React from 'react';
import Header from './Header.js'
import { Link } from 'react-router';
import { LoginLink } from 'react-stormpath';
import DocumentTitle from 'react-document-title';


export default class is extends React.Component {


	componentDidMount() {
      console.log('Component DID MOUNT!')
      var chartData = [{
        year: 1999,
        value: 7
    }, {
        year: 2000,
        value: 68
    }, {
        year: 2001,
        value: 73
    }, {
        year: 2002,
        value: 27
    }, {
        year: 2003,
        value: 45
    }, {
        year: 2004,
        value: 70
    }];

var AMCHART_SERIAL_CONFIG2 = {
    // "theme": "light",
    "type": "serial",
    "marginRight": 80,
    "autoMarginOffset": 20,
    "marginTop":20,
    "dataProvider": chartData,
    "valueAxes": [{
    	maximum: 0,
        minimum: 100,
        "position": "left",
        "title": "Score",
        // "id": "v1",
        // "axisAlpha": 0.1
    }],
    "graphs": [{
        "useNegativeColorIfDown": true,
        "balloonText": "[[category]]<br><b>value: [[value]]</b>",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletBorderColor": "#FFFFFF",
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "lineColor": "#fdd400",
        "negativeLineColor": "#67b7dc",
        "valueField": "value"
    }],
    // "chartScrollbar": {
    //     "scrollbarHeight": 5,
    //     "backgroundAlpha": 0.1,
    //     "backgroundColor": "#868686",
    //     "selectedBackgroundColor": "#67b7dc",
    //     "selectedBackgroundAlpha": 1
    // },
    // "chartCursor": {
    //     "valueLineEnabled": true,
    //     "valueLineBalloonEnabled": true
    // },
    "categoryField": "year",
    "categoryAxis": {
        // "parseDates": true,
        // "axisAlpha": 0,
        // "minHorizontalGap": 60
        "gridPosition": "start",
        "labelRotation": 45
    }
}

var AMCHART_SERIAL_CONFIG = {
    "type": "serial",
    "startDuration": 0.5,   // loading animation, in second
    
    // y axis/value axis
    "valueAxes": [{
        maximum: 0,
        minimum: 100,
        "position": "left",
        "title": "Score"
    }],

    "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "fillColorsField": "color",
        "fillAlphas": 1,
        "lineAlpha": 0.1,
        "type": "column",
        "valueField": "value"
    }],
    //3d effects
    "depth3D": 20,
    "angle": 30,
    
   
    "chartCursor": {
        "categoryBalloonEnabled": false, //bottom row cursor
        "cursorAlpha": 0, //line cursor
        "zoomable": false
    },
    
    dataProvider: chartData,

    "categoryField": "year", // must match with chart Data
    "categoryAxis": {
        "gridPosition": "start",
        "labelRotation": 45
    }
};

    AmCharts.ready(function () {
        // var chart1 = AmCharts.makeChart("chart1div", $.extend(true, {}, AMCHART_SERIAL_CONFIG, { "theme": "dark" }) );
		var chart2 = AmCharts.makeChart("chart2div", $.extend(true, {}, AMCHART_SERIAL_CONFIG2, { "theme": "light" }) );

    });
   }
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