import Slider from 'react-slick';
import Title from './Title';

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

    return (
        <>
            <div className='py-30 px-4 sm:px-6 lg:px-8 bg-gradient-to-br relative overflow-hidden'>

                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    {/* Section Header */}
                    <div className='mb-16'>
                        <Title text1="Customer" text2="Reviews" />
                    </div>

                    {/* Testimonials Slider */}
                    <div className='pb-16'>
                        <Slider {...settings}>
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className='px-3'>
                                    <div className='bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full'>

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
