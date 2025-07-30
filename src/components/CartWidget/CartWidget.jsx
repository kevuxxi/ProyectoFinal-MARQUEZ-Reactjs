import { PiShoppingCartFill } from "react-icons/pi";
import './CartWidget.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    return (
        <Link to="/cart" className='cart-widget'>
            <PiShoppingCartFill size={35} />
            <p className='cart-count'>{totalQuantity()}</p>
        </Link>
    )
}

export default CartWidget