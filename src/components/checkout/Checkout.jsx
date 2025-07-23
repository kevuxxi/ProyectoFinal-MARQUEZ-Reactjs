import React, { useState } from 'react'
import { useContext } from 'react';
import { Cartcontex } from '../../contex/cartcontex';
const Checkout = () => {
    const { cart, totalPrice } = useContext(Cartcontex);

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

        console.log(order)
    }
    
    return (
        <div>
            <form onSubmit={sendorder}>
                <input type="text" name="fullname" value={dataform.fullname} onChange={handlechangeinput} />
                <input type="number" name="phone" value={dataform.phone} onChange={handlechangeinput} />
                <input type="email" name="email" value={dataform.email} onChange={handlechangeinput} />
                <input type="submit" value="Enviar orden" />
            </form>
        </div >
    )
}

export default Checkout