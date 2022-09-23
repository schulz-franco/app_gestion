import React from 'react'
import useListaVentas from '../../hooks/useListaVentas'
import { MdArticle } from "react-icons/md"

const calcularCantidadProductos = venta=> {
    let cantidad = 0
    venta.productos.map(producto => {
        cantidad += parseInt(producto.cantidad)
    })
    return cantidad
}

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
                        <tr key={venta[0]}>
                            <td>{venta[1].fecha}</td>
                            <td>{venta[1].hora}</td>
                            <td>$ {venta[1].monto}</td>
                            <td>{calcularCantidadProductos(venta[1])}</td>
                            <td><MdArticle className='detalles' /></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
    
export default ListaVentas