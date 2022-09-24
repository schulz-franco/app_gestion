import { FaTrash } from "react-icons/fa"
import useProductoCarrito from "../../hooks/useProductoCarrito"

const onClickUnidadesHandler = (operacion, unidades, setUnidades, productoStock)=> {
	if (operacion === "+") {
		if (unidades < productoStock) setUnidades(unidades + 1)
		return
	}
	if (unidades >= 2) {
		return setUnidades(unidades - 1)
	}
}

const onClickQuitarHandler = (id, carrito, setCarrito)=> {
	const carritoActualizado = carrito.filter(producto => producto[0] !== id)
	setCarrito(carritoActualizado)
}

const ProductoCarrito = ({ id, producto, carrito, setCarrito, setMontoTotal })=> {

	const { unidades, setUnidades } = useProductoCarrito(setMontoTotal, carrito)
	
	const iva = parseFloat("1." + producto.iva)
	const precioFinal = ((producto.precio * unidades) * iva).toFixed()

	return(
		<div className="producto">
			<span>{producto.producto}</span>
			<span>{producto.descripcion}</span>
			<span>$ {producto.precio}</span>
			<span>{producto.stock}</span>
			<span>{producto.iva}%</span>
			<div className="unidades-container">
				<button onClick={()=> onClickUnidadesHandler("-", unidades, setUnidades, producto.stock)}>-</button>
				<input readOnly value={unidades} type="number" name="unidades" />
				<button onClick={()=> onClickUnidadesHandler("+", unidades, setUnidades, producto.stock)}>+</button>
			</div>
			<span>$ {precioFinal}</span>
			<FaTrash className="delete" onClick={()=> onClickQuitarHandler(id, carrito, setCarrito)} />
		</div>
	)
}

export default ProductoCarrito