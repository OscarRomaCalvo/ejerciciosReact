import { useContext, useState} from "react"
import { ProductContext } from "../../context/ProductsContext"
import { CartContext } from "../../context/CartContext"



function Cart(){
    const {listaProductos} = useContext(ProductContext)
    const {listaCart} = useContext(CartContext)

    return(
        <>
            <h3>Tu carrito</h3>
            <ul>
                {listaCart.map((item) => 
                    <li key={item.Producto}>
                        <div>
                            <h5>{item.Producto}</h5>
                            <p>Cantidad: {item.Cantidad} </p>
                            <p>Precio por unidad: {item.PrecioPorUnidad}</p>
                            <p>Precio total: {item.PrecioTotal}</p>
                        </div>
                        <button onClick={() => borrarElemento(item.id)}>Eliminar</button>
                    </li>
                )}
            </ul>
        </>
    )
}

export default Cart