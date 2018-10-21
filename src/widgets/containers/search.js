import React, { Component } from 'react'
import Search from '../components/search'
import { connect } from 'react-redux'
import { searchEntities } from '../../actions/index'
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
    this.props.searchEntities(this.input.value)
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
  searchEntities
}

export default connect(null, mapDispatchToProps)(SearchContainer)
