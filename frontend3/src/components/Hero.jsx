import React from 'react';
import { assets } from '../assets/asset/assets';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Truck, Shield, Award, Headphones } from 'lucide-react';

const Hero = () => {
    // Slider settings with fade effect
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        pauseOnHover: false,
        arrows: false,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        appendDots: dots => (
            <div className='pb-8'>
                <ul className='flex items-center justify-center gap-3'> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className='w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300 cursor-pointer border border-white/30'></div>
        )
    };

    // Slider data - You can replace with your actual images
    const slides = [
        {
            id: 1,
            subtitle: 'NEW COLLECTION',
            title: 'Discover Your Signature Scent',
            description: 'Explore our exclusive range of luxury perfumes crafted for the modern individual',
            buttonText: 'Shop Now',
            image: assets.hero_img, // Replace with your actual image
            link: '/collection'
        },
        {
            id: 2,
            subtitle: 'BESTSELLERS',
            title: 'Timeless Elegance in Every Bottle',
            description: 'Experience the art of fine fragrance with our bestselling collection',
            buttonText: 'Explore Collection',
            image: assets.hero_img, // Replace with your actual image
            link: '/collection'
        },
        {
            id: 3,
            subtitle: 'LIMITED EDITION',
            title: 'Luxury Meets Sophistication',
            description: 'Indulge in exclusive fragrances designed to leave a lasting impression',
            buttonText: 'Discover More',
            image: '/images/hero1.jpg', // Replace with your actual image
            link: '/collection'
        }
    ];

    return (
        <>
            {/* Hero Slider Section */}
            <div className='relative w-full overflow-hidden'>
                <Slider {...settings}>
                    {slides.map((slide) => (
                        <div key={slide.id} className='relative'>
                            <div className='relative h-[500px] sm:h-[600px] lg:h-[700px]'>
                                {/* Background Image with Overlay */}
                                <div className='absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10'></div>
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className='w-full h-full object-cover'
                                />

                                {/* Content Overlay */}
                                <div className='absolute inset-0 z-20'>
                                    <div className='container mx-auto px-4 sm:px-6 lg:px-8 h-full'>
                                        <div className='flex items-center h-full'>
                                            <div className='max-w-2xl text-white'>
                                                {/* Subtitle with Line */}
                                                <div className='flex items-center gap-3 mb-4 animate-fadeInLeft'>
                                                    <span className='w-12 h-[2px] bg-pink-400'></span>
                                                    <p className='font-body text-sm md:text-base font-light tracking-[0.3em] uppercase'>
                                                        {slide.subtitle}
                                                    </p>
                                                </div>

                                                {/* Main Title */}
                                                <h1 className='font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fadeInLeft animation-delay-200'>
                                                    {slide.title}
                                                </h1>

                                                {/* Description */}
                                                <p className='font-body text-base sm:text-lg lg:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed animate-fadeInLeft animation-delay-400'>
                                                    {slide.description}
                                                </p>

                                                {/* CTA Button */}
                                                <Link
                                                    to={slide.link}
                                                    className='inline-flex items-center gap-3 bg-pink-600 hover:bg-pink-700 text-white font-body font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl group animate-fadeInLeft animation-delay-600'
                                                >
                                                    <span className='text-sm md:text-base tracking-wide uppercase'>
                                                        {slide.buttonText}
                                                    </span>
                                                    <svg
                                                        className='w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300'
                                                        fill='none'
                                                        stroke='currentColor'
                                                        viewBox='0 0 24 24'
                                                    >
                                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 8l4 4m0 0l-4 4m4-4H3'></path>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default Hero;