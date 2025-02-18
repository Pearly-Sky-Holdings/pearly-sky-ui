import { useRef, useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



interface ImagePair {
  img: string;
  title: string;
  features: string[];
}

interface CarouselProps {
  imagePairs: ImagePair[][];
}

const Carousel = ({ imagePairs }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : imagePairs.length - 1));
      };
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < imagePairs.length - 1 ? prevIndex + 1 : 0));
      };

      useEffect(() => {
          const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePairs.length);
          }, 3000);
      
          return () => clearInterval(interval);
        }, []);

      return(
        <div className="relative mb-8">
        <div className="flex overflow-hidden" ref={carouselRef}>
          {imagePairs[currentIndex].map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 relative flex-shrink-0">
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
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg text-black cursor-pointer" onClick={handlePrev}>
          <ArrowBackIosIcon className="w-6 h-6" />
        </div>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg text-black cursor-pointer" onClick={handleNext}>
          <ArrowForwardIosIcon />
        </div>
      </div>
      )

}

export default Carousel;