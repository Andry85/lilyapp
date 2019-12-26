import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import {
    HashRouter as Router,
    Switch,
  } from "react-router-dom";


export let rerenderTree = (state) => {
    ReactDOM.render(
        <Router>
            <Switch>
                <App dates={state} dispatch={store.dispatch.bind(store)} />
            </Switch>
        </Router>
    , document.getElementById('root'));
}





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

