import React from 'react';
import { assets } from '../assets/asset/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className='bg-gray-900 text-gray-300'>
                {/* Main Footer Content */}
                <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12'>
                        {/* Brand Section */}
                        <div className='lg:col-span-1'>
                            <img src={assets.logo} className='mb-6 w-32 brightness-0 invert' alt='Odora Logo' />
                            <p className='text-gray-400 text-sm leading-relaxed mb-6'>
                                Discover the art of fragrance with our curated collection of premium perfumes. Quality scents that tell your story.
                            </p>
                            {/* Social Media Icons */}
                            <div className='flex gap-4'>
                                <a href='#' className='w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300'>
                                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                                        <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                                    </svg>
                                </a>
                                <a href='#' className='w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300'>
                                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                                        <path d='M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z' />
                                    </svg>
                                </a>
                                <a href='#' className='w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300'>
                                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                                        <path d='M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.70,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z' />
                                    </svg>
                                </a>
                                <a href='#' className='w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300'>
                                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                                        <path d='M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z' />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className='font-heading text-white text-lg font-bold mb-6'>Quick Links</h3>
                            <ul className='space-y-3'>
                                <li>
                                    <Link to='/' className='text-gray-400 hover:text-pink-500 transition-colors duration-300 text-sm'>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/collection' className='text-gray-400 hover:text-pink-500 transition-colors duration-300 text-sm'>
                                        Shop
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/about' className='text-gray-400 hover:text-pink-500 transition-colors duration-300 text-sm'>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/contact' className='text-gray-400 hover:text-pink-500 transition-colors duration-300 text-sm'>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Customer Service */}
                        <div>
                            <h3 className='font-heading text-white text-lg font-bold mb-6'>Customer Service</h3>
                            <ul className='space-y-3'>
                                <li>
                                    <a href='#' className='text-gray-400 hover:text-pink-500 transition-colors duration-300 text-sm'>
                                        Shipping & Delivery
                                    </a>
                                </li>
                                <li>
                                    <a href='#' className='text-gray-400 hover:text-pink-500 transition-colors duration-300 text-sm'>
                                        Returns & Exchanges
                                    </a>
                                </li>
                                <li>
                                    <a href='#' className='text-gray-400 hover:text-pink-500 transition-colors duration-300 text-sm'>
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href='#' className='text-gray-400 hover:text-pink-500 transition-colors duration-300 text-sm'>
                                        Terms & Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className='font-heading text-white text-lg font-bold mb-6'>Get In Touch</h3>
                            <ul className='space-y-4'>
                                <li className='flex items-start gap-3'>
                                    <svg className='w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                                    </svg>
                                    <span className='text-gray-400 text-sm'>
                                        123 Fragrance Street, New York, NY 10001
                                    </span>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <svg className='w-5 h-5 text-pink-500 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                                    </svg>
                                    <a href='tel:+8801234567890' className='text-gray-400 hover:text-pink-500 transition-colors duration-300 text-sm'>
                                        +880 123 456 7890
                                    </a>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <svg className='w-5 h-5 text-pink-500 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                                    </svg>
                                    <a href='mailto:info@odora.com' className='text-gray-400 hover:text-pink-500 transition-colors duration-300 text-sm'>
                                        info@odora.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='border-t border-gray-800'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
                        <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
                            <p className='text-gray-400 text-sm text-center sm:text-left'>
                                © {currentYear} Odora Perfumes. All rights reserved.
                            </p>
                            <div className='flex items-center gap-6'>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg' alt='Visa' className='h-6 opacity-70 hover:opacity-100 transition-opacity' />
                                <img src='https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg' alt='Mastercard' className='h-6 opacity-70 hover:opacity-100 transition-opacity' />
                                <img src='https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' alt='PayPal' className='h-6 opacity-70 hover:opacity-100 transition-opacity' />
                            </div>
                        </div>
                    </div>
                </div>
            </footer></>
    );
};

export default Footer;