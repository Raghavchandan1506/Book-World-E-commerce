import React from 'react';
import { ImBooks } from "react-icons/im";
import { FaShippingFast } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import { SiAudiobookshelf } from "react-icons/si";

const Service = () => {
  return (
    <div className='mt-24 mb-28 font-serif font-bold'>
      <div className='flex flex-col md:flex-row justify-between items-center mx-4 md:mx-52 gap-8'>
        <div className='text-center rounded-3xl p-8 bg-gray-100 hover:drop-shadow-2xl flex flex-col items-center'>
          <ImBooks className='text-2xl text-blue-600 bg-white w-10 h-10 rounded-full p-1 mb-2' />
          <h1>Extensive Book Collection</h1>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='rounded-3xl p-8 bg-gray-100 hover:drop-shadow-2xl flex flex-col items-center'>
            <MdEmojiEvents className='text-2xl text-blue-600 bg-white w-10 h-10 rounded-full p-1 mb-2' />
            <h1>Exclusive Author Interviews & Events</h1>
          </div>
          <div className='rounded-3xl p-8 bg-gray-100 hover:drop-shadow-2xl flex flex-col items-center'>
            <SiAudiobookshelf className='text-2xl text-blue-600 bg-white w-10 h-10 rounded-full p-1 mb-2' />
            <h1>E-books and Audiobooks Available</h1>
          </div>
        </div>
        <div className='text-center rounded-3xl p-8 bg-gray-100 hover:drop-shadow-2xl flex flex-col items-center'>
          <FaShippingFast className='text-2xl text-blue-600 bg-white w-10 h-10 rounded-full p-1 mb-2' />
          <h1>Fast & Free Shipping</h1>
        </div>
      </div>
    </div>
  )
}

export default Service;
