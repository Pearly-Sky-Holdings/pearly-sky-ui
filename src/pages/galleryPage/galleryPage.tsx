import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  galleryImage1,
  galleryImage2,
  galleryImage3,
  galleryImage4,
  galleryImage5,
  galleryImage6,
  galleryImage7,
  galleryImage8,
  galleryImage9,
  galleryImage10,
  galleryImage11,
  galleryImage12,
  galleryImage13,
  galleryImage14,
  galleryImage15
} from "../../config/images";
import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressValues, setProgressValues] = useState([0, 0, 0]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { translate } = useLanguage();

  const progressData = [
    { labelKey: "assessmentPlanning", value: 100 },
    { labelKey: "execution", value: 95 },
    { labelKey: "projectCompletion", value: 95 },
  ];

  const images = [
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage4,
    galleryImage5,
    galleryImage6,
    galleryImage7,
    galleryImage8,
    galleryImage9,
    galleryImage10,
    galleryImage11,
    galleryImage12,
    galleryImage13,
    galleryImage14,
    galleryImage15
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 5 >= images.length ? 0 : prevIndex + 5
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [images.length]);

  // Progress animation effect
  useEffect(() => {
    // Animation duration in milliseconds
    const animationDuration = 1500;
    // Number of steps for the animation
    const steps = 60;
    // Time between steps in milliseconds
    const stepDuration = animationDuration / steps;

    let currentStep = 0;
    
    const animationInterval = setInterval(() => {
      currentStep++;
      
      if (currentStep <= steps) {
        // Calculate progress based on current step
        setProgressValues(progressData.map((item, index) => {
          return Math.round((item.value * currentStep) / steps);
        }));
      } else {
        // Animation complete
        clearInterval(animationInterval);
        setProgressValues(progressData.map(item => item.value));
      }
    }, stepDuration);

    return () => clearInterval(animationInterval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 5 >= images.length ? 0 : prevIndex + 5
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 5 < 0 ? Math.floor(images.length / 5) * 5 : prevIndex - 5
    );
  };

  const currentImages = images.slice(currentIndex, currentIndex + 5);
  while (currentImages.length < 5) {
    currentImages.push(currentImages[currentImages.length - 1]);
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Progress Section - Different layouts for mobile, tablet and desktop */}
        {isMobile ? (
          // Mobile Progress Section with separate boxes
          <Box display="flex" flexDirection="column" alignItems="center" mb={8}>
            {progressData.map((item, index) => (
              <Box
                key={item.labelKey}
                textAlign="center"
                mb={2}
                p={2}
                borderRadius={4}
                width="85%"
                bgcolor="white"
                boxShadow="0px 4px 10px rgba(37, 150, 190, 0.5)"
              >
                <Typography variant="h6" color="#008CDA" fontWeight="bold">
                  {progressValues[index]}%
                </Typography>
                <Typography variant="body2" color="black">
                  {translate(item.labelKey)}
                </Typography>
              </Box>
            ))}
          </Box>
        ) : (
          // Desktop/Tablet Progress Section (modified to remove extra space)
          <Box display="flex" justifyContent="center" textAlign="center">
            <Box
              display="flex"
              justifyContent="space-around"
              mb={8}
              bgcolor="white"
              textAlign="center"
              py={3}
              borderRadius={50}
              width="75%"
              boxShadow="0px 4px 10px rgba(37, 150, 190, 0.5)"
            >
              {progressData.map((item, index) => (
                <Box key={item.labelKey} textAlign="center">
                  <Typography variant="h6" color="#008CDA" fontWeight="bold">
                    {progressValues[index]}%
                  </Typography>
                  <Typography variant="body2" color="black">
                    {translate(item.labelKey)}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {/* Gallery Section */}
        <h2 className="text-2xl font-bold text-[#003370] text-center mb-6">
          {translate('galleryTitle')}
        </h2>

        <div className="relative">
          {/* Navigation Buttons */}
          {images.length > 5 && (
            <>
              <div
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-100 cursor-pointer"
                aria-label={translate('previousSlide')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-100 cursor-pointer"
                aria-label={translate('nextSlide')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </>
          )}

          {/* Gallery Grid */}
          <div
            className={`grid ${
              isMobile ? "grid-cols-1" : "grid-cols-12"
            } gap-4`}
          >
            {/* Large Image */}
            <div
              className={`${
                isMobile ? "col-span-1" : "col-span-12 md:col-span-5"
              }`}
            >
              <div className="aspect-[4/3.6] rounded-lg overflow-hidden">
                <img
                  src={currentImages[0]}
                  alt={translate('galleryImageAlt')}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Side Grid */}
            <div
              className={`${
                isMobile ? "col-span-1" : "col-span-12 md:col-span-7"
              }`}
            >
              <div
                className={`grid ${
                  isMobile ? "grid-cols-1" : "grid-cols-12"
                } gap-4`}
              >
                {/* Vertical Stack */}
                <div
                  className={`${
                    isMobile ? "col-span-1" : "col-span-5"
                  } space-y-4`}
                >
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img
                      src={currentImages[1]}
                      alt={translate('galleryImageAlt')}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img
                      src={currentImages[2]}
                      alt={translate('galleryImageAlt')}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Horizontal Stack */}
                <div
                  className={`${
                    isMobile ? "col-span-1 space-y-4" : "col-span-7 grid grid-cols-2 gap-4"
                  }`}
                >
                  {isMobile ? (
                    <>
                      <div className="aspect-[4/3] rounded-lg overflow-hidden">
                        <img
                          src={currentImages[3]}
                          alt={translate('galleryImageAlt')}
                          className="w-full h-full object-cover transition-transform duration-500"
                        />
                      </div>
                      <div className="aspect-[4/3] rounded-lg overflow-hidden">
                        <img
                          src={currentImages[4]}
                          alt={translate('galleryImageAlt')}
                          className="w-full h-full object-cover transition-transform duration-500"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="aspect-[7/16] rounded-lg overflow-hidden">
                        <img
                          src={currentImages[3]}
                          alt={translate('galleryImageAlt')}
                          className="w-full h-full object-cover transition-transform duration-500"
                        />
                      </div>
                      <div className="aspect-[7/16] rounded-lg overflow-hidden">
                        <img
                          src={currentImages[4]}
                          alt={translate('galleryImageAlt')}
                          className="w-full h-full object-cover transition-transform duration-500"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Indicators */}
          {images.length > 5 && (
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: Math.ceil(images.length / 5) }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index * 5)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      Math.floor(currentIndex / 5) === index
                        ? "bg-blue-600 w-4"
                        : "bg-gray-300"
                    }`}
                    aria-label={`${translate('goToSlide')} ${index + 1}`}
                  />
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;