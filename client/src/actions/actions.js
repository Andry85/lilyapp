/*
 * action types
 */
export const ADD_LETTER = 'ADD_LETTER';

/*
 * action creators
 */

export function addLetter(text,name,email) {
    return { 
        type: ADD_LETTER, 
        text,
        name,
        email
    }
}