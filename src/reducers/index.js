import data from './data'
import modal from './modal'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  data, // Esto es igual a data: data
  modal
})

export default rootReducer
