import { createContext, useState } from "react"

const CartContext = createContext();


const Cartprovider = ({ children }) => {
    const [cart, setcart] = useState([]);

    const addProductInCart = (product) => {
        const productInCart = cart.find((p) => p.id === product.id);

        if (productInCart) {
            const updatedCart = cart.map((p) =>
                p.id === product.id ? { ...p, quantity: p.quantity + product.quantity } : p
            );
            setcart(updatedCart);
        } else {
            setcart([...cart, product]);
        }
    };

    const totalQuantity = () => {
        const total = cart.reduce((total, product) => total + product.quantity, 0);
        return total;
    };

    const totalPrice = () => {
        const total = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
        return total;
    }

    const deleteProductById = (id) => {
        const productsFilter = cart.filter((product) => product.id !== id);
        setcart(productsFilter);
    }

    const deleteAllProducts = () => {
        return setcart([]);
    }



    return (
        <CartContext.Provider value={{ cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, deleteAllProducts }}>
            {children}
        </CartContext.Provider >)
}


export { CartContext, Cartprovider }