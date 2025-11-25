import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [showFilters, setShowFilters] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relavent');

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory((prev) => prev.filter((item) => item !== e.target.value));
        } else {
            setCategory((prev) => [...prev, e.target.value]);
        }
    };

    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
        } else {
            setSubCategory((prev) => [...prev, e.target.value]);
        }
    };

    const applyFilter = () => {
        let productsCopy = products.slice();

        if (showSearch && search) {
            productsCopy = productsCopy.filter((item) => 
                item.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (category.length > 0) {
            productsCopy = productsCopy.filter((item) => category.includes(item.category));
        }

        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
        }

        setFilterProducts(productsCopy);
    };

    const sortProducts = () => {
        let fpCopy = filterProducts.slice();
        switch (sortType) {
            case 'low-high':
                setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
                break;
            case 'high-low':
                setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
                break;
            default:
                applyFilter();
                break;
        }
    };

    const clearFilters = () => {
        setCategory([]);
        setSubCategory([]);
        setSortType('relavent');
    };

    useEffect(() => {
        applyFilter();
    }, [category, subCategory, search, showSearch, products]);

    useEffect(() => {
        sortProducts();
    }, [sortType]);

    return (
        <div className='min-h-screen bg-gradient-to-b from-white to-gray-50 py-8 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                {/* Page Header */}
                <div className='mb-8'>
                    <Title 
                        text1="ALL" 
                        text2="COLLECTIONS"
                        description="Discover our complete range of premium fragrances"
                    />
                </div>

                <div className='flex flex-col lg:flex-row gap-8'>
                    {/* Filters Sidebar */}
                    <div className='lg:w-64 flex-shrink-0'>
                        {/* Mobile Filter Toggle */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className='lg:hidden w-full flex items-center justify-between bg-white px-6 py-4 rounded-xl shadow-md mb-4 font-heading font-bold text-gray-900'
                        >
                            <span className='flex items-center gap-2'>
                                <svg className='w-5 h-5 text-pink-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z' />
                                </svg>
                                Filters
                            </span>
                            <svg 
                                className={`w-5 h-5 transition-transform ${showFilters ? 'rotate-180' : ''}`} 
                                fill='none' 
                                stroke='currentColor' 
                                viewBox='0 0 24 24'
                            >
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                            </svg>
                        </button>

                        {/* Filters Container */}
                        <div className={`space-y-4 ${showFilters ? 'block' : 'hidden'} lg:block`}>
                            {/* Filter Header */}
                            <div className='bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 border-l-4 border-pink-500'>
                                <div className='flex items-center justify-between mb-2'>
                                    <h3 className='font-heading text-lg font-bold text-gray-900'>Filters</h3>
                                    {(category.length > 0 || subCategory.length > 0) && (
                                        <button
                                            onClick={clearFilters}
                                            className='text-xs text-pink-600 hover:text-pink-700 font-semibold'
                                        >
                                            Clear All
                                        </button>
                                    )}
                                </div>
                                <p className='text-xs text-gray-600 font-body'>
                                    {filterProducts.length} products found
                                </p>
                            </div>

                            {/* Categories Filter */}
                            <div className='bg-white rounded-xl p-6 shadow-md border border-gray-100'>
                                <h4 className='font-heading text-base font-bold text-gray-900 mb-4 flex items-center gap-2'>
                                    <svg className='w-5 h-5 text-pink-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z' />
                                    </svg>
                                    Categories
                                </h4>
                                <div className='space-y-3'>
                                    {['Men', 'Women'].map((cat) => (
                                        <label key={cat} className='flex items-center gap-3 cursor-pointer group'>
                                            <input
                                                type='checkbox'
                                                value={cat}
                                                checked={category.includes(cat)}
                                                onChange={toggleCategory}
                                                className='w-5 h-5 text-pink-600 border-gray-300 rounded focus:ring-pink-500 cursor-pointer'
                                            />
                                            <span className='font-body text-gray-700 group-hover:text-pink-600 transition-colors'>
                                                {cat}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Type Filter */}
                            <div className='bg-white rounded-xl p-6 shadow-md border border-gray-100'>
                                <h4 className='font-heading text-base font-bold text-gray-900 mb-4 flex items-center gap-2'>
                                    <svg className='w-5 h-5 text-pink-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
                                    </svg>
                                    Type
                                </h4>
                                <div className='space-y-3'>
                                    {['Woody', 'Floral', 'Oriental'].map((type) => (
                                        <label key={type} className='flex items-center gap-3 cursor-pointer group'>
                                            <input
                                                type='checkbox'
                                                value={type}
                                                checked={subCategory.includes(type)}
                                                onChange={toggleSubCategory}
                                                className='w-5 h-5 text-pink-600 border-gray-300 rounded focus:ring-pink-500 cursor-pointer'
                                            />
                                            <span className='font-body text-gray-700 group-hover:text-pink-600 transition-colors'>
                                                {type}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Products Section */}
                    <div className='flex-1'>
                        {/* Sort Bar */}
                        <div className='bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-100 mb-6'>
                            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                                <div className='flex items-center gap-2'>
                                    <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                                    </svg>
                                    <span className='font-body text-gray-700 font-semibold'>
                                        Showing {filterProducts.length} products
                                    </span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <label htmlFor='sort' className='font-body text-sm text-gray-600 font-semibold'>
                                        Sort by:
                                    </label>
                                    <select
                                        id='sort'
                                        value={sortType}
                                        onChange={(e) => setSortType(e.target.value)}
                                        className='px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-pink-400 focus:outline-none font-body text-sm cursor-pointer'
                                    >
                                        <option value='relavent'>Relevant</option>
                                        <option value='low-high'>Price: Low to High</option>
                                        <option value='high-low'>Price: High to Low</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Products Grid */}
                        {filterProducts.length > 0 ? (
                            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6'>
                                {filterProducts.map((item, index) => (
                                    <div 
                                        key={item._id} 
                                        className='opacity-0 animate-fadeInLeft'
                                        style={{ 
                                            animationDelay: `${index * 50}ms`, 
                                            animationFillMode: 'forwards' 
                                        }}
                                    >
                                        <ProductItem item={item} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            // No Products Found
                            <div className='text-center py-16 bg-white rounded-2xl shadow-lg'>
                                <svg className='w-32 h-32 mx-auto text-gray-300 mb-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                                </svg>
                                <h3 className='font-heading text-2xl font-bold text-gray-800 mb-3'>No Products Found</h3>
                                <p className='text-gray-600 font-body mb-6'>Try adjusting your filters or search terms</p>
                                <button
                                    onClick={clearFilters}
                                    className='bg-pink-600 hover:bg-pink-700 text-white font-body font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl'
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;
