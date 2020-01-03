import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    HashRouter as Router,
    Switch,
  } from "react-router-dom";
import store from './redux/redux-store';  
import StoreConext from './storeContext';
import * as serviceWorker from './serviceWorker';

let state = store.getState(); 

ReactDOM.render(
<Router>
    <Switch>
        <StoreConext.Provider value={store}>  
            <App dates={state} dispatch={store.dispatch.bind(store)}/>
        </StoreConext.Provider> 
    </Switch>
</Router>
, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
