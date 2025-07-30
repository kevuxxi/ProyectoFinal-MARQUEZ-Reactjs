import React, { useState } from 'react'
import { useContext } from 'react';
import { Cartcontex } from '../../contex/cartcontex';
import './Checkout.css';
import FormCheckout from '../FormCheckout/FormCheckout';
import { addDoc, collection } from 'firebase/firestore';
import db from '../../db/firebase';
import { Link } from 'react-router-dom';


const Checkout = () => {
    const { cart, totalPrice } = useContext(Cartcontex);
    const [orderid, setorderid] = useState(null);

    const [dataform, setdataform] = useState({
        fullname: '',
        phone: '',
        email: ''
    });

    const handlechangeinput = (event) => {
        setdataform({ ...dataform, [event.target.name]: event.target.value })
    }

    const sendorder = (event) => {
        event.preventDefault();

        const order = {
            buyer: { ...dataform },
            produts: { ...cart },
            total: totalPrice()
        }


        uploadorder(order)
    }

    const uploadorder = async (order) => {
        try {
            const orderref = collection(db, 'orders');
            const resp = await addDoc(orderref, order);
            setorderid(resp.id);
        } catch (error) {
            console.log('error al subir la orden')
        }
    }

    return (
        <div className='checkout'>
            {
                orderid ? (
                    <div>
                        <h2>Orden Generada</h2>
                        <p>Indentificador de Compra: {orderid} </p>
                        <Link to={'/'}>
                            <button>Seguir Comprando</button>
                        </Link>
                    </div>
                ) :
                    (<FormCheckout handlechangeinput={handlechangeinput} sendorder={sendorder} dataform={dataform} />)
            }
        </div >
    )
}

export default Checkout