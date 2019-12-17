import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addLetter} from './redux/state';


export let rerenderTree = (state) => {
    ReactDOM.render(<App dates={state} addLetter={addLetter} />, document.getElementById('root'));
}





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

