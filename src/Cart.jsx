import React from 'react';
import { useCartContext } from './context/CartContext';
import CartItem from './components/CartItem';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  const { user, isAuthenticated } = useAuth0();

  if (cart.length === 0) {
    return (
      <div className='flex flex-col gap-10 items-center font-serif text-center m-52'>
        <h1 className=' text-5xl text-gray-500'>NO ITEM IN CART</h1>
        <NavLink to="/products">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-blue-500">
            Continue Shopping
          </button>
        </NavLink>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8 px-4 md:px-20">
      <div>
        {isAuthenticated && (
          <div className="flex justify-start gap-4">
            <img src={user.profile} alt={user.name} className="rounded-full w-24 h-24 mb-2" />
            <h2 className="text-lg font-semibold">{user.name}</h2>
          </div>
        )}
      </div>

      {/* Cart Header */}
      <div className="hidden lg:flex justify-between text-gray-600 font-bold py-3 border-b-2">
        <div className="w-1/3">Item</div>
        <div className="w-1/6 text-center">Price</div>
        <div className="w-1/6 text-center">Quantity</div>
        <div className="w-1/6 text-center">Subtotal</div>
        <div className="w-1/12 text-center">Remove</div>
      </div>

      {/* Cart Items */}
      <div className="mt-4 space-y-4">
        {cart.map((curEle) => (
          <CartItem key={curEle.id} {...curEle} />
        ))}
      </div>

      {/* Buttons for Continue Shopping and Clear Cart */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-10 mb-10">
        {/* Continue Shopping Button */}
        <NavLink to="/products" className="w-full lg:w-auto mb-4 lg:mb-0">
          <button className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-blue-500 w-full">
            Continue Shopping
          </button>
        </NavLink>

        {/* Clear Cart Button */}
        <button
          onClick={clearCart}
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 w-full lg:w-auto">
          Clear Cart
        </button>
      </div>

      {/* Cart total */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full lg:w-1/3 mx-auto mt-10">
        <div className="flex justify-between items-center text-lg font-semibold">
          <p>Subtotal:</p>
          <p>₹{total_price}</p>
        </div>
        <div className="flex justify-between items-center text-lg font-semibold mt-4">
          <p>Shipping Fee:</p>
          <p>₹{shipping_fee}</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between items-center text-xl font-bold">
          <p>Grand Total:</p>
          <p>₹{total_price + shipping_fee}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
