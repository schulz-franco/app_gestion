import { Link } from "react-router-dom"
import { FaDatabase } from "react-icons/fa"

const Menu = ()=> {
    return(
      <div className="menu left">
        <h3>MENU</h3>
        <Link to="/" className="current">
          <FaDatabase className="icon" />
          Productos
        </Link>
      </div>
    )
}

export default Menu