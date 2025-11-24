import React from 'react';

const FragranceJourney = () => {
    return (
        <>
            <div className='py-16 lg:py-0 bg-gradient-to-br from-gray-50 to-pink-50/30'>
                <div>
                    <div className='grid lg:grid-cols-2 gap-0 items-center'>
                        {/* Left Content Section */}
                        <div className='px-6 sm:px-12 lg:px-16 py-12 lg:py-24'>
                            {/* Small Title */}
                            <p className='font-body text-pink-500 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-6'>
                                OUR FRAGRANCE JOURNEY
                            </p>

                            {/* Main Heading */}
                            <h2 className='font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6'>
                                Crafting Scents With<br />
                                Passion And Precision
                            </h2>

                            {/* Description Paragraphs */}
                            <div className='space-y-4 mb-8'>
                                <p className='font-body text-gray-700 text-sm sm:text-base leading-relaxed'>
                                    At Odora, we believe that every fragrance tells a story. Our journey began with a passion for creating unique and memorable scents that capture the essence of life's special moments.
                                </p>
                                <p className='font-body text-gray-700 text-sm sm:text-base leading-relaxed'>
                                    Quality is at the heart of everything we do at Odora. We are dedicated to offering a curated selection of the world's finest perfumes sourced from renowned.
                                </p>
                            </div>

                            {/* CTA Button */}
                            <button className='bg-pink-500 hover:bg-pink-600 text-white font-body font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg uppercase text-sm tracking-wide'>
                                Discover Now
                            </button>
                        </div>

                        {/* Right Image Section */}
                        <div className='relative h-[400px] lg:h-[600px] overflow-hidden'>
                            {/* Background decorative boxes */}
                            <div className='absolute inset-0 grid grid-cols-2'>
                                <div className='bg-gray-200'></div>
                                <div className='bg-white'></div>
                            </div>

                            {/* Product Image - Pink Background */}
                            <div className='absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 bg-pink-200 rounded-lg shadow-xl z-10 flex items-center justify-center overflow-hidden'>
                                <div className='w-full h-full flex items-center justify-center p-8'>
                                    {/* Placeholder for perfume bottle image */}
                                    <div className='relative w-full h-full'>
                                        <div className='absolute inset-0 flex items-center justify-center'>
                                            <svg className='w-24 h-24 text-pink-400' fill='currentColor' viewBox='0 0 24 24'>
                                                <path d='M12 2C10.9 2 10 2.9 10 4V5H8C6.9 5 6 5.9 6 7V20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20V7C18 5.9 17.1 5 16 5H14V4C14 2.9 13.1 2 12 2M12 4C12 4 12 4 12 4V5H12V4M8 7H16V20H8V7Z' />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Model Image - Right Side */}
                            <div className='absolute top-0 right-0 w-3/5 h-full bg-gray-300 overflow-hidden'>
                                <div className='w-full h-full flex items-center justify-center'>
                                    {/* Placeholder for model image */}
                                    <div className='text-gray-400'>
                                        <svg className='w-32 h-32' fill='currentColor' viewBox='0 0 24 24'>
                                            <path d='M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z' />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className='absolute top-8 right-8 w-16 h-16 border-4 border-white rounded-full opacity-50 z-20'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FragranceJourney;
