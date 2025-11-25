const SummerOffer = () => {
    const bottles = [
        { img: '/images/bottle1.jpg', alt: 'Perfume bottle 1', rotate: '-rotate-12' },
        { img: '/images/bottle2.jpg', alt: 'Perfume bottle 2', },
        { img: '/images/bottle3.jpg', alt: 'Perfume bottle 3', rotate: 'rotate-12' }
    ];

    return (
        <div className='w-full py-12 sm:py-16 md:py-20 lg:py-30 px-4 sm:px-6 lg:px-8 bg-fregnance bg-cover bg-center bg-no-repeat'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
                    {/* Left Content Section */}
                    <div className='bg-white/80 backdrop-blur-sm p-6 sm:p-8 md:p-10 lg:p-16 rounded-2xl shadow-xl order-2 lg:order-1'>
                        {/* Small Title */}
                        <p className='font-body text-pink-500 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4 sm:mb-6'>
                            SUMMER FRAGRANCE FIESTA
                        </p>

                        {/* Main Heading */}
                        <h2 className='font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-2'>
                            Get Upto <span className='text-pink-600'>25% Off</span>
                        </h2>
                        <h3 className='font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6'>
                            Summer Fragrances
                        </h3>

                        {/* Description */}
                        <p className='font-body text-gray-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8'>
                            Perfect for day or night, these scents will keep you feeling fresh and invigorated all summer long.
                        </p>

                        {/* CTA Button */}
                        <button className='w-full sm:w-auto bg-transparent border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white font-body font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 uppercase text-xs sm:text-sm tracking-wide'>
                            Shop Now
                        </button>
                    </div>

                    {/* Right Image Section */}
                    <div className='relative flex items-center justify-end order-1 lg:order-2'>
                        <div className='relative z-10 flex items-center justify-center gap-2 sm:gap-3 md:gap-4'>
                            {bottles.map((bottle, index) => (
                                <div
                                    key={index}
                                    className={`transform ${bottle.rotate} hover:rotate-0 transition-transform duration-300`}
                                >
                                    <div className='w-20 h-32 sm:w-24 sm:h-36 md:w-28 md:h-40 lg:w-32 lg:h-48 rounded-lg shadow-2xl overflow-hidden'>
                                        <img src={bottle.img} alt={bottle.alt} className='w-full h-full object-cover' />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SummerOffer;
