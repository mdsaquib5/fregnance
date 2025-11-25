import {Instagram} from 'lucide-react';

const InstaPost = () => {
    const images = [
        '/images/insta1.jpg',
        '/images/insta2.jpg',
        '/images/insta3.jpg',
        '/images/insta4.jpg',
        '/images/insta5.jpg',
        '/images/insta7.jpg'
    ];

    return (
        <div className='w-full'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                {images.map((img, index) => (
                    <div 
                        key={index} 
                        className='group relative aspect-square overflow-hidden cursor-pointer'
                    >
                        <img 
                            src={img}
                            alt={`Instagram post ${index + 1}`} 
                            className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110' 
                        />
                        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center'>
                            <Instagram className='w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstaPost;