import React from 'react';
import Slider from 'react-slick';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            rating: 5,
            title: "A Signature Scent Found",
            review: "I've been searching for the perfect signature scent for years, and I finally found it at Odora. The variety and quality of fragrances are exceptional!",
            name: "Sarah Johnson",
            role: "Satisfied Customer"
        },
        {
            id: 2,
            rating: 5,
            title: "Impressive Selection",
            review: "The curated selection at Odora is truly impressive. I found a fragrance that perfectly matches my style and personality!",
            name: "David Miller",
            role: "Fragrance Enthusiast"
        },
        {
            id: 3,
            rating: 5,
            title: "Exceptional Quality",
            review: "The quality of perfumes at Odora is unparalleled. Each scent is unique and long-lasting. I love how the fragrances evolve over time!",
            name: "Emma Roberts",
            role: "Loyal Customer"
        },
        {
            id: 4,
            rating: 5,
            title: "Outstanding Service",
            review: "Not only are the fragrances amazing, but the customer service is top-notch. They helped me find the perfect gift for my wife!",
            name: "Michael Chen",
            role: "Happy Customer"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
        appendDots: dots => (
            <div style={{ bottom: '-50px' }}>
                <ul className='flex justify-center gap-2'> {dots} </ul>
            </div>
        ),
        customPaging: () => (
            <div className='w-3 h-3 rounded-full bg-pink-300 hover:bg-pink-500 transition-all duration-300'></div>
        )
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <svg
                key={index}
                className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill='currentColor'
                viewBox='0 0 20 20'
            >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
            </svg>
        ));
    };

    return (
        <>
            <div className='py-30 px-4 sm:px-6 lg:px-8 bg-gradient-to-br relative overflow-hidden'>

                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    {/* Section Header */}
                    <div className='text-center mb-16'>
                        <p className='font-body text-pink-500 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4'>
                            TESTIMONIALS
                        </p>
                        <h2 className='font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900'>
                            Customer Reviews
                        </h2>
                    </div>

                    {/* Testimonials Slider */}
                    <div className='pb-16'>
                        <Slider {...settings}>
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className='px-3'>
                                    <div className='bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full'>
                                        {/* Star Rating */}
                                        <div className='flex gap-1 mb-4'>
                                            {renderStars(testimonial.rating)}
                                        </div>

                                        {/* Title */}
                                        <h3 className='font-heading text-xl font-bold text-gray-900 mb-4'>
                                            {testimonial.title}
                                        </h3>

                                        {/* Review Text */}
                                        <p className='font-body text-gray-600 text-sm leading-relaxed mb-6 min-h-[80px]'>
                                            "{testimonial.review}"
                                        </p>

                                        {/* Customer Info */}
                                        <div className='border-t border-gray-200 pt-4'>
                                            <p className='font-heading font-bold text-gray-900 text-base'>
                                                {testimonial.name}
                                            </p>
                                            <p className='font-body text-gray-500 text-sm'>
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;
