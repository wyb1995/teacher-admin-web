import React, {Component} from "react";
import {render} from "react-dom";
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from "./containers/App";
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/Login/login-reducer';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

store.dispatch(requestHouseList());

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
    </Router>
    , document.getElementById('app'));
