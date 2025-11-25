import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from '../components/RelatedProducts';
import { ShoppingCart } from 'lucide-react';

const Product = () => {
    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');
    const [activeTab, setActiveTab] = useState('description');
    const [quantity, setQuantity] = useState(1);

    const fetchProductData = () => {
        const product = products.find((item) => item._id === productId);
        if (product) {
            setProductData(product);
            setImage(product.image[0]);
        }
    };

    useEffect(() => {
        fetchProductData();
    }, [productId, products]);

    const renderStars = (rating = 4.5) => {
        return [...Array(5)].map((_, index) => (
            <svg
                key={index}
                className={`w-5 h-5 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill='currentColor'
                viewBox='0 0 20 20'
            >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
            </svg>
        ));
    };

    return productData ? (
        <div className='min-h-screen bg-gradient-to-b from-white to-gray-50 py-8 px-4 sm:px-6 lg:px-8'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Product Section */}
                <div className='grid lg:grid-cols-2 gap-12 mb-16'>
                    {/* Image Gallery */}
                    <div className='space-y-4'>
                        {/* Main Image */}
                        <div className='bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100'>
                            <div className='aspect-[3/4] relative group'>
                                <img 
                                    src={image.url} 
                                    alt={productData.name}
                                    className='w-full h-full object-cover'
                                />
                                {productData.bestseller && (
                                    <div className='absolute top-4 left-4 bg-pink-600 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg'>
                                        BESTSELLER
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Thumbnail Images */}
                        <div className='grid grid-cols-4 gap-3'>
                            {productData.image.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setImage(item)}
                                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                                        image.url === item.url 
                                            ? 'border-pink-500 shadow-lg scale-105' 
                                            : 'border-gray-200 hover:border-pink-300'
                                    }`}
                                >
                                    <img 
                                        src={item.url} 
                                        alt={`${productData.name} ${index + 1}`}
                                        className='w-full h-full object-cover'
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className='space-y-6'>
                        {/* Category Badge */}
                        <div className='inline-block'>
                            <span className='bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold font-body'>
                                {productData.category}
                            </span>
                        </div>

                        {/* Product Name */}
                        <h1 className='font-heading text-3xl sm:text-4xl font-bold text-gray-900 leading-tight'>
                            {productData.name}
                        </h1>

                        {/* Rating */}
                        <div className='flex items-center gap-3'>
                            <div className='flex gap-1'>
                                {renderStars(4.5)}
                            </div>
                            <span className='text-gray-600 font-body text-sm'>(122 reviews)</span>
                        </div>

                        {/* Price */}
                        <div className='bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border-l-4 border-pink-500'>
                            <p className='text-sm text-gray-600 font-body mb-1'>Price</p>
                            <p className='font-heading text-4xl font-bold text-gray-900'>
                                {currency}{productData.price}
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className='font-heading text-lg font-bold text-gray-900 mb-3'>Description</h3>
                            <p className='text-gray-600 font-body leading-relaxed'>
                                {productData.description}
                            </p>
                        </div>

                        {/* Size Selection */}
                        <div>
                            <h3 className='font-heading text-lg font-bold text-gray-900 mb-3'>Select Size</h3>
                            <div className='flex flex-wrap gap-3'>
                                {productData.sizes.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSize(item)}
                                        className={`px-6 py-3 rounded-lg font-semibold font-body transition-all duration-300 ${
                                            size === item
                                                ? 'bg-pink-600 text-white shadow-lg scale-105'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity Selector */}
                        <div>
                            <h3 className='font-heading text-lg font-bold text-gray-900 mb-3'>Quantity</h3>
                            <div className='flex items-center gap-4'>
                                <div className='flex items-center border-2 border-gray-200 rounded-lg overflow-hidden'>
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className='px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors'
                                    >
                                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20 12H4' />
                                        </svg>
                                    </button>
                                    <span className='px-8 py-3 font-bold text-gray-900 font-heading text-lg'>
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className='px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors'
                                    >
                                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            onClick={() => {
                                for (let i = 0; i < quantity; i++) {
                                    addToCart(productData._id, size);
                                }
                            }}
                            className='w-full bg-gradient-to-r cursor-pointer from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-body font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2'
                        >
                            <ShoppingCart className='w-6 h-6' />
                            Add to Cart
                        </button>

                        {/* Product Features */}
                        <div className='bg-white rounded-2xl p-6 shadow-md border border-gray-100 space-y-3'>
                            <div className='flex items-center gap-3 text-gray-700'>
                                <svg className='w-6 h-6 text-green-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                                </svg>
                                <span className='font-body text-sm'>100% Original Product</span>
                            </div>
                            <div className='flex items-center gap-3 text-gray-700'>
                                <svg className='w-6 h-6 text-green-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                                </svg>
                                <span className='font-body text-sm'>Cash on delivery available</span>
                            </div>
                            <div className='flex items-center gap-3 text-gray-700'>
                                <svg className='w-6 h-6 text-green-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
                                </svg>
                                <span className='font-body text-sm'>Easy return & exchange within 7 days</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className='mb-16'>
                    <div className='bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden'>
                        {/* Tab Headers */}
                        <div className='flex border-b border-gray-200'>
                            <button
                                onClick={() => setActiveTab('description')}
                                className={`flex-1 px-6 py-4 font-heading font-semibold transition-all duration-300 ${
                                    activeTab === 'description'
                                        ? 'bg-pink-600 text-white'
                                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                Description
                            </button>
                            <button
                                onClick={() => setActiveTab('reviews')}
                                className={`flex-1 px-6 py-4 font-heading font-semibold transition-all duration-300 ${
                                    activeTab === 'reviews'
                                        ? 'bg-pink-600 text-white'
                                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                Reviews (122)
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className='p-8'>
                            {activeTab === 'description' ? (
                                <div className='space-y-4 text-gray-600 font-body leading-relaxed'>
                                    <p>
                                        Experience the luxurious essence of our premium fragrance collection. Each scent is carefully crafted to capture unique moments and emotions, making every spray a memorable experience.
                                    </p>
                                    <p>
                                        Our perfumes are made with the finest ingredients sourced from around the world, ensuring long-lasting quality and an unforgettable aroma that complements your personality.
                                    </p>
                                </div>
                            ) : (
                                <div className='space-y-6'>
                                    <div className='flex items-start gap-4 pb-6 border-b border-gray-200'>
                                        <div className='w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <span className='font-heading font-bold text-pink-600'>JD</span>
                                        </div>
                                        <div className='flex-1'>
                                            <div className='flex items-center gap-2 mb-2'>
                                                <span className='font-heading font-bold text-gray-900'>John Doe</span>
                                                <div className='flex gap-1'>
                                                    {renderStars(5)}
                                                </div>
                                            </div>
                                            <p className='text-gray-600 font-body text-sm'>
                                                Amazing fragrance! Long-lasting and perfect for daily wear. Highly recommended!
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <span className='font-heading font-bold text-purple-600'>SM</span>
                                        </div>
                                        <div className='flex-1'>
                                            <div className='flex items-center gap-2 mb-2'>
                                                <span className='font-heading font-bold text-gray-900'>Sarah Miller</span>
                                                <div className='flex gap-1'>
                                                    {renderStars(4)}
                                                </div>
                                            </div>
                                            <p className='text-gray-600 font-body text-sm'>
                                                Love the scent! It's elegant and sophisticated. Great value for money.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
            </div>
        </div>
    ) : (
        // Loading State
        <div className='min-h-screen flex items-center justify-center'>
            <div className='text-center'>
                <div className='w-16 h-16 border-4 border-pink-600 border-t-transparent rounded-full animate-spin mx-auto mb-4'></div>
                <p className='text-gray-600 font-body'>Loading product...</p>
            </div>
        </div>
    );
};

export default Product;
