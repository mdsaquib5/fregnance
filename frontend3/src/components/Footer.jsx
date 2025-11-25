import React from 'react';
import { assets } from '../assets/asset/assets';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';
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
                                    <Facebook className='w-5 h-5' />
                                </a>
                                <a href='#' className='w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300'>
                                    <Instagram className='w-5 h-5' />
                                </a>
                                <a href='#' className='w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300'>
                                    <Twitter className='w-5 h-5' />
                                </a>
                                <a href='#' className='w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300'>
                                    <Youtube className='w-5 h-5' />
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
                                    <Link to={'/'} className='text-gray-400 hover:text-pink-500 transition-colors duration-300 text-sm'>
                                        Shipping & Delivery
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/'} className='text-gray-400 hover:text-pink-500 transition-colors duration-300 text-sm'>
                                        Returns & Exchanges
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/'} className='text-gray-400 hover:text-pink-500 transition-colors duration-300 text-sm'>
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/'} className='text-gray-400 hover:text-pink-500 transition-colors duration-300 text-sm'>
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className='font-heading text-white text-lg font-bold mb-6'>Get In Touch</h3>
                            <ul className='space-y-4'>
                                <li className='flex items-start gap-3'>
                                    <MapPin className='w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0' />
                                    <span className='text-gray-400 text-sm'>
                                        123 Fragrance Street, New York, NY 10001
                                    </span>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <Phone className='w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0' />
                                    <Link to='tel:+8801234567890' className='text-gray-400 hover:text-pink-500 transition-colors duration-300 text-sm'>
                                        +880 123 456 7890
                                    </Link>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <Mail className='w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0' />
                                    <Link to='mailto:info@odora.com' className='text-gray-400 hover:text-pink-500 transition-colors duration-300 text-sm'>
                                        info@odora.com
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='border-t border-gray-800'>
                    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-6'>
                        <p className='text-gray-400 text-sm text-center'>
                            © {currentYear} Odora Perfumes. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer></>
    );
};

export default Footer;