import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Upload, Image as ImageIcon, Package, Tag, Star, Save, IndianRupee } from 'lucide-react';

const Add = ({ token }) => {
    // image states
    const [image1, setImage1] = useState(false);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [image4, setImage4] = useState(false);

    // product states
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('Men');
    const [bestseller, setBestseller] = useState(false);
    const [sizes, setSizes] = useState([]);

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('description', description);
            formData.append('price', price);
            formData.append('category', category);
            formData.append('bestseller', bestseller);
            formData.append('sizes', JSON.stringify(sizes));

            // image append
            image1 && formData.append('image1', image1);
            image2 && formData.append('image2', image2);
            image3 && formData.append('image3', image3);
            image4 && formData.append('image4', image4);

            // api call
            const response = await axios.post('http://localhost:4000/api/product/add', formData, {
                headers: { token }
            });
            toast.success('Product added successfully');
            console.log(response.data);

            // Reset form
            setName('');
            setDescription('');
            setPrice('');
            setCategory('Men');
            setBestseller(false);
            setSizes([]);
            setImage1(false);
            setImage2(false);
            setImage3(false);
            setImage4(false);
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    return (
        <>
            <div className='p-6 sm:p-8 lg:p-10 max-w-6xl mx-auto'>
                {/* Page Header */}
                <div className='mb-8'>
                    <div className='flex items-center gap-3 mb-2'>
                        <div className='w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center'>
                            <Package className='w-6 h-6 text-white' />
                        </div>
                        <div>
                            <h1 className='font-heading text-3xl font-bold text-gray-800'>Add New Product</h1>
                            <p className='font-body text-sm text-gray-600'>Create a new perfume product for your store</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmitHandler} className='space-y-8'>
                    {/* Image Upload Section */}
                    <div className='bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm'>
                        <div className='flex items-center gap-2 mb-6'>
                            <ImageIcon className='w-5 h-5 text-pink-600' />
                            <h2 className='font-body text-lg font-semibold text-gray-800'>Product Images</h2>
                            <span className='text-xs text-gray-500 ml-auto'>(Upload up to 4 images)</span>
                        </div>

                        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                            {/* Image 1 */}
                            <label htmlFor="image1" className='group cursor-pointer'>
                                <div className='relative aspect-square rounded-xl border-2 border-dashed border-gray-300 hover:border-pink-400 transition-all duration-300 overflow-hidden bg-gray-50 hover:bg-pink-50'>
                                    {!image1 ? (
                                        <div className='absolute inset-0 flex flex-col items-center justify-center'>
                                            <Upload className='w-8 h-8 text-gray-400 group-hover:text-pink-600 transition-colors mb-2' />
                                            <span className='text-xs text-gray-500 font-body'>Upload Image</span>
                                        </div>
                                    ) : (
                                        <img src={URL.createObjectURL(image1)} className='w-full h-full object-cover' alt="Product" />
                                    )}
                                </div>
                                <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden accept="image/*" />
                            </label>

                            {/* Image 2 */}
                            <label htmlFor="image2" className='group cursor-pointer'>
                                <div className='relative aspect-square rounded-xl border-2 border-dashed border-gray-300 hover:border-pink-400 transition-all duration-300 overflow-hidden bg-gray-50 hover:bg-pink-50'>
                                    {!image2 ? (
                                        <div className='absolute inset-0 flex flex-col items-center justify-center'>
                                            <Upload className='w-8 h-8 text-gray-400 group-hover:text-pink-600 transition-colors mb-2' />
                                            <span className='text-xs text-gray-500 font-body'>Upload Image</span>
                                        </div>
                                    ) : (
                                        <img src={URL.createObjectURL(image2)} className='w-full h-full object-cover' alt="Product" />
                                    )}
                                </div>
                                <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden accept="image/*" />
                            </label>

                            {/* Image 3 */}
                            <label htmlFor="image3" className='group cursor-pointer'>
                                <div className='relative aspect-square rounded-xl border-2 border-dashed border-gray-300 hover:border-pink-400 transition-all duration-300 overflow-hidden bg-gray-50 hover:bg-pink-50'>
                                    {!image3 ? (
                                        <div className='absolute inset-0 flex flex-col items-center justify-center'>
                                            <Upload className='w-8 h-8 text-gray-400 group-hover:text-pink-600 transition-colors mb-2' />
                                            <span className='text-xs text-gray-500 font-body'>Upload Image</span>
                                        </div>
                                    ) : (
                                        <img src={URL.createObjectURL(image3)} className='w-full h-full object-cover' alt="Product" />
                                    )}
                                </div>
                                <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden accept="image/*" />
                            </label>

                            {/* Image 4 */}
                            <label htmlFor="image4" className='group cursor-pointer'>
                                <div className='relative aspect-square rounded-xl border-2 border-dashed border-gray-300 hover:border-pink-400 transition-all duration-300 overflow-hidden bg-gray-50 hover:bg-pink-50'>
                                    {!image4 ? (
                                        <div className='absolute inset-0 flex flex-col items-center justify-center'>
                                            <Upload className='w-8 h-8 text-gray-400 group-hover:text-pink-600 transition-colors mb-2' />
                                            <span className='text-xs text-gray-500 font-body'>Upload Image</span>
                                        </div>
                                    ) : (
                                        <img src={URL.createObjectURL(image4)} className='w-full h-full object-cover' alt="Product" />
                                    )}
                                </div>
                                <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden accept="image/*" />
                            </label>
                        </div>
                    </div>

                    {/* Product Details Section */}
                    <div className='bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm'>
                        <div className='flex items-center gap-2 mb-6'>
                            <Tag className='w-5 h-5 text-pink-600' />
                            <h2 className='font-body text-lg font-semibold text-gray-800'>Product Details</h2>
                        </div>

                        <div className='space-y-6'>
                            {/* Product Name */}
                            <div>
                                <label className='block font-body text-sm font-semibold text-gray-700 mb-2'>
                                    Product Name <span className='text-pink-600'>*</span>
                                </label>
                                <input
                                    type="text"
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all duration-300 font-body'
                                    placeholder='e.g., Midnight Rose Eau de Parfum'
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            {/* Product Description */}
                            <div>
                                <label className='block font-body text-sm font-semibold text-gray-700 mb-2'>
                                    Product Description <span className='text-pink-600'>*</span>
                                </label>
                                <textarea
                                    rows="5"
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all duration-300 font-body resize-none'
                                    placeholder='Describe the perfume, its notes, and characteristics...'
                                    required
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </div>

                            {/* Category and Price */}
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                {/* Category */}
                                <div>
                                    <label className='block font-body text-sm font-semibold text-gray-700 mb-2'>
                                        Category <span className='text-pink-600'>*</span>
                                    </label>
                                    <select
                                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all duration-300 font-body bg-white'
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option value="Men">Men</option>
                                        <option value="Women">Women</option>
                                    </select>
                                </div>

                                {/* Price */}
                                <div>
                                    <label className='block font-body text-sm font-semibold text-gray-700 mb-2'>
                                        Price <span className='text-pink-600'>*</span>
                                    </label>
                                    <div className='relative'>
                                        <IndianRupee className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                                        <input
                                            className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all duration-300 font-body'
                                            type="number"
                                            placeholder='99.99'
                                            required
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sizes & Options Section */}
                    <div className='bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm'>
                        {/* <div className='flex items-center gap-2 mb-6'>
                            <Package className='w-5 h-5 text-pink-600' />
                            <h2 className='font-body text-lg font-semibold text-gray-800'>Sizes & Options</h2>
                        </div> */}

                        <div className='space-y-6'>
                            {/* Product Sizes */}
                            {/* <div>
                                <label className='block font-body text-sm font-semibold text-gray-700 mb-3'>
                                    Available Sizes
                                </label>
                                <div className='flex flex-wrap gap-3'>
                                    {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                        <div
                                            key={size}
                                            onClick={() => setSizes(prev => prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size])}
                                            className={`
                                                px-6 py-3 rounded-lg border-2 cursor-pointer transition-all duration-300 font-body font-medium
                                                ${sizes.includes(size)
                                                    ? 'bg-pink-600 border-pink-600 text-white shadow-md'
                                                    : 'bg-white border-gray-300 text-gray-700 hover:border-pink-400 hover:bg-pink-50'
                                                }
                                            `}
                                        >
                                            {size}
                                        </div>
                                    ))}
                                </div>
                            </div> */}

                            {/* Bestseller Checkbox */}
                            <div className='flex items-center gap-3 p-4 bg-pink-50 rounded-lg border border-pink-200'>
                                <input
                                    type="checkbox"
                                    id="bestseller"
                                    className='w-5 h-5 text-pink-600 focus:ring-pink-500 border-gray-300 rounded cursor-pointer'
                                    onChange={() => setBestseller(prev => !prev)}
                                    checked={bestseller}
                                />
                                <label htmlFor="bestseller" className='flex items-center gap-2 cursor-pointer'>
                                    <Star className={`w-5 h-5 ${bestseller ? 'text-pink-600 fill-current' : 'text-gray-400'}`} />
                                    <span className='font-body text-sm font-semibold text-gray-700'>Mark as Bestseller</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className='flex justify-end gap-4'>
                        <button
                            type='button'
                            className='px-6 cursor-pointer py-3 border-2 border-gray-300 text-gray-700 font-body font-medium rounded-lg hover:bg-gray-50 transition-all duration-300'
                            onClick={() => {
                                // Reset form
                                setName('');
                                setDescription('');
                                setPrice('');
                                setCategory('Men');
                                setBestseller(false);
                                setSizes([]);
                                setImage1(false);
                                setImage2(false);
                                setImage3(false);
                                setImage4(false);
                            }}
                        >
                            Reset Form
                        </button>
                        <button
                            type='submit'
                            className='cursor-pointer flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-body font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'
                        >
                            <Save className='w-5 h-5' />
                            <span>Add Product</span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Add;