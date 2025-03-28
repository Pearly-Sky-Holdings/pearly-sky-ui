import { useRef, useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  regularService2, regularService3, regularService4, regularService5,
  BalconyCleaning, ironing, AfterPartyCleanup
} from "../../config/images";
import { useLanguage } from "../../context/LanguageContext";

interface ServiceItem {
  img: string;
  title: string;
  features: string[];
}

const ServicesCarousel = ({ index = 0 }: { index?: number }) => {
  const { translate } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(index);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Translated services data
  const allServices: ServiceItem[] = [
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
        translate('dustAllSurfacesKitchen'),
        translate('wipeAppliances'),
        translate('cleanFloorSurfaces'),
      ],
    },
    {
      img: regularService4,
      title: translate('livingRoomCleaning'),
      features: [
        translate('dustAllSurfacesLiving'),
        translate('cleanCabinetExteriors'),
        translate('cleanFloorSurfaces'),
      ],
    },
    {
      img: regularService5,
      title: translate('bathroomCleaning'),
      features: [
        translate('sanitizeFixtures'),
        translate('wipeMirrors'),
        translate('cleanFloorSurfaces'),
      ],
    },
    {
      img: BalconyCleaning,
      title: translate('balconyCleaning'),
      features: [
        translate('cleanBalconyFloor'),
        translate('cleanRailings'),
        translate('dustOutdoorFurniture'),
      ],
    },
    {
      img: AfterPartyCleanup,
      title: translate('afterPartyCleanup'),
      features: [
        translate('washDishes'),
        translate('emptyTrash'),
        translate('cleanVomitStains'),
      ],
    },
    {
      img: ironing,
      title: translate('ironingService'),
      features: [
        translate('ironClothes'),
        translate('foldClothes'),
        translate('organizeWardrobe'),
      ],
    }
  ];

  // Handle responsive slides
  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth >= 640 ? 2 : 1);
      // Reset index when slides change to prevent overflow
      setCurrentIndex(prev => Math.min(prev, allServices.length - (window.innerWidth >= 640 ? 2 : 1)));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotation effect with pause on hover
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % (allServices.length - slidesToShow + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [slidesToShow, isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : allServices.length - slidesToShow));
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto-play after 5 seconds
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prev => (prev < allServices.length - slidesToShow ? prev + 1 : 0));
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto-play after 5 seconds
  };

  const handleGoToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto-play after 5 seconds
  };

  return (
    <div 
      className="relative mb-8"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="flex overflow-hidden" ref={carouselRef}>
        {allServices.slice(currentIndex, currentIndex + slidesToShow).map((item) => (
          <div
            key={`${item.title}-${currentIndex}`} // Add currentIndex to force re-render on slide change
            className="w-full sm:w-1/2 relative flex-shrink-0 transition-transform duration-300"
          >
            <img
              src={item.img}
              className="w-full h-48 sm:h-64 object-cover rounded-t-lg"
              alt={item.title}
              loading="lazy" // Add lazy loading
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
              <h3 className="font-semibold mb-2 text-white text-sm sm:text-base">
                {item.title}
              </h3>
              <ul className="list-disc pl-5 text-white/90 text-xs sm:text-sm">
                {item.features.map((feature, i) => (
                  <li key={`${item.title}-feature-${i}`}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg text-black cursor-pointer transition-all z-10"
        onClick={handlePrev}
        aria-label={translate('previousSlide')}
      >
        <ArrowBackIosIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>
      <div
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg text-black cursor-pointer transition-all z-10"
        onClick={handleNext}
        aria-label={translate('nextSlide')}
      >
        <ArrowForwardIosIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: allServices.length - slidesToShow + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => handleGoToSlide(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
            aria-label={`${translate('goToSlide')} ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;