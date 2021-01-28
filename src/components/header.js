import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand bg-primary">
            <ul className="navbar-nav mr-auto">
                <li className="navbar-nav mr-auto">
                    <NavLink exact to="/" className="nav-link" activeClassName="active">
                        Products
                    </NavLink>
                </li>
                <li className="navbar-nav mr-auto li nav-item">
                    <NavLink to="/cart" className="nav-link" activeClassName="active">
                        Cart
                    </NavLink>
                </li>
                <li className="navbar-nav mr-auto li nav-item">
                    <NavLink to="/add-product" className="nav-link" activaClassName="active">
                        Add Product
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Header