import { useState } from "react"
import { nuevoProducto } from "../../firebase/methods"

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

const onSubmitHandler = (ev, setError)=> {
  ev.preventDefault()

  if (ev.target.childNodes[0].lastElementChild.value.trim() === "") {
    ev.target.childNodes[0].lastElementChild.classList.add("error")
    return setError([true, "El campo 'Producto' esta vacío."])
  } else {
    ev.target.childNodes[0].lastElementChild.classList.remove("error")
    setError([false, ""])
  }

  let datos = []
  for (let counter = 0; counter < 5; counter++) {
    datos.push(ev.target.childNodes[counter].lastElementChild.value.trim())
    ev.target.childNodes[counter].lastElementChild.value = ""
  }

  if (datos[1] === "") datos[1] = "-" 

  let producto = {
    producto: datos[0],
    descripcion: datos[1],
    precio: datos[2],
    stock: datos[3],
    iva: datos[4]
  }

  nuevoProducto(producto)
}

const NuevoProducto = ()=> {

  const [error, setError] = useState([false, ""])

  return(
      <div className="new-container">
          <h3>Registrar productos</h3>
          <form onSubmit={(ev)=> onSubmitHandler(ev, setError)} className="new">
              {inputs.map((input, index) => {
                  return(
                  <Input key={index} name={input.name} type={input.type} maxl={input.maxl} minl={input.minl} required={input.required} />
                  )
              })
              }
              <button type="submit">Guardar</button>
          </form>
          {error[0] && 
            <p className="errorMessage">{error[1]}</p>
          }
      </div>
  )
}

export default NuevoProducto