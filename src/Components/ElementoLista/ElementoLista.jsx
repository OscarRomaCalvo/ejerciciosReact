import './index.css'


function showAlert(nombre){
    window.alert(nombre)
}

function ElementoLista(props){
    return (
        <div className="Tarjeta" key={props.nombre} 
            style={
                { 
                    backgroundColor: props.color,
                    boxShadow: props.checked ? '2px 2px 4px rgba(0, 0, 0, 0.5)' : ''
                }
            }
        >
            {props.nombre}
            <button onClick={()=> window.alert(props.nombre)}></button>
        </div>
    )
}

export default ElementoLista