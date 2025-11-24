import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (products.length > 0) {
            let productCopy = products.slice();
            
            // Filter by category and subcategory
            productCopy = productCopy.filter(
                (item) => item.category === category && item.subCategory === subCategory
            );
            
            // Set related products (limit to 5)
            setRelated(productCopy.slice(0, 5));
            setIsLoading(false);
        }
    }, [products, category, subCategory]);

    // Don't render if no related products
    if (!isLoading && related.length === 0) {
        return null;
    }

    return (
        <section className='py-30 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-12'>
                    <Title 
                        text1="RELATED" 
                        text2="PRODUCTS"
                        description="Discover more products you might love from the same collection"
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
                ) : (
                    // Products Display
                    <div className='relative'>
                        {/* Decorative Elements */}
                        <div className='absolute -top-8 -left-8 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-50 -z-10'></div>
                        <div className='absolute -bottom-8 -right-8 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-50 -z-10'></div>

                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6'>
                            {related.map((item, index) => (
                                <div 
                                    key={item._id} 
                                    className='opacity-0 animate-fadeInLeft'
                                    style={{ 
                                        animationDelay: `${index * 100}ms`, 
                                        animationFillMode: 'forwards' 
                                    }}
                                >
                                    <ProductItem item={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* View All Button */}
                {!isLoading && related.length > 0 && (
                    <div className='text-center mt-12'>
                        <button 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className='inline-flex items-center gap-2 bg-white hover:bg-pink-600 text-gray-800 hover:text-white border-2 border-pink-600 font-body font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg'
                        >
                            <span>View All Products</span>
                            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default RelatedProducts;
