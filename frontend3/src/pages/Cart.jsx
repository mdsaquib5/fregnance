import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import CartTotal from '../components/CartTotal';

const Cart = () => {
    const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            const tempData = [];
            for (const itemId in cartItems) {
                for (const size in cartItems[itemId]) {
                    if (cartItems[itemId][size] > 0) {
                        // Find the product
                        const product = products.find(product => product._id === itemId);
                        
                        // Only add if product exists
                        if (product) {
                            tempData.push({
                                _id: itemId,
                                size: size,
                                quantity: cartItems[itemId][size],
                                productData: product
                            });
                        }
                    }
                }
            }
            setCartData(tempData);
        }
    }, [cartItems, products]);

    return (
        <div className='min-h-screen bg-gradient-to-b from-white via-pink-50/30 to-white py-12 sm:py-16 lg:py-20'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Page Title */}
                <div className='mb-12'>
                    <Title 
                        text1="YOUR" 
                        text2="CART"
                        description="Review your selected items and proceed to checkout"
                    />
                </div>

                {/* Cart Content */}
                {cartData.length === 0 ? (
                    // Empty Cart State
                    <div className='bg-white rounded-2xl border border-gray-200 p-12 sm:p-16 text-center shadow-sm'>
                        <div className='max-w-md mx-auto'>
                            <ShoppingBag className='w-24 h-24 mx-auto text-gray-300 mb-6' />
                            <h3 className='font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4'>
                                Your Cart is Empty
                            </h3>
                            <p className='font-body text-gray-600 mb-8'>
                                Looks like you haven't added any perfumes yet. Start shopping to find your signature scent!
                            </p>
                            <Link 
                                to='/collection'
                                className='inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-body font-medium px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg'
                            >
                                <ShoppingBag className='w-5 h-5' />
                                <span>Continue Shopping</span>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                        {/* Cart Items */}
                        <div className='lg:col-span-2 space-y-4'>
                            {cartData.map((item, index) => {
                                // Safety check - ensure productData exists
                                if (!item.productData) {
                                    return null;
                                }

                                return (
                                    <div 
                                        key={index} 
                                        className='bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300'
                                    >
                                        <div className='flex gap-4 sm:gap-6'>
                                            {/* Product Image */}
                                            <Link 
                                                to={`/product/${item._id}`}
                                                className='flex-shrink-0'
                                            >
                                                <img 
                                                    src={item.productData.image?.[0]?.url || '/placeholder.jpg'} 
                                                    alt={item.productData.name || 'Product'}
                                                    className='w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg border border-gray-200 hover:scale-105 transition-transform duration-300'
                                                />
                                            </Link>

                                            {/* Product Details */}
                                            <div className='flex-1 min-w-0'>
                                                {/* Product Name & Category */}
                                                <div className='mb-2'>
                                                    <Link 
                                                        to={`/product/${item._id}`}
                                                        className='font-body font-semibold text-gray-900 text-base sm:text-lg hover:text-pink-600 transition-colors duration-300 line-clamp-2'
                                                    >
                                                        {item.productData.name || 'Unnamed Product'}
                                                    </Link>
                                                    {item.productData.category && (
                                                        <p className='font-body text-xs text-gray-500 mt-1 uppercase tracking-wider'>
                                                            {item.productData.category}
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Size & Price */}
                                                <div className='flex flex-wrap items-center gap-3 mb-3'>
                                                    <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-body font-medium bg-pink-100 text-pink-800'>
                                                        Size: {item.size}
                                                    </span>
                                                    <span className='font-body font-bold text-gray-900 text-lg'>
                                                        {currency}{item.productData.price || 0}
                                                    </span>
                                                </div>

                                                {/* Quantity Controls & Delete */}
                                                <div className='flex items-center justify-between'>
                                                    {/* Quantity Controls */}
                                                    <div className='flex items-center gap-2'>
                                                        <button
                                                            onClick={() => updateQuantity(item._id, item.size, Math.max(0, item.quantity - 1))}
                                                            className='w-8 h-8 flex items-center justify-center rounded-lg border-2 border-gray-300 hover:border-pink-500 hover:bg-pink-50 text-gray-600 hover:text-pink-600 transition-all duration-300'
                                                        >
                                                            <Minus className='w-4 h-4' />
                                                        </button>
                                                        
                                                        <span className='w-12 text-center font-body font-semibold text-gray-900'>
                                                            {item.quantity}
                                                        </span>
                                                        
                                                        <button
                                                            onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)}
                                                            className='w-8 h-8 flex items-center justify-center rounded-lg border-2 border-gray-300 hover:border-pink-500 hover:bg-pink-50 text-gray-600 hover:text-pink-600 transition-all duration-300'
                                                        >
                                                            <Plus className='w-4 h-4' />
                                                        </button>
                                                    </div>

                                                    {/* Delete Button */}
                                                    <button
                                                        onClick={() => updateQuantity(item._id, item.size, 0)}
                                                        className='p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-300'
                                                        title='Remove from cart'
                                                    >
                                                        <Trash2 className='w-5 h-5' />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Order Summary Sidebar */}
                        <div className='lg:col-span-1'>
                            <div className='sticky top-24'>
                                <CartTotal />
                                
                                {/* Checkout Button */}
                                <button
                                    onClick={() => navigate('/place-order')}
                                    className='w-full mt-6 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-body font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2'
                                >
                                    <span>Proceed to Checkout</span>
                                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                    </svg>
                                </button>

                                {/* Continue Shopping */}
                                <Link
                                    to='/collection'
                                    className='block w-full mt-3 bg-white hover:bg-gray-50 text-gray-800 font-body font-medium py-4 rounded-xl border-2 border-gray-300 hover:border-pink-500 transition-all duration-300 text-center'
                                >
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;