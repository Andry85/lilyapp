const ADD_LETTER = "ADD-LETTER";
const SAVE_LETTER_TEXT = "SAVE-LETTER-TEXT";

const contactFormReducer = (state, action) => {

    if(action.type === ADD_LETTER) {

    let newLetter = {
        id: action.count,
        name: action.name,
        email: action.email,
        message: action.message
    };
    state.push(newLetter);
    console.log(state);
    debugger;
    } else if (action.type === SAVE_LETTER_TEXT) {
    let changedText = action.message;
    console.log(changedText);
    }

    return state;
}


export const addletterActionCreater = (countletter, name, email, value) => {
    return {
      type: ADD_LETTER,
      count: countletter,
      name: name,
      email: email,
      message: value
    }
  }
  
  export const saveLatter = (value) => {
    return {
      type: SAVE_LETTER_TEXT,
      message: value
    }
  }

export default contactFormReducer;