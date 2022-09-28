import { useState } from "react"
import useStock from "../../hooks/useStock"
import { actualizarStock } from "../../firebase/methods"
import { BsFillCircleFill } from "react-icons/bs"
import { MdAddCircle } from "react-icons/md"

const onSubmitActualizarStockHandler = (ev, id, setModal)=> {
	ev.preventDefault()
	let stockActual = ev.target.firstChild.lastChild.value
	let nuevoStock = ev.target.firstChild.nextSibling.lastChild.value
	actualizarStock(id, stockActual, nuevoStock)
	setModal(false)
}

const StockProducto = ({ mode, producto })=> {
	
	const [modal, setModal] = useState(false)
	
	return(
		<tr>
			<td>{producto[1].producto}</td>
			<td>{producto[1].descripcion}</td>
			<td>{producto[1].stock}</td>
			<td><BsFillCircleFill style={{fontSize: ".8rem", color: mode === "bajo" ? "red" : "orange"}} /></td>
			<td><MdAddCircle onClick={()=> setModal(true)} className='detalles' /></td>
			{modal && 
                <div className="modal-container">
                <form onSubmit={(ev)=> onSubmitActualizarStockHandler(ev, producto[0], setModal)} className="modal modal-stock">
                    <label>Actual<input readOnly defaultValue={producto[1].stock} type="number" /></label>
                    <label>Agregar<input required type="number" /></label>
                    <button onClick={()=> setModal(false)} className="accept">Cancelar</button>
                    <button type="submit">Actualizar</button>
                </form>
            </div>
            }
		</tr>
	)
}

const Stock = () => {

	const { stockBajo, stockMedio } = useStock()

	return (
		<table>
			<thead>
				<tr>
					<td>Producto</td>
					<td>Descripción</td>
					<td>Stock</td>
					<td>Nivel de stock</td>
					<td>Actualizar</td>
				</tr>
			</thead>
			<tbody>
				{stockBajo.length > 0 && stockBajo.map(producto => {
					return(
						<StockProducto key={producto[0]} mode="bajo" producto={producto} />
					)
				})}
				{stockMedio.length > 0 && stockMedio.map(producto => {
					return(
						<StockProducto key={producto[0]} producto={producto} />
					)
				})}
				{(stockBajo.length === 0 && stockMedio.length === 0) && 
					<tr>
						<td style={{textTransform: "none"}}>Stock al día</td>
					</tr>
				}
			</tbody>
		</table>
	)
}
	
export default Stock