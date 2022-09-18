const BuscarProducto = ()=> {
    return(
      <form action="" className="buscar">
        <input placeholder="Buscar un producto..." type="text" maxLength={30} minLength={2} required={false} />
        <button>Buscar</button>
      </form>
    )
}

export default BuscarProducto