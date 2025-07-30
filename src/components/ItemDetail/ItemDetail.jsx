import './ItemDetail.css';
import { useContext, useState } from 'react';
import { CartContext } from "../../context/CartContext";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


const ItemDetail = ({ product = {} }) => {
    const [gotocar, setgotocar] = useState(false)
    const { addProductInCart } = useContext(CartContext);

    const addProduct = (quantity) => {
        const productCart = { ...product, quantity };
        addProductInCart(productCart);
        setgotocar(true)
    }

    return (
        <div className="item-detail">
            <img src={product.image} alt={product.name} />
            <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p className="price">Precio: ${product.price}</p>
                <p>Stock: {product.stock} unidades</p>
                <p>Categoría: {product.category}</p>
                {

                }
                {gotocar ? <Link to={"/cart"} className='gotocarcontainer'><button className='gotocar'>Ir al carrito</button></Link> : <ItemCount stock={product.stock} addProduct={addProduct} />}
            </div>
        </div>
    )
}

export default ItemDetail