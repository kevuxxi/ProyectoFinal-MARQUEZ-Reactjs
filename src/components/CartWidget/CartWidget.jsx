import carrito from '../../assets/carrito.png';
import './CartWidget.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    return (
        <Link to="/cart" className='cart-widget'>
            <img src={carrito} alt="carrito" className='carrito' />
            <p className='cart-count'>{totalQuantity()}</p>
        </Link>
    )
}

export default CartWidget