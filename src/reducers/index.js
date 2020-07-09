import { combineReducers } from 'redux';

import addingLetterReducer from './addingLetterReducer';




const lilyApp = combineReducers({
    addingLetterReducer,
  })

export default lilyApp;