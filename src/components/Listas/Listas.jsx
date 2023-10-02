import { useState } from "react";

function Listas(){
    const [list, setList] = useState(["Rick","Morty","Jerry","Beth","Summer","Mr. Meeseeks", "Birdperson", "Squanchy"])

    function insertItem() {
        setList((prevList)=>{
            const copy = [...prevList]
            copy.push(`New element ${copy.length}`)
            return copy
            //Otra forma de añadir elementos
            //const copy2 = [...prevList, `New element ${copy.length}`]
        })
    }

    function filterList(){
        setList((prevList)=>{
            return prevList.filter((item) => item.includes("y"))
        })
    }

    function removeThird(){
        setList((prevList)=>{
            const copy=[...prevList]
            copy.splice(2,1)
            return copy
        })
    }

    return(
        <ul>
            <button onClick={() => insertItem()}>Agregar elemento</button>
            <button onClick={() => filterList()}>Filtrar lista</button>
            <button onClick={() => removeThird()}>Eliminar tercero</button>
            {list.map((item) => <li key={item}>{item}</li>)}
        </ul>
    )
}

export default Listas