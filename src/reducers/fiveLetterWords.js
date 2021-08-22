import * as actions from "../constants/actions";
/* eslint-disable import/no-anonymous-default-export */

export default (words = [], action) => {
    console.log(action)
    switch (action.type) {
        case actions.GET5LETTERWORDS:
            const randomWord = action.payload[Math.floor(Math.random() * action.payload.length)];
            return randomWord.word.split('');
        default:
            return words;
    }
}