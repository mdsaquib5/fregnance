import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Mail, Lock, Shield, Eye, EyeOff } from 'lucide-react';
import {backendUrl} from "../config/const";

const Login = ({ setToken }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);
            const response = await axios.post(`${backendUrl}/api/user/admin`, {
                email,
                password
            });
            // console.log(response);
            if (response.data.success) {
                setToken(response.data.token);
                toast.success('Login successful!');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className='min-h-screen flex items-center justify-center w-full bg-gradient-to-br from-pink-50 via-white to-pink-100 py-12 px-4 sm:px-6 lg:px-8'>
                <div className='w-full max-w-md'>
                    {/* Logo/Brand Section */}
                    <div className='text-center mb-8'>
                        <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl mb-4 shadow-lg'>
                            <Shield className='w-10 h-10 text-white' />
                        </div>
                        <h1 className='font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-2'>
                            Admin Panel
                        </h1>
                        <p className='font-body text-sm text-gray-600'>
                            Sign in to manage your perfume store
                        </p>
                    </div>

                    {/* Login Card */}
                    <div className='bg-white shadow-2xl rounded-2xl p-8 sm:p-10 border border-gray-100'>
                        <form onSubmit={onSubmitHandler} className='space-y-6'>
                            {/* Email Field */}
                            <div>
                                <label className='block text-sm font-body font-semibold text-gray-700 mb-2'>
                                    Email Address
                                </label>
                                <div className='relative'>
                                    <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                                        <Mail className='h-5 w-5 text-gray-400' />
                                    </div>
                                    <input 
                                        className='w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all duration-300 font-body text-gray-900 placeholder-gray-400'
                                        type="email" 
                                        placeholder='admin@example.com' 
                                        required 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        value={email} 
                                        autoComplete='email'
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div>
                                <label className='block text-sm font-body font-semibold text-gray-700 mb-2'>
                                    Password
                                </label>
                                <div className='relative'>
                                    <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                                        <Lock className='h-5 w-5 text-gray-400' />
                                    </div>
                                    <input 
                                        className='w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all duration-300 font-body text-gray-900 placeholder-gray-400'
                                        type={showPassword ? "text" : "password"}
                                        placeholder='Enter your password' 
                                        required 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        value={password} 
                                        autoComplete='current-password'
                                    />
                                    <button
                                        type='button'
                                        onClick={() => setShowPassword(!showPassword)}
                                        className='absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors'
                                    >
                                        {showPassword ? (
                                            <EyeOff className='h-5 w-5' />
                                        ) : (
                                            <Eye className='h-5 w-5' />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <input
                                        id='remember-me'
                                        name='remember-me'
                                        type='checkbox'
                                        className='h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded cursor-pointer'
                                    />
                                    <label htmlFor='remember-me' className='ml-2 block text-sm font-body text-gray-700 cursor-pointer'>
                                        Remember me
                                    </label>
                                </div>
                                <div className='text-sm'>
                                    <a href='#' className='font-body font-medium text-pink-600 hover:text-pink-700 transition-colors'>
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            {/* Login Button */}
                            <button 
                                className='w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-body font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
                                type='submit'
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                                        <span>Signing in...</span>
                                    </>
                                ) : (
                                    <>
                                        <Shield className='w-5 h-5' />
                                        <span>Sign In to Admin Panel</span>
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Footer Info */}
                        <div className='mt-6 pt-6 border-t border-gray-200'>
                            <p className='text-center text-xs font-body text-gray-500'>
                                Protected by enterprise-level security
                            </p>
                        </div>
                    </div>

                    {/* Bottom Text */}
                    <p className='mt-8 text-center text-sm font-body text-gray-600'>
                        Need help? <a href='#' className='font-medium text-pink-600 hover:text-pink-700 transition-colors'>Contact Support</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login;