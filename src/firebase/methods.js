import { database } from "./firebaseConfig";
import { unidadesCarrito } from "../utilities/unidadesCarrito"

export const setProducto = async ({ producto, descripcion, precio, stock, iva }, id)=> {
    if (!id) {
        database.collection("productos").add({
            producto: producto.toLowerCase(),
            descripcion: descripcion.toLowerCase(),
            precio: precio,
            stock: stock,
            iva: iva
        })
    } else {
        database.collection("productos").doc(id).update({
            producto: producto.toLowerCase(),
            descripcion: descripcion.toLowerCase(),
            precio: precio,
            stock: stock,
            iva: iva
        })
    }
}

export const eliminarProducto = async (id) => {
    database.collection("productos").doc(id).delete()
}

export const listarProductos = async (database, setProductos, search)=> {
    database.collection("productos").onSnapshot(snap => {
        let collection = []
        if (!search) {
            snap.forEach(doc => {
                collection.push([doc.id, doc.data()])
            })
        } else {
            snap.forEach(doc => {
                if (doc.data().producto.includes(search) || doc.data().descripcion.includes(search)) {
                    collection.push([doc.id, doc.data()])
                }
            })
        }
        setProductos(collection)
    })
}


export const cerrarVenta = async (database, carrito, montoTotal)=> {	
    const objetoDate = new Date();
    let fechaActual = objetoDate.getFullYear() + "-" + (objetoDate.getMonth() + 1).toString().padStart(2, '0') + '-' + objetoDate.getDate().toString().padStart(2, '0')
    let horaActual = objetoDate.getHours().toString().padStart(2, '0') + ':' + objetoDate.getMinutes().toString().padStart(2, '0'); 
    let items = []
    let unidades = unidadesCarrito()
    carrito.map((producto, index) => {
        items.push({
            producto: {
                producto: producto[1].producto,
                descripcion: producto[1].descripcion,
                precio: producto[1].precio,
                iva: producto[1].iva
            },
            cantidad: unidades[index]
        })
        database.collection("productos").doc(producto[0]).update({
            stock: parseInt(producto[1].stock) - parseInt(unidades[index])
        })
    })
    database.collection("ventas").add({
        productos: items,
        fecha: fechaActual,
        hora: horaActual,
        monto: montoTotal
    })
}

export const listarVentas = async (database, setVentas)=> {
    database.collection("ventas").onSnapshot(snap => {
        let collection = []
        snap.forEach(doc => {
            collection.push([doc.id, doc.data()])
        })
        setVentas(collection)
    })
}