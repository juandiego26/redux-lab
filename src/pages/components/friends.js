import React from 'react'
import './friends.css'
import Avatar from '../../utils/components/avatar'

const Friend = props => (
  <div className = "Friend">
    <Avatar
      size     = {30}
      imageURL = {props.avatar}
    />
    <div className = "Friend-nombre">
      <span>{props.nombre} {props.apellido}</span>
    </div>
  </div>
)

export default Friend