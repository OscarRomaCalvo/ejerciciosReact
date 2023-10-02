import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Listas from './components/Listas/Listas'
import Objetos from './components/Listas/Objetos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Objetos></Objetos>
  )
}

export default App
