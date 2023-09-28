import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './Components/Boton/Boton'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Boton  disabled={false} onClick={()=> window.alert("Soy un boton primario")}>
        <h4>Boton primario</h4>
      </Boton>
      <Boton type="primary" disabled={true} onClick={()=> window.alert("No hago nada")}>
        <h4>Boton deshabilitado</h4>
      </Boton>
      <Boton type="secondary" disabled={false} onClick={()=> window.alert("Soy un boton secundario")}>
        <h4>Boton secundario</h4>
      </Boton>

    </>
  )
}

export default App
