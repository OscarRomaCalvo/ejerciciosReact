import './index.css'
import { useState } from 'react';

function CajonExpandible({children, titulo}){
    const [ampliado, setAmpliado] = useState(false)

    const handleClick = () => {
        setAmpliado(ampliado => !ampliado)
    }

    return (
        <div className="cajaContenedora">
            <h4 className='titulo'>{titulo}</h4>
            {ampliado ? children: null}
            <button onClick={handleClick} >{ampliado ? ("Cerrar"): "Ampliar"}</button> 
        </div>
    )
}

export default CajonExpandible