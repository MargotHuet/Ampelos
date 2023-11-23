// import { Link } from "react-router-dom";
// @material-ui/core components
//            <img className="logo" src={logo} alt="logo Ampelos"></img>

import "./navbar.css"
import { Link } from "react-router-dom";
//import logo from "./images/logo.png";

const Navbar = () => {
    return (
        <div className="container">
            <Link to="#" className="link">Accueil</Link>
            <Link to="#" className="link">A propos</Link>
            <Link to="#" className="link">Contact</Link>
        </div>
    )
}

export default Navbar;
