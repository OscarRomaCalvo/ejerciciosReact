import { useContext, useState} from "react"
import { ProductContext } from "../../context/ProductsContext"
import { CartContext } from "../../context/CartContext"
import "./index.css"



function Cart(){
    const {aumentarStock} = useContext(ProductContext)
    const {listaCart, reducirCompra, borrarElementoCarrito} = useContext(CartContext)

    function borrarElemento(item){
        aumentarStock(item.Producto,item.Cantidad)
        borrarElementoCarrito(item)
    }

    function reducirElemento(item){
        if(item.Cantidad===1){
            borrarElemento(item)
        }else{
            aumentarStock(item.Producto,1)
            reducirCompra(item)
        }
    }

    return(
        <>
            <h3>Tu carrito</h3>
            <ul className="listaCarrito">
                {listaCart.map((item) => 
                    <li key={item.Producto}>
                        <div>
                            <h5>{item.Producto}</h5>
                            <p>Cantidad: {item.Cantidad} </p>
                            <p>Precio por unidad: {item.PrecioPorUnidad}</p>
                            <p>Precio total: {item.PrecioTotal}</p>
                        </div>
                        <button onClick={() => reducirElemento(item)}>-</button>
                        <button onClick={() => borrarElemento(item)}>Eliminar</button>
                    </li>
                )}
            </ul>
        </>
    )
}

export default Cart