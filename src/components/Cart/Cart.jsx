import { useContext } from "react"
import { Cartcontex } from "../../contex/cartcontex";
import './Cart.css';
import { Link, Links } from "react-router-dom";
const Cart = () => {
    const { cart, totalPrice, deleteProductById, deleteAllProducts } = useContext(Cartcontex);

    return (
        <div className="cart">
            <h2>Carrito de compras</h2>
            {
                cart.map((productCart) => (
                    <div className="cart-item">
                        <img src={productCart.image} alt="" width={200} />
                        <p>{productCart.name}</p>
                        <p>c/u: ${productCart.price}</p>
                        <p>cantidad: {productCart.quantity}</p>
                        <p>precio parcial: ${productCart.price * productCart.quantity}</p>

                        <button onClick={() => deleteProductById(productCart.id)} >Eliminar</button>

                    </div>
                ))
            }

            <p>Precio total: ${totalPrice()}</p>
            <div className="btns-container">
                <Link to='/checkout'> <button className="cart-buy">Continuar con mi compra</button></Link>
                <button onClick={deleteAllProducts} className="cart-empty">
                    Vaciar carrito
                </button>
            </div>
        </div>
    )
}

export default Cart