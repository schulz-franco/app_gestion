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
    return database.collection("productos").onSnapshot(snap => {
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

export const descontarStocks = async (database, carrito)=> {
    let unidades = unidadesCarrito()
    carrito.map((producto, index) => {
        return database.collection("productos").doc(producto[0]).update({
            stock: parseInt(producto[1].stock) - parseInt(unidades[index])
        })
    })
}