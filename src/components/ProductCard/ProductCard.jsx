import './index.css'
import { useContext } from "react"
import { ProductContext } from "../../context/ProductsContext"
import { CartContext } from '../../context/CartContext'

function ProductCard({producto, index}){
    const {nombre, imagen, precio, stock} = producto
    
    const {reducirStock} = useContext(ProductContext)

    const {addToCart} = useContext(CartContext)

    const comprar = (index, nombreProducto, precio, cantidad) => {
        reducirStock(index)
        addToCart(nombreProducto, precio, cantidad)
    }
    
    const cantidad=1
    return (
        <div className={`card ${((stock>0) ? "hay" : "noHay")}`}>
            <h3>{nombre}</h3>
            <img src={imagen} width="130px" height="130px"></img>
            <p>Precio: {precio}€</p>
            <p>
                {((stock>0) ? stock : "Sin stock")}
            </p>
            <button onClick={() => comprar(index, nombre, precio, cantidad) } disabled={!(stock>0)}>Comprar</button>
        </div>
    )
}

export default ProductCard