import { useState } from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./index.css"
function ProductList(){
    const listaBase =[
        {   
            nombre: "Manzana",
            imagen: "https://www.recetasnestle.com.mx/sites/default/files/inline-images/tipos-de-manzana-royal-gala.jpg",
            precio: 0.30,
            stock: 120
        },
        {
            nombre: "Pera",
            imagen: "https://static.wixstatic.com/media/a7dee3_4c558736f7b243329c59427d855d278c~mv2.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a7dee3_4c558736f7b243329c59427d855d278c~mv2.jpg",
            precio: 0.35,
            stock: 0
        },
        {
            nombre: "Platano",
            imagen: "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2021/05/20/imagen-de-un-platano-maduro.jpeg",
            precio: 0.50,
            stock: 5
        },
        {
            nombre: "Aceite de oliva",
            imagen: "https://petramora.com/cdn/shop/products/W-40000280-ACEITE-DE-OLIVA-VIRGEN-EXTRA-ECO-EN-RAMA-1L-ARTAJO-01.jpg?v=1660056715",
            precio: 999,
            stock: 0
        },
        {
            nombre: "Melon",
            imagen: "data:image/jpeg;base64,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",
            precio: 3,
            stock: 3
        },
    ]

    const [listaProductos,setListaProductos] = useState(listaBase)
    const [filtroStock,setFiltroStock] = useState(false)
    const [filtroTexto, setFiltroTexto] = useState("")

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
                        return <ProductCard producto={item} index={index }setListaProductos={setListaProductos} listaProductos={listaProductos} key={item.nombre}></ProductCard>
                    }) 
                    :
                    <p>No hay ningun elemento que cumpla con la búsqueda</p>
                }
            </ul>
        </>
    )
}

export default ProductList