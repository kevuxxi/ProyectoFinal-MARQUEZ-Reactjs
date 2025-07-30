import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css';
import logo from '../../assets/Gemini_Generated_Image_rj4baqrj4baqrj4b (1).png';
import { useState } from "react";

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <div className="navbar">
      <Link to={'/'}>
        <img src={logo} alt="Mochi House Logo" className="logo" />
      </Link>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`contenedor-links ${menuAbierto ? 'abierto' : ''}`}>
        <Link to={`/category/Alimentos`}><li className="nav-links">Alimentos</li></Link>
        <Link to={`/category/Correas`}><li className="nav-links">Correas</li></Link>
        <Link to={`/category/Camas`}><li className="nav-links">Camas</li></Link>
        <Link to={`/category/Otros`}><li className="nav-links">Otros</li></Link>
      </ul>

      <CartWidget />
    </div>
  );
};

export default Navbar;
