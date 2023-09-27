import './index.css'

const infoTarjetas =[
    {nombre: "Messi", foto:"https://pbs.twimg.com/profile_images/2863992015/4b96f043ae87d18154ebeb3dd497d72f_400x400.jpeg"},
    {nombre: "Ronaldo", foto:"https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-busto-1511863087.jpg?crop=1xw:1xh;center,top&resize=980:*"},
    {nombre: "Kebab", foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOb921Qk0JgpkNIC-c5tU6qa7x-24PUo4U1doN2mG7kEDTch_GTdAA4lDRpE1uERZT6dU&usqp=CAU"}
]

function RenderListItems(lista){
    return lista.map((elemento)=>
    {
        return (
            <>
                <div className="tarjeta">
                    <h2>{elemento.nombre}</h2>
                    <img src={elemento.foto} widht="180px" height="180px"></img> 
                    
                </div>
            </>
        )
    }
)
}

function Tarjeta(){
    return(
        <>
            <body>
                {RenderListItems(infoTarjetas)}
                
            </body>
        </>
    )
}

export default Tarjeta