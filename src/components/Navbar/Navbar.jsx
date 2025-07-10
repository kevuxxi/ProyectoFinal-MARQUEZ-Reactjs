import { Link, Links } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css';
import logo from '../../assets/Gemini_Generated_Image_rj4baqrj4baqrj4b (1).png';


const Navbar = () => {
    return (
        <div className="navbar">
            <Link to={'/'}> <img src={logo} alt="Mochi House Logo" className="logo" /></Link>

            <ul className="contenedor-links">
                <Link to={`/category/Alimentos`}> <li className="nav-links">Alimentos</li></Link>
                <Link to={`/category/Correas`}> <li className="nav-links">Correas</li></Link>
                <Link to={`/category/Camas`}><li className="nav-links">Camas</li></Link>
                <Link to={`/category/Otros`}><li className="nav-links">Otros</li></Link>
            </ul>

            <CartWidget />
        </div>
    )
}

export default Navbar;