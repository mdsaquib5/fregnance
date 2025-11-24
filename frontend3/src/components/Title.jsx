import React from 'react';

const Title = ({ text1, text2, description }) => {
    return (
        <>
            <div className='flex flex-col items-center gap-4'>
                {/* Title Section */}
                <div className='inline-flex flex-col items-center gap-3'>
                    {/* Decorative line */}
                    <div className='flex items-center gap-3'>
                        <span className='w-8 sm:w-12 h-[2px] bg-gradient-to-r from-transparent to-pink-400'></span>
                        <div className='flex flex-col sm:flex-row items-center gap-2'>
                            <h2 className='font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800'>
                                {text1}
                            </h2>
                            <h2 className='font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-600'>
                                {text2}
                            </h2>
                        </div>
                        <span className='w-8 sm:w-12 h-[2px] bg-gradient-to-l from-transparent to-pink-400'></span>
                    </div>

                    {/* Decorative element */}
                    <div className='flex items-center gap-2'>
                        <div className='w-2 h-2 rounded-full bg-pink-400'></div>
                        <div className='w-16 h-[1px] bg-pink-300'></div>
                        <div className='w-2 h-2 rounded-full bg-pink-400'></div>
                    </div>
                </div>

                {/* Description */}
                {description && (
                    <p className='max-w-2xl mx-auto text-center text-sm sm:text-base lg:text-lg text-gray-600 font-body leading-relaxed px-4'>
                        {description}
                    </p>
                )}
            </div>
        </>
    );
};

export default Title;