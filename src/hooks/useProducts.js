import { useState, useEffect } from "react";
import { getProducts } from "../data/Products";


const useProducts = (category) => {
    const [products, setproducts] = useState([]);
    const [loading, setloanding] = useState(true);

    useEffect(() => {
        setloanding(true);

        getProducts()
            .then((data) => {
                if (category) {
                    const produtcsfilter = data.filter((product) => (product.category === category));
                    setproducts(produtcsfilter);
                } else {
                    setproducts(data);
                }
            })
            .finally(() => {
                setloanding(false);
            })

    }, [category])




    return { products, loading }
}

export default useProducts;