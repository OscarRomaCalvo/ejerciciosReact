import { useState } from 'react';
import "./index.css"

function ComponenteInteractuable(){
    const [color,setColor] = useState("red")
    const [tieneFoco, setTieneFoco] = useState(false);

    function entraRaton(){
        setColor("blue")
    }
    function salirRaton(){
        setColor("red")
    }

    function manejarFocus(){
        setTieneFoco(true);
    }
    
    function manejarNoFocus() {
    setTieneFoco(false);
    }

    return (
        <>
            <div className="componente"
                onMouseEnter={entraRaton}
                onMouseLeave={salirRaton}
                tabindex="0"
                onFocus={manejarFocus}
                onBlur={manejarNoFocus}
                style={{backgroundColor: color}}
            />
            {tieneFoco && <div className="mensaje">¡Tiene el foco!</div>} 
        
        </>
    )
} 

export default ComponenteInteractuable