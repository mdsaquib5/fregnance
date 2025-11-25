import React, { useState, useEffect } from 'react';
import { backendUrl, currency } from "../config/const";
import axios from 'axios';
import { toast } from 'react-toastify';
import { Package, MapPin, Phone, Calendar, CreditCard, Search, ShoppingBag, User, Filter } from 'lucide-react';

const Orders = ({ token }) => {
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [statusFilter, setStatusFilter] = useState('All');

    const fetchOrders = async () => {
        if (!token) {
            return null;
        }
        try {
            setLoading(true);
            const response = await axios.post(`${backendUrl}/api/order/list`, {}, { headers: { token } });

            if (response.data.success) {
                setOrders(response.data.orders.reverse());
                setFilteredOrders(response.data.orders.reverse());
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

    const statusHandler = async (orderId, event) => {
        try {
            const response = await axios.post(`${backendUrl}/api/order/status`, { orderId, status: event.target.value }, { headers: { token } });
            if (response.data.success) {
                await fetchOrders();
                toast.success(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        fetchOrders();
    }, [token]);

    // Filter and search functionality
    useEffect(() => {
        let filtered = orders;

        // Status filter
        if (statusFilter !== 'All') {
            filtered = filtered.filter(order => order.status === statusFilter);
        }

        // Search filter
        if (searchQuery.trim() !== '') {
            filtered = filtered.filter(order =>
                order.address.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                order.address.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                order.address.phone.includes(searchQuery) ||
                order._id.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredOrders(filtered);
    }, [searchQuery, statusFilter, orders]);

    const getStatusColor = (status) => {
        const colors = {
            'Order Placed': 'bg-blue-100 text-blue-800 border-blue-200',
            'Packing': 'bg-yellow-100 text-yellow-800 border-yellow-200',
            'Shipped': 'bg-purple-100 text-purple-800 border-purple-200',
            'Out for delivery': 'bg-orange-100 text-orange-800 border-orange-200',
            'Delivered': 'bg-green-100 text-green-800 border-green-200'
        };
        return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
    };

    return (
        <>
            <div className='p-6 sm:p-8 lg:p-10 max-w-7xl mx-auto'>
                {/* Page Header */}
                <div className='mb-8'>
                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6'>
                        <div className='flex items-center gap-3'>
                            <div className='w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center'>
                                <ShoppingBag className='w-6 h-6 text-white' />
                            </div>
                            <div>
                                <h1 className='font-heading text-3xl font-bold text-gray-800'>Orders</h1>
                                <p className='font-body text-sm text-gray-600'>Manage and track customer orders</p>
                            </div>
                        </div>

                        {/* Total Count */}
                        <div className='bg-pink-50 px-6 py-3 rounded-lg border border-pink-200'>
                            <p className='font-body text-sm text-gray-600'>Total Orders</p>
                            <p className='font-heading text-2xl font-bold text-pink-600'>{filteredOrders.length}</p>
                        </div>
                    </div>

                    {/* Search and Filter */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        {/* Search Bar */}
                        <div className='relative'>
                            <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                            <input
                                type="text"
                                placeholder='Search by name, phone, or order ID...'
                                className='w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all duration-300 font-body'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Status Filter */}
                        <div className='relative'>
                            <Filter className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                            <select
                                className='w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all duration-300 font-body bg-white appearance-none cursor-pointer'
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                            >
                                <option value="All">All Status</option>
                                <option value="Order Placed">Order Placed</option>
                                <option value="Packing">Packing</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Out for delivery">Out for delivery</option>
                                <option value="Delivered">Delivered</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Loading State */}
                {loading ? (
                    <div className='bg-white rounded-2xl border border-gray-200 p-12 text-center'>
                        <div className='w-12 h-12 border-4 border-pink-600 border-t-transparent rounded-full animate-spin mx-auto mb-4'></div>
                        <p className='font-body text-gray-600'>Loading orders...</p>
                    </div>
                ) : filteredOrders.length === 0 ? (
                    // Empty State
                    <div className='bg-white rounded-2xl border border-gray-200 p-12 text-center'>
                        <ShoppingBag className='w-16 h-16 text-gray-300 mx-auto mb-4' />
                        <h3 className='font-heading text-xl font-semibold text-gray-800 mb-2'>No Orders Found</h3>
                        <p className='font-body text-gray-600'>
                            {searchQuery || statusFilter !== 'All' ? 'Try adjusting your filters' : 'No orders have been placed yet'}
                        </p>
                    </div>
                ) : (
                    // Orders List
                    <div className='space-y-4'>
                        {filteredOrders.map((order, index) => (
                            <div key={index} className='bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden'>
                                <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 p-6'>
                                    {/* Order Icon & Items */}
                                    <div className='lg:col-span-4'>
                                        <div className='flex items-start gap-4'>
                                            <div className='w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                                                <Package className='w-6 h-6 text-pink-600' />
                                            </div>
                                            <div className='flex-1 min-w-0'>
                                                <h3 className='font-body font-semibold text-gray-900 mb-2'>Order Items</h3>
                                                <div className='space-y-1'>
                                                    {order.items.map((item, idx) => (
                                                        <p key={idx} className='font-body text-sm text-gray-600'>
                                                            {item.name} x {item.quantity} 
                                                            {item.size && <span className='text-pink-600'> ({item.size})</span>}
                                                        </p>
                                                    ))}
                                                </div>
                                                <p className='font-body text-xs text-gray-500 mt-2'>
                                                    {order.items.length} item{order.items.length > 1 ? 's' : ''}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Customer & Address */}
                                    <div className='lg:col-span-4 space-y-3'>
                                        <div className='flex items-start gap-3'>
                                            <User className='w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5' />
                                            <div>
                                                <p className='font-body font-semibold text-gray-900'>
                                                    {order.address.firstName} {order.address.lastName}
                                                </p>
                                            </div>
                                        </div>

                                        <div className='flex items-start gap-3'>
                                            <MapPin className='w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5' />
                                            <div>
                                                <p className='font-body text-sm text-gray-600'>{order.address.street}</p>
                                                <p className='font-body text-sm text-gray-600'>
                                                    {order.address.city}, {order.address.state} {order.address.zipcode}
                                                </p>
                                            </div>
                                        </div>

                                        <div className='flex items-start gap-3'>
                                            <Phone className='w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5' />
                                            <p className='font-body text-sm text-gray-600'>{order.address.phone}</p>
                                        </div>
                                    </div>

                                    {/* Order Details & Status */}
                                    <div className='lg:col-span-4 space-y-4'>
                                        {/* Order Info */}
                                        <div className='bg-gray-50 rounded-lg p-4 space-y-2'>
                                            <div className='flex items-center justify-between'>
                                                <span className='font-body text-sm text-gray-600'>Amount:</span>
                                                <span className='font-body font-bold text-lg text-gray-900'>{currency}{order.amount}</span>
                                            </div>
                                            
                                            <div className='flex items-center gap-2'>
                                                <CreditCard className='w-4 h-4 text-gray-400' />
                                                <span className='font-body text-sm text-gray-600'>Method: {order.paymentMethod}</span>
                                            </div>

                                            <div className='flex items-center gap-2'>
                                                <span className='font-body text-sm text-gray-600'>Payment:</span>
                                                <span className={`font-body text-sm font-semibold ${order.payment ? 'text-green-600' : 'text-orange-600'}`}>
                                                    {order.payment ? 'Done' : 'Pending'}
                                                </span>
                                            </div>

                                            <div className='flex items-center gap-2'>
                                                <Calendar className='w-4 h-4 text-gray-400' />
                                                <span className='font-body text-sm text-gray-600'>
                                                    {new Date(order.date).toLocaleDateString('en-US', { 
                                                        year: 'numeric', 
                                                        month: 'short', 
                                                        day: 'numeric' 
                                                    })}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Status Selector */}
                                        <div>
                                            <label className='block font-body text-sm font-semibold text-gray-700 mb-2'>
                                                Order Status
                                            </label>
                                            <select
                                                value={order.status}
                                                onChange={(e) => statusHandler(order._id, e)}
                                                className={`w-full px-4 py-3 rounded-lg border-2 font-body font-semibold outline-none cursor-pointer transition-all duration-300 ${getStatusColor(order.status)}`}
                                            >
                                                <option value="Order Placed">Order Placed</option>
                                                <option value="Packing">Packing</option>
                                                <option value="Shipped">Shipped</option>
                                                <option value="Out for delivery">Out for delivery</option>
                                                <option value="Delivered">Delivered</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default Orders;