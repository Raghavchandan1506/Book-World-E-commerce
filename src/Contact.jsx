import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaLocationArrow } from 'react-icons/fa';
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
    const { user, isAuthenticated } = useAuth0();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        location: '',
        information: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                access_key: "b000b183-dc8f-4dea-9ae3-ddbf7d16bb7e",
                ...formData
            })
        });

        if (response.ok) {
            setSubmitted(true);
            setFormData({
                name: '',
                email: '',
                number: '',
                location: '',
                information: ''
            });
        } else {
            console.error("Form submission failed!");
        }
    };

    return (
        <div id='contact' className='flex flex-col md:flex-row gap-8 p-4 md:p-8 font-serif font-bold'>
            <div className='flex-1 flex flex-col gap-6'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center'>
                    <span className='text-red-900'>
                    Have a question? 
                    </span>
                    <br /> Our team is an open book!
                </h1>
                <p className='text-lg text-center font-normal'>
                At BookWorld.com, we believe that every reader deserves the perfect book. Whether you need help finding a title, tracking your order, or just have a question about our collection, don’t hesitate to reach out.
                </p>
                <h2 className='text-xl text-center'>Reach Us At:</h2>
                <div className='flex flex-col items-center md:items-start gap-4'>
                    <p className='flex items-center gap-2 font-sans'><FaPhoneAlt /> 7986554832</p>
                    <p className='flex items-center gap-2'><FaEnvelope /> raghavchandan1715@gmail.com</p>
                    <p className='flex items-center gap-2'><FaLocationArrow />BookWorld, Rupnagar, 140001</p>
                </div>
                <iframe className='w-full h-60 md:h-80 border-2 border-blue-300' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3420.9595501264093!2d76.51375907538292!3d30.97161097446991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDU4JzE3LjgiTiA3NsKwMzAnNTguOCJF!5e0!3m2!1sen!2sin!4v1725305731797!5m2!1sen!2sin" title='map'></iframe>
            </div>
            <div className='flex-1 bg-gradient-to-r from-yellow-100 to-blue-200 p-6 rounded-lg'>
                <h2 className='text-xl md:text-xl lg:text-xl font-light text-center text-red-800 mb-4'>
                    Or fill out this form and we will get back to you as soon as possible
                </h2>
                {!submitted ? (
                    <form onSubmit={handleSubmit} className='flex flex-col gap-3 font-light'>
                        <label htmlFor="name" className='text-red-800'>Name:</label>
                        <input type="text" placeholder='Full Name' name='name' value={isAuthenticated ? user.name : ""}  onChange={handleChange} className='rounded-md p-2' required />

                        <label htmlFor="email" className='text-red-800'>Email Address:</label>
                        <input type="email" placeholder='Email Address' name='email' value={isAuthenticated ? user.email : ""} onChange={handleChange} className='rounded-md p-2' required />

                        <label htmlFor="number" className='text-red-800'>Phone Number:</label>
                        <input type="text" placeholder='Phone Number' name='number' value={formData.number} onChange={handleChange} className='rounded-md p-2' />

                        <label htmlFor="location" className='text-red-800'>Location:</label>
                        <input type="text" placeholder='Colony, Area, City' name='location' value={formData.location} onChange={handleChange} className='rounded-md p-2' required />

                        <label htmlFor="information" className='text-red-800'>Tell us about your Interest or any questions:</label>
                        <textarea name="information" cols="30" rows="5" placeholder='Write here about your Interests or a question' value={formData.information} onChange={handleChange} className='rounded-md p-2' required></textarea>

                        <button type='submit' className='border-2 pl-6 pr-6 pt-1 pb-1 mt-3 text-red-800 rounded-lg bg-white animate-bounce hover:animate-none'>
                            SUBMIT
                        </button>
                    </form>
                ) : (
                    <p className="mt-5 text-red-800 text-center text-2xl ">
                        Thank you! Your submission has been received. 
                        <img src='/assets/celebration.png' alt="done" className='w-full mx-auto mt-4' />
                    </p>
                )}
            </div>
        </div>
    );
}

export default Contact;
