import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (products.length > 0) {
            const bestProduct = products.filter((item) => item.bestseller);
            setBestSeller(bestProduct.slice(0, 5));
            setIsLoading(false);
        }
    }, [products]);

    return (
        <>
            <div className='py-30 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-pink-50/70'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    {/* Title Section */}
                    <div className='mb-16'>
                        <Title
                            text1="BEST"
                            text2="SELLERS"
                            description="Discover our most loved products, handpicked by customers just like you. These trending favorites are flying off the shelves!"
                        />
                    </div>

                    {/* Products Grid */}
                    {isLoading ? (
                        // Loading Skeleton
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6'>
                            {[...Array(5)].map((_, index) => (
                                <div key={index} className='animate-pulse'>
                                    <div className='bg-gray-200 rounded-lg aspect-[3/4] mb-4'></div>
                                    <div className='h-4 bg-gray-200 rounded mb-2'></div>
                                    <div className='h-4 bg-gray-200 rounded w-3/4'></div>
                                </div>
                            ))}
                        </div>
                    ) : bestSeller.length > 0 ? (
                        // Products Display
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6'>
                            {bestSeller.map((item, index) => (
                                <div
                                    key={item._id}
                                    className='opacity-0 animate-fadeInLeft'
                                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                                >
                                    <ProductItem item={item} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        // No Products Message
                        <div className='text-center py-16'>
                            <div className='inline-flex items-center justify-center w-20 h-20 rounded-full bg-pink-100 mb-4'>
                                <svg className='w-10 h-10 text-pink-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' />
                                </svg>
                            </div>
                            <h3 className='font-heading text-xl text-gray-800 mb-2'>No Bestsellers Yet</h3>
                            <p className='text-gray-600 font-body'>Check back soon for our trending products!</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default BestSeller;