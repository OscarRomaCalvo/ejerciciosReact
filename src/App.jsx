import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loader from './components/Loader/Loader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Loader>
      <h2>Bienvenido</h2>
      <img src="https://picsum.photos/300/300" ></img>
    </Loader>
  )
}

export default App
