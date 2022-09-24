import Consulta from "../../components/ventas/consulta"
import ListaVentas from "../../components/ventas/ventas"

const PageVentas = () => {
  return (
    <div className="main-container">
      <Consulta />
      <ListaVentas />
    </div>
  )
}

export default PageVentas