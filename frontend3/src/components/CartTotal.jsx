import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const CartTotal = () => {
    const { getCartAmount, currency, deliveryFee } = useContext(ShopContext);

    return (
        <div className='w-full bg-gradient-to-br from-gray-50 to-pink-50/30 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200'>
            {/* Header */}
            <div className='mb-6 pb-4 border-b-2 border-pink-200'>
                <h3 className='font-heading text-2xl sm:text-3xl font-bold text-gray-900'>
                    Order Summary
                </h3>
                <p className='text-sm text-gray-500 font-body mt-1'>
                    Review your cart totals
                </p>
            </div>

            {/* Price Breakdown */}
            <div className='space-y-4 mb-6'>
                {/* Subtotal */}
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' />
                        </svg>
                        <span className='font-body text-gray-700 text-sm sm:text-base'>Subtotal</span>
                    </div>
                    <span className='font-body font-semibold text-gray-900 text-base sm:text-lg'>
                        {currency}{getCartAmount()}
                    </span>
                </div>

                {/* Shipping Fee */}
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0' />
                        </svg>
                        <span className='font-body text-gray-700 text-sm sm:text-base'>Shipping Fee</span>
                    </div>
                    <span className='font-body font-semibold text-gray-900 text-base sm:text-lg'>
                        {currency}{deliveryFee}
                    </span>
                </div>

                {/* Divider */}
                <div className='border-t border-dashed border-gray-300 my-4'></div>

                {/* Total */}
                <div className='flex justify-between items-center bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-4'>
                    <div className='flex items-center gap-2'>
                        <svg className='w-6 h-6 text-pink-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                        <span className='font-heading font-bold text-gray-900 text-lg sm:text-xl'>Total</span>
                    </div>
                    <span className='font-heading font-bold text-pink-600 text-xl sm:text-2xl'>
                        {currency}{getCartAmount() === 0 ? 0 : getCartAmount() + deliveryFee}
                    </span>
                </div>
            </div>

            {/* Additional Info */}
            {getCartAmount() > 0 && (
                <div className='mt-6 pt-4 border-t border-gray-200'>
                    <div className='flex items-start gap-2 text-xs text-gray-600 font-body'>
                        <svg className='w-4 h-4 text-green-500 mt-0.5 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                        </svg>
                        <p className='leading-relaxed'>
                            All prices include applicable taxes. Free shipping on orders over {currency}500!
                        </p>
                    </div>
                </div>
            )}

            {/* Empty Cart Message */}
            {getCartAmount() === 0 && (
                <div className='text-center py-4'>
                    <svg className='w-16 h-16 mx-auto text-gray-300 mb-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' />
                    </svg>
                    <p className='text-gray-500 font-body text-sm'>Your cart is empty</p>
                </div>
            )}
        </div>
    );
};

export default CartTotal;