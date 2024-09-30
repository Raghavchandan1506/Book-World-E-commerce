import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    const [sub, setSub] = useState('Subscribe');

    const Subscribe = (e) => {
        e.preventDefault();
        setSub('Subscribed Successfully');
    };

    return (
        <div className='bg-gradient-to-r from-yellow-100 to-blue-200 rounded-lg font-serif p-6 md:p-10'>
            <div className='flex flex-col md:flex-row justify-between items-center mt-8 mb-6 space-y-8 md:space-y-0'>
                
                {/* Logo and Social Links */}
                <div className='flex flex-col items-center md:items-start gap-5'>
                    <img className='w-32 md:w-40' src="/assets/logo.png" alt="logo" />
                    <p className='text-center md:text-left text-sm md:text-base'>
                        ©2024 All Rights Reserved <br /> THE BOOK WORLD
                    </p>
                    <div className='flex gap-5 text-2xl'>
                        <FaFacebook className='cursor-pointer text-blue-500 hover:text-black transition duration-300' />
                        <FaWhatsapp className='cursor-pointer text-green-500 hover:text-black transition duration-300' />
                        <FaInstagram className='cursor-pointer text-pink-500 hover:text-black transition duration-300' />
                    </div>
                </div>

                {/* Shop Links */}
                <div className='flex flex-col items-center md:items-start gap-3'>
                    <p className='font-bold text-lg'>SHOP</p>
                    <p className='cursor-pointer hover:underline'>New Arrivals</p>
                    <p className='cursor-pointer hover:underline'>All Products</p>
                    <p className='cursor-pointer hover:underline'>Best Sellers</p>
                    <p className='cursor-pointer hover:underline'>Value Sets</p>
                </div>

                {/* About Links */}
                <div className='flex flex-col items-center md:items-start gap-3'>
                    <p className='font-bold text-lg'>ABOUT</p>
                    <p className='cursor-pointer hover:underline'>Our Story</p>
                    <p className='cursor-pointer hover:underline'>Privacy Policy</p>
                    <p className='cursor-pointer hover:underline'>Terms & Conditions</p>
                    <p className='cursor-pointer hover:underline'>Aim and Ambition</p>
                </div>

                {/* Help Links */}
                <div className='flex flex-col items-center md:items-start gap-3'>
                    <p className='font-bold text-lg'>HELP</p>
                    <p className='cursor-pointer hover:underline'>Working Hours</p>
                    <p className='cursor-pointer hover:underline'>FAQs</p>
                    <p className='cursor-pointer hover:underline'>Contact Us</p>
                </div>

                {/* Newsletter Subscription */}
                <div className='flex flex-col items-center gap-5 w-full md:w-auto'>
                    <p className='font-bold text-lg'>STAY IN THE LOOP</p>
                    <form onSubmit={Subscribe} className='flex flex-col md:flex-row items-center gap-3 w-full'>
                        <input 
                            type="email" 
                            placeholder='Email Address' 
                            name='email' 
                            className='border-2 rounded-lg p-2 w-full md:w-56' 
                            required 
                        />
                        <button 
                            type='submit' 
                            className='border-2 border-white font-serif rounded-lg p-2 bg-white hover:bg-gray-200 transition duration-300'>
                            {sub}
                        </button>
                    </form>
                    <p className='text-center font-semibold'>Developed By RAGHAV CHANDAN</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
