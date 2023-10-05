import {useRef, useState} from "react"

function Contador(){
    const [cuentaActiva,setCuentaActiva] = useState(false)
    const [segundos, setSegundos] = useState(5)
    const intervalRef = useRef(null) 

    function iniciarCuenta(){
        setCuentaActiva(true)
        intervalRef.current = setInterval(
            intervalFn
            ,1000
        )
    }

    function pararCuenta(){
        setCuentaActiva(false)
        setSegundos(5)
        clearInterval(intervalRef.current)
    }

    function intervalFn(){
        setSegundos((prevSegundos) => {
            if(prevSegundos > 0){
                return prevSegundos-1
            }else{
                clearInterval(intervalRef.current)
                return prevSegundos
            }
        }
    )
    }

    return (
        <>
            <h1>{segundos}</h1>
            <button disabled={cuentaActiva} onClick={iniciarCuenta}>Iniciar</button>
            <button disabled={!cuentaActiva} onClick={pararCuenta}>Parar</button>
        </>
    )
}

export default Contador