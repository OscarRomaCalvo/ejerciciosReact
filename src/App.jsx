import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListaDinamica from './components/ListaDinamica/ListaDinamica'

function App() {
  const [count, setCount] = useState(0)

  return (
   <ListaDinamica></ListaDinamica>
  )
}

export default App
