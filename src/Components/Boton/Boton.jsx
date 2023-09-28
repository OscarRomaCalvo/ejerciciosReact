import './index.css'

function Boton({type="primary", disabled=false, onClick, children}){
    return (
        <button className={type} disabled={disabled} onClick={onClick}>{children}</button>
    )
}

export default Boton