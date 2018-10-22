import React, { Component } from 'react'
import Search from '../components/search'
import { connect } from 'react-redux'
import { searchAsyncEntities} from '../../actions/index'
// import * as actions from '../../actions/index'
// import { bindActionCreators } from 'redux';

class SearchContainer extends Component {

  state = {
    value: 'Luis Fonsi'
  }

  handleSubmit = event => {
    event.preventDefault()
    // console.log(this.input.value, 'submit')
    // acción que se envía a redux
    // fetch(`http://miapi.com/buscar/${this.input.value}`).then((data) => {
    // })

    this.props.searchAsyncEntities(this.input.value)
    // ({
    //   type: 'SEARCH_ENTITIES',
    //   payload: {
    //     query: this.input.value
    //   }
    // })
  }

  setInputRef = element => {
    this.input = element
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value.replace(' ', '-')
    })
  }

  render() {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    )
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   }
// }

const mapDispatchToProps = {
  searchAsyncEntities
}

export default connect(null, mapDispatchToProps)(SearchContainer)
