import { Link } from "react-router-dom"
import { FaDatabase } from "react-icons/fa"
import { MdSell, MdAttachMoney } from "react-icons/md"
import { useContext } from "react"
import { ProductosContext } from "../context/productosContext"

const onClickHandler = (ev, setSearch)=> {
	ev.target.parentNode.childNodes.forEach(node => {
		node.classList.remove("current")
	})
	ev.target.classList.add("current")
	setSearch(null)
}

const Menu = ()=> {

	const { setSearch } = useContext(ProductosContext)

		return(
			<div className="menu-container">
			<div className="top"></div>
			<div className="menu left">
				<h3>MENU</h3>
				<Link onClick={(ev)=> onClickHandler(ev, setSearch)} to="/productos">
					<FaDatabase className="icon" />
					Productos
				</Link>
				<Link onClick={(ev)=> onClickHandler(ev, setSearch)} to="/carrito">
					<MdSell className="icon" />
					Carrito
				</Link>
				<Link onClick={(ev)=> onClickHandler(ev, setSearch)} to="/ventas">
					<MdAttachMoney className="icon" />
					Ventas
				</Link>
			</div>
		</div>
		)
}

export default Menu