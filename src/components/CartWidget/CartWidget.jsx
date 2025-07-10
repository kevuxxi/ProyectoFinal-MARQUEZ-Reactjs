import carrito from '../../assets/carrito.png';
import './CartWidget.css';


const CartWidget = () => {
    return (
        <div className="cart-widget">
            <img src={carrito} alt="carrito" className='carrito' />
            <p className='cart-count'>7</p>
        </div>
    )
}

export default CartWidget