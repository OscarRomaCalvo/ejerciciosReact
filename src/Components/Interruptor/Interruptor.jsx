import React, { useState } from 'react';


function Interruptor (){
    const [state,setState] = useState(true)

    const actualizarEstado = () => {
        setState(!state);
      };

    return(
        <>
            <p>{state ? "Activado" : "Desactivado"}</p>
            <button onClick={()=>actualizarEstado()}>Cambiar palabras</button>
        </>
    )
}

export default Interruptor