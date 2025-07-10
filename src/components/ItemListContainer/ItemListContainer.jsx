import useProducts from "../../hooks/useProducts.js"
import { ItemListWithSearch, ItemList } from "../ItemList/ItemList.jsx";
import "./itemlistcontainer.css";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const { category } = useParams();
    const { products, loading } = useProducts(category);

    return (
        <div className="itemlistcontainer">
            {
                loading ? <Loading /> : <ItemList products={products} />
            }
        </div>
    )
}

export default ItemListContainer;