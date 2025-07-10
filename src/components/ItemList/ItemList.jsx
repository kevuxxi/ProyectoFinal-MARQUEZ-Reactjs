import Item from "../Item/Item";
import hocFilterProducts from "../../hoc/hocFilterProducts";
import './ItemList.css';


const ItemList = ({ products = [] }) => {
    return (
        <ul className="item-list">

            {
                products.map((product) => (
                    <Item product={product} key={product.id} />
                ))
            }
        </ul>
    )
}

const ItemListWithSearch = hocFilterProducts(ItemList);

export { ItemList, ItemListWithSearch };

