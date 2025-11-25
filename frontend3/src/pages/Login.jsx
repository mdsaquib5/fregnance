import React, { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
    const [currentState, setCurrentState] = useState('Login');
    const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
    const [showPassword, setShowPassword] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            if (currentState === 'Sign Up') {
                const response = await axios.post(`${backendUrl}/api/user/register`, { name, email, password });
                if (response.data.success) {
                    setToken(response.data.token);
                    localStorage.setItem('token', response.data.token);
                    toast.success('Account created successfully!');
                } else {
                    toast.error(response.data.message);
                }
            } else {
                const response = await axios.post(`${backendUrl}/api/user/login`, { email, password });
                if (response.data.success) {
                    setToken(response.data.token);
                    localStorage.setItem('token', response.data.token);
                    toast.success(response.data.message);
                } else {
                    toast.error(response.data.message);
                }
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || 'Something went wrong');
        }
    };

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token, navigate]);

    return (
        <div className='min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-md w-full'>
                {/* Card Container */}
                <div className='bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-gray-100'>
                    {/* Logo/Brand Section */}
                    <div className='text-center mb-8'>
                        <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl mb-4'>
                            <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                            </svg>
                        </div>
                        <h2 className='font-heading text-3xl font-bold text-gray-900 mb-2'>
                            {currentState === 'Login' ? 'Welcome Back' : 'Create Account'}
                        </h2>
                        <p className='text-gray-600 font-body text-sm'>
                            {currentState === 'Login' 
                                ? 'Sign in to access your account' 
                                : 'Join us and start shopping'}
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={onSubmitHandler} className='space-y-5'>
                        {/* Name Field (Sign Up only) */}
                        {currentState === 'Sign Up' && (
                            <div>
                                <label htmlFor='name' className='block text-sm font-semibold text-gray-700 font-body mb-2'>
                                    Full Name
                                </label>
                                <div className='relative'>
                                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                        <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                                        </svg>
                                    </div>
                                    <input
                                        id='name'
                                        type='text'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors font-body'
                                        placeholder='John Doe'
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        {/* Email Field */}
                        <div>
                            <label htmlFor='email' className='block text-sm font-semibold text-gray-700 font-body mb-2'>
                                Email Address
                            </label>
                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                    <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                                    </svg>
                                </div>
                                <input
                                    id='email'
                                    type='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors font-body'
                                    placeholder='john@example.com'
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor='password' className='block text-sm font-semibold text-gray-700 font-body mb-2'>
                                Password
                            </label>
                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                    <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                                    </svg>
                                </div>
                                <input
                                    id='password'
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors font-body'
                                    placeholder='••••••••'
                                    required
                                />
                                <button
                                    type='button'
                                    onClick={() => setShowPassword(!showPassword)}
                                    className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600'
                                >
                                    {showPassword ? (
                                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21' />
                                        </svg>
                                    ) : (
                                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password / Switch State */}
                        <div className='flex items-center justify-between text-sm'>
                            {currentState === 'Login' && (
                                <button type='button' className='text-pink-600 hover:text-pink-700 font-semibold font-body transition-colors'>
                                    Forgot Password?
                                </button>
                            )}
                            <button
                                type='button'
                                onClick={() => setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')}
                                className='text-pink-600 hover:text-pink-700 font-semibold cursor-pointer font-body transition-colors ml-auto'
                            >
                                {currentState === 'Login' ? 'Create Account' : 'Login Here'}
                            </button>
                        </div>

                        {/* Submit Button */}
                        <button
                            type='submit'
                            className='w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-body font-semibold py-4 rounded-xl transition-all cursor-pointer duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2'
                        >
                            {currentState === 'Login' ? 'Sign In' : 'Create Account'}
                            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                            </svg>
                        </button>
                    </form>

                    {/* Divider */}
                    <div className='relative my-6'>
                        <div className='absolute inset-0 flex items-center'>
                            <div className='w-full border-t border-gray-200'></div>
                        </div>
                        <div className='relative flex justify-center text-sm'>
                            <span className='px-4 bg-white text-gray-500 font-body'>Or continue with</span>
                        </div>
                    </div>

                    {/* Social Login Buttons */}
                    <div className='grid grid-cols-2 gap-3'>
                        <button
                            type='button'
                            className='flex items-center cursor-pointer justify-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-body text-sm font-semibold text-gray-700'
                        >
                            <svg className='w-5 h-5' viewBox='0 0 24 24'>
                                <path fill='#4285F4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/>
                                <path fill='#34A853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/>
                                <path fill='#FBBC05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/>
                                <path fill='#EA4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/>
                            </svg>
                            Google
                        </button>
                        <button
                            type='button'
                            className='flex items-center cursor-pointer justify-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-body text-sm font-semibold text-gray-700'
                        >
                            <svg className='w-5 h-5' fill='#1877F2' viewBox='0 0 24 24'>
                                <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/>
                            </svg>
                            Facebook
                        </button>
                    </div>
                </div>

                {/* Terms */}
                <p className='mt-6 text-center text-xs text-gray-500 font-body'>
                    By continuing, you agree to our{' '}
                    <a href='#' className='text-pink-600 hover:text-pink-700 font-semibold'>Terms of Service</a>
                    {' '}and{' '}
                    <a href='#' className='text-pink-600 hover:text-pink-700 font-semibold'>Privacy Policy</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
