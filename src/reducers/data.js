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
      return state.set( 'search', action.payload.query )
      // let results = []
      // // if (action.payload.query) {
      // //   const categories = state.data.categories
      // //   categories.map(categoty => {
      // //     let tempResults = categoty.playlist.filter(item => {
      // //       return item.author.toLowerCase().includes(action.payload.query.toLowerCase())
      // //     })
      // //     results = results.concat(tempResults)
      // //   })
      // // }
      // if (action.payload.query) {
      //   state.data.categories.map((category) => {
      //     return category.playlist.filter((item) => {
      //       return item.author.toLowerCase().includes(action.payload.query.toLowerCase()) && results.push(item)
      //     })
      //   })
      // }
      //   return {
      //     ...state,
      //     search: results
      //   }
      }
    default:
      return state
  }
}
export default data
