import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/ProductList/ProductList'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <>
      <ProductList></ProductList>
      <p></p>
      <Cart></Cart>
    </>
  )
}

export default App
