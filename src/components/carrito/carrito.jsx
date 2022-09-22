import { useContext, useEffect } from "react"
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

const ProductoCarrito = ({ id, producto, carrito, setCarrito, setMontoTotal })=> {

	const [unidades, setUnidades] = useState(1)

	const iva = parseFloat("1." + producto.iva)
	const precioFinal = ((producto.precio * unidades) * iva).toFixed()

	useEffect(()=> {
		if (carrito.length > 0) {
			const listaCarrito = document.querySelector("#root > div.main-container > div.carrito-container > div.lista").childNodes
			let precioTotal = 0
			listaCarrito.forEach(producto => {
				precioTotal += parseInt(producto.lastChild.previousSibling.lastChild.textContent)
			})
			setMontoTotal(precioTotal)
		}
	}, [carrito, unidades])

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
	
	const { carrito, setCarrito, montoTotal, setMontoTotal } = useContext(ProductosContext)
	
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
						<ProductoCarrito key={producto[0]} id={producto[0]} producto={producto[1]} carrito={carrito} setCarrito={setCarrito} setMontoTotal={setMontoTotal} />
					)
				})}
				{carrito.length < 1 && 
					<span className="vacio">Carrito vacío</span>
				}
			</div>
			{carrito.length > 0 && 
				<div className="buttons">
					<span>{carrito.length > 0 ? "Total: $ " + montoTotal : undefined}</span>
					<span></span>
					<button onClick={()=> onClickLimpiarCarritoHandler(setCarrito)}>Limpiar carrito</button>
					<button>Cerrar venta</button>
				</div>
			}
		</div>
	)
}
	
export default Carrito