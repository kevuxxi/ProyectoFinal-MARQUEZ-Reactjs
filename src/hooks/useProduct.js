import { useState, useEffect } from "react"
import { doc, getDoc } from "firebase/firestore";
import db from '../db/firebase.js'

const useProduct = (id) => {
    const [product, setproduct] = useState({});
    const [loading, setloanding] = useState(true);

    const getproduct = async () => {
        try {
            const docref = doc(db, 'products', id);
            const datadb = await getDoc(docref);
            const data = { id: datadb.id, ...datadb.data() }

            setproduct(data)
            setloanding(false)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getproduct();
    }, [])

    return { product, loading };
};

export default useProduct;
