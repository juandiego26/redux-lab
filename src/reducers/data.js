import schema from '../schemas/index'
import extras from '../data/api-extra.json'
import { fromJS } from 'immutable'

const initialState = fromJS({
    entities: schema.entities,
    categories: schema.result.categories,
    search: '',
    extras
})

function data( state = initialState, action ){
  switch ( action.type ) {
    case 'SEARCH_VIDEO': {
      return state.set('search', action.payload.query) //state es inmutable
    }
    default:
      return state
  }
}
export default data
