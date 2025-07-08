"use client"
import { useState } from 'react';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";

const sliderData = [
  {
    id: 1,
    image: '/assets/images/banner/1.jpg', // Make sure these images exist in your public folder
    headline: 'Affordable Price For Car Servicing',
    subHeadline: 'There are many variations of passages of available, but the majority have suffered alteration in some form.',
  },
  {
    id: 2,
    image: '/assets/images/banner/2.jpg',
    headline: 'Expert Mechanics, Quality Service',
    subHeadline: 'Experience top-notch car care with our certified professionals and state-of-the-art equipment.',
  },
  {
    id: 3,
    image: '/assets/images/banner/3.jpg',
    headline: 'Your Car, Our Priority',
    subHeadline: 'We are dedicated to ensuring your vehicle runs smoothly and safely on every journey.',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Start with the first slide

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === sliderData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? sliderData.length - 1 : prevSlide - 1
    );
  };

  const { image, headline, subHeadline } = sliderData[currentSlide];

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image with Black Shed */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={headline}
          layout="fill"
          objectFit="cover"
          priority // Load the first image with high priority
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg max-w-4xl">
          {headline}
        </h1>
        <p className="text-gray-200 text-base md:text-lg lg:text-xl mt-4 mb-8 max-w-3xl drop-shadow-md">
          {subHeadline}
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-md shadow-lg hover:bg-orange-700 transition-colors duration-300">
            Discover More
          </button>
          <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-md shadow-lg hover:bg-white hover:text-orange-600 transition-colors duration-300">
            Latest Project
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
        <button
          onClick={prevSlide}
          className="p-3 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-40 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75"
          aria-label="Previous slide"
        >
          {/* Left Arrow SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="p-3 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-40 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75"
          aria-label="Next slide"
        >
          {/* Right Arrow SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;