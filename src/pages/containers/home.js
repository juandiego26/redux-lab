import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'
// redux
import { connect } from 'react-redux'
import { List as list} from 'immutable'

class Home extends Component {

  state = {
    modalVisible: false, // inicamos el estado del modal para que se muestre al inicio
  }

  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      media // --Equivale media: media
    })
  }

  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false // seteamos el estado del modal
    })
  }

  render() {
    return(
      <HandleError>
        <HomeLayout>
          <Related
            myPlaylist={this.props.extras.get('myPlaylist')}
            friends={this.props.extras.get('myFriends')}
          />
          <Categories
            categories={this.props.categories}
            myUserInfo={this.props.extras.get('myUserInfo')}
            handleOpenModal={this.handleOpenModal}
            search={this.props.search}
          />
          {
            this.state.modalVisible && // operador ternario para ver si se rederiza el modal
            <ModalContainer>
              <Modal
                handleClick={this.handleCloseModal}
              >
                <VideoPlayer
                  autoplay
                  src={this.state.media.src}
                  title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

function mapStateToProps(state, props) {
  // --- ahora state es inmutable ... es un mapa, por lo que se deben usar metodos de mapas
  // --- state.get(['data','categories']) es equivalente a
  // --- state.get('data').get('categories')
  const categories = state.getIn(['data','categories']).map((categoryId) => {
    return state.getIn(['data','entities','categories',categoryId])
  })

  let searchResult = list()
  const search = state.getIn(['data', 'search'])
  if (search) {
    const mediaList = state.getIn(['data', 'entities', 'media'])
    searchResult = mediaList.filter((item) => (item.get('author').toLowerCase().includes(search.toLowerCase()))).toList()
  }

  return {
    categories: categories, // === categories solo ES6: Enhanced Object Properties
    extras: state.getIn(['data','extras']),
    search: searchResult.toJS()
  }
}

export default connect(mapStateToProps)(Home)
