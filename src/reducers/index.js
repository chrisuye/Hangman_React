import { combineReducers } from 'redux'

import fiveLetterWords from './fiveLetterWords'
import sevenLetterWords from './sevenLetterWords'
import nineLetterWords from './nineLetterWords'
import search from './search'

export default combineReducers({fiveLetterWords, sevenLetterWords, nineLetterWords, search})