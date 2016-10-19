import React, { Component } from "react";
import {render} from "react-dom";
import {Router, Route,hashHistory} from 'react-router';
import App from "./components/TeacherLoginApp";

render(

    <Router history={hashHistory}>
        <Route path="/" component={App}/>
    </Router>
    , document.getElementById('app'));
