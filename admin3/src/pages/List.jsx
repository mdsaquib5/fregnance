import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Package, Search, Trash2, Edit, Eye, X } from 'lucide-react';

export const currency = "₹";

const List = ({ token }) => {
    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [deleteModal, setDeleteModal] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    const fetchList = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:4000/api/product/list');
            if (response.data.success) {
                setList(response.data.products);
                setFilteredList(response.data.products);
                toast.success('Product list fetched successfully');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchList();
    }, []);

    // Search functionality
    useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredList(list);
        } else {
            const filtered = list.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.category.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredList(filtered);
        }
    }, [searchQuery, list]);

    const openDeleteModal = (product) => {
        setProductToDelete(product);
        setDeleteModal(true);
    }

    const closeDeleteModal = () => {
        setDeleteModal(false);
        setProductToDelete(null);
    }

    const removeProduct = async () => {
        if (!productToDelete) return;

        console.log("Remove product id", productToDelete._id);
        try {
            const response = await axios.post(`http://localhost:4000/api/product/remove`, { headers: { token }, id: productToDelete._id });
            if (response.data.success) {
                toast.success('Product deleted successfully');
                await fetchList();
                closeDeleteModal();
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    return (
        <>
            <div className='p-6 sm:p-8 lg:p-10 max-w-7xl mx-auto'>
                {/* Page Header */}
                <div className='mb-8'>
                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6'>
                        <div className='flex items-center gap-3'>
                            <div className='w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center'>
                                <Package className='w-6 h-6 text-white' />
                            </div>
                            <div>
                                <h1 className='font-heading text-3xl font-bold text-gray-800'>Product List</h1>
                                <p className='font-body text-sm text-gray-600'>Manage all your perfume products</p>
                            </div>
                        </div>

                        {/* Total Count */}
                        <div className='bg-pink-50 px-6 py-3 rounded-lg border border-pink-200'>
                            <p className='font-body text-sm text-gray-600'>Total Products</p>
                            <p className='font-heading text-2xl font-bold text-pink-600'>{filteredList.length}</p>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className='relative'>
                        <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                        <input
                            type="text"
                            placeholder='Search by product name or category...'
                            className='w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all duration-300 font-body'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Loading State */}
                {loading ? (
                    <div className='bg-white rounded-2xl border border-gray-200 p-12 text-center'>
                        <div className='w-12 h-12 border-4 border-pink-600 border-t-transparent rounded-full animate-spin mx-auto mb-4'></div>
                        <p className='font-body text-gray-600'>Loading products...</p>
                    </div>
                ) : filteredList.length === 0 ? (
                    // Empty State
                    <div className='bg-white rounded-2xl border border-gray-200 p-12 text-center'>
                        <Package className='w-16 h-16 text-gray-300 mx-auto mb-4' />
                        <h3 className='font-heading text-xl font-semibold text-gray-800 mb-2'>No Products Found</h3>
                        <p className='font-body text-gray-600'>
                            {searchQuery ? 'Try adjusting your search terms' : 'Start by adding your first product'}
                        </p>
                    </div>
                ) : (
                    // Product Table
                    <div className='bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden'>
                        {/* Desktop Table View */}
                        <div className='hidden md:block overflow-x-auto'>
                            <table className='w-full'>
                                <thead>
                                    <tr className='bg-gradient-to-r from-pink-50 to-pink-100 border-b border-gray-200'>
                                        <th className='text-left py-4 px-6 font-body font-semibold text-gray-700 uppercase text-xs tracking-wider'>Image</th>
                                        <th className='text-left py-4 px-6 font-body font-semibold text-gray-700 uppercase text-xs tracking-wider'>Product Name</th>
                                        <th className='text-left py-4 px-6 font-body font-semibold text-gray-700 uppercase text-xs tracking-wider'>Category</th>
                                        <th className='text-left py-4 px-6 font-body font-semibold text-gray-700 uppercase text-xs tracking-wider'>Price</th>
                                        <th className='text-center py-4 px-6 font-body font-semibold text-gray-700 uppercase text-xs tracking-wider'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className='divide-y divide-gray-200'>
                                    {filteredList.map((item, index) => (
                                        <tr key={index} className='hover:bg-pink-50 transition-colors duration-200'>
                                            <td className='py-4 px-6'>
                                                <img
                                                    src={item.image[0].url}
                                                    className='w-16 h-16 object-cover rounded-lg border border-gray-200'
                                                    alt={item.name}
                                                />
                                            </td>
                                            <td className='py-4 px-6'>
                                                <p className='font-body font-medium text-gray-900'>{item.name}</p>
                                            </td>
                                            <td className='py-4 px-6'>
                                                <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-body font-medium bg-pink-100 text-pink-800'>
                                                    {item.category}
                                                </span>
                                            </td>
                                            <td className='py-4 px-6'>
                                                <p className='font-body font-semibold text-gray-900'>{currency} {item.price}</p>
                                            </td>
                                            <td className='py-4 px-6'>
                                                <div className='flex items-center justify-center gap-2'>

                                                    {/* Delete Button */}
                                                    <button
                                                        className='p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200'
                                                        onClick={() => openDeleteModal(item)}
                                                        title='Delete Product'
                                                    >
                                                        <Trash2 className='w-5 h-5' />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Card View */}
                        <div className='md:hidden divide-y divide-gray-200'>
                            {filteredList.map((item, index) => (
                                <div key={index} className='p-4 hover:bg-pink-50 transition-colors duration-200'>
                                    <div className='flex gap-4'>
                                        <img
                                            src={item.image[0].url}
                                            className='w-20 h-20 object-cover rounded-lg border border-gray-200 flex-shrink-0'
                                            alt={item.name}
                                        />
                                        <div className='flex-1 min-w-0'>
                                            <h3 className='font-body font-medium text-gray-900 mb-1 truncate'>{item.name}</h3>
                                            <div className='flex items-center gap-2 mb-2'>
                                                <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-body font-medium bg-pink-100 text-pink-800'>
                                                    {item.category}
                                                </span>
                                            </div>
                                            <p className='font-body font-semibold text-gray-900 mb-3'>{currency} {item.price}</p>
                                            <div className='flex items-center gap-2'>
                                                <button
                                                    className='flex items-center gap-1 px-3 py-1.5 text-xs bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors'
                                                    onClick={() => openDeleteModal(item)}
                                                >
                                                    <Trash2 className='w-4 h-4' />
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Delete Confirmation Modal */}
            {deleteModal && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
                    <div className='bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl'>
                        {/* Modal Header */}
                        <div className='flex items-center justify-between mb-6'>
                            <h3 className='font-heading text-xl font-bold text-gray-900'>Confirm Delete</h3>
                            <button
                                onClick={closeDeleteModal}
                                className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
                            >
                                <X className='w-5 h-5 text-gray-500' />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className='mb-6'>
                            {productToDelete && (
                                <div className='flex items-center gap-4 p-4 bg-red-50 rounded-lg border border-red-200'>
                                    <img
                                        src={productToDelete.image[0].url}
                                        className='w-16 h-16 object-cover rounded-lg'
                                        alt={productToDelete.name}
                                    />
                                    <div>
                                        <p className='font-body font-medium text-gray-900 mb-1'>{productToDelete.name}</p>
                                        <p className='font-body text-sm text-gray-600'>{currency} {productToDelete.price}</p>
                                    </div>
                                </div>
                            )}
                            <p className='font-body text-gray-600 mt-4'>
                                Are you sure you want to delete this product? This action cannot be undone.
                            </p>
                        </div>

                        {/* Modal Actions */}
                        <div className='flex gap-3'>
                            <button
                                onClick={closeDeleteModal}
                                className='flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 font-body font-medium rounded-lg hover:bg-gray-50 transition-all duration-300'
                            >
                                Cancel
                            </button>
                            <button
                                onClick={removeProduct}
                                className='flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-body font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2'
                            >
                                <Trash2 className='w-5 h-5' />
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default List;