import { useContext } from "react"
import { CgClose } from "react-icons/cg"
import { GoPencil } from "react-icons/go"
import { ProductosContext } from "../../context/productosContext"

const Producto = ({ producto })=> {
    return(
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
                <CgClose className="icon" />
            </button>
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
                        <Producto key={producto.producto} producto={producto} />
                    )
                })}
            </div>
        </div>
    )
}

export default ListaProductos