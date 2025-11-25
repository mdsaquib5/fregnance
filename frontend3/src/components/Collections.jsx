import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';

const Collections = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 4));
    }, [products])

    return (
        <>
            <div className='py-10 sm:py-20 lg:py-30 bg-gradient-to-b from-white via-pink-50/30 to-white'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    {/* Section Header */}
                    <div className="text-center mb-12 sm:mb-16">
                        <Title
                            text1="LATEST"
                            text2="COLLECTIONS"
                            description="Discover our newest collection of exquisite fragrances, carefully curated to bring elegance and sophistication to your everyday moments."
                        />
                    </div>

                    {/* Products Grid */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6'>
                        {
                            latestProducts.map((item, index) => (
                                <ProductItem key={index} item={item} />
                            ))
                        }
                    </div>

                    {/* View All Button */}
                    <div className='text-center mt-12 sm:mt-16'>
                        <Link to='/collection' className='inline-flex items-center gap-2 bg-white hover:bg-pink-600 text-gray-800 hover:text-white font-body font-medium px-8 py-3 rounded-full border-2 border-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg group'>
                            <span className='text-sm sm:text-base tracking-wide uppercase'>
                                View All Collections
                            </span>
                            <svg
                                className='w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 8l4 4m0 0l-4 4m4-4H3'></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collections;