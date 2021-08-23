import axios from "axios";

const url5 = "/word-lists/5-letter-words/5-letter-words.json"
const url7 = "/word-lists/7-letter-words/7-letter-words.json"
const url9 = "/word-lists/9-letter-words/9-letter-words.json"
const search = "https://api.dictionaryapi.dev/api/v2/entries/en/"

export const get5LetterWords = () => axios.get(url5)
export const get7LetterWords = () => axios.get(url7)
export const get9LetterWords = () => axios.get(url9)
export const getWord = (word) => axios.get(search + word)