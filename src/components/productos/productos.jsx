import { useContext } from "react"
import { ProductosContext } from "../../context/productosContext"
import Producto from "./producto"

const ListaProductos = () => {

    const { productos } = useContext(ProductosContext)

    if (productos) return (
        <table>
            <thead>
                <tr>
                    <td>Producto</td>
                    <td>Descripción</td>
                    <td>Precio</td>
                    <td>Stock</td>
                    <td>P. Iva</td>
                    <td>Editar</td>
                    <td>Eliminar</td>
                </tr>
            </thead>
            <tbody>
                {productos.map(producto => {
                    return(
                        <Producto key={producto[0]} id={producto[0]} producto={producto[1]} />
                    )
                })}
                {productos.length < 1 && 
                    <tr>
                        <td style={{textTransform: "none"}}>Sin resultados</td>
                    </tr>
                }
            </tbody>
        </table>
    )
}

export default ListaProductos