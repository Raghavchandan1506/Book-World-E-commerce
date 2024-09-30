import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNavigation = ({ title }) => {
  return (
    <div className='text-lg font-serif ml-2 md:ml-4 lg:ml-8'>
      <NavLink to="/" className='text-blue-500 hover:text-blue-700'>
        Home
      </NavLink>
      <span className='mx-2'>/</span>
      <span className='text-gray-600'>{title}</span>
    </div>
  );
}

export default PageNavigation;
