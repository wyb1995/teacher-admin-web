import React from "react";
import {render} from "react-dom";
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from "./containers/App";
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/Login/login-reducer';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import LoginSuccess from './components/LoginSuccess';
import LoginApp from './components/LoginApp';

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={LoginApp}/>
                <Route path="/loginSuccess" component={LoginSuccess}/>
            </Route>
        </Router>
    </Provider>
    , document.getElementById('app'));
