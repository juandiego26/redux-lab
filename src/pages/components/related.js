import React from 'react'
import logo from '../../../images/logo.png'
import './related.css'
import MyFriends from './my-friends'
import Scroller from '../../utils/components/scroller'
import MyPlaylist from './my-playlist'

function Related(props) {
  return (
    <div className="Related">
      <div>
        <img
          className="Related-logo"
          src={logo}
        />
      </div>
      <Scroller>
        <MyPlaylist data={props.myPlaylist}/>
        <MyFriends data={props.friends}/>
      </Scroller>
    </div>
  )
}

export default Related
