import { useRef, useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  regularService2, regularService3, regularService4, regularService5,
} from "../../config/images";

// Flatten the imagePairs array to show all service details at once
const allServices = [
  {
    img: regularService2,
    title: "Bedroom Cleaning",
    features: [
      "Dust all cleanable surfaces",
      "Make the bed",
      "Clean floor surfaces",
    ],
  },
  {
    img: regularService3,
    title: "Kitchen Cleaning",
    features: [
      "Dust all available surfaces.",
      "Wipe down the exterior of appliances and cabinets.",
      "Clean floor surfaces.",
    ],
  },
  {
    img: regularService4,
    title: "Living Room Cleaning",
    features: [
      "Dust all accessible surfaces.",
      "Clean the exterior of cabinets.",
      "Clean floor surfaces.",
    ],
  },
  {
    img: regularService5,
    title: "Bathroom Cleaning",
    features: [
      "Wash & sanitize the toilet, shower, tub, and sink.",
      "Wipe down mirrors and glass surfaces.",
      "Clean floor surfaces.",
    ],
  },
];

const ServicesCarousel = ({ index = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(index);
  const carouselRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : allServices.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < allServices.length - 1 ? prevIndex + 1 : 0));
  };

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % allServices.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mb-8">
      <div className="flex overflow-hidden" ref={carouselRef}>
        {allServices.map((item, idx) => (
          <div
            key={item.title}
            className={`w-full sm:w-1/2 relative flex-shrink-0 ${
              idx === currentIndex ? "block" : "hidden"
            }`}
          >
            <img
              src={item.img}
              className="w-full h-48 sm:h-64 object-cover"
              alt={item.title}
            />
            <div className="absolute bottom-0 left-4 right-0 bg-transparent text-white p-2 rounded-b-lg">
              <h3 className="font-semibold mb-2 text-sm sm:text-base">
                {item.title}
              </h3>
              <ul className="list-disc pl-5 text-xs sm:text-sm">
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg text-black cursor-pointer"
        onClick={handlePrev}
      >
        <ArrowBackIosIcon className="w-6 h-6" />
      </div>
      <div
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg text-black cursor-pointer"
        onClick={handleNext}
      >
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
};

export default ServicesCarousel;