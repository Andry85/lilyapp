import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    HashRouter as Router,
    Switch,
  } from "react-router-dom";
import StoreConext from './storeContext';


export let rerenderTree = (state) => {
    ReactDOM.render(
        <Router>
            <Switch>
                <StoreConext.Provider value={state}>  
                    {/* <App dates={state} dispatch={store.dispatch.bind(store)} /> */}
                    <App/>
                </StoreConext.Provider> 
            </Switch>
        </Router>
    , document.getElementById('root'));
}





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

