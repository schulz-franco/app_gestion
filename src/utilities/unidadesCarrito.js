export const unidadesCarrito = ()=> {
    let unidades = []
    const lista = document.querySelector("#root > div.main-container > div.carrito-container > div.lista").childNodes
    lista.forEach(producto => {
        unidades.push(producto.lastChild.previousSibling.previousSibling.lastChild.previousSibling.value)
    })
    return unidades
}