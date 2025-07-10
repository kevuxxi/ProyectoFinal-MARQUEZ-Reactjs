import './ItemDetail.css';

const ItemDetail = ({ product = {} }) => {
    return (
        <div className="item-detail">
            <img src={product.image} alt={product.name} />
            <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p className="price">Precio: ${product.price}</p>
                <p>Stock: {product.stock} unidades</p>
                <p>Categoría: {product.category}</p>
                <button onClick={() => alert(`¡'${product.name}' añadido al carrito!`)}>
                    Añadir al Carrito
                </button>
            </div>
        </div>
    )
}

export default ItemDetail