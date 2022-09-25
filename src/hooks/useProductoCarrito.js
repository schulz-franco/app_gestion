import { useState, useEffect } from "react"

const useProductoCarrito = (setMontoTotal, carrito) => {
    const [unidades, setUnidades] = useState(1)

	useEffect(()=> {
		if (carrito.length > 0) {
			const listaCarrito = document.querySelector("#root > div.main-container > div.carrito-container > div.lista").childNodes
			let precioTotal = 0
			listaCarrito.forEach(producto => {
				try {
					precioTotal += parseInt(producto.lastChild.previousSibling.lastChild.textContent)
				} catch {}
			})
			setMontoTotal(precioTotal)
		}
	}, [carrito, unidades])

    return {
        unidades,
        setUnidades
    }
}

export default useProductoCarrito