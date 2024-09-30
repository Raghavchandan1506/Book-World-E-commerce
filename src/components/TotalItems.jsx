import React from 'react';
import { useProductContext } from '../context/Productcontext';

const TotalItems = () => {
    const { products } = useProductContext();
  
    return (
        <div className='text-center text-gray-500 mt-5'>
            <p className='text-lg md:text-xl font-mono'>
                {products.length} <span className='font-serif text-md md:text-lg'>Books Listed</span>
            </p>
            <hr className='my-2 border-gray-300' />
        </div>
    );
}

export default TotalItems;
