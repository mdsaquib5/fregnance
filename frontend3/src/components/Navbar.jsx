import React, { useState, useContext } from 'react';
import { assets } from '../assets/asset/assets';
import { NavLink, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import { Search, User, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [showMenMenu, setShowMenMenu] = useState(false);
    const [showWomenMenu, setShowWomenMenu] = useState(false);
    // const [showCollectionMenu, setShowCollectionMenu] = useState(false);
    const { setShowSearch, getCartCount, setToken, setCartItems, navigate, token } = useContext(ShopContext);

    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
        navigate('/login');
        toast.success("User Logout successfully");
    }

    // console.log("token is", token);

    return (
        <>
            {/* Top Banner */}
            <div className='bg-gradient-to-r from-pink-50 via-rose-50 to-pink-50 text-center py-2 sm:py-3 px-4'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    <p className='text-xs sm:text-sm text-gray-700 font-light tracking-wide font-body'>
                        ✨ Free Shipping on Orders Over $50 | Exclusive Fragrances | Premium Quality ✨
                    </p>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className='bg-white shadow-sm sticky top-0 z-50'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex items-center justify-between py-3 sm:py-4'>
                        {/* Logo */}
                        <Link to={'/'} className='flex-shrink-0'>
                            <img src={assets.logo} alt="Logo" className="h-8 sm:h-10 lg:h-12 w-auto" />
                        </Link>

                        {/* Desktop Navigation */}
                        <ul className='hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-gray-800 font-body'>
                            <NavLink
                                to={'/'}
                                className={({ isActive }) => `uppercase relative py-2 transition-colors duration-200 hover:text-pink-600 ${isActive ? 'text-pink-600' : ''}`}
                            >
                                <span>HOME</span>
                                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full'></span>
                            </NavLink>

                            {/* Men's Mega Menu */}
                            <li
                                className='relative group'
                                onMouseEnter={() => setShowMenMenu(true)}
                                onMouseLeave={() => setShowMenMenu(false)}
                            >
                                <button className='py-2 transition-colors uppercase duration-200 hover:text-pink-600 flex items-center gap-1'>
                                    MEN
                                    <ChevronDown className='w-4 h-4 transition-transform group-hover:rotate-180' />
                                </button>
                                {showMenMenu && (
                                    <div className='absolute left-0 top-full pt-2 w-64'>
                                        <div className='bg-white rounded-lg shadow-xl border border-gray-100 py-4 px-2'>
                                            <div className='space-y-1'>
                                                <Link to='/collection' className='block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded transition-colors'>
                                                    Perfume 1
                                                </Link>
                                                <Link to='/collection' className='block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded transition-colors'>
                                                    Perfume 2
                                                </Link>
                                                <Link to='/collection' className='block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded transition-colors'>
                                                    Perfume 3
                                                </Link>
                                                <Link to='/collection' className='block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded transition-colors'>
                                                    Perfume 4
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </li>

                            {/* Women's Mega Menu */}
                            <li
                                className='relative group'
                                onMouseEnter={() => setShowWomenMenu(true)}
                                onMouseLeave={() => setShowWomenMenu(false)}
                            >
                                <button className='py-2 transition-colors uppercase duration-200 hover:text-pink-600 flex items-center gap-1'>
                                    WOMEN
                                    <ChevronDown className='w-4 h-4 transition-transform group-hover:rotate-180' />
                                </button>
                                {showWomenMenu && (
                                    <div className='absolute left-0 top-full pt-2 w-64'>
                                        <div className='bg-white rounded-lg shadow-xl border border-gray-100 py-4 px-2'>
                                            <div className='space-y-1'>
                                                <Link to='/collection' className='block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded transition-colors'>
                                                    Perfume 1
                                                </Link>
                                                <Link to='/collection' className='block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded transition-colors'>
                                                    Perfume 2
                                                </Link>
                                                <Link to='/collection' className='block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded transition-colors'>
                                                    Perfume 3
                                                </Link>
                                                <Link to='/collection' className='block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded transition-colors'>
                                                    Perfume 4
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </li>

                            {/* Collection Mega Menu */}
                           <NavLink
                                to={'/collection'}
                                className={({ isActive }) => `py-2 uppercase transition-colors duration-200 hover:text-pink-600 ${isActive ? 'text-pink-600' : ''}`}
                            >
                                Collection
                            </NavLink>

                            <NavLink
                                to={'/about'}
                                className={({ isActive }) => `py-2 uppercase transition-colors duration-200 hover:text-pink-600 ${isActive ? 'text-pink-600' : ''}`}
                            >
                                ABOUT
                            </NavLink>

                            <NavLink
                                to={'/contact'}
                                className={({ isActive }) => `py-2 uppercase transition-colors duration-200 hover:text-pink-600 ${isActive ? 'text-pink-600' : ''}`}
                            >
                                CONTACT
                            </NavLink>
                        </ul>

                        {/* Right Icons */}
                        <div className='flex items-center gap-3 sm:gap-4 lg:gap-6'>
                            {/* Search Icon */}
                            <button
                                onClick={() => setShowSearch(true)}
                                className='p-2 hover:bg-pink-50 rounded-full transition-colors duration-200 group'
                                aria-label='Search'
                            >
                                <Search className="w-5 h-5 text-gray-700 group-hover:text-pink-600 group-hover:scale-110 transition-all" />
                            </button>

                            {/* Profile/Account Dropdown */}
                            <div className='relative group'>
                                <button
                                    onClick={() => token ? null : navigate('/login')}
                                    className='p-2 hover:bg-pink-50 rounded-full transition-colors duration-200'
                                    aria-label='Account'
                                >
                                    <User className="w-5 h-5 text-gray-700 group-hover:text-pink-600 group-hover:scale-110 transition-all" />
                                </button>

                                {/* Dropdown menu */}
                                {token && (
                                    <div className='opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute right-0 top-full pt-2 transition-all duration-200'>
                                        <div className='flex flex-col gap-1 w-44 py-3 px-2 bg-white shadow-xl rounded-lg border border-gray-100 font-body'>
                                            <Link to='/profile' className='px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded transition-colors'>
                                                My Profile
                                            </Link>
                                            <Link to='/orders' className='px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded transition-colors'>
                                                Orders
                                            </Link>
                                            <button
                                                onClick={logout}
                                                className='px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded transition-colors text-left w-full'
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Cart Icon */}
                            <Link to={'/cart'} className='relative p-2 hover:bg-pink-50 rounded-full transition-colors duration-200 group'>
                                <ShoppingCart className='w-5 h-5 text-gray-700 group-hover:text-pink-600 group-hover:scale-110 transition-all' />
                                {getCartCount() > 0 && (
                                    <span className='absolute -top-1 -right-1 min-w-[20px] h-5 px-1 flex items-center justify-center text-center bg-pink-600 text-white text-xs font-semibold rounded-full font-body'>
                                        {getCartCount()}
                                    </span>
                                )}
                            </Link>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setVisible(true)}
                                className='lg:hidden p-2 hover:bg-pink-50 rounded-full transition-colors duration-200'
                                aria-label='Menu'
                            >
                                <Menu className='w-5 h-5 text-gray-700' />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar Menu */}
            <div className={`fixed top-0 right-0 bottom-0 bg-white z-50 transition-all duration-300 shadow-2xl ${visible ? 'w-full sm:w-80' : 'w-0'} overflow-hidden font-body`}>
                <div className='flex flex-col h-full'>
                    {/* Mobile Menu Header */}
                    <div className='flex items-center justify-between p-4 border-b border-gray-200'>
                        <h3 className='text-lg font-semibold text-gray-800 font-heading'>Menu</h3>
                        <button
                            onClick={() => setVisible(false)}
                            className='p-2 hover:bg-gray-100 rounded-full transition-colors'
                            aria-label='Close menu'
                        >
                            <X className='w-6 h-6 text-gray-600' />
                        </button>
                    </div>

                    {/* Mobile Menu Items */}
                    <div className='flex-1 overflow-y-auto'>
                        <div className='py-2'>
                            <NavLink
                                className={({ isActive }) => `block py-3 px-6 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors border-l-4 ${isActive ? 'border-pink-600 bg-pink-50 text-pink-600' : 'border-transparent'}`}
                                onClick={() => setVisible(false)}
                                to={'/'}
                            >
                                Home
                            </NavLink>

                            <NavLink
                                className={({ isActive }) => `block py-3 px-6 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors border-l-4 ${isActive ? 'border-pink-600 bg-pink-50 text-pink-600' : 'border-transparent'}`}
                                onClick={() => setVisible(false)}
                                to={'/collection?category=Men'}
                            >
                                Men's Perfumes
                            </NavLink>

                            <NavLink
                                className={({ isActive }) => `block py-3 px-6 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors border-l-4 ${isActive ? 'border-pink-600 bg-pink-50 text-pink-600' : 'border-transparent'}`}
                                onClick={() => setVisible(false)}
                                to={'/collection?category=Women'}
                            >
                                Women's Perfumes
                            </NavLink>

                            <NavLink
                                className={({ isActive }) => `block py-3 px-6 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors border-l-4 ${isActive ? 'border-pink-600 bg-pink-50 text-pink-600' : 'border-transparent'}`}
                                onClick={() => setVisible(false)}
                                to={'/collection'}
                            >
                                All Collections
                            </NavLink>

                            <NavLink
                                className={({ isActive }) => `block py-3 px-6 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors border-l-4 ${isActive ? 'border-pink-600 bg-pink-50 text-pink-600' : 'border-transparent'}`}
                                onClick={() => setVisible(false)}
                                to={'/about'}
                            >
                                About
                            </NavLink>

                            <NavLink
                                className={({ isActive }) => `block py-3 px-6 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors border-l-4 ${isActive ? 'border-pink-600 bg-pink-50 text-pink-600' : 'border-transparent'}`}
                                onClick={() => setVisible(false)}
                                to={'/contact'}
                            >
                                Contact
                            </NavLink>
                        </div>
                    </div>

                    {/* Mobile Menu Footer */}
                    {token && (
                        <div className='border-t border-gray-200 p-4 space-y-2'>
                            <Link
                                to='/orders'
                                onClick={() => setVisible(false)}
                                className='block py-2 px-4 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded transition-colors'
                            >
                                My Orders
                            </Link>
                            <button
                                onClick={() => { logout(); setVisible(false); }}
                                className='w-full py-2 px-4 text-sm bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-medium'
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {visible && (
                <div
                    className='fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300'
                    onClick={() => setVisible(false)}
                ></div>
            )}
        </>
    )
}

export default Navbar;