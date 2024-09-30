import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from './context/Productcontext';
import PageNavigation from './components/PageNavigation';
import MyImage from './components/MyImage';
import { FaShippingFast, FaBookReader } from "react-icons/fa";
import { MdGppGood } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import AddToCart from './components/AddToCart';

const API = "https://raghavchandan1506.github.io/BookWorldAPI/db.json";

const SingleProducts = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  const { id } = useParams();
  const { name = '', price = '', description = '', image = [], dealprice = '', company = '' } = singleProduct || {};


  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`,id);
  }, [id]);

  if (isSingleLoading) {
    return <div className='text-3xl text-center font-serif text-blue-800 animate-bounce items-center mt-5'>Loading...</div>;
  }

  return (
    <div className='p-4 md:p-8'>
      <PageNavigation title={name} />
      <div className='flex flex-col md:flex-row items-center justify-center md:justify-center m-5 gap-16'>
        <div className='w-72 md:w-96'>
          <MyImage imgs={image} />
        </div>
        <div className='font-serif flex flex-col gap-2 w-full md:w-1/2'>
          <h1 className='text-3xl md:text-5xl'>{name}</h1>
          <p className='font-bold'>MRP : <del>{price}</del></p>
          <p className='text-blue-700'>Deal of the Day : {dealprice}</p>
          <p>{description}</p>
          <hr />
          <div className='flex flex-wrap justify-between items-center text-center'>
            <div className='flex flex-col items-center'>
              <FaShippingFast className='rounded-full bg-gray-200 text-3xl p-1' />
              <p>Free Delivery</p>
            </div>
            <div className='flex flex-col items-center'>
              <FaBookReader className='rounded-full bg-gray-200 text-3xl p-1' />
              <p>Paperback</p>
            </div>
            <div className='flex flex-col items-center'>
              <MdGppGood className='rounded-full bg-gray-200 text-3xl p-1' />
              <p>Book World Selected</p>
            </div>
            <div className='flex flex-col items-center'>
              <TiTick className='rounded-full bg-gray-200 text-3xl p-1' />
              <p>Original</p>
            </div>
          </div>
          <hr />
          <p>Available: <span className='font-bold'>In Stock</span></p>
          <p>Author: <span className='font-bold'>{company}</span></p>
          <hr />
          <AddToCart product={singleProduct} />
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
