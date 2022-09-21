import { useContext } from "react"
import { useState } from "react"
import { ProductosContext } from "../../context/productosContext"

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

const ProductoCarrito = ({ id, producto, carrito, setCarrito })=> {

	const [unidades, setUnidades] = useState(1)

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
			<button onClick={()=> onClickQuitarHandler(id, carrito, setCarrito)}>X</button>
		</div>
	)
}
		
const onClickLimpiarCarritoHandler = (setCarrito)=> {
	setCarrito([])
}

const Carrito = () => {
	
	const { carrito, setCarrito } = useContext(ProductosContext)
	
	return (
		<div className='carrito-container'>
			<div className="header">
				<span>Producto</span>
				<span>Descripcion</span>
				<span>Precio</span>
				<span>Stock</span>
				<span>P. Iva</span>
				<span>Unidades</span>
				<span>Precio final</span>
				<span>Quitar</span>
			</div>
			<div className="lista">
				{carrito.length > 0 && carrito.map(producto => {
					return(
						<ProductoCarrito key={producto[0]} id={producto[0]} producto={producto[1]} carrito={carrito} setCarrito={setCarrito} />
					)
				})}
				{carrito.length < 1 && 
					<span className="vacio">Carrito vacío</span>
				}
			</div>
			{carrito.length > 0 && 
				<div className="buttons">
					<button onClick={()=> onClickLimpiarCarritoHandler(setCarrito)}>Limpiar carrito</button>
					<button>Cerrar venta</button>
				</div>
			}
		</div>
	)
}
	
export default Carrito