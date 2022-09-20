import { useState, useEffect, createContext } from "react";
import { database } from "../firebase/firebaseConfig";

export const ProductosContext = createContext()

export const ProductosContextProvider = ({ children })=> {

    const [productos, setProductos] = useState(null)
    const [search, setSearch] = useState("")

    const value = {productos, setProductos, search, setSearch}

    useEffect(()=> {
        if (search === "") {
            const unsub = database.collection("productos").onSnapshot(snap => {
                let collection = []
                snap.forEach(doc => {
                    collection.push([doc.id, doc.data()])
                })
                setProductos(collection)
            })
            return () => unsub()
        } else {
            const unsub = database.collection("productos").where("producto", "==", search).onSnapshot(snap => {
                let collection = []
                snap.forEach(doc => {
                    collection.push([doc.id, doc.data()])
                })
                setProductos(collection)
            })
            return () => unsub()
        }
    }, [search])

    return (
        <ProductosContext.Provider value={value}>
            {children}
        </ProductosContext.Provider>
    )
}