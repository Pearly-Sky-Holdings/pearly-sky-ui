import { useRef, useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  regularService2, regularService3, regularService4, regularService5,
} from "../../config/images";
import { useLanguage } from "../../context/LanguageContext";

// Flatten the imagePairs array to show all service details at once
const allServices = ({ translate }: { translate: (key: string) => string }) => [
  {
    img: regularService2,
    title: translate('bedroomCleaning'),
    features: [
      translate('dustAllSurfaces'),
      translate('makeTheBed'),
      translate('cleanFloorSurfaces'),
    ],
  },
  {
    img: regularService3,
    title: translate('kitchenCleaning'),
    features: [
      translate('dustAllSurfaces'),
      translate('wipeAppliancesCabinets'),
      translate('cleanFloorSurfaces'),
    ],
  },
  {
    img: regularService4,
    title: translate('livingRoomCleaning'),
    features: [
      translate('dustAllAccessibleSurfaces'),
      translate('cleanCabinetExteriors'),
      translate('cleanFloorSurfaces'),
    ],
  },
  {
    img: regularService5,
    title: translate('bathroomCleaning'),
    features: [
      translate('sanitizeFixtures'),
      translate('wipeMirrorsGlass'),
      translate('cleanFloorSurfaces'),
    ],
  },
];

const ServicesCarousel = ({ index = 0 }) => {
  const { translate } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(index);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const carouselRef = useRef(null);
  const services = allServices({ translate });

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
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : services.length - slidesToShow));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < services.length - slidesToShow ? prevIndex + 1 : 0));
  };

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (services.length - slidesToShow + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [slidesToShow, services.length]);

  return (
    <div className="relative mb-8">
      <div className="flex overflow-hidden" ref={carouselRef}>
        {services.slice(currentIndex, currentIndex + slidesToShow).map((item) => (
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