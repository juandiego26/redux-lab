import React, { Component } from 'react'
import Media from '../components/media'

class MediaContainer extends Component {
  openModal = mediaId => {
    this.props.openModal( mediaId )
    this.props.openModalBlur()
  }
  render(){
    return (
      <Media
        className = {this.props.className}
        openModal = {this.openModal}
        openModalBlur = {this.props.openModalBlur}
      />
    )
  }
}


export default MediaContainer