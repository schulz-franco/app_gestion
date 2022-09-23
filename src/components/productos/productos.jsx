import { useState, useContext } from "react"
import { GoPencil } from "react-icons/go"
import { FaTrash } from "react-icons/fa"
import { ProductosContext } from "../../context/productosContext"
import { eliminarProducto, setProducto } from "../../firebase/methods"

const onClickModalCancelHandler = (ev, setModal)=> {
    ev.preventDefault()
    setModal([false, null])
}

const onClickModalAcceptHandler = (setModal, id)=> {
    eliminarProducto(id)
    setModal([false, null])
}

const onSubmitModalEditHandler = (ev, setError, setModal, id)=> {
    ev.preventDefault()
  
    if (ev.target.childNodes[0].lastElementChild.value.trim() === "") {
      ev.target.childNodes[0].lastElementChild.classList.add("error")
      return setError([true, "* Campo vacío."])
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
  
    setModal([false, null])
    setProducto(producto, id)
  }

const Modal = ({ mode, setModal, id, producto })=> {

    const [error, setError] = useState([false, null])

    if (mode === "delete") {
        return(
            <div className="modal-container">
                <div className="modal modal-delete">
                    <span className="acceptMessage">¿Eliminar producto?</span>
                    <button onClick={()=> onClickModalAcceptHandler(setModal, id)} className="accept">Confirmar</button>
                    <button onClick={(ev)=> onClickModalCancelHandler(ev, setModal)} className="cancel">Cancelar</button>
                </div>
            </div>
        )
    } else if (mode === "edit") {
        return(
            <div className="modal-container">
                <form onSubmit={(ev)=> onSubmitModalEditHandler(ev, setError, setModal, id)} className="modal modal-edit">
                    <label>Producto<input defaultValue={producto.producto} placeholder="Producto" required maxLength={40} minLength={3} type="text" /></label>
                    <label>Descripción<input defaultValue={producto.descripcion} placeholder="Descripción" maxLength={50} type="text" /></label>
                    <label>Precio<input defaultValue={producto.precio} placeholder="Precio" required maxLength={12} minLength={1} type="number" /></label>
                    <label>Stock<input defaultValue={producto.stock} placeholder="Stock" required maxLength={6} minLength={1} type="number" /></label>
                    <label>P. Iva<input defaultValue={producto.iva} placeholder="P. Iva" required maxLength={2} minLength={2} type="number" /></label>
                    <button type="submit">Confirmar</button>
                    <button onClick={(ev)=> onClickModalCancelHandler(ev, setModal)} className="accept">Cancelar</button>
                    {error[0] && <span className="errorMessage">{error[1]}</span>}
                </form>
            </div>
        )
    }
}

const Producto = ({ id, producto })=> {

    const [modal, setModal] = useState([false, null])

    const styleStockWarning = producto.stock <= 5 ? {
        color: "red",
        fontWeight: "bold"
    } : undefined

    return(
        <tr>
            <td>{producto.producto}</td>
            <td>{producto.descripcion}</td>
            <td>$ {producto.precio}</td>
            <td style={styleStockWarning}>{producto.stock}</td>
            <td>{producto.iva}%</td>
            <td><GoPencil onClick={()=> setModal([true, "edit"])} className="edit" /></td>
            <td><FaTrash onClick={()=> setModal([true, "delete"])} className="delete" /></td>
            {modal[0] && 
                <Modal mode={modal[1]} setModal={setModal} id={id} producto={producto}/>
            }
        </tr>
    )
}

const ListaProductos = () => {

    const { productos } = useContext(ProductosContext)

    if (productos) return (
        <table>
            <thead>
                <tr>
                    <td>Producto</td>
                    <td>Descripción</td>
                    <td>Precio</td>
                    <td>Stock</td>
                    <td>P. Iva</td>
                    <td>Editar</td>
                    <td>Eliminar</td>
                </tr>
            </thead>
            <tbody>
                {productos.map(producto => {
                    return(
                        <Producto key={producto[0]} id={producto[0]} producto={producto[1]} />
                    )
                })}
                {productos.length < 1 && 
                    <span className="sin-resultados">Sin resultados</span>
                }
            </tbody>
        </table>
    )
}

export default ListaProductos