import React from 'react';
import ProductList from './components/ProductList';
import TotalItems from './components/TotalItems';

const Products = () => {
  return (
    <div className='flex flex-col bg-yellow-50 p-4'>
      <div className='flex justify-center items-center mb-4'>
        <TotalItems />
      </div>
      <div className='flex flex-wrap justify-center'>
        <ProductList />
      </div>
    </div>
  );
};

export default Products;
