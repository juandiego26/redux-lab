function data( state, action ){
  switch ( action.type ) {
    case 'SEARCH_VIDEO': {
      let results = []
      // if (action.payload.query) {
      //   const categories = state.data.categories
      //   categories.map(categoty => {
      //     let tempResults = categoty.playlist.filter(item => {
      //       return item.author.toLowerCase().includes(action.payload.query.toLowerCase())
      //     })
      //     results = results.concat(tempResults)
      //   })
      // }
      if (action.payload.query) {
        state.data.categories.map((category) => {
          return category.playlist.filter((item) => {
            return item.author.toLowerCase().includes(action.payload.query.toLowerCase()) && results.push(item)
          })
        })
      }
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
