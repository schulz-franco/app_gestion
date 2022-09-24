import { BsFillCircleFill } from "react-icons/bs"
import useStock from "../../hooks/useStock"

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
				</tr>
			</thead>
			<tbody>
				{stockBajo.length > 0 && stockBajo.map(producto => {
					return(
						<tr key={producto[0]}>
							<td>{producto[1].producto}</td>
							<td>{producto[1].descripcion}</td>
							<td>{producto[1].stock}</td>
							<td><BsFillCircleFill style={{fontSize: ".8rem", color: "red"}} /></td>
						</tr>
					)
				})}
				{stockMedio.length > 0 && stockMedio.map(producto => {
					return(
						<tr key={producto[0]}>
							<td>{producto[1].producto}</td>
							<td>{producto[1].descripcion}</td>
							<td>{producto[1].stock}</td>
							<td><BsFillCircleFill style={{fontSize: ".8rem", color: "orange"}} /></td>
						</tr>
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