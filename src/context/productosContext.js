import { useState, useEffect } from "react";
import { createContext } from "react";
import { database } from "../firebase/firebaseConfig";

export const ProductosContext = createContext()

export const ProductosContextProvider = ({ children })=> {

    const [productos, setProductos] = useState(null)

    const value = {productos, setProductos}

    useEffect(()=> {
        const unsub = database.collection("productos").onSnapshot(snap => {
            let collection = []
            snap.forEach(doc => {
                collection.push(doc.data())
            })
            setProductos(collection)
        })
        return () => unsub()
    }, [])

    return (
        <ProductosContext.Provider value={value}>
            {children}
        </ProductosContext.Provider>
    )
}