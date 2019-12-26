import worker_1 from './../Team/img/andriiShapoval.jpg';
import worker_2 from './../Team/img/olga.png';
import worker_3 from './../Team/img/maryna.png';
import worker_4 from './../Team/img/gena.png';
import ifs_big_pic_01 from './../Content/Work/img/ifs/ifs_01.png';
import ifs_big_pic_02 from './../Content/Work/img/ifs/ifs_02.png';
import ifs_big_pic_03 from './../Content/Work/img/ifs/ifs_03.png';
import vitukraina_big_pic_01 from './../Content/Work/img/vitukraina/vitukraina_01.png';
import vitukraina_big_pic_02 from './../Content/Work/img/vitukraina/vitukraina_02.png';
import vitukraina_big_pic_03 from './../Content/Work/img/vitukraina/vitukraina_03.png';
import mehinvest_big_pic_01 from './../Content/Work/img/mehinvest/mehinvest_01.png';
import mehinvest_big_pic_02 from './../Content/Work/img/mehinvest/mehinvest_02.png';
import mehinvest_big_pic_03 from './../Content/Work/img/mehinvest/mehinvest_03.png';



const ADD_LETTER = "ADD-LETTER";
const SAVE_LETTER_TEXT = "SAVE-LETTER-TEXT";

let initialState = {
    workers: [
        {
          id: 1, 
          name: 'Andii Shapoval', 
          position: 'React JS Developer and UI designer',
          img: worker_1
      
        },
        {
          id: 2, 
          name: 'Olga Petrova', 
          position: 'Account manager',
          img: worker_2
      
        },
        {
          id: 3, 
          name: 'Maryna Petrova', 
          position: 'Sales manager',
          img: worker_3
        },
        {
          id: 4, 
          name: 'Kovalenko Gennady', 
          position: 'CEO',
          img: worker_4
        }
      ],
    works: [
        {
          id: 1, 
          title: 'Ifs', 
          desk: 'Task: Create a website for an UK consulting company.',
          urlLink:'http://www.interfis.com/',
          urlText:'www.interfis.com',
          pictures: [
            ifs_big_pic_01,
            ifs_big_pic_02,
            ifs_big_pic_03
          ]
        },
        { 
          id: 2, 
          title: 'VitUkraina', 
          desk: 'Task: Create a website for an Ukranian building company.',
          urlLink:'https://vitukraina.com.ua/en/home/',
          urlText:'www.vitukraina.com.ua',
          pictures: [
            vitukraina_big_pic_01,
            vitukraina_big_pic_02,
            vitukraina_big_pic_03
          ]
        },
        { 
          id: 3, 
          title: 'Mehinvest', 
          desk: 'Task: Create a website for a roads building company.',
          urlLink:'http://mehinvest.com.ua/',
          urlText:'www.mehinvest.com.ua',
          pictures: [
            mehinvest_big_pic_01,
            mehinvest_big_pic_02,
            mehinvest_big_pic_03
          ]
        }
    ],
    letters: [

    ]
};

const addLetterReducer = (state = initialState, action) => {

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

export default addLetterReducer;