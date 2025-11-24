import React, { useState } from 'react';

const NewsLetter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Subscribed email:', email);
        // Add your subscription logic here
        setEmail('');
    };

    return (
        <>
            <div className='py-30 px-4 sm:px-6 lg:px-8 bg-gradient-to-r relative overflow-hidden'>
                {/* Decorative Background Elements */}

                <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
                    {/* Heading */}
                    <h2 className='font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2'>
                        Subscribe now and receive 10%
                    </h2>
                    <h3 className='font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8'>
                        off your first order!
                    </h3>

                    {/* Subscription Form */}
                    <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto'>
                        <input
                            type='email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Your email'
                            className='w-full sm:flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:border-pink-400 focus:outline-none font-body text-gray-700 placeholder-gray-400 transition-all duration-300'
                            required
                        />
                        <button
                            type='submit'
                            className='w-full sm:w-auto bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-body font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl uppercase text-sm tracking-wide'
                        >
                            Subscribe →
                        </button>
                    </form>

                    {/* Optional: Privacy Text */}
                    <p className='mt-6 text-xs text-gray-500 font-body'>
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </div>
            </div>
        </>
    );
};

export default NewsLetter;
