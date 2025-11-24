import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('/collection')) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [location]);

    return showSearch && visible ? (
        <div className='border-b border-gray-200 bg-gradient-to-r from-pink-50 via-white to-pink-50 py-6 px-4 sm:px-6 lg:px-8 animate-fadeInLeft'>
            <div className='max-w-4xl mx-auto'>
                <div className='flex items-center gap-4'>
                    {/* Search Input Container */}
                    <div className='flex-1 relative'>
                        <div className='relative flex items-center bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-gray-200 focus-within:border-pink-400'>
                            {/* Search Icon */}
                            <div className='pl-5 pr-3'>
                                <svg 
                                    className='w-5 h-5 text-gray-400' 
                                    fill='none' 
                                    stroke='currentColor' 
                                    viewBox='0 0 24 24'
                                >
                                    <path 
                                        strokeLinecap='round' 
                                        strokeLinejoin='round' 
                                        strokeWidth={2} 
                                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' 
                                    />
                                </svg>
                            </div>

                            {/* Input Field */}
                            <input
                                type='text'
                                placeholder='Search for perfumes, brands, or scents...'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className='flex-1 py-3 pr-4 bg-transparent outline-none text-gray-700 placeholder-gray-400 font-body text-sm sm:text-base'
                            />

                            {/* Clear Button */}
                            {search && (
                                <button
                                    onClick={() => setSearch('')}
                                    className='pr-4 text-gray-400 hover:text-gray-600 transition-colors duration-200'
                                    aria-label='Clear search'
                                >
                                    <svg 
                                        className='w-5 h-5' 
                                        fill='none' 
                                        stroke='currentColor' 
                                        viewBox='0 0 24 24'
                                    >
                                        <path 
                                            strokeLinecap='round' 
                                            strokeLinejoin='round' 
                                            strokeWidth={2} 
                                            d='M6 18L18 6M6 6l12 12' 
                                        />
                                    </svg>
                                </button>
                            )}
                        </div>

                        {/* Search Hint */}
                        {search && (
                            <div className='absolute left-0 top-full mt-2 text-xs text-gray-500 font-body'>
                                Press Enter to search
                            </div>
                        )}
                    </div>

                    {/* Close Button - Uses existing setShowSearch logic */}
                    <button
                        onClick={() => setShowSearch(false)}
                        className='flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-pink-100 text-gray-600 hover:text-pink-600 transition-all duration-300 shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-pink-400'
                        aria-label='Close search'
                    >
                        <svg 
                            className='w-5 h-5' 
                            fill='none' 
                            stroke='currentColor' 
                            viewBox='0 0 24 24'
                        >
                            <path 
                                strokeLinecap='round' 
                                strokeLinejoin='round' 
                                strokeWidth={2} 
                                d='M6 18L18 6M6 6l12 12' 
                            />
                        </svg>
                    </button>
                </div>

                {/* Quick Search Suggestions */}
                {!search && (
                    <div className='mt-4 flex flex-wrap gap-2 justify-center'>
                        <span className='text-xs text-gray-500 font-body'>Popular:</span>
                        {['Floral', 'Woody', 'Fresh', 'Oriental'].map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setSearch(tag)}
                                className='px-3 py-1 text-xs font-body bg-white hover:bg-pink-100 text-gray-600 hover:text-pink-600 rounded-full border border-gray-200 hover:border-pink-400 transition-all duration-300'
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    ) : null;
};

export default SearchBar;
