import { useContext } from "react"
import { CgClose } from "react-icons/cg"
import { GoPencil } from "react-icons/go"
import { ProductosContext } from "../../context/productosContext"

const ListaProductos = () => {

    const { productos } = useContext(ProductosContext)

    // productos[0].data()

    if (productos) return (
        <div className="lista-productos">
            <div className="producto title">
                <span>Código</span>
                <span>Producto</span>
                <span>Descripción</span>
                <span>Precio</span>
                <span>Stock</span>
                <span>Editar</span>
                <span>Eliminar</span>
            </div>
            {productos.map(producto => {
                return(
                    <div key={producto.producto} className="producto">
                        <span className="code">{producto.codigo}</span>
                        <span className="name">{producto.producto}</span>
                        <span className="text">{producto.descripcion}</span>
                        <span className="price">$ {producto.precio}</span>
                        <span className="number">{producto.stock}</span>
                        <button className="edit">
                            <GoPencil className="icon" />
                        </button>
                        <button className="delete">
                            <CgClose className="icon" />
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default ListaProductos