import { useContext } from "react"
import { database } from "../../firebase/firebaseConfig"
import { cerrarVenta } from "../../firebase/methods"
import { ProductosContext } from "../../context/productosContext"
import ProductoCarrito from "./productoCarrito"

const onClickLimpiarCarritoHandler = (setCarrito)=> {
	setCarrito([])
}

const onClickCerrarVentaHandler = (carrito, setCarrito, montoTotal)=> {
	cerrarVenta(database, carrito, montoTotal)
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
					<button onClick={()=> onClickLimpiarCarritoHandler(setCarrito)}>Limpiar carrito</button>
					<button onClick={()=> onClickCerrarVentaHandler(carrito, setCarrito, montoTotal)}>Cerrar venta</button>
					<span></span>
					<span>{carrito.length > 0 ? "TOTAL $ " + montoTotal.toLocaleString('en-US') : undefined}</span>
				</div>
			}
		</div>
	)
}
	
export default Carrito