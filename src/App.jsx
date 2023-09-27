import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './components/Cabecera/Cabecera'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecera></Cabecera>
    </>
  )
}

export default App
