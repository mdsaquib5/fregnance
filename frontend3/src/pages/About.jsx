import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/asset/assets';

const About = () => {
    const features = [
        {
            icon: (
                <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
            ),
            title: 'Quality Assurance',
            description: 'We meticulously select and vet each product to ensure it meets our stringent quality standards. Every fragrance is authentic and sourced from trusted suppliers.'
        },
        {
            icon: (
                <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                </svg>
            ),
            title: 'Fast Delivery',
            description: 'With our user-friendly interface and hassle-free ordering process, shopping has never been easier. Get your favorite scents delivered to your doorstep quickly.'
        },
        {
            icon: (
                <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z' />
                </svg>
            ),
            title: 'Exceptional Service',
            description: 'Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority. We\'re always here to help.'
        }
    ];

    return (
        <div className='min-h-screen bg-gradient-to-b from-white to-gray-50'>
            {/* Hero Section */}
            <div className='py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-50 via-white to-purple-50'>
                <div className='max-w-7xl mx-auto'>
                    <Title 
                        text1="ABOUT" 
                        text2="US"
                        description="Discover the story behind our passion for premium fragrances"
                    />
                </div>
            </div>

            {/* Main Content Section */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                <div className='grid md:grid-cols-2 gap-12 items-center mb-20'>
                    {/* Image */}
                    <div className='relative group'>
                        <div className='absolute -inset-4 bg-gradient-to-r from-pink-200 to-purple-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300'></div>
                        <img 
                            src={assets.about_img} 
                            alt='About Odora' 
                            className='relative w-full rounded-2xl shadow-2xl object-cover'
                        />
                    </div>

                    {/* Content */}
                    <div className='space-y-6'>
                        <div className='inline-block'>
                            <span className='bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold font-body'>
                                Our Story
                            </span>
                        </div>
                        
                        <h2 className='font-heading text-3xl sm:text-4xl font-bold text-gray-900 leading-tight'>
                            Crafting Memorable Scent Experiences Since 2018
                        </h2>

                        <div className='space-y-4 text-gray-600 font-body leading-relaxed'>
                            <p>
                                Odora was born out of a passion for innovation and a desire to revolutionize the way people experience fragrances. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase premium perfumes from the comfort of their homes.
                            </p>
                            <p>
                                Since our inception, we've worked tirelessly to curate a diverse selection of high-quality fragrances that cater to every taste and preference. From floral and woody to fresh and oriental, we offer an extensive collection sourced from trusted brands and master perfumers worldwide.
                            </p>
                        </div>

                        {/* Mission Box */}
                        <div className='bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border-l-4 border-pink-500'>
                            <h3 className='font-heading text-xl font-bold text-gray-900 mb-3 flex items-center gap-2'>
                                <svg className='w-6 h-6 text-pink-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                                </svg>
                                Our Mission
                            </h3>
                            <p className='text-gray-700 font-body leading-relaxed'>
                                Our mission at Odora is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className='py-16'>
                    <div className='text-center mb-12'>
                        <Title 
                            text1="WHY CHOOSE" 
                            text2="US"
                            description="Discover what makes us the preferred choice for fragrance lovers"
                        />
                    </div>

                    <div className='grid md:grid-cols-3 gap-8'>
                        {features.map((feature, index) => (
                            <div 
                                key={index}
                                className='group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-pink-200'
                            >
                                {/* Icon */}
                                <div className='w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform duration-300'>
                                    {feature.icon}
                                </div>

                                {/* Title */}
                                <h3 className='font-heading text-xl font-bold text-gray-900 mb-4'>
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className='text-gray-600 font-body leading-relaxed'>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className='py-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl shadow-2xl'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white px-8'>
                        <div>
                            <div className='font-heading text-4xl sm:text-5xl font-bold mb-2'>500+</div>
                            <div className='font-body text-pink-100'>Premium Fragrances</div>
                        </div>
                        <div>
                            <div className='font-heading text-4xl sm:text-5xl font-bold mb-2'>50K+</div>
                            <div className='font-body text-pink-100'>Happy Customers</div>
                        </div>
                        <div>
                            <div className='font-heading text-4xl sm:text-5xl font-bold mb-2'>100+</div>
                            <div className='font-body text-pink-100'>Global Brands</div>
                        </div>
                        <div>
                            <div className='font-heading text-4xl sm:text-5xl font-bold mb-2'>24/7</div>
                            <div className='font-body text-pink-100'>Customer Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
