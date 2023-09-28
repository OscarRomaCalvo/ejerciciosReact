import './index.css'

const enlaces =[
    {pagina: "Marca", url:"https://www.marca.com"}, 
    {pagina: "As", url:"https://www.as.com"},
    {pagina: "ElMundo", url:"https://www.elmundo.com"}
] 

function RenderListItems(lista){
    return lista.map((elemento)=>
        {
            return <li key={elemento.pagina}><a href={`${elemento.url}`}>{elemento.pagina}</a></li>
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