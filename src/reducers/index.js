import { combineReducers } from 'redux'

//reducers
import characters from './characters'
import filter from './filter'

export default combineReducers({ characters, filter })