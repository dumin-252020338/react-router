import React, { Component } from 'react';
import './text.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import router from './router/index.js';
import './app.css';
import Topnav from './topnav/topnav.jsx';
import Main from './main/main.jsx';
class RouterStudy extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Topnav></Topnav>
                    <Main></Main>
                </div>
            </Router>
        )
    }
}
export default RouterStudy;