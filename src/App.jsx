import './App.css'
import useEstado from './hooks/useEstado'

function App() {
  const [state, cambiarEstado] = useEstado(0)


  return (
    <>
      <h1>Estado: {state}</h1>
      <h3>Almacen: {sessionStorage.getItem("estado")}</h3>
      {/*Se muestra mal porque el almacen lo dibuja de forma no reactiva. Por ello, cambia el valor al actualizarse. Si vemos el valor por consola, funciona correctamente*/}
      <button onClick={cambiarEstado}>Cambiar estado</button>
    </>
  )
}

export default App
