import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent.jsx';
import Greeter from './Greeter.jsx';


var d3 = require("d3")

//import LineChart from './line-chart.jsx'

import '../stylesheets/style.scss'


import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <MyAwesomeReactComponent />
    </MuiThemeProvider>
);



render((
    <div>
        <svg height="120" width="720">
            <circle style={{"fill":"steelblue"}} cx="40" cy="60" r="30"/>
            <circle style={{"fill":"steelblue"}} cx="80" cy="60" r="30"/>
            <circle style={{"fill":"steelblue"}} cx="120" cy="60" r="30"/>

        </svg>
        <h1>Playframework, React JS, ES 6, D3 {d3.version} and webpack</h1>
        <Greeter name="Ninja" />
        <App />

    </div>), document.getElementById("app"));



setInterval(function() {
    var circle = d3.selectAll("circle");
    circle.style("fill", "steelblue");
    circle.attr("r", 30);
    circle.attr("cx", function() { return Math.random() * 720; });
}, 100);

// 다른 방법(document.getElementById를 쓰지 않음)
//const mountingPoint = document.createElement('div'); // dom element
//mountingPoint.className = 'react-app';
//document.body.appendChild(mountingPoint);
//ReactDOM.render(<Chart/>, mountingPoint);