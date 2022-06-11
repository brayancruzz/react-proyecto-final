import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="Navbar-container">
            <div className="logo-container">
                <h3 className="Logo">
                    Mi Ecommerce
                </h3>
            </div>
            <nav>
                <ul className="Nav-list">
                    <li>
                        Inicio
                    </li>
                    <li>
                        Carrito
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar