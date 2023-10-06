import { useState } from "react"

function useForm(){
    const [form, setForm] = useState({
        Texto:"",
        Numero:0,
        Fecha:"",
        Checked: false,
        File: ""
    })

    const[isDirty,setIsDirty]= useState(false)

    function onChangeForm(event){
        setIsDirty(true)
        if(event.target.name==="Checked"){
            setForm({...form, 
                [event.target.name] : event.target.checked,
              });
        }else{
            setForm(prevForm=>({
                ...prevForm,
                [event.target.name] : event.target.value
            }))
        }
    }
    
    function reset(){
        setIsDirty(true)
        setForm({
            Texto:"",
            Numero:0,
            Fecha:"",
            Checked: false,
            File: ""
        })
    }
    return [form, onChangeForm, reset, isDirty]
}

export default useForm