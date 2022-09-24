import { useState, useEffect } from "react";
import { database } from "../firebase/firebaseConfig";
import { listarProductos } from "../firebase/methods";

const useProductosContext = () => {
    const [productos, setProductos] = useState(null)
    const [carrito, setCarrito] = useState([])
    const [search, setSearch] = useState("")
    const [montoTotal, setMontoTotal] = useState(0)

    useEffect(()=> {
        if (search === "") {
            listarProductos(database, setProductos)
            return () => listarProductos(database, setProductos)
        } else {
            listarProductos(database, setProductos, search)
            return () => listarProductos(database, setProductos, search)
        }
    }, [search])

    return {
        productos,
        setProductos,
        carrito,
        setCarrito,
        search,
        setSearch,
        montoTotal,
        setMontoTotal
    }
}

export default useProductosContext