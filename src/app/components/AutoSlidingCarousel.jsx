"use client";
import React, { useEffect, useState } from "react";

const AutoSlidingCarousel = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      img: "/Images/myclnq.png", // Make sure this image exists
      title: "MyCLNQ Health – Your One-Stop Connected Healthcare Solution",
      experience: "1+ Years", // Experience added here
      description:
        "Singapore-based Health Tech company delivering affordable and AI-enabled healthcare via telemedicine, mHealth, and eHealth services.",
      link: "https://myclnq.co/",
    },
    // Add more slides here if needed
  ];

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Handle previous slide
  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Handle next slide
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="dark:bg-gray-900 mt-[150px] text-gray-800 dark:text-white h-[580px] mb-16 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full relative">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">Experience</h1>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden rounded-lg shadow-lg w-full relative">
          {/* Slide */}
          <div
            className="w-full flex-shrink-0 text-white dark:bg-gray-800 p-6 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: 1 }}
          >
            <a
              href={slides[index].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={slides[index].img}
                alt={slides[index].title}
                className="w-full h-80 object-cover rounded-md cursor-pointer"
              />
            </a>
            <h2 className="text-xl font-semibold mt-4">
              {slides[index].title}
            </h2>
            {/* Experience Years */}
            <p className="text-sm font-medium text-green-300 mt-1">
              Experience: {slides[index].experience}
            </p>
            <p className="text-white dark:text-gray-400 mt-2">
              {slides[index].description}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-opacity-70 transition"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-opacity-70 transition"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default AutoSlidingCarousel;
