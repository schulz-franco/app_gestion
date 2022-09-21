import { useState } from "react"
import { setProducto } from "../../firebase/methods"

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

  setProducto(producto)
}

const NuevoProducto = ()=> {

  const [error, setError] = useState([false, ""])

  return(
      <div className="new-container">
          <h3>Registrar productos</h3>
          <form onSubmit={(ev)=> onSubmitHandler(ev, setError)} className="new">
            <label>Producto<input required maxLength={40} minLength={3} type="text" /></label>
            <label>Descripción<input maxLength={50} type="text" /></label>
            <label>Precio<input required maxLength={12} minLength={1} type="number" /></label>
            <label>Stock<input required maxLength={6} minLength={1} type="number" /></label>
            <label>P. Iva<input required maxLength={2} minLength={2} type="number" /></label>
            <button type="submit">Guardar</button>
          </form>
          {error[0] && 
            <p className="errorMessage">{error[1]}</p>
          }
      </div>
  )
}

export default NuevoProducto