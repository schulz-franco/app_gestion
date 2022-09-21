import Carrito from "../../components/carrito/carrito"
import ListaProductos from "../../components/carrito/productos"
import BuscarProducto from "../../components/productos/buscar"

const PageCarrito = () => {
    return (
      <div className="main-container">
        <Carrito />
        <BuscarProducto />
        <ListaProductos />
      </div>
    )
  }
  
  export default PageCarrito