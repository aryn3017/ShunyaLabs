import React, { useState, useEffect } from 'react';

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        './prof_sharma.jpeg',
        './prof_roy.jpeg',
        './prof_patil.jpeg',
        './partha.jpeg',
        './Dr_oleg.jpeg',
        './group.jpeg',
    ];

    const goToNextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            goToNextSlide();
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        
        <div className="max-w-3xl ">
            <div id="default-carousel" className="relative">
                <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={`duration-700 ease-in-out absolute inset-0 transition-all transform ${index === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                }`}
                        >
                            <img src={src} className="block w-full h-full object-cover" alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-gray-500'}`}
                            aria-current={index === activeIndex}
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => goToSlide(index)}
                        ></button>
                    ))}
                </div>
                <button
                    type="button"
                    className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                    onClick={goToPrevSlide}
                >
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                        <span className="hidden">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                    onClick={goToNextSlide}
                >
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                        <span className="hidden">Next</span>
                    </span>
                </button>
            </div>

        </div>
        
    );
}

export default Carousel;
