import NuevoProducto from "../../components/productos/nuevo"
import BuscarProducto from "../../components/productos/buscar"
import ListaProductos from "../../components/productos/productos"

const PageProductos = () => {
  return (
    <div className="productos-main-container">
      <NuevoProducto />
      <BuscarProducto />
      <ListaProductos />
    </div>
  )
}

export default PageProductos