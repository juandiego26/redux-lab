import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './media.css'

class Media extends PureComponent {
  state = {
    author: 'Juan Diego'
  }
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     author: props.author
  //   }
  //   // this.handleClick = this.handleClick.bind(this)
  // }

  handleClick = (event) => {
    // console.log(this.props.image)
    // this.setState({
    //   author: 'Ricardo Celis'
    // })
    this.props.openModal(this.props)
  }

  static propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio'])
  }
  render() {
    const styles = {
        container: {
            color: '#44546b',
            cursor: 'pointer',
            with: 260,
            border: '1px solid red'
          }
        }
    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img
            className="Media-image"
            src={this.props.cover}
            alt=""
            width={240}
            height={160}
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

export default Media
