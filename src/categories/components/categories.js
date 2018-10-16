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
        <UserInfo {...props.myUserInfo}/>
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
              {...item}
              className = "Media-resultados"
              key={item.id}
              openModal={props.handleOpenModal}
            />
          })
        }
      {
        props.categories.map((item) => {
          return (
            <Category
              key={item.id}
              {...item}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories
