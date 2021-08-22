import * as actions from "../constants/actions";
/* eslint-disable import/no-anonymous-default-export */

export default (words7 = [], action) => {
    switch (action.type) {
        case actions.GET7LETTERWORDS:
            const randomWord = action.payload[Math.floor(Math.random() * action.payload.length)];
            return randomWord.word.split('');
        default:
            return words7;
    }
}