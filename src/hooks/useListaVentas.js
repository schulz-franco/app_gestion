import { useEffect, useState } from "react"
import { database } from "../firebase/firebaseConfig"
import { listarVentas } from "../firebase/methods"

const useListaVentas = () => {

  const [ventas, setVentas] = useState(null)

  useEffect(()=> {
    listarVentas(database, setVentas)
    return ()=> listarVentas(database, setVentas)
  }, [])

  return {
    ventas
  }
}

export default useListaVentas