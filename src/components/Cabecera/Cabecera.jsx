import Navegacion from '../Navegacion/Navegacion'
import './index.css'

function Cabecera(){
    return(
        <>
            <header>
                <div id="logo">
                    <img src="vite.svg" alt="Logo de tu sitio web" className='Logo'/>
                </div> 
               <Navegacion></Navegacion> 
            </header>
        </>
    )
}

export default Cabecera