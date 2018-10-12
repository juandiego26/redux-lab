import React from 'react'
import './search.css'
import SearchIcon from '../../icons/components/search'

// function Search(props) {
//   return (
//     <form></form>
//   )
// }

const Search = (props) => (

  <div className="Search">
    <form
      onSubmit={props.handleSubmit}
    >
      <input
        ref={props.setRef}
        type="text"
        placeholder="Busca tu video favorito"
        className="Search-input"
        name="search"
        onChange={props.handleChange}
        value={props.value}
      />
      <button className="Search-button">
        <SearchIcon
          size={20}
          color="#44546b"
        />
      </button>
    </form>
  </div>
)

export default Search
