import useListaVentas from '../../hooks/useListaVentas'
import Venta from "./venta"

const onChangeInputDateHandler = (ev, setFecha)=> {
    const fecha = ev.target.value
    setFecha(fecha)
}

const calcularMontoTotal = (ventas, fecha)=> {
    if (fecha) {
        let montoTotal = 0
        ventas.map(venta => {
            montoTotal += parseInt(venta[1].monto)
        })    
        return montoTotal
    }
    return null
}

const ListaVentas = () => {
    
    const { ventas, fecha, setFecha } = useListaVentas()    

    return (
        <>
            <div className="consulta">
                <input onChange={(ev)=> onChangeInputDateHandler(ev, setFecha)} type="date" />
            </div>
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
                    {(fecha && ventas.length > 0) && 
                        <tr>
                            <td></td>
                            <td></td>
                            <td style={{fontWeight: "bold"}}>$ {calcularMontoTotal(ventas, fecha)}</td>
                        </tr>
                    }
                    {(!ventas || ventas.length < 1) && 
                        <tr>
                            <td style={{textTransform: "none"}}>No hay ventas registradas</td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}
    
export default ListaVentas