import { useRef, useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
    regularService2, regularService3, regularService4, regularService5, 
    BalconyCleaning, LimescaleService, FridgeCleaning, OvenCleaning
} from "../../config/images";
import { useLanguage } from "../../context/LanguageContext";

const ServicesCarousel = ({ index = 0 }) => {
  const { translate } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(index);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const carouselRef = useRef(null);

  // Flatten the imagePairs array to show all service details at once
  const allServices = [
    {
      img: regularService2,
      title: translate('bedroomCleaning'),
      features: [
        translate('dustSurfaces'),
        translate('makeBed'),
        translate('cleanFloors'),
      ],
    },
    {
      img: regularService3,
      title: translate('kitchenCleaning'),
      features: [
        translate('dustSurfaces'),
        translate('wipeAppliances'),
        translate('cleanFloors')
      ],
    },
    {
      img: regularService4,
      title: translate('livingRoomCleaning'),
      features: [
        translate('dustSurfaces'),
        translate('wipeCabinets'),
        translate('cleanFloors')
      ],
    },
    {
      img: regularService5,
      title: translate('bathroomCleaning'),
      features: [
        translate('sanitizeFixtures'),
        translate('wipeMirrors'),
        translate('cleanFloors')
      ],
    },
    {
      img: LimescaleService,
      title: translate('limescaleRemoval'),
      features: [
        translate('cleanBalconyFloor'),
        translate('delimescaleShower'),
        translate('delimescaleSink'),
        translate('removeLimescale')
      ],
    },
    {
      img: FridgeCleaning,
      title: translate('fridgeCleaning'),
      features: [
        translate('cleanFridgeDoor'),
        translate('dustFridgeBack'),
        translate('cleanDripPan')
      ],
    },
    {
      img: BalconyCleaning,
      title: translate('balconyCleaning'),
      features: [
        translate('cleanBalconyFloor'),
        translate('cleanRailings'),
        translate('dustFurniture')
      ],
    },
    {
      img: OvenCleaning,
      title: translate('ovenCleaning'),
      features: [
        translate('cleanOvenInterior'),
        translate('cleanOvenRacks'),
        translate('cleanOvenDoor')
      ],
    },
  ];

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
                {item.features.map((feature, idx) => (
                  <li key={`${item.title}-feature-${idx}`}>{feature}</li>
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