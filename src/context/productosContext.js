import { createContext } from "react";
import useProductosContext from "../hooks/useProductosContext";

export const ProductosContext = createContext()

export const ProductosContextProvider = ({ children })=> {

    const value = useProductosContext()

    return (
        <ProductosContext.Provider value={value}>
            {children}
        </ProductosContext.Provider>
    )
}