import useListaVentas from '../../hooks/useListaVentas'
import Venta from "./venta"

const ListaVentas = () => {
    
    const { ventas } = useListaVentas()    
    
    return (
        <table>
            <thead className='header'>
                <tr>
                    <td>Fecha</td>
                    <td>Hora</td>
                    <td>Monto</td>
                    <td>Cantidad de productos</td>
                    <td>Detalles</td>
                </tr>
            </thead>
            <tbody>
                {ventas && ventas.map(venta => {
                    return(
                        <Venta key={venta[0]} venta={venta[1]} />
                    )
                })}
                {(!ventas || ventas.length < 1) && 
                    <tr>
                        <td style={{textTransform: "none"}}>No hay ventas registradas</td>
                    </tr>
                }
            </tbody>
        </table>
    )
}
    
export default ListaVentas