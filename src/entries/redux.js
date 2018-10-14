import { createStore } from 'redux'
// referenciamos el elemento
const $form = document.getElementById('form')
// escuchamos el evento
$form.addEventListener('submit', handleSubmit)
// función que escuha el evento para luego imprimirlo en pantalla
function handleSubmit (event) {
  event.preventDefault()
  const data = new FormData($form)
  const title = data.get('title')
  console.log(title)
  // despachar la acción para actualizarla
  store.dispatch({
    type: 'ADD_SONG',
    payload: {
      title
    }
  })
}
// estado inicial
const initialState = [
  {
    "title": "Despacito"
  },
  {
    "title": "One more time"
  },
  {
    "title": "Echame la culpa"
  }
]

//reducer
const reducer = function(state, action) {
  switch (action.type) {
    case 'ADD_SONG':
      return [...state, action.payload]
    default:
      return state
  }
}
// creamos el store
const store = createStore(
  reducer, // reemplzamos esto por un reducer
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function render() {
  // para imprimir la playlist en pantalla
  const $container = document.getElementById('playlist')
  const playlist = store.getState()
  $container.innerHTML = ''
  playlist.forEach(item => {
    const template = document.createElement('p')
    template.textContent = item.title
    $container.appendChild(template)
  })
}

render()

function handleChange() {
  render()
}

store.subscribe(handleChange)

// console.log(store.getState())
