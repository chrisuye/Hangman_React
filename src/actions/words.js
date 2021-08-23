import * as api from '../api/api';
import * as actions from '../constants/actions';

export const get5LetterWords = () => async (dispatch) => {
    console.log('check');
    try {
        const { data } = await api.get5LetterWords();
        console.log('check');
        console.log(data);
        dispatch({
            type: actions.GET5LETTERWORDS,
            payload: data
        });
    } catch (error) {
        console.log(error);
    }
}

export const get7LetterWords = () => async (dispatch) => {
    try {
        const { data } = await api.get7LetterWords();
        dispatch({
            type: actions.GET7LETTERWORDS,
            payload: data
        });
    } catch (error) {
        console.log(error);
    }
}

export const get9LetterWords = () => async (dispatch) => {
    try {
        const { data } = await api.get9LetterWords();
        dispatch({
            type: actions.GET9LETTERWORDS,
            payload: data
        });
    } catch (error) {
        console.log(error);
    }
}

export const getWord = (word) => async (dispatch) => {
    try {
        const { data } = await api.getWord(word);
        dispatch({
            type: actions.GETWORD,
            payload: data
        });
    } catch (error) {
        console.log(error);
    }
}