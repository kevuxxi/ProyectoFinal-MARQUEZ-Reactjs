import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import useProduct from "../../hooks/useProduct";
import Loading from "../Loading/Loading";


const ItemDetailContainer = () => {
    const { id } = useParams();
    const { product, loading } = useProduct(id);
    return (
        <div className="itemlistcontainer">
            {
                loading ? <Loading /> : <ItemDetail product={product} />
            }
        </div>
    )
}

export default ItemDetailContainer