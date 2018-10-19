import React from 'react'
import Category from './category'
import './categories.css'
import Search from '../../widgets/containers/search'
import UserInfo from '../../widgets/components/user-info'
import Media from '../../playlist/components/media'
import '../../playlist/components/media.css'


function Categories(props) {
  return (
    <div className="Categories">
      <div className="Categories-header">
        <Search />
        <UserInfo {...props.myUserInfo.toJS()}/>
      </div>
      {
          props.search.length > 0 && (
            <div className  = "Category-results">
              <h3 className = "Category-description">Resultados de la búsqueda</h3>
              <h1 className = "Category-title">{props.search.length} coincidencia(s)</h1>
            </div>
          )
        }
        {
          props.search.map( item => {
            return <Media
              className = "Media-resultados"
              key = {item.get('id')}
              id  = {item.get('id')}
              title = {item.get('title')}
              cover = {item.get('cover')}
              author = {item.get('author')}
              src = {item.get('src')}
              openModal={props.handleOpenModal}
            />
          })
        }
      {
        props.categories.map((category) => {
          return (
            <Category
              key={category.get('id')}
              {...category.toJS()}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories
