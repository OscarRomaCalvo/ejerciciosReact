import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CaptureScroll from './components/CaptureScroll/CaptureScroll'
import BotonUp from './components/BotonUp/BotonUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CaptureScroll></CaptureScroll>
      <BotonUp></BotonUp>
    </div>
  )
}

export default App
