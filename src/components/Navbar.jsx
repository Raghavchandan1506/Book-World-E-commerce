import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { useCartContext } from '../context/CartContext';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { total_item } = useCartContext();
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative w-full flex justify-end gap-5">
      {/* Button for mobile view */}
      

      {/* Sliding Navbar for mobile view */}
      <div
        className={`w-36 pb-14 fixed top-0 right-0 bg-gradient-to-r from-yellow-100 to-blue-200 z-50 transform ${menuOpen ? 'translate-y-[0]' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-3xl">
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center  gap-8 text-red-900 font-serif text-lg">
          <li className="hover:text-xl hover:text-blue-700">
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li className="hover:text-xl hover:text-blue-700">
            <NavLink to="/products" onClick={toggleMenu}>
              Library
            </NavLink>
          </li>
          <li className="hover:text-xl hover:text-blue-700">
            <NavLink to="/About" onClick={toggleMenu}>
              About Us
            </NavLink>
          </li>
          <li className="hover:text-xl hover:text-blue-700">
            <NavLink to="/Contact" onClick={toggleMenu}>
              Contact Us
            </NavLink>
          </li>
        </ul>

       
      </div>
      <div>
        <ul className="flex justify-end items-center gap-4 md:hidden">
          {/* User Greeting */}
          <li>{isAuthenticated && <h2 className='text-blue-600 font-serif ml-4'>Hi, {user.name}</h2>}</li>

          {/* Log In / Log Out Button */}
          <li>
            {isAuthenticated ? (

              <button
                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              >
                Log Out
              </button>
            ) : (
              <button
                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                onClick={loginWithRedirect}
              >
                Log In
              </button>
            )}
          </li>

          {/* Cart Icon */}
          <li className="relative">
            <NavLink to="/cart" >
              <FiShoppingCart className="text-2xl" />
              <span className="absolute top-0 right-0 w-4 h-4 text-xs text-center text-white bg-orange-700 rounded-full">
                {total_item}
              </span>
            </NavLink>
          </li>

          {/* Profile Icon */}
        </ul>
      </div>
      <div className="flex justify-end items-center  md:hidden">
        <button
          className="text-3xl focus:outline-none "
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
       

      {/* Regular Navbar for larger screens */}
      <div className="hidden md:flex justify-end gap-24 items-center ">
        <ul className="flex justify-center gap-20 text-red-900 font-serif text-lg">
          <li className="hover:text-xl hover:text-blue-700">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-xl hover:text-blue-700">
            <NavLink to="/products">Library</NavLink>
          </li>
          <li className="hover:text-xl hover:text-blue-700">
            <NavLink to="/About">About Us</NavLink>
          </li>
          <li className="hover:text-xl hover:text-blue-700">
            <NavLink to="/Contact">Contact Us</NavLink>
          </li>
        </ul>

        <ul className="flex gap-8 items-center">
          <li>{isAuthenticated && <h2 className='text-blue-600 font-serif'>Hi,  {user.name}</h2>}</li>
          <li>
            {isAuthenticated ? (
              <button
                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              >
                Log Out
              </button>
            ) : (
              <button
                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                onClick={loginWithRedirect}
              >
                Log In
              </button>
            )}
          </li>
          <li className="relative">
            <NavLink to="/cart">
              <FiShoppingCart className="text-2xl" />
              <span className="absolute top-0 right-0 w-4 h-4 text-xs text-center text-white bg-orange-700 rounded-full">
                {total_item}
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
