import { useState } from "react"
import Modal from "./modal"
import { GoPencil } from "react-icons/go"
import { FaTrash } from "react-icons/fa"

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

export default Producto