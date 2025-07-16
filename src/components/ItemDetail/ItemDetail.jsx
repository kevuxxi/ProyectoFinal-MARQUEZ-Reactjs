import './ItemDetail.css';
import { useContext } from 'react';
import { Cartcontex } from '../../contex/cartcontex';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ product = {} }) => {

    const { addProductInCart } = useContext(Cartcontex);

    const addProduct = (quantity) => {
        const productCart = { ...product, quantity };
        addProductInCart(productCart);
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
                <ItemCount stock={product.stock} addProduct={addProduct} />
            </div>
        </div>
    )
}

export default ItemDetail