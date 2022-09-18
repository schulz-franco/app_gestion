import Menu from "../../components/menu"
import NuevoProducto from "../../components/productos/nuevo"
import BuscarProducto from "../../components/productos/buscar"

const MainPage = () => {
  return (
    <div className="main-container">
      <div className="shadow"></div>
      <div className="top"></div>
      <Menu />
      <div>
        <NuevoProducto />
        <BuscarProducto />
      </div>
    </div>
  )
}

export default MainPage