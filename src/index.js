import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import stat from './redux/state';
import {addLetter} from './redux/state';


export let rerenderTree = () => {
    ReactDOM.render(<App state={state} addLetter={addLetter} />, document.getElementById('root'));
}
rerenderTree();




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
