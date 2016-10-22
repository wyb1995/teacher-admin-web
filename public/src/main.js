import React, {Component} from "react";
import {render} from "react-dom";
import {Router, Route, hashHistory} from 'react-router';
import App from "./containers/App";
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/Login/login-reducer';
import checkLogin from './actions/Login/login-action';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

// import createLogger from 'redux-logger';

import paperApp from './containers/paperList/paper-list';

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

// store.dispatch(checkLogin.checkLogin());

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route path="paperList" component={paperApp}/>
            </Route>
        </Router>
    </Provider>
    , document.getElementById('app'));
