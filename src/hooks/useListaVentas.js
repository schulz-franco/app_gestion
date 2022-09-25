import { useEffect, useState } from "react"
import { database } from "../firebase/firebaseConfig"
import { listarVentas } from "../firebase/methods"

const useListaVentas = () => {

	const [ventas, setVentas] = useState(null)
	const [fecha, setFecha] = useState(null)

	useEffect(()=> {
		listarVentas(database, setVentas, fecha)
		return ()=> listarVentas(database, setVentas, fecha)
	}, [fecha])

	return {
		ventas,
		setVentas,
		fecha,
		setFecha
	}
}

export default useListaVentas