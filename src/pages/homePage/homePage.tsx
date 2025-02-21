import { Box, Button, Typography, useTheme, useMediaQuery, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { homePageImage1, homePageImage2, homePageImage3, homePageImage4 } from "../../config/images";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const allImages = [homePageImage1, homePageImage2, homePageImage3, homePageImage4];
  const imagePairs = [[homePageImage1, homePageImage2], [homePageImage3, homePageImage4]];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isMobile) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePairs.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile]);

  const handlePrevImage = () => {
    if (isMobile) {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNextImage = () => {
    if (isMobile) {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % allImages.length
      );
    }
  };

  return (
    <Box sx={{ 
      textAlign: 'center', 
      p: isMobile ? 2 : 6,
      width: '100%',
      boxSizing: 'border-box'
    }}>
      
      {/* Header */}
      <Typography 
        variant={isMobile ? "h5" : "h4"} 
        sx={{ 
          fontWeight: 'bold', 
          color: '#002F6D', 
          mb: 2,
          mt: 5,
          px: isMobile ? 2 : 0
        }}
      >
        Welcome to Pearly Sky Cleaning Services
      </Typography>

      {/* Sub-description */}
      <Typography 
        variant={isMobile ? "body1" : "h6"} 
        sx={{ 
          color: '#555', 
          mb: 3, 
          maxWidth: '700px', 
          margin: 'auto',
          px: isMobile ? 2 : 0
        }}
      >
        You are our most valued asset at PearlySky Company Pvt. Ltd. 
        We are committed to providing you with the best care and service.
      </Typography>

      {/* Contact Us Button */}
      <Button
        variant="contained"
        component={Link}
        to="/contactUsPage"
        sx={{
          backgroundColor: '#002F6D', 
          borderRadius: '12px', 
          padding: '6px 20px',
          fontSize: isMobile ? '14px' : '16px',
          textTransform: 'none',
          marginTop: '3%',
          fontWeight: 'bold',
          '&:hover': { backgroundColor: '#125ea6' }, 
        }}
      >
        Contact Us
      </Button>

      {/* Space */}
      <Box sx={{ height: isMobile ? 2 : 1 }} />

      {/* Images Section */}
      <Box sx={{ 
        mt: 5,
        px: isMobile ? 2 : 0,
        position: 'relative',
        overflow: 'hidden'
      }}>
        {isMobile ? (
          // Mobile View - Single Image Carousel
          <Box sx={{ position: 'relative', height: '300px', mb: 4 }}>
            {allImages.map((imgSrc, i) => (
              <Box 
                key={i}
                sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '300px',
                  opacity: currentIndex === i ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: "0px 4px 10px rgba(37, 150, 190, 0.5)",
                }}
              >
                <img
                  src={imgSrc}
                  alt={`homePageImage${i}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            ))}

            {/* Navigation Icons */}
            <IconButton
              onClick={handlePrevImage}
              sx={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                },
                zIndex: 2
              }}
            >
              <ChevronLeftIcon sx={{ color: '#002F6D' }} />
            </IconButton>

            <IconButton
              onClick={handleNextImage}
              sx={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                },
                zIndex: 2
              }}
            >
              <ChevronRightIcon sx={{ color: '#002F6D' }} />
            </IconButton>

            {/* Image Navigation Dots */}
            <Box sx={{
              position: 'absolute',
              bottom: '15px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '8px',
              zIndex: 1
            }}>
              {allImages.map((_, i) => (
                <Box
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  sx={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: currentIndex === i ? '#002F6D' : '#BBB',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                  }}
                />
              ))}
            </Box>
          </Box>
        ) : (
          // Desktop View - Image Pairs
          <Box sx={{ 
            display: 'flex',
            justifyContent: 'center', 
            gap: 2,
          }}>
            {imagePairs[currentIndex].map((imgSrc, i) => (
              <Box 
                key={i} 
                sx={{ 
                  width: '50%',
                  height: '400px',
                  overflow: 'hidden', 
                  borderRadius: '12px',
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  boxShadow: "0px 4px 10px rgba(37, 150, 190, 0.5)",
                }}
              >
                <img
                  src={imgSrc}
                  alt={`homePageImage${i}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}