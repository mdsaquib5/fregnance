import React, { useState } from 'react';
import Title from '../components/Title';
import { assets } from '../assets/asset/assets';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className='min-h-screen bg-gradient-to-b from-white to-gray-50'>
            {/* Hero Section */}
            <div className='py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-50 via-white to-purple-50'>
                <div className='max-w-7xl mx-auto'>
                    <Title 
                        text1="CONTACT" 
                        text2="US"
                        description="We'd love to hear from you. Get in touch with our team."
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                <div className='grid lg:grid-cols-2 gap-12'>
                    {/* Left Side - Contact Info & Image */}
                    <div className='space-y-8'>
                        {/* Image */}
                        <div className='relative group'>
                            <div className='absolute -inset-4 bg-gradient-to-r from-pink-200 to-purple-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300'></div>
                            <img 
                                src={assets.contact_img} 
                                alt='Contact Us' 
                                className='relative w-full rounded-2xl shadow-2xl object-cover'
                            />
                        </div>

                        {/* Contact Cards */}
                        <div className='space-y-4'>
                            {/* Store Location */}
                            <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300'>
                                <div className='flex items-start gap-4'>
                                    <div className='w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                                        <svg className='w-6 h-6 text-pink-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='font-heading text-lg font-bold text-gray-900 mb-2'>Our Store</h3>
                                        <p className='text-gray-600 font-body text-sm leading-relaxed'>
                                            54709 Willms Station<br />
                                            Suite 350, Washington, USA
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Phone & Email */}
                            <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300'>
                                <div className='space-y-4'>
                                    <div className='flex items-start gap-4'>
                                        <div className='w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                                            <svg className='w-6 h-6 text-pink-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className='font-heading text-lg font-bold text-gray-900 mb-2'>Phone</h3>
                                            <a href='tel:+14155550132' className='text-pink-600 hover:text-pink-700 font-body text-sm transition-colors'>
                                                (415) 555-0132
                                            </a>
                                        </div>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                                            <svg className='w-6 h-6 text-pink-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className='font-heading text-lg font-bold text-gray-900 mb-2'>Email</h3>
                                            <a href='mailto:admin@odora.com' className='text-pink-600 hover:text-pink-700 font-body text-sm transition-colors'>
                                                admin@odora.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Careers */}
                            <div className='bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border-l-4 border-pink-500'>
                                <h3 className='font-heading text-lg font-bold text-gray-900 mb-2'>Careers at Odora</h3>
                                <p className='text-gray-700 font-body text-sm mb-4 leading-relaxed'>
                                    Learn more about our teams and job openings. Join our passionate team!
                                </p>
                                <button className='bg-pink-600 hover:bg-pink-700 text-white font-body font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm'>
                                    Explore Jobs
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className='bg-white rounded-2xl p-8 shadow-2xl border border-gray-100'>
                        <div className='mb-8'>
                            <h2 className='font-heading text-3xl font-bold text-gray-900 mb-2'>Send us a Message</h2>
                            <p className='text-gray-600 font-body'>Fill out the form below and we'll get back to you as soon as possible.</p>
                        </div>

                        <form onSubmit={handleSubmit} className='space-y-6'>
                            {/* Name */}
                            <div>
                                <label htmlFor='name' className='block text-sm font-semibold text-gray-700 font-body mb-2'>
                                    Your Name *
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors font-body'
                                    placeholder='John Doe'
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor='email' className='block text-sm font-semibold text-gray-700 font-body mb-2'>
                                    Email Address *
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors font-body'
                                    placeholder='john@example.com'
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor='subject' className='block text-sm font-semibold text-gray-700 font-body mb-2'>
                                    Subject *
                                </label>
                                <input
                                    type='text'
                                    id='subject'
                                    name='subject'
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors font-body'
                                    placeholder='How can we help you?'
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor='message' className='block text-sm font-semibold text-gray-700 font-body mb-2'>
                                    Message *
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors font-body resize-none'
                                    placeholder='Tell us more about your inquiry...'
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type='submit'
                                className='w-full bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-body font-semibold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2'
                            >
                                Send Message
                                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Business Hours */}
                <div className='mt-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl shadow-2xl p-8 sm:p-12 text-white'>
                    <div className='text-center mb-8'>
                        <h2 className='font-heading text-3xl font-bold mb-2'>Business Hours</h2>
                        <p className='text-pink-100 font-body'>We're here to help you</p>
                    </div>
                    <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center'>
                        <div>
                            <div className='font-heading text-lg font-bold mb-1'>Monday - Friday</div>
                            <div className='text-pink-100 font-body text-sm'>9:00 AM - 6:00 PM</div>
                        </div>
                        <div>
                            <div className='font-heading text-lg font-bold mb-1'>Saturday</div>
                            <div className='text-pink-100 font-body text-sm'>10:00 AM - 4:00 PM</div>
                        </div>
                        <div>
                            <div className='font-heading text-lg font-bold mb-1'>Sunday</div>
                            <div className='text-pink-100 font-body text-sm'>Closed</div>
                        </div>
                        <div>
                            <div className='font-heading text-lg font-bold mb-1'>Support</div>
                            <div className='text-pink-100 font-body text-sm'>24/7 Online</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
