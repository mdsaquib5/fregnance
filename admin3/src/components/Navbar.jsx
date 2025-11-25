import React from 'react';
import { assets } from '../assets/assets';
import { LogOut, Shield, Menu } from 'lucide-react';

const Navbar = ({ setToken }) => {

    return (
        <nav className='bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between py-4'>
                    {/* Logo Section */}
                    <div className='flex items-center gap-3'>
                        <img
                            src={assets.logo}
                            alt="Logo"
                            className='h-10 sm:h-12 w-auto'
                        />
                        <div className='hidden sm:flex items-center gap-2 border-l border-gray-300 pl-3'>
                            <Shield className='w-5 h-5 text-pink-600' />
                            <span className='font-body text-sm font-semibold text-gray-700'>Admin Panel</span>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className='flex items-center gap-4'>
                        {/* Admin Badge - Hidden on mobile */}
                        <div className='hidden md:flex items-center gap-2 bg-pink-50 px-4 py-2 rounded-full'>
                            <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
                            <span className='font-body text-sm text-gray-700'>Administrator</span>
                        </div>

                        {/* Logout Button */}
                        <button
                            onClick={() => setToken('')}
                            className='flex items-center gap-2 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-body font-medium px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg'
                        >
                            <LogOut className='w-4 h-4' />
                            <span>Logout</span>
                        </button>

                        {/* Mobile Menu Button - Optional */}
                        <button className='sm:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors'>
                            <Menu className='w-6 h-6 text-gray-700' />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;