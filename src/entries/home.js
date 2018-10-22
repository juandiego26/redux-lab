import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers/index'
import { Map as map } from 'immutable' // --- se le coloca un alias en minusculas para verlo como funcion no como clase
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// //--middleware ES5 --
// function logger({ getState, dispatch }) {
//   return (next) => { // next siguiente middleware
//     return (action) => { // pasamos el action
//       console.log('Este es mi nuevo estado', getState().toJS())
//       console.log('vamos a enviar esta accción', action)
//       const value = next(action)
//       console.log('Este es mi nuevo estado', getState().toJS())
//       return value
//     }
//   }
// }

//-- Middleware ES6--

const _logger = ({ getState, dispatch }) => next => action => {
  console.log('Este es mi nuevo estado', getState().toJS())
  console.log('vamos a enviar esta accción', action)
  const value = next(action)
  console.log('Este es mi nuevo estado', getState().toJS())
  return value
}

// creamos nuestro store
const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )
)

// console.log(store.getState())

//Referencia por id en el index.html
const homeContainer = document.getElementById('home-container');
// Insertamos en una constante lo que queremos renderizar
// const holaMundo =  <h1>Hola estudiantes</h1>
// ReactDOM.render(que voy a renderizar(elemento h1,div,etc ó un componente), donde renderizar en el index html)

render  (
  <Provider store={store}>
    <Home />
  </Provider>,
  homeContainer
);
