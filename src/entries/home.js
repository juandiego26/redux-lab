import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'
import data from '../data/api.json'
import extras	from '../data/api-extra.json'
// redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers/data'



// estado inicial de los datos del api y se define el modelo como se va a consumir
  const initialState = {
    data,
    extras
  }

// creamos nuestro store
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log(store.getState())

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
