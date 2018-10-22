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
import { List as list} from 'immutable' // alias para importarlo como una función para que no parezca una clase
import { openModal, closeModal } from '../../actions/index'
// import * as actions from '../../actions/index' // con este comodin (*) traemos todo
// import { bindActionCreators } from 'redux'

class Home extends Component {

  // state = {
  //   modalVisible: false, // inicamos el estado del modal para que se muestre al inicio
  // }

  handleOpenModal = (id) => {
    this.props.openModal(id)
    //   {
    //   type: 'OPEN_MODAL',
    //   payload: {
    //     mediaId: id
    //   }
    // })
    // this.setState({
    //   modalVisible: true,
    //   media // --Equivale media: media
    // })
  }

  handleCloseModal = (event) => {
    this.props.closeModal()
    // ({
    //   type: 'CLOSE_MODAL'
    // })
    // // this.setState({
    //   modalVisible: false // seteamos el estado del modal
    // })
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
            isLoading={this.props.isLoading}
          />
          {
            this.props.modal.get('visibility') && // operador ternario para ver si se rederiza el modal
            <ModalContainer>
              <Modal
                handleClick={this.handleCloseModal}
              >
                <VideoPlayer
                  autoplay
                  mediaId = {this.props.modal.get('mediaId')}
                  // src={this.state.media.src}
                  // title={this.state.media.title}
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

  let searchResults = list()
  const search = state.getIn(['data', 'search'])
  if (search) {
    const mediaList = state.getIn(['data', 'entities', 'media'])
    searchResults = mediaList.filter((item) =>
      (item.get('author').toLowerCase().includes(search.toLowerCase())
    )).toList()
  }

  return {
    categories: categories, // === categories solo ES6: Enhanced Object Properties
    extras: state.getIn(['data','extras']),
    search: searchResults,
    modal: state.get('modal'),
    isLoading: state.get('isLoading').get('active')
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     // actions: bindActionCreators(acciones, dispatch)
//     actions: bindActionCreators(actions, dispatch)
//   }
// }

const mapDispatchToProps = { // --- es una forma simplificada que remplaza el uso de bindActionCreators de Redux!
  closeModal,
  openModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
