import React from 'react';
import CartAmountToggle from './CartAmountToggle';
import { FaTrash } from "react-icons/fa";
import { useCartContext } from '../context/CartContext';

const CartItem = ({ id, name, image, price, amount }) => {
  
    const { removeItem, setDecrease, setIncrease } = useCartContext();

    return (
      <div className="flex flex-col sm:flex-row items-center justify-between py-4 border-b border-gray-300 gap-4 sm:gap-6 md:gap-8 w-full">
        {/* Item Image and Name */}
        <div className="flex items-center justify-start gap-4 w-full sm:w-1/3">
          <img 
            src={image} 
            alt={name} 
            className="w-20 h-20 object-cover sm:w-24 sm:h-24 md:w-28 md:h-28" 
          />
          <div className="font-semibold text-gray-700 text-sm sm:text-base md:text-lg">{name}</div>
        </div>

        {/* Price */}
        <div className="text-gray-700 font-medium w-full sm:w-1/6 text-center text-sm sm:text-base md:text-lg">
          ₹{price}
        </div>

        {/* Quantity Selector */}
        <div className="w-full sm:w-1/6 flex justify-center">
          <CartAmountToggle
            amount={amount}
            setDecrease={() => setDecrease(id)}
            setIncrease={() => setIncrease(id)}
          />
        </div>

        {/* Subtotal */}
        <div className="text-gray-700 font-medium w-full sm:w-1/6 text-center text-sm sm:text-base md:text-lg">
          ₹{price * amount}
        </div>

        {/* Remove Icon */}
        <div className="w-full sm:w-1/12 flex justify-center">
          <button className="text-red-500">
            <FaTrash size={20} onClick={() => removeItem(id)} />
          </button>
        </div>
      </div>
    );
};

export default CartItem;
