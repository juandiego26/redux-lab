import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'
// import Playlist from '../playlist/components/playlist'
import data from '../data/api.json'
import extras	from '../data/api-extra.json'


//console.log('Hola Mundo!')

//Referencia por id en el index.html
const homeContainer = document.getElementById('home-container');
// Insertamos en una constante lo que queremos renderizar
// const holaMundo =  <h1>Hola estudiantes</h1>
// ReactDOM.render(que voy a renderizar(elemento h1,div,etc ó un componente), donde renderizar en el index html)
render  (
  <Home
    data={data}
    extras={extras}
  />,
    homeContainer
);