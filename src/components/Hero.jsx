import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='relative'>
            <div className=''>
                <img 
                    src="/assets/homeback.jpg" 
                    alt="Background" 
                    className='w-full h-full object-cover absolute inset-0 -z-10 blur-sm' 
                />
                
                <div className='flex flex-col md:flex-row md:ml-10 p-4'>
                    <div className='flex flex-col items-start bg-gradient-to-r from-yellow-900 to-blue-800 drop-shadow-xl align-text-bottom text-transparent bg-clip-text mt-40 mb-40 gap-5'>
                        <h1 className='text-3xl md:text-5xl font-serif font-extrabold'>Welcome to</h1>
                        <span className='text-5xl md:text-7xl font-serif font-bold'>THE BOOK WORLD</span>

                        <h1 className='font-serif text-xl md:text-2xl font-bold text-white'>
                            "Step Into a World Where Every Page Fuels Your Imagination <br /> 
                            and Every Book Opens the Door to Endless Possibilities."
                        </h1>

                        <NavLink to='/products'>
                            <img 
                                src="/assets/shop.png" 
                                alt="shop now" 
                                className='w-48 animate-bounce hover:animate-none hover:drop-shadow-lg md:ml-72 ml-0' 
                            />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
