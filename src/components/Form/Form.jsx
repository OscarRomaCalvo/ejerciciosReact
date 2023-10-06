import useForm from "../../hooks/useForm"

function Form(){

    const [form, onChangeForm, reset, isDirty] = useForm()

    function handleSubmit(){
        event.preventDefault()
        window.alert(`Texto: ${form.Texto}, Numero: ${form.Numero}, Fecha: ${form.Fecha}, Check: ${form.Checked ? "true": "false"}, Check: ${isDirty ? "true": "false"}`)
    }

    return(
        <>
        <form onSubmit={()=>handleSubmit()}>
            <label>
                Texto
                <input type="text" value={form.Texto} name="Texto" onChange={onChangeForm}></input>
            </label>
            <label>
                Numero
                <input type="number" value={form.Numero} name="Numero" onChange={onChangeForm}></input>
            </label>
            <label>
                Fecha
                <input type="date" value={form.Fecha} name="Fecha" onChange={onChangeForm}></input>
            </label>
            <label>
                Check
                <input type="checkbox" value={form.Checked} name="Checked" onChange={onChangeForm}></input>
            </label>
            <label>
                Seleccione un archivo:
                <input type="file" name="File" value={form.File} onChange={onChangeForm} accept=".pdf, .jpg, .png" />
            </label>
            <p></p>
            <button type="submit">Enviar</button>
        </form>
        <button onClick={reset}>Reset</button>
        </>
    )
}

export default Form