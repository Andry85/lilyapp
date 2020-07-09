import {ADD_LETTER} from '../actions/actions';


function addingLetterReducer(state = [], action) {
    switch (action.type) {
      case ADD_LETTER:
        // return Object.assign({}, state, {
        //     letters: action.text
        // })
        return [
          ...state,
          {
            name: action.name,
            email: action.email,
            text: action.text
          }
        ]
      default:
        return state
    }
  }

  export default addingLetterReducer;