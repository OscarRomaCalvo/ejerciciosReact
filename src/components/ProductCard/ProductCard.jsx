import './index.css'

function ProductCard({producto, index, setListaProductos, listaProductos}){
    const {nombre, imagen, precio, stock} = producto
    
    function addToCart(){
        let nuevaLista = [...listaProductos]
        nuevaLista[index].stock--
        setListaProductos(nuevaLista)
        //TODO añadir al carrito
    }

    return (
        <div className={`card ${((stock>0) ? "hay" : "noHay")}`}>
            <h3>{nombre}</h3>
            <img src={imagen} width="130px" height="130px"></img>
            <p>Precio: {precio}€</p>
            <p>
                {((stock>0) ? stock : "Sin stock")}
            </p>
            <button onClick={addToCart}>Comprar</button>
        </div>
    )
}

export default ProductCard