import React from 'react';
import { NavLink } from 'react-router-dom';
import { Plus, Package, ShoppingBag, LayoutDashboard, Users, Settings, BarChart3 } from 'lucide-react';

const Sidebar = () => {
    return (
        <>
            <aside className='w-64 min-h-screen bg-white border-r border-gray-200'>
                <div className='flex flex-col py-6 px-4'>
                    {/* Sidebar Header */}
                    <div className='mb-8 px-3'>
                        <h2 className='font-heading text-xl font-bold text-gray-800 mb-1'>
                            Navigation
                        </h2>
                        <p className='font-body text-xs text-gray-500'>
                            Manage your store
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <nav className='flex flex-col gap-2'>

                        {/* Add Items */}
                        <NavLink
                            to='/add'
                            className={({ isActive }) => `
                                flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group
                                ${isActive
                                    ? 'bg-gradient-to-r from-pink-600 to-pink-700 text-white shadow-md'
                                    : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                                }
                            `}
                        >
                            <Plus className='w-5 h-5 flex-shrink-0' />
                            <span className='font-body font-medium text-sm'>Add Items</span>
                        </NavLink>

                        {/* List Items */}
                        <NavLink
                            to='/list'
                            className={({ isActive }) => `
                                flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group
                                ${isActive
                                    ? 'bg-gradient-to-r from-pink-600 to-pink-700 text-white shadow-md'
                                    : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                                }
                            `}
                        >
                            <Package className='w-5 h-5 flex-shrink-0' />
                            <span className='font-body font-medium text-sm'>List Items</span>
                        </NavLink>

                        {/* Orders */}
                        <NavLink
                            to='/orders'
                            className={({ isActive }) => `
                                flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group
                                ${isActive
                                    ? 'bg-gradient-to-r from-pink-600 to-pink-700 text-white shadow-md'
                                    : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                                }
                            `}
                        >
                            <ShoppingBag className='w-5 h-5 flex-shrink-0' />
                            <span className='font-body font-medium text-sm'>Orders</span>
                        </NavLink>
                    </nav>
                </div>
            </aside>
        </>
    )
}

export default Sidebar;