import React from 'react';

const SummerOffer = () => {
    return (
        <>
            <div className='py-30 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-100 via-pink-100 to-amber-50'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid lg:grid-cols-2 gap-8 items-center'>
                        {/* Left Content Section */}
                        <div className='bg-white/80 backdrop-blur-sm p-8 sm:p-12 lg:p-16 rounded-2xl shadow-xl'>
                            {/* Small Title */}
                            <p className='font-body text-pink-500 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-6'>
                                SUMMER FRAGRANCE FIESTA
                            </p>

                            {/* Main Heading */}
                            <h2 className='font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-2'>
                                Get Upto <span className='text-pink-600'>25% Off</span>
                            </h2>
                            <h3 className='font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
                                Summer Fragrances
                            </h3>

                            {/* Description */}
                            <p className='font-body text-gray-700 text-sm sm:text-base leading-relaxed mb-8'>
                                Perfect for day or night, these scents will keep you feeling fresh and invigorated all summer long.
                            </p>

                            {/* CTA Button */}
                            <button className='bg-transparent border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white font-body font-semibold px-8 py-3 rounded-full transition-all duration-300 uppercase text-sm tracking-wide'>
                                Shop Now
                            </button>
                        </div>

                        {/* Right Image Section */}
                        <div className='relative h-[400px] lg:h-[500px] flex items-center justify-center'>
                            {/* Decorative Background Circle */}
                            <div className='absolute inset-0 flex items-center justify-center'>
                                <div className='w-80 h-80 lg:w-96 lg:h-96 bg-pink-200/30 rounded-full blur-3xl'></div>
                            </div>

                            {/* Perfume Bottles Placeholder */}
                            <div className='relative z-10 flex items-center justify-center gap-4'>
                                {/* Bottle 1 */}
                                <div className='transform -rotate-12 hover:rotate-0 transition-transform duration-300'>
                                    <div className='w-32 h-48 sm:w-40 sm:h-56 bg-gradient-to-b from-pink-200 to-pink-300 rounded-lg shadow-2xl flex items-center justify-center'>
                                        <svg className='w-16 h-16 text-pink-400' fill='currentColor' viewBox='0 0 24 24'>
                                            <path d='M12 2C10.9 2 10 2.9 10 4V5H8C6.9 5 6 5.9 6 7V20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20V7C18 5.9 17.1 5 16 5H14V4C14 2.9 13.1 2 12 2M12 4V5H12V4M8 7H16V20H8V7Z' />
                                        </svg>
                                    </div>
                                </div>

                                {/* Bottle 2 - Center */}
                                <div className='transform scale-110 hover:scale-125 transition-transform duration-300'>
                                    <div className='w-36 h-52 sm:w-44 sm:h-60 bg-gradient-to-b from-pink-300 to-rose-300 rounded-lg shadow-2xl flex items-center justify-center'>
                                        <svg className='w-20 h-20 text-rose-400' fill='currentColor' viewBox='0 0 24 24'>
                                            <path d='M12 2C10.9 2 10 2.9 10 4V5H8C6.9 5 6 5.9 6 7V20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20V7C18 5.9 17.1 5 16 5H14V4C14 2.9 13.1 2 12 2M12 4V5H12V4M8 7H16V20H8V7Z' />
                                        </svg>
                                    </div>
                                </div>

                                {/* Bottle 3 */}
                                <div className='transform rotate-12 hover:rotate-0 transition-transform duration-300'>
                                    <div className='w-32 h-48 sm:w-40 sm:h-56 bg-gradient-to-b from-rose-200 to-rose-300 rounded-lg shadow-2xl flex items-center justify-center'>
                                        <svg className='w-16 h-16 text-rose-400' fill='currentColor' viewBox='0 0 24 24'>
                                            <path d='M12 2C10.9 2 10 2.9 10 4V5H8C6.9 5 6 5.9 6 7V20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20V7C18 5.9 17.1 5 16 5H14V4C14 2.9 13.1 2 12 2M12 4V5H12V4M8 7H16V20H8V7Z' />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Flowers/Elements */}
                            <div className='absolute top-10 right-10 w-20 h-20 opacity-40'>
                                <svg viewBox='0 0 100 100' className='text-pink-400'>
                                    <circle cx='50' cy='50' r='8' fill='currentColor' />
                                    <circle cx='30' cy='30' r='12' fill='currentColor' opacity='0.6' />
                                    <circle cx='70' cy='30' r='10' fill='currentColor' opacity='0.7' />
                                    <circle cx='30' cy='70' r='10' fill='currentColor' opacity='0.7' />
                                    <circle cx='70' cy='70' r='12' fill='currentColor' opacity='0.6' />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SummerOffer;
