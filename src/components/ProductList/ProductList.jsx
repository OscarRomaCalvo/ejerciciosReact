import { useContext, useState } from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./index.css"
import { ProductContext } from "../../context/ProductsContext"

function ProductList(){
    const [filtroStock,setFiltroStock] = useState(false)
    const [filtroTexto, setFiltroTexto] = useState("")

    const {listaProductos} = useContext(ProductContext)

    function onChangeCheckBox(event){
        setFiltroStock(event.target.checked)
    }

    function onChangeBusquedaTexto(event){
        setFiltroTexto(event.target.value)
    }

    function filtrarLista(){
        let listaFiltradaAux=[...listaProductos]
        
        if(filtroStock){
            listaFiltradaAux=listaFiltradaAux.filter((item)=>item.stock>0)
        }
        if(filtroTexto!==""){
            listaFiltradaAux=listaFiltradaAux.filter((item)=>item.nombre.toLowerCase().includes(filtroTexto.toLowerCase()))
        }
        return listaFiltradaAux
    }

    let listaFiltrada=filtrarLista()

    return(
        <>
            <form>
                <label>Buscar sólo elementos disponibles
                    <input name="filtroStock" type="checkbox" value={filtroStock} onChange={onChangeCheckBox}></input>
                </label>
                <label>Filtrar elementos
                    <input name="filtroTexto" type="text" value={filtroTexto} onChange={onChangeBusquedaTexto}></input>
                </label>
            </form>
            <ul className="lista">
                {listaFiltrada.length ?
                    listaFiltrada.map((item, index)=>{
                        return <ProductCard producto={item} index={index } key={item.nombre}></ProductCard>
                    }) 
                    :
                    <p>No hay ningun elemento que cumpla con la búsqueda</p>
                }
            </ul>
        </>
    )
}

export default ProductList