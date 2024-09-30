import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = ({ id, name, image, price, category, company }) => {
  return (
    <NavLink to={`/SingleProducts/${id}`}>
      <div className='flex flex-col items-center text-center justify-center font-serif mt-10 hover:drop-shadow-2xl p-4 md:p-6 lg:p-10'>
        <figure>
          <img
            src={image[0]}
            alt={name}
            className='w-44 h-64 object-cover rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105'
          />
        </figure>

        <div className='mt-4 text-center hover:text-blue-700'>
          <h3 className='text-base md:text-lg lg:text-xl'>{name}</h3>
          <p className='font-mono text-sm md:text-base'>Rs {price}</p>
        </div>
      </div>
    </NavLink>
  );
}

export default Product;
