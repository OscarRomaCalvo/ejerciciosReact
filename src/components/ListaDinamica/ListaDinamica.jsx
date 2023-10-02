import { useState } from "react"

function ListaDinamica(){

    const [list, setList] = useState([{ id: 1, name: "Rick" },{ id: 2, name: "Morty" }, { id: 3, name: "Birdman" }])

    function borrarElemento(id){
        setList((list)=>{
            const nuevaLista = list.filter((item)=> item.id!==id)
            return nuevaLista
        })
    }

    function aniadirElemento(){
        setList((list)=>{
            const nuevaLista= [...list,{id:Date.now() * Math.random(), name:"Por defecto" }]
            return nuevaLista
        })
    }

    return(
        <>
            <ul>
                {list.map((item) => 
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => borrarElemento(item.id)}>Eliminar</button>
                    </li>
                )}
            </ul>
            <button onClick={()=>aniadirElemento()}>añadir</button>
        </>
    )
}

export default ListaDinamica