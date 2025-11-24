import React, { useEffect, useState, useContext } from 'react';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Orders = () => {
    const { currency, backendUrl, token } = useContext(ShopContext);
    const [orderData, setOrderData] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadOrderData = async () => {
        try {
            if (!token) {
                setLoading(false);
                return null;
            }

            const response = await axios.post(`${backendUrl}/api/order/userOrders`, {}, { headers: { token } });
            
            if (response.data.success) {
                let allOrdersItem = [];
                response.data.orders.map((order) => {
                    order.items.map((item) => {
                        item['status'] = order.status;
                        item['date'] = order.date;
                        item['payment'] = order.payment;
                        item['paymentMethod'] = order.paymentMethod;
                        allOrdersItem.push(item);
                    });
                });
                setOrderData(allOrdersItem.reverse());
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'delivered':
                return 'bg-green-100 text-green-700 border-green-200';
            case 'shipped':
            case 'out for delivery':
                return 'bg-blue-100 text-blue-700 border-blue-200';
            case 'processing':
            case 'order placed':
                return 'bg-yellow-100 text-yellow-700 border-yellow-200';
            case 'cancelled':
                return 'bg-red-100 text-red-700 border-red-200';
            default:
                return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    const getStatusIcon = (status) => {
        switch (status?.toLowerCase()) {
            case 'delivered':
                return (
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                );
            case 'shipped':
            case 'out for delivery':
                return (
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0' />
                    </svg>
                );
            default:
                return (
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                );
        }
    };

    useEffect(() => {
        loadOrderData();
    }, [token]);

    return (
        <div className='min-h-screen bg-gradient-to-b from-white to-gray-50 py-8 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-6xl mx-auto'>
                {/* Page Header */}
                <div className='mb-8'>
                    <Title 
                        text1="MY" 
                        text2="ORDERS"
                        description="Track and manage your orders"
                    />
                </div>

                {loading ? (
                    // Loading State
                    <div className='space-y-4'>
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className='bg-white rounded-2xl p-6 shadow-md animate-pulse'>
                                <div className='flex gap-6'>
                                    <div className='w-24 h-24 bg-gray-200 rounded-lg'></div>
                                    <div className='flex-1 space-y-3'>
                                        <div className='h-4 bg-gray-200 rounded w-3/4'></div>
                                        <div className='h-4 bg-gray-200 rounded w-1/2'></div>
                                        <div className='h-4 bg-gray-200 rounded w-1/4'></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : orderData.length === 0 ? (
                    // Empty State
                    <div className='text-center py-16 bg-white rounded-2xl shadow-lg'>
                        <svg className='w-32 h-32 mx-auto text-gray-300 mb-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' />
                        </svg>
                        <h3 className='font-heading text-2xl font-bold text-gray-800 mb-3'>No Orders Yet</h3>
                        <p className='text-gray-600 font-body mb-8'>Start shopping and your orders will appear here</p>
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
                    // Orders List
                    <div className='space-y-6'>
                        {orderData.map((item, index) => (
                            <div 
                                key={index} 
                                className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden'
                            >
                                <div className='p-6'>
                                    <div className='flex flex-col lg:flex-row gap-6'>
                                        {/* Product Image */}
                                        <Link to={`/product/${item._id}`} className='flex-shrink-0'>
                                            <div className='w-full lg:w-32 h-32 bg-gray-100 rounded-xl overflow-hidden group'>
                                                <img 
                                                    src={item.image[0].url} 
                                                    alt={item.name}
                                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                                                />
                                            </div>
                                        </Link>

                                        {/* Order Details */}
                                        <div className='flex-1 space-y-4'>
                                            {/* Product Name */}
                                            <Link to={`/product/${item._id}`}>
                                                <h3 className='font-heading text-xl font-bold text-gray-900 hover:text-pink-600 transition-colors'>
                                                    {item.name}
                                                </h3>
                                            </Link>

                                            {/* Order Info Grid */}
                                            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                                                <div className='flex items-center gap-2'>
                                                    <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                                                    </svg>
                                                    <div>
                                                        <p className='text-xs text-gray-500 font-body'>Price</p>
                                                        <p className='font-semibold text-gray-900 font-body'>{currency}{item.price}</p>
                                                    </div>
                                                </div>

                                                <div className='flex items-center gap-2'>
                                                    <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z' />
                                                    </svg>
                                                    <div>
                                                        <p className='text-xs text-gray-500 font-body'>Size</p>
                                                        <p className='font-semibold text-gray-900 font-body'>{item.size}</p>
                                                    </div>
                                                </div>

                                                <div className='flex items-center gap-2'>
                                                    <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 20l4-16m2 16l4-16M6 9h14M4 15h14' />
                                                    </svg>
                                                    <div>
                                                        <p className='text-xs text-gray-500 font-body'>Quantity</p>
                                                        <p className='font-semibold text-gray-900 font-body'>{item.quantity}</p>
                                                    </div>
                                                </div>

                                                <div className='flex items-center gap-2'>
                                                    <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                                                    </svg>
                                                    <div>
                                                        <p className='text-xs text-gray-500 font-body'>Date</p>
                                                        <p className='font-semibold text-gray-900 font-body text-sm'>
                                                            {new Date(item.date).toLocaleDateString()}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Payment Method */}
                                            <div className='flex items-center gap-2'>
                                                <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' />
                                                </svg>
                                                <span className='text-sm text-gray-600 font-body'>
                                                    Payment: <span className='font-semibold text-gray-900'>{item.paymentMethod}</span>
                                                </span>
                                            </div>
                                        </div>

                                        {/* Status & Actions */}
                                        <div className='flex flex-col justify-between items-start lg:items-end gap-4 lg:w-48'>
                                            {/* Status Badge */}
                                            <div className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 ${getStatusColor(item.status)}`}>
                                                {getStatusIcon(item.status)}
                                                <span className='font-semibold text-sm font-body capitalize'>
                                                    {item.status}
                                                </span>
                                            </div>

                                            {/* Track Order Button */}
                                            <button
                                                onClick={loadOrderData}
                                                className='w-full lg:w-auto bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-body font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2'
                                            >
                                                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                                                </svg>
                                                Track Order
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Orders;
