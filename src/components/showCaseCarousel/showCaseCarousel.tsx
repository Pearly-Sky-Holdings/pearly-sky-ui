import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const showcaseImages = [
  "/images/ourShowCase/ourShowCase.png",
  "/images/ourShowCase/elderCareService.png",
  "/images/ourShowCase/ourShowCase.png",
  "/images/ourShowCase/elderCareService.png",
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? showcaseImages.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === showcaseImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Image Container */}
      <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
        {showcaseImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Showcase"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Left Arrow */}
      <IconButton
        onClick={prevSlide}
        className="!absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white hover:bg-gray-500 transition"
      >
        <ArrowBackIos />
      </IconButton>

      {/* Right Arrow */}
      <IconButton
        onClick={nextSlide}
        className="!absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white hover:bg-gray-500 transition"
      >
        <ArrowForwardIos />
      </IconButton>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4">
        {showcaseImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 mx-1 rounded-full ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
