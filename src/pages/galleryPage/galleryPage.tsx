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
} from "../../config/images";
import { useState, useEffect } from "react";

const progressData = [
  { label: "Assessment and Planning", value: 100 },
  { label: "Execution", value: 95 },
  { label: "Project Completion", value: 95 },
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
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 5 >= images.length ? 0 : prevIndex + 5
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [images.length]);

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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Progress Section - Different layouts for mobile and desktop */}
        {isMobile ? (
          // Mobile Progress Section with separate boxes
          <Box display="flex" flexDirection="column" alignItems="center" mb={8}>
            {progressData.map((item) => (
              <Box
                key={item.label}
                textAlign="center"
                mb={2}
                p={2}
                borderRadius={4}
                width="85%"
                bgcolor="white"
                boxShadow="0px 4px 10px rgba(37, 150, 190, 0.5)"
              >
                <Typography variant="h6" color="#008CDA" fontWeight="bold">
                  {item.value}%
                </Typography>
                <Typography variant="body2" color="black">
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        ) : (
          // Desktop Progress Section (original)
          <Box display="flex" justifyContent="center" textAlign="center">
            <Box
              display="flex"
              justifyContent="space-around"
              mb={8}
              bgcolor="white"
              textAlign="center"
              pt={1}
              pb={8}
              borderRadius={50}
              width="75%"
              height={35}
              boxShadow="0px 4px 10px rgba(37, 150, 190, 0.5)"
            >
              {progressData.map((item) => (
                <Box key={item.label} textAlign="center">
                  <Typography variant="h6" color="#008CDA" fontWeight="bold">
                    {item.value}%
                  </Typography>
                  <Typography variant="body2" color="black">
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {/* Gallery Section */}
        <h2 className="text-2xl font-bold text-[#003370] text-center mb-6">
          Gallery
        </h2>

        <div className="relative">
          {/* Navigation Buttons */}
          {images.length > 5 && (
            <>
              <div
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-100 cursor-pointer"
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
                  alt="Gallery"
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
                      alt="Gallery"
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img
                      src={currentImages[2]}
                      alt="Gallery"
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Horizontal Stack - Modified for mobile to use aspect-[4/3] instead of aspect-[7/16] */}
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
                          alt="Gallery"
                          className="w-full h-full object-cover transition-transform duration-500"
                        />
                      </div>
                      <div className="aspect-[4/3] rounded-lg overflow-hidden">
                        <img
                          src={currentImages[4]}
                          alt="Gallery"
                          className="w-full h-full object-cover transition-transform duration-500"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="aspect-[7/16] rounded-lg overflow-hidden">
                        <img
                          src={currentImages[3]}
                          alt="Gallery"
                          className="w-full h-full object-cover transition-transform duration-500"
                        />
                      </div>
                      <div className="aspect-[7/16] rounded-lg overflow-hidden">
                        <img
                          src={currentImages[4]}
                          alt="Gallery"
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