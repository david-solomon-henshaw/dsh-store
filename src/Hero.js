import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import image1 from './assets/hero1.png'
import image2 from './assets/hero-images/space-marine-helment-hero.png'
import image3 from './assets/hero-images/hero-emperor-eagle.png'



const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Wear Your Personality",
      description: "Discover unique t-shirt designs that speak your language. From artistic expressions to bold statements, find the perfect style that matches your vibe.",
      image: image1
    },
    {
      title: "Quality Threads, Lasting Impressions",
      description: "Each t-shirt is crafted with premium cotton for maximum comfort. Available in various colors and sizes to suit your preference.",
      image: image2
    },
    {
      title: "Express Yourself in Style",
      description: "Browse through our exclusive collection of artistic designs. Whether you're into minimalist art or bold graphics, we've got something for everyone.",
      image: image3
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 relative">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white transition-opacity duration-500">
            {slides[currentSlide].title}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 transition-opacity duration-500">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Shop Now
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              View Collections
            </a>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex relative">
          <img 
            src={slides[currentSlide].image}
            alt="t-shirt design showcase"
            className="rounded-lg transition-opacity duration-500"
          />
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={prevSlide}
              className="p-2 text-white bg-black bg-opacity-50 rounded-r-lg hover:bg-opacity-75 transition-opacity"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={nextSlide}
              className="p-2 text-white bg-black bg-opacity-50 rounded-l-lg hover:bg-opacity-75 transition-opacity"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? 'bg-white w-4' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;