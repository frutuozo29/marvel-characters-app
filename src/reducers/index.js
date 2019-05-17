import { combineReducers } from 'redux'

//reducers
import characters from './characters'
import filter from './filter'
import localCharacters from './localCharacters'

export default combineReducers({ characters, filter, localCharacters })