import React from 'react';
import { Gift, Sparkles, Truck, RotateCcw } from 'lucide-react';

const OurPolicy = () => {
    const OurPolicy = [
        {
            icon: <Gift className='w-8 h-8 sm:w-10 sm:h-10' strokeWidth={1.5} />,
            title: 'Up To 40% Offer',
            description: 'On all your Perfume orders'
        },
        {
            icon: <Sparkles className='w-8 h-8 sm:w-10 sm:h-10' strokeWidth={1.5} />,
            title: 'Perfume Variety',
            description: 'Making your gift box by yourself'
        },
        {
            icon: <Truck className='w-8 h-8 sm:w-10 sm:h-10' strokeWidth={1.5} />,
            title: 'Free Shipping',
            description: 'on orders from $500 and above'
        },
        {
            icon: <RotateCcw className='w-8 h-8 sm:w-10 sm:h-10' strokeWidth={1.5} />,
            title: 'Easy Returns',
            description: 'Simply return it within 30 days'
        }
    ];

    return (
        <>
            <div className='bg-pink-50/50 py-8 sm:py-10 lg:py-12'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12'>
                        {OurPolicy.map((service, index) => (
                            <div
                                key={index}
                                className='flex items-center gap-4 sm:gap-5'
                            >
                                {/* Icon with Dotted Circle Border */}
                                <div className='flex-shrink-0'>
                                    <div className='w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed border-pink-400 flex items-center justify-center text-pink-600'>
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className='flex-1'>
                                    {/* Title */}
                                    <h3 className='font-body text-base sm:text-lg font-semibold text-gray-900 mb-1'>
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className='font-body text-xs sm:text-sm text-gray-600'>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurPolicy;