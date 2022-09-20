import { Link } from "react-router-dom"
import { FaDatabase } from "react-icons/fa"

const Menu = ()=> {
    return(
      <div className="menu-container">
      <div className="top"></div>
      <div className="menu left">
        <h3>MENU</h3>
        <Link to="/" className="current">
          <FaDatabase className="icon" />
          Productos
        </Link>
      </div>
    </div>
    )
}

export default Menu