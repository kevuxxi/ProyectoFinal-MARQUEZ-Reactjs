import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from '../db/firebase.js'

const useProducts = (category) => {
    const [products, setproducts] = useState([]);
    const [loading, setloanding] = useState(true);

    const getProducts = async () => {
        try {
            const datadb = await getDocs(collection(db, 'products'));
            const data = datadb.docs.map((productdb) => {
                return { id: productdb.id, ...productdb.data() }
            })

            setproducts(data);
            setloanding(false);
        } catch (error) {
            console.log(error)
        }
    }

    const getProductsbycategory = async () => {
        try {
            const q = query(collection(db, 'products'), where('category', '==', category));
            const datadb = await getDocs(q)

            const data = datadb.docs.map((productdb) => {
                return { id: productdb.id, ...productdb.data() }
            })

            setproducts(data)
            setloanding(false)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        if (category) { getProductsbycategory(); }
        else {
            getProducts();
        }
    }, [category])




    return { products, loading }
}

export default useProducts;