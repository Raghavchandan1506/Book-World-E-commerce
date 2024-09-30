import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-yellow-100 to-blue-200 sticky top-0 z-50 shadow-lg">
      <div className="flex justify-between items-center p-2 md:pr-4 ">
        {/* Logo */}
        <NavLink to="/">
          <img 
            src='/assets/logo.png' 
            alt='Logo' 
            className='w-16 sm:w-16 md:w-16 lg:w-16 lg:ml-5 drop-shadow-2xl'
          />
        </NavLink>
        
        {/* Navbar */}
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
