import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/ProductList/ProductList'
function App() {
  const producto1 = 
  {
    nombre: "Manzana",
    imagen: "https://www.recetasnestle.com.mx/sites/default/files/inline-images/tipos-de-manzana-royal-gala.jpg",
    precio: 0.30,
    stock: 120
  }
  const producto2 = 
  {
    nombre: "Pera",
    imagen: "https://static.wixstatic.com/media/a7dee3_4c558736f7b243329c59427d855d278c~mv2.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a7dee3_4c558736f7b243329c59427d855d278c~mv2.jpg",
    precio: 0.35,
    stock: 0
  }

  return (
    <>
      <ProductList></ProductList>
    </>
  )
}

export default App
