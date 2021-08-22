import * as actions from "../constants/actions";
/* eslint-disable import/no-anonymous-default-export */

export default (words9 = [], action) => {
    switch (action.type) {
        case actions.GET9LETTERWORDS:
            const randomWord = action.payload[Math.floor(Math.random() * action.payload.length)];
            return randomWord.word.split('');
        default:
            return words9;
    }
}