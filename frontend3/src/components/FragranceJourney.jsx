import React from 'react';

const FragranceJourney = () => {
    return (
        <>
            <div className='py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-pink-50/30'>
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

                            <div>
                                <img src={'/images/bottle4.jpg'} alt="" className='absolute top-1/2 left-1/6 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 lg:w-76 h-48 sm:h-56 lg:h-76 rounded-lg shadow-xl z-10 flex items-center justify-center' />
                            </div>

                            {/* Model Image - Right Side */}
                            <div className='absolute top-0 right-0 h-full overflow-hidden'>
                                <img src={'/images/journey-bg.jpg'} alt="" className='object-cover w-full h-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FragranceJourney;
