import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ item }) => {
    const { currency } = useContext(ShopContext);

    return (
        <>
            <div className='group'>
                <Link to={`/product/${item._id}`} className='block'>
                    {/* Image Container */}
                    <div className='relative overflow-hidden rounded-lg mb-4 bg-gray-100'>
                        <div className='aspect-[3/4]'>
                            <img
                                src={item.image[0].url}
                                alt={item.name}
                                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                            />
                        </div>

                        {/* Bestseller Badge */}
                        {item.bestseller && (
                            <div className='absolute top-3 left-3 bg-white text-pink-600 text-xs font-semibold px-3 py-1 rounded font-body'>
                                BESTSELLER
                            </div>
                        )}
                    </div>

                    {/* Product Details - Centered */}
                    <div className='text-center space-y-2'>
                        {/* Category */}
                        <p className='text-xs font-body text-gray-500 uppercase tracking-wider'>
                            {item.category}
                        </p>

                        {/* Product Name */}
                        <h3 className='font-heading text-base sm:text-lg font-semibold text-gray-900 px-2 group-hover:text-pink-600 transition-colors duration-300'>
                            {item.name}
                        </h3>

                        {/* Price */}
                        <p className='font-body text-xl font-bold text-gray-900'>
                            {currency}{item.price}
                        </p>
                    </div>
                </Link>

                {/* Buy Now Button */}
                <div className='mt-4'>
                    <Link
                        to={`/product/${item._id}`}
                        className='block w-full bg-pink-600 hover:bg-pink-700 text-white font-body font-medium py-3 rounded-lg transition-all duration-300 text-center text-sm uppercase tracking-wide group-hover:shadow-lg'
                    >
                        Buy Now
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ProductItem;