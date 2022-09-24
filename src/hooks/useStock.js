import { useEffect, useState, useContext } from "react"
import { ProductosContext } from "../context/productosContext"

const useStock = () => {
    const { productos } = useContext(ProductosContext)
	
	const [stockBajo, setStockBajo] = useState([])
	const [stockMedio, setStockMedio] = useState([])

	useEffect(()=> {
		let listaStockBajo = []
		let listaStockMedio = []
		productos && productos.map(producto => {
			if (producto[1].stock <= 5) {
				listaStockBajo.push([producto[0], producto[1]])
			} else if (producto[1].stock > 5 && producto[1].stock <= 15) {
				listaStockMedio.push([producto[0], producto[1]])
			}
		})
		setStockBajo(listaStockBajo)
		setStockMedio(listaStockMedio)
	}, [productos])

    return {
        stockBajo,
        stockMedio
    }
}

export default useStock