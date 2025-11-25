import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/asset/assets';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendUrl } from '../config/const';

const PlaceOrder = () => {
    const [method, setMethod] = useState('cod');
    const { token, cartItems, getCartAmount, deliveryFee, products, setCartItems } = useContext(ShopContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
    });

    const onchangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    };

    const initPay = (order) => {
        const options = {
            key: "rzp_test_RXD61QMWqsvwRO",
            amount: order.amount,
            currency: order.currency,
            name: "Order Payment",
            description: "Order Payment",
            order_id: order.id,
            receipt: order.receipt,
            handler: async (response) => {
                try {
                    const { data } = await axios.post(`${backendUrl}/api/order/verifyRazorpay`, response, { headers: { token } });
                    if (data.success) {
                        navigate('/orders');
                        setCartItems({});
                        toast.success('Order placed successfully!');
                    }
                } catch (error) {
                    console.log(error);
                    toast.error(error.message);
                }
            },
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            let orderItems = [];
            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        const itemInfo = structuredClone(products.find(product => product._id === items));
                        if (itemInfo) {
                            itemInfo.size = item;
                            itemInfo.quantity = cartItems[items][item];
                            orderItems.push(itemInfo);
                        }
                    }
                }
            }

            let orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount() + deliveryFee
            };

            switch (method) {
                case 'cod':
                    const responseCOD = await axios.post(`${backendUrl}/api/order/place`, orderData, { headers: { token } });
                    if (responseCOD.data.success) {
                        setCartItems({});
                        navigate('/orders');
                        toast.success('Order placed successfully!');
                    } else {
                        toast.error(responseCOD.data.message);
                    }
                    break;

                case 'razorpay':
                    const responseRazorpay = await axios.post(`${backendUrl}/api/order/razorpay`, orderData, { headers: { token } });
                    if (responseRazorpay.data.success) {
                        initPay(responseRazorpay.data.order);
                    }
                    break;

                default:
                    break;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='min-h-screen bg-gradient-to-b from-white to-gray-50 py-8 px-4 sm:px-6 lg:px-8'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Page Header */}
                <div className='mb-8'>
                    <Title 
                        text1="CHECKOUT" 
                        text2="PAGE"
                        description="Complete your order and get your products delivered"
                    />
                </div>

                <form onSubmit={onSubmitHandler} className='grid lg:grid-cols-3 gap-8'>
                    {/* Left Section - Delivery Information */}
                    <div className='lg:col-span-2 space-y-6'>
                        {/* Delivery Information Card */}
                        <div className='bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100'>
                            <div className='flex items-center gap-3 mb-6'>
                                <div className='w-10 h-10 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center'>
                                    <svg className='w-6 h-6 text-pink-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                                    </svg>
                                </div>
                                <h2 className='font-heading text-2xl font-bold text-gray-900'>Delivery Information</h2>
                            </div>

                            <div className='space-y-4'>
                                {/* Name Fields */}
                                <div className='grid sm:grid-cols-2 gap-4'>
                                    <div>
                                        <label className='block text-sm font-semibold text-gray-700 font-body mb-2'>
                                            First Name *
                                        </label>
                                        <input
                                            type='text'
                                            name='firstName'
                                            value={formData.firstName}
                                            onChange={onchangeHandler}
                                            className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors font-body'
                                            placeholder='John'
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className='block text-sm font-semibold text-gray-700 font-body mb-2'>
                                            Last Name *
                                        </label>
                                        <input
                                            type='text'
                                            name='lastName'
                                            value={formData.lastName}
                                            onChange={onchangeHandler}
                                            className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors font-body'
                                            placeholder='Doe'
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className='block text-sm font-semibold text-gray-700 font-body mb-2'>
                                        Email Address *
                                    </label>
                                    <input
                                        type='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={onchangeHandler}
                                        className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors font-body'
                                        placeholder='john@example.com'
                                        required
                                    />
                                </div>

                                {/* Street */}
                                <div>
                                    <label className='block text-sm font-semibold text-gray-700 font-body mb-2'>
                                        Street Address *
                                    </label>
                                    <input
                                        type='text'
                                        name='street'
                                        value={formData.street}
                                        onChange={onchangeHandler}
                                        className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors font-body'
                                        placeholder='123 Main Street'
                                        required
                                    />
                                </div>

                                {/* City & State */}
                                <div className='grid sm:grid-cols-2 gap-4'>
                                    <div>
                                        <label className='block text-sm font-semibold text-gray-700 font-body mb-2'>
                                            City *
                                        </label>
                                        <input
                                            type='text'
                                            name='city'
                                            value={formData.city}
                                            onChange={onchangeHandler}
                                            className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors font-body'
                                            placeholder='New York'
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className='block text-sm font-semibold text-gray-700 font-body mb-2'>
                                            State *
                                        </label>
                                        <input
                                            type='text'
                                            name='state'
                                            value={formData.state}
                                            onChange={onchangeHandler}
                                            className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors font-body'
                                            placeholder='NY'
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Zipcode & Country */}
                                <div className='grid sm:grid-cols-2 gap-4'>
                                    <div>
                                        <label className='block text-sm font-semibold text-gray-700 font-body mb-2'>
                                            Zipcode *
                                        </label>
                                        <input
                                            type='text'
                                            name='zipcode'
                                            value={formData.zipcode}
                                            onChange={onchangeHandler}
                                            className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors font-body'
                                            placeholder='10001'
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className='block text-sm font-semibold text-gray-700 font-body mb-2'>
                                            Country *
                                        </label>
                                        <input
                                            type='text'
                                            name='country'
                                            value={formData.country}
                                            onChange={onchangeHandler}
                                            className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors font-body'
                                            placeholder='USA'
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className='block text-sm font-semibold text-gray-700 font-body mb-2'>
                                        Phone Number *
                                    </label>
                                    <input
                                        type='tel'
                                        name='phone'
                                        value={formData.phone}
                                        onChange={onchangeHandler}
                                        className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors font-body'
                                        placeholder='+1 (555) 123-4567'
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Payment Method Card */}
                        <div className='bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100'>
                            <div className='flex items-center gap-3 mb-6'>
                                <div className='w-10 h-10 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center'>
                                    <svg className='w-6 h-6 text-pink-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' />
                                    </svg>
                                </div>
                                <h2 className='font-heading text-2xl font-bold text-gray-900'>Payment Method</h2>
                            </div>

                            <div className='space-y-3'>

                                {/* Razorpay */}
                                <button
                                    type='button'
                                    onClick={() => setMethod('razorpay')}
                                    className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 ${
                                        method === 'razorpay'
                                            ? 'border-pink-500 bg-pink-50'
                                            : 'border-gray-200 hover:border-pink-300'
                                    }`}
                                >
                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                        method === 'razorpay' ? 'border-pink-500' : 'border-gray-300'
                                    }`}>
                                        {method === 'razorpay' && (
                                            <div className='w-3 h-3 rounded-full bg-pink-500'></div>
                                        )}
                                    </div>
                                    <img src={assets.razorpay_logo} className='h-6' alt='Razorpay' />
                                </button>

                                {/* Cash on Delivery */}
                                <button
                                    type='button'
                                    onClick={() => setMethod('cod')}
                                    className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 ${
                                        method === 'cod'
                                            ? 'border-pink-500 bg-pink-50'
                                            : 'border-gray-200 hover:border-pink-300'
                                    }`}
                                >
                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                        method === 'cod' ? 'border-pink-500' : 'border-gray-300'
                                    }`}>
                                        {method === 'cod' && (
                                            <div className='w-3 h-3 rounded-full bg-pink-500'></div>
                                        )}
                                    </div>
                                    <span className='font-body font-semibold text-gray-700'>Cash on Delivery</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Order Summary */}
                    <div className='lg:col-span-1'>
                        <div className='sticky top-8 space-y-6'>
                            <CartTotal />
                            
                            <button
                                type='submit'
                                disabled={loading}
                                className='w-full bg-gradient-to-r cursor-pointer from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-body font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2'
                            >
                                {loading ? (
                                    <>
                                        <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                                        </svg>
                                        Place Order
                                    </>
                                )}
                            </button>

                            {/* Security Badge */}
                            <div className='bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200'>
                                <div className='flex items-center gap-3'>
                                    <svg className='w-6 h-6 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                                    </svg>
                                    <div>
                                        <p className='font-body font-semibold text-green-900 text-sm'>Secure Checkout</p>
                                        <p className='font-body text-green-700 text-xs'>Your information is protected</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PlaceOrder;
