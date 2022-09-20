import { database } from "./firebaseConfig";

export const nuevoProducto = async ({ producto, descripcion, precio, stock, iva })=> {
    database.collection("productos").add({
        producto: producto,
        descripcion: descripcion,
        precio: precio,
        stock: stock,
        iva: iva
    })
}

export const eliminarProducto = async (id) => {
    database.collection("productos").doc(id).delete()
}