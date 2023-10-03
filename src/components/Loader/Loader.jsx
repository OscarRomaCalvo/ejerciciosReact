import {useState} from "react"
import "./index.css"


function Loader ({children}) {
    const [loading, setLoading] = useState(false)

    function recargarPagina(){
        setLoading(!loading)
    }

    function paginaCargada(){
        return <>{children}</>
    }

    function paginaCargando(){
        return (
            <span class="loader"></span>
            //<img src="https://i.gifer.com/ZKZg.gif" height="100px"></img>
        )
    }
    return (
        <>
            <button className="btnCargar" onClick={recargarPagina}>Cargar</button>
            {(loading) ? paginaCargada(): paginaCargando()}
        </>
    )
    
}

export default Loader