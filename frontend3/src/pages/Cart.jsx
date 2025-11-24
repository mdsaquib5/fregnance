import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { products, cartItems, currency, updateQuantity, navigate } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            const tempData = [];
            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        tempData.push({
                            _id: items,
                            size: item,
                            quantity: cartItems[items][item]
                        });
                    }
                }
            }
            setCartData(tempData);
        }
    }, [cartItems, products]);

    return (
        <div className='min-h-screen bg-gradient-to-b from-white to-gray-50 py-8 px-4 sm:px-6 lg:px-8'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Page Header */}
                <div className='mb-8'>
                    <Title 
                        text1="SHOPPING" 
                        text2="CART"
                        description="Review your items and proceed to checkout"
                    />
                </div>

                {cartData.length === 0 ? (
                    // Empty Cart State
                    <div className='text-center py-16 bg-white rounded-2xl shadow-lg'>
                        <svg className='w-32 h-32 mx-auto text-gray-300 mb-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' />
                        </svg>
                        <h3 className='font-heading text-2xl font-bold text-gray-800 mb-3'>Your Cart is Empty</h3>
                        <p className='text-gray-600 font-body mb-8'>Looks like you haven't added any items to your cart yet.</p>
                        <Link 
                            to='/collection'
                            className='inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-body font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl'
                        >
                            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' />
                            </svg>
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    <div className='grid lg:grid-cols-3 gap-8'>
                        {/* Cart Items Section */}
                        <div className='lg:col-span-2 space-y-4'>
                            {cartData.map((item, index) => {
                                const productData = products.find((product) => product._id === item._id);
                                
                                return (
                                    <div 
                                        key={index} 
                                        className='bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100'
                                    >
                                        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
                                            {/* Product Image */}
                                            <Link to={`/product/${productData._id}`} className='flex-shrink-0'>
                                                <div className='w-full sm:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden group'>
                                                    <img 
                                                        src={productData.image[0].url} 
                                                        alt={productData.name}
                                                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                                                    />
                                                </div>
                                            </Link>

                                            {/* Product Details */}
                                            <div className='flex-1 flex flex-col justify-between'>
                                                <div>
                                                    <Link to={`/product/${productData._id}`}>
                                                        <h3 className='font-heading text-lg sm:text-xl font-bold text-gray-900 hover:text-pink-600 transition-colors mb-2'>
                                                            {productData.name}
                                                        </h3>
                                                    </Link>
                                                    <p className='text-sm text-gray-500 font-body mb-3'>
                                                        {productData.category}
                                                    </p>
                                                    <div className='flex items-center gap-4 mb-3'>
                                                        <div className='flex items-center gap-2'>
                                                            <span className='text-sm text-gray-600 font-body'>Size:</span>
                                                            <span className='px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold'>
                                                                {item.size}
                                                            </span>
                                                        </div>
                                                        <div className='text-xl font-bold text-gray-900 font-heading'>
                                                            {currency}{productData.price}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Quantity and Remove */}
                                                <div className='flex items-center justify-between'>
                                                    {/* Quantity Controls */}
                                                    <div className='flex items-center gap-3'>
                                                        <span className='text-sm text-gray-600 font-body'>Quantity:</span>
                                                        <div className='flex items-center border-2 border-gray-200 rounded-lg overflow-hidden'>
                                                            <button
                                                                onClick={() => updateQuantity(item._id, item.size, Math.max(1, item.quantity - 1))}
                                                                className='px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors'
                                                            >
                                                                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20 12H4' />
                                                                </svg>
                                                            </button>
                                                            <input
                                                                type='number'
                                                                min={1}
                                                                value={item.quantity}
                                                                onChange={(e) => {
                                                                    const value = Number(e.target.value);
                                                                    if (value > 0) {
                                                                        updateQuantity(item._id, item.size, value);
                                                                    }
                                                                }}
                                                                className='w-16 text-center py-2 border-x-2 border-gray-200 outline-none font-semibold'
                                                            />
                                                            <button
                                                                onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)}
                                                                className='px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors'
                                                            >
                                                                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    {/* Remove Button */}
                                                    <button
                                                        onClick={() => updateQuantity(item._id, item.size, 0)}
                                                        className='flex items-center gap-2 text-red-600 hover:text-red-700 font-body text-sm font-semibold transition-colors'
                                                    >
                                                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
                                                        </svg>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Continue Shopping Link */}
                            <Link 
                                to='/collection'
                                className='inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-body font-semibold transition-colors mt-4'
                            >
                                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
                                </svg>
                                Continue Shopping
                            </Link>
                        </div>

                        {/* Order Summary Section */}
                        <div className='lg:col-span-1'>
                            <div className='sticky top-8'>
                                <CartTotal />
                                <button 
                                    onClick={() => navigate('/place-order')}
                                    className='w-full mt-6 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-body font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2'
                                >
                                    Proceed to Checkout
                                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;