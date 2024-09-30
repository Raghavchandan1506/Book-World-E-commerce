import React from 'react'
import { useProductContext } from '../context/Productcontext'
import Product from './Product';

const Feature = () => {
    const { isLoading, featureProducts } = useProductContext();

    if (isLoading) {
        return (
            <div className="text-3xl text-center font-serif text-blue-800 animate-bounce">
                Loading...
            </div>
        );
    }

    return (
        <div className="py-8">
            {/* Header */}
            <div className="text-center mb-6">
                <h1 className="text-lg sm:text-xl md:text-2xl font-serif text-gray-700">CHECK NOW</h1>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-gray-900">
                    OUR FEATURED PRODUCTS
                </h3>
            </div>

            {/* Product Grid */}
            <div className="bg-yellow-50 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 md:px-12 lg:px-20 mx-auto">
                    {featureProducts.map((currElem) => {
                        return <Product key={currElem.id} {...currElem} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Feature;
