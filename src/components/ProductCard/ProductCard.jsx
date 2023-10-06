import './index.css'
import { useContext } from "react"
import { ProductContext } from "../../context/ProductsContext"

function ProductCard({producto, index}){
    const {nombre, imagen, precio, stock} = producto
    
    const {addToCart} = useContext(ProductContext)


    return (
        <div className={`card ${((stock>0) ? "hay" : "noHay")}`}>
            <h3>{nombre}</h3>
            <img src={imagen} width="130px" height="130px"></img>
            <p>Precio: {precio}€</p>
            <p>
                {((stock>0) ? stock : "Sin stock")}
            </p>
            <button onClick={() => addToCart(index)}>Comprar</button>
        </div>
    )
}

export default ProductCard