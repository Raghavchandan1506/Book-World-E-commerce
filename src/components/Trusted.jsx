import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Trusted = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,  // Default for small screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 640, // Small screens (mobile)
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768, // Medium screens (tablet)
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1024, // Large screens (desktop)
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    return (
        <div>
            <h1 className='text-3xl font-serif font-bold text-center'>Trusted By Top Publishers</h1>
            <Slider {...settings} className='mt-3 mx-auto my-auto items-center'>  {/* Centered slider */}
                <div><img src="/assets/tr1.jpg" alt="Publisher 1" className='w-96 h-auto max-w-[300px] m-auto'/></div>
                <div><img src="/assets/tr2.png" alt="Publisher 2" className='w-96 h-auto max-w-[300px] m-auto'/></div>
                <div><img src="/assets/tr3.png" alt="Publisher 3" className='w-96 h-auto max-w-[300px] m-auto'/></div>
                <div><img src="/assets/tr4.png" alt="Publisher 4" className='w-96 h-auto max-w-[300px] m-auto'/></div>
                <div><img src="/assets/tr5.png" alt="Publisher 5" className='w-96 h-auto max-w-[300px] m-auto'/></div>
                <div><img src="/assets/tr6.png" alt="Publisher 6" className='w-96 h-auto max-w-[300px] m-auto'/></div>
                <div><img src="/assets/tr7.png" alt="Publisher 7" className='w-96 h-auto max-w-[300px] m-auto'/></div>
            </Slider>
        </div>
    );
}

export default Trusted;
