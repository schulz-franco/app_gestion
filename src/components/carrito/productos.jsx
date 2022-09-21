import { useContext } from "react"
import { ProductosContext } from "../../context/productosContext"

const styleProductoCarrito = {
    gridTemplateColumns: "1.5fr 3fr 0.5fr 0.5fr 0.5fr 0.5fr"
}

const styleBotonAgregar = {
    width: "min-content",
    backgroundColor: "#54b740",
    fontSize: "1rem"
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
        <div>
            <div style={styleProductoCarrito} className="producto">
                <span className="name">{producto.producto}</span>
                <span className="text">{producto.descripcion}</span>
                <span className="price">$ {producto.precio}</span>
                <span style={styleStockWarning} className="number">{producto.stock}</span>
                <span className="number">{producto.iva}%</span>
                <button onClick={()=> agregarCarrito(id, producto, setCarrito, carrito)} style={styleBotonAgregar} className="add">
                    +
                </button>
            </div>
        </div>
    )
}

const ListaProductos = () => {

    const { productos, setCarrito, carrito } = useContext(ProductosContext)

    if (productos) return (
        <div className="lista-productos">
            <div style={styleProductoCarrito} className="producto title">
                <span>Producto</span>
                <span>Descripción</span>
                <span>Precio</span>
                <span>Stock</span>
                <span>P.Iva</span>
                <span>Agregar</span>
            </div>
            <div className="productos">
                {productos.length < 1 && 
                    <span className="sin-resultados">Sin resultados</span>
                }
                {productos.map(producto => {
                    return(
                        <Producto key={producto[0]} id={producto[0]} producto={producto[1]} setCarrito={setCarrito} carrito={carrito} />
                    )
                })}
            </div>
        </div>
    )
}

export default ListaProductos