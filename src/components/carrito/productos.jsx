import { useContext } from "react"
import { ProductosContext } from "../../context/productosContext"
import { MdAddCircle } from "react-icons/md"

const styleBotonAgregar = (stock)=> {
    let disponible = stock > 0 ? true : false
    return {
        width: "min-content",
        color: disponible ? "#54b740" : "#d13636",
        background: "none",
        fontSize: "1.3rem",
        cursor: disponible ? "pointer" : "auto"
    }
}

const agregarCarrito = (id, producto, setCarrito, carrito)=> {
    let exists = false
    carrito.map(productoCarrito => {
        if (productoCarrito[0] === id) {
            exists = true
        }
    })
    if (!exists && producto.stock > 0) {
        setCarrito([...carrito, [id, producto]])
    }
}

const Producto = ({ id, producto, setCarrito, carrito })=> {

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
            <td><MdAddCircle onClick={()=> agregarCarrito(id, producto, setCarrito, carrito)} style={styleBotonAgregar(producto.stock)} className="add" /></td>
        </tr>
    )
}

const ListaProductos = () => {

    const { productos, setCarrito, carrito } = useContext(ProductosContext)

    if (productos) return (
        <table>
            <thead>
                <tr>
                    <td>Producto</td>
                    <td>Descripción</td>
                    <td>Precio</td>
                    <td>Stock</td>
                    <td>P. Iva</td>
                    <td>Agregar</td>
                </tr>
            </thead>
            <tbody>
                {productos.map(producto => {
                    return(
                        <Producto key={producto[0]} id={producto[0]} producto={producto[1]} setCarrito={setCarrito} carrito={carrito} />
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