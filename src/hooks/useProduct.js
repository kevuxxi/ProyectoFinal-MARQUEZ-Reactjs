import { useState, useEffect } from "react"
import { getsingleproduct } from "../data/products.js";

const useProduct = (id) => {
    const [product, setproduct] = useState({});
    const [loading, setloanding] = useState(true);

    useEffect(() => {
        getsingleproduct(id)
            .then((data) => {
                setproduct(data);
            })
            .finally(() => {
                setloanding(false);
            })

    }, [])

    return { product, loading };
};

export default useProduct;
