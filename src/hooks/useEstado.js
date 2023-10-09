import {useState, useEffect} from 'react'

function useEstado(defaultValue = 0){
    const [state, setState] = useState(defaultValue)
    
    useEffect(()=>{
        sessionStorage.setItem("estado", state)
    },[state])

    function cambiarEstado(){
        setState(Math.random())
    }

    return [state, cambiarEstado]
}

export default useEstado