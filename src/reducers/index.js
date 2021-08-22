import { combineReducers } from 'redux'

import fiveLetterWords from './fiveLetterWords'
import sevenLetterWords from './sevenLetterWords'
import nineLetterWords from './nineLetterWords'

export default combineReducers({fiveLetterWords, sevenLetterWords, nineLetterWords})