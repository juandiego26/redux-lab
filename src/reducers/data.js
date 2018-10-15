function data( state, action ){
  switch ( action.type ) {
    case 'SEARCH_VIDEO': {
      // // action.payload.query
      // const list = state.data.categories[2].playlist
      // const results = list.filter((item) => {
      //   return item.author.includes(action.payload.query)
      // })
      const results = []
      state.data.categories.map((category) => {
        return category.playlist.filter((item) => {
          return item.author.toLowerCase().includes(action.payload.query.toLowerCase()) && results.push(item)
        })
      })
        return {
          ...state,
          search: results
        }
      }
    default:
      return state
  }
}
export default data
