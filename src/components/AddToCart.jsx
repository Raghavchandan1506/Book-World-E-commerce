import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import CartAmountToggle from './CartAmountToggle';

const AddToCart = ({product}) => {
    const { addToCart } = useCartContext();
    const { id } = product;
    const [amount, setAmount] = useState(1);

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };
    
    const setIncrease = () => {
        setAmount(amount + 1);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-4 md:max-w-lg lg:max-w-xl">
            <CartAmountToggle 
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
            />

            <NavLink 
                to='/cart' 
                onClick={() => addToCart(id, amount, product)}
                className="w-full sm:w-auto"
            >
                <button 
                    className="rounded-md bg-yellow-500 text-white font-semibold p-2 mt-4 hover:bg-blue-400 transition-colors duration-300 w-full sm:w-auto sm:px-6 sm:py-2 lg:px-8 lg:py-3"
                >
                    Add To Cart
                </button>
            </NavLink>
        </div>
    )
}

export default AddToCart;
