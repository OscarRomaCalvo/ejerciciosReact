import { createContext, useState } from "react"

const CartContext = createContext({ 
  listaCart: [],
  addToCart: () => {},
  reducirCompra: () => {},
  borrarElementoCarrito: () => {}
})

export { CartContext }

function CartContextProvider({ children }) {

  const [listaCart, setListaCart] = useState([])

  const addToCart = (nombreProducto, precio, cantidad) => {
    let nuevaLista = [...listaCart]
    const indiceProducto = nuevaLista.findIndex((item)=>item.Producto===nombreProducto)
    if(indiceProducto!=-1){
        nuevaLista[indiceProducto].Producto=nombreProducto
        nuevaLista[indiceProducto].Cantidad+=cantidad
        nuevaLista[indiceProducto].PrecioTotal= (nuevaLista[indiceProducto].Cantidad*precio)
    }else{
        nuevaLista.push({
            Producto: nombreProducto,
            Cantidad: cantidad,
            PrecioPorUnidad: precio,
            PrecioTotal: cantidad*precio
        })
    }

    setListaCart(nuevaLista)
  }

  const borrarElementoCarrito = (producto) => {
    setListaCart((list)=>{
      const nuevaLista= list.filter((item)=>item.Producto!==producto.Producto)
      return nuevaLista
    })
  }

  const reducirCompra = (producto) => {
    let nuevaLista = [...listaCart]
    const indiceProducto = nuevaLista.findIndex((item)=>item.Producto===producto.Producto)
    nuevaLista[indiceProducto].Cantidad--
    nuevaLista[indiceProducto].PrecioTotal-=nuevaLista[indiceProducto].PrecioPorUnidad
    setListaCart(nuevaLista)
  }

  const contextValue = { 
    listaCart : listaCart, 
    addToCart: addToCart,
    reducirCompra: reducirCompra,
    borrarElementoCarrito: borrarElementoCarrito,
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContextProvider }