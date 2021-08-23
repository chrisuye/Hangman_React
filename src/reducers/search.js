import * as actions from "../constants/actions";
/* eslint-disable import/no-anonymous-default-export */

export default (words = [], action) => {
    switch (action.type) {
        case actions.GETWORD:
            console.log("GETWORD");
            console.log(action.payload);
            return action.payload[0].meanings;
        default:
            return words;
    }
}