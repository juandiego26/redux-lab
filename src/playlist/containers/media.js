import React, { Component } from 'react'
import Media from '../components/media'
import { connect } from 'react-redux'
// import { openModal } from '../../actions/index'
import * as actions from '../../actions/index'
import { bindActionCreators } from 'redux';

class MediaContainer extends Component {
  openModal = mediaId => {
    this.props.actions.openModal(mediaId)
    // ({
    //   type: 'OPEN_MODAL',
    //   payload: {
    //     mediaId
    //   }
    // })
  }
  render(){
    return <Media
      openModal={this.openModal}
      className = {this.props.className}
      {...this.props.data.toJS()}
    />
  }
}

function mapStateToProps( state, props ){
  const mediaItem = state.getIn(['data','entities','media', props.id])
// --- console.log( mediaItem )
  return {
    data: mediaItem
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer)