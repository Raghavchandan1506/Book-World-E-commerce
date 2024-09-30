import React from 'react';
import { useProductContext } from '../context/Productcontext';
import Product from './Product';

const ProductList = () => {
    const { isLoading, products } = useProductContext();

    if (isLoading) {
        return <div className='text-3xl text-center font-serif text-blue-800 animate-bounce'>Loading...</div>;
    }

    return (
        <div className='mx-4 md:mx-20'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                {products.map((currElem) => {
                    return <Product key={currElem.id} {...currElem} />;
                })}
            </div>
        </div>
    );
}

export default ProductList;
