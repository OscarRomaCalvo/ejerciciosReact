import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ElementoLista from './Components/ElementoLista/ElementoLista'

const ejemplo = [
  {
    name: "Fulanito",
    color: "royalblue",
    checked: true
  },
  {
    name: "Menganito",
    color: "cyan",
    checked: false
  },
  {
    name: "Jhon Doe",
    color: "purple",
    checked: false
  }
]

function RenderListItems(lista){
  return lista.map((elemento) => 
    {
      return ElementoLista({nombre:elemento.name, color:elemento.color, checked:elemento.checked})
    }
  )
}


function App() {

  return (
    <>
      {RenderListItems(ejemplo)}
    </>
  )
}

export default App

//alert("mensaje")