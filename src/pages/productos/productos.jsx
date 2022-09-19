import Menu from "../../components/menu"
import NuevoProducto from "../../components/productos/nuevo"
import BuscarProducto from "../../components/productos/buscar"
import ListaProductos from "../../components/productos/productos"

const PageProductos = () => {
  return (
    <div className="main-container">
      <div className="shadow"></div>
      <div className="top"></div>
      <Menu />
      <div className="right">
        <NuevoProducto />
        <BuscarProducto />
        <ListaProductos />
      </div>
    </div>
  )
}

export default PageProductos