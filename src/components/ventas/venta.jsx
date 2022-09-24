import { MdArticle } from "react-icons/md"
import { useState } from 'react'

const calcularCantidadProductos = venta=> {
    let cantidad = 0
    venta.productos.map(producto => {
        cantidad += parseInt(producto.cantidad)
    })
    return cantidad
}

const Venta = ({ venta })=> {

    const [modal, setModal] = useState(false)

    return(
        <tr>
            <td>{venta.fecha}</td>
            <td>{venta.hora}</td>
            <td>$ {venta.monto}</td>
            <td>{calcularCantidadProductos(venta)}</td>
            <td style={{verticalAlign: "middle"}}><MdArticle onClick={()=> setModal(true)} className='detalles' /></td>
            {modal && 
                <div className="modal-container">
                    <table>
                        <thead>
                            <tr>
                                <td>Producto</td>
                                <td>Precio</td>
                                <td>Iva</td>
                                <td>Cantidad</td>
                            </tr>
                        </thead>
                        <tbody>
                            {venta.productos.map(producto => {
                                return(
                                    <tr>
                                        <td>{producto.producto.producto}</td>
                                        <td>$ {producto.producto.precio}</td>
                                        <td>{producto.producto.iva}%</td>
                                        <td>{producto.cantidad}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <button onClick={()=> setModal(false)}>Cerrar</button>
                </div>
            }
        </tr>
    )
}

export default Venta