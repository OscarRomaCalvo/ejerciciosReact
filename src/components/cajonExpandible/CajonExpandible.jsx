import './index.css'
import { useState } from 'react';

function CajonExpandible({children}){
    const [ampliado, setAmpliado] = useState(false)

    const changeAmpliado = () => {
        setAmpliado(!ampliado)
    }

    return (
        <div className="cajaContenedora">
            {ampliado ? children: null}
            <button onClick={changeAmpliado} >{ampliado ? ("Cerrar"): "Ampliar"}</button> 
        </div>
    )
}

export default CajonExpandible