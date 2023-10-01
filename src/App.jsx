import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CajonExpandible from './components/cajonExpandible/CajonExpandible'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CajonExpandible>
        <p>Este es un ejemplo del hijo que se le pasaría</p>
        <img src="https://picsum.photos/200" ></img>
      </CajonExpandible>
    </>
  )
}

export default App
