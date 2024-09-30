import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-gray-400 to-blue-200 text-white p-4">
      <h1 className="text-9xl font-extrabold tracking-wider mt-16 md:text-[8rem] sm:text-[6rem]">404</h1>
      <p className="text-2xl mt-5 font-semibold">Oops! The page you're looking for doesn't exist.</p>
      <p className="text-lg mt-2 text-gray-900 text-center mx-4 md:mx-0">
        It looks like you took a wrong turn. Let's get you back on track!
      </p>

      <NavLink to='/' className="mt-10 px-8 py-3 bg-white text-blue-700 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-50">
        Back to Home
      </NavLink>

      <div className="mt-10 mb-20">
        <img src="/assets/404.jpg" alt="404 Illustration" className="w-80 sm:w-96 rounded-full mx-auto"/>
      </div>
    </div>
  );
}

export default Error;
