import './index.css'

const enlaces =[{pagina: "Marca", url:"www.marca.com"}, {pagina: "As", url:"www.as.com"},{pagina: "ElMundo", url:"www.elmundo.com"}] 

function RenderListItems(lista){
    return lista.map((elemento)=>
        {
            return <li key={elemento.pagina}><a href={`https://${elemento.url}`}>{elemento.pagina}</a></li>
        }
    )
}

function Navegacion(){
    return(
        <>
            <nav>
                <ul>
                    {RenderListItems(enlaces)}
                </ul> 
            </nav>
        </>
    )
}

export default Navegacion