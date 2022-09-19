const inputs = [
    {
      name: "Producto",
      type: "text",
      maxl: "40",
      minl: "3",
      required: true
    },
    {
      name: "Descripción",
      type: "text",
      maxl: "50",
      minl: "",
      required: false
    },
    {
      name: "Precio",
      type: "Number",
      maxl: "12",
      minl: "1",
      required: true
    },
    {
      name: "Stock",
      type: "number",
      maxl: "6",
      minl: "1",
      required: true
    },
    {
      name: "P.Iva",
      type: "number",
      maxl: "2",
      minl: "2",
      required: true
    }
  ]

const Input = ({ name, type, maxl, minl, required })=> {
return(
    <div className="input-container">
        <span>{name}</span>
        <input required={required} type={type} maxLength={maxl} minLength={minl}/>
    </div>
)
} 

const NuevoProducto = ()=> {
    return(
        <div className="new-container">
            <h3>Registrar productos</h3>
            <form className="new" action="">
                {inputs.map((input, index) => {
                    return(
                    <Input key={index} name={input.name} type={input.type} maxl={input.maxl} minl={input.minl} required={input.required} />
                    )
                })
                }
                <button>Guardar</button>
            </form>
        </div>
    )
}

export default NuevoProducto