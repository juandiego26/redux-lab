import data from './data'
import modal from './modal'
import isLoading from './is-loading'
// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'

const rootReducer = combineReducers({
  data, // Esto es igual a data: data
  modal,
  isLoading
})

export default rootReducer
