import { createContext, useState } from "react"

const CartContext = createContext({ 
  listaCart: [],
  addToCart: () => {} 
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


  const contextValue = { 
    listaCart : listaCart, 
    addToCart: addToCart
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContextProvider }