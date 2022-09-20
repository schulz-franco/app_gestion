import { useState, useContext } from "react"
import { CgClose } from "react-icons/cg"
import { GoPencil } from "react-icons/go"
import { ProductosContext } from "../../context/productosContext"
import { eliminarProducto } from "../../firebase/methods"

const onClickModalCancelHandler = (setModal)=> {
    setModal([false, null])
}

const onClickModalAcceptHandler = (setModal, id)=> {
    eliminarProducto(id)
    setModal([false, null])
}

const Modal = ({ mode, setModal, id })=> {
    if (mode === "delete") {
        return(
            <div className="modal-container">
                <div className="modal">
                    <span>¿Eliminar producto?</span>
                    <button onClick={()=> onClickModalAcceptHandler(setModal, id)} className="accept">Confirmar</button>
                    <button onClick={()=> onClickModalCancelHandler(setModal)} className="cancel">Cancelar</button>
                </div>
            </div>
        )
    }
}

const Producto = ({ id, producto })=> {

    const [modal, setModal] = useState([false, null])

    return(
        <div>
            {modal[0] && 
                <Modal mode={modal[1]} setModal={setModal} id={id} />
            }
            <div className="producto">
                <span className="name">{producto.producto}</span>
                <span className="text">{producto.descripcion}</span>
                <span className="price">$ {producto.precio}</span>
                <span className="number">{producto.stock}</span>
                <span className="number">{producto.iva}%</span>
                <button className="edit">
                    <GoPencil className="icon" />
                </button>
                <button className="delete">
                    <CgClose onClick={()=> setModal([true, "delete"])} className="icon" />
                </button>
            </div>
        </div>
    )
}

const ListaProductos = () => {

    const { productos } = useContext(ProductosContext)

    if (productos) return (
        <div className="lista-productos">
            <div className="producto title">
                <span>Producto</span>
                <span>Descripción</span>
                <span>Precio</span>
                <span>Stock</span>
                <span>P.Iva</span>
                <span>Editar</span>
                <span>Eliminar</span>
            </div>
            <div className="productos">
                {productos.map(producto => {
                    return(
                        <Producto key={producto[0]} id={producto[0]} producto={producto[1]} />
                    )
                })}
            </div>
        </div>
    )
}

export default ListaProductos