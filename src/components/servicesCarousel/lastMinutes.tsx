import { useRef, useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
    regularService2, regularService3, regularService4, regularService5, 
    BalconyCleaning, ironing, AfterPartyCleanup
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
      "Clean floor surfaces."
    ],
  },
  {
    img: regularService4,
      title: "Living Room Cleaning",
      features: [
        "Dust all accessible surfaces.",
        "Clean the exterior of cabinets.",
        "Clean floor surfaces."
      ],
  },
  {
    img: regularService5,
      title: "Bathroom Cleaning",
      features: [
        "Wash & sanitize the toilet, shower, tub, and sink.",
        "Wipe down mirrors and glass surfaces.",
        "Clean floor surfaces."
      ],
  },
  {
    img: BalconyCleaning,
      title: "Balcony Cleaning",
      features: [
        "Clean the balcony/terrace floor.",
        "Clean railings.",
        "Dust and wipe down outdoor furniture and fixtures."
      ],
  },
  {
    img: AfterPartyCleanup,
    title: "After-Party Cleanup",
    features: [
      "Wash dishes & glassware.",
      "Empty garbage cans.",
      "Clean up vomit stains (ask for quotation)."
    ],
  },
  {
    img: ironing,
      title: "Ironing",
      features: [
        "Iron the clothes.",
        "Fold the clothes.",
        "Place the clothes in the wardrobe."
      ],
  }
];

const ServicesCarousel = ({ index = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(index);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : allServices.length - slidesToShow));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < allServices.length - slidesToShow ? prevIndex + 1 : 0));
  };

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (allServices.length - slidesToShow + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [slidesToShow]);

  return (
    <div className="relative mb-8">
      <div className="flex overflow-hidden" ref={carouselRef}>
        {allServices.slice(currentIndex, currentIndex + slidesToShow).map((item) => (
          <div
            key={item.title}
            className="w-full sm:w-1/2 relative flex-shrink-0"
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