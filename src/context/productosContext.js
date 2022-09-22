import { useState, useEffect, createContext } from "react";
import { database } from "../firebase/firebaseConfig";
import { listarProductos } from "../firebase/methods";

export const ProductosContext = createContext()

export const ProductosContextProvider = ({ children })=> {

    const [productos, setProductos] = useState(null)
    const [carrito, setCarrito] = useState([])
    const [search, setSearch] = useState("")
    const [montoTotal, setMontoTotal] = useState(0)

    const value = {productos, setProductos, search, setSearch, carrito, setCarrito, montoTotal, setMontoTotal}

    useEffect(()=> {
        if (search === "") {
            listarProductos(database, setProductos)
            return () => listarProductos(database, setProductos)
        } else {
            listarProductos(database, setProductos, search)
            return () => listarProductos(database, setProductos, search)
        }
    }, [search])

    return (
        <ProductosContext.Provider value={value}>
            {children}
        </ProductosContext.Provider>
    )
}