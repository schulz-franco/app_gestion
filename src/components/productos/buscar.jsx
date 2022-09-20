import { useContext } from "react"
import { ProductosContext } from "../../context/productosContext"

const onSubmitHandler = (ev, setSearch)=> {
  ev.preventDefault()
  setSearch(ev.target.firstElementChild.value.trim())
}

const BuscarProducto = ()=> {

  const { search, setSearch } = useContext(ProductosContext)

  return(
    <form action="" className="buscar" onSubmit={(ev)=> onSubmitHandler(ev, setSearch)}>
      <input placeholder="Buscar un producto..." type="text" maxLength={30} minLength={2} required={false} />
      <button>Buscar</button>
    </form>
  )
}

export default BuscarProducto