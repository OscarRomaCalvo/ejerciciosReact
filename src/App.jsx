import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './components/Cabecera/Cabecera'
import Tarjeta from './components/Tarjeta/Tarjeta'

function App() {

  return (
    <>
      <Cabecera></Cabecera>
      <Tarjeta></Tarjeta>       
    </>
  )
}

export default App
