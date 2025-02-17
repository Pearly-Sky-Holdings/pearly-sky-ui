import { Box, Button, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { homePageImage1, homePageImage2, homePageImage3, homePageImage4 } from "../../config/images";

export default function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const imagePairs = [
    [homePageImage1, homePageImage2],
    [homePageImage3, homePageImage4],
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePairs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
        to="/contact-us"
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

      {/* Images with Smooth Swap and Fixed Size */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'center', 
        gap: 2, 
        mt: 5,
        px: isMobile ? 2 : 0
      }}>
        {imagePairs[currentIndex].map((imgSrc, i) => (
          <Box 
            key={i} 
            sx={{ 
              width: isMobile ? '100%' : '50%',
              height: isMobile ? '300px' : '400px',
              overflow: 'hidden', 
              borderRadius: '12px',
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              boxShadow: "0px 4px 10px rgba(37, 150, 190, 0.5)",
              marginBottom: isMobile ? 2 : 0
            }}
          >
            <img
              src={imgSrc}
              alt={`homePageImage${i}`}
              style={{
                width: '100%',
                height: '100%',
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                boxShadow: "0px 4px 10px rgba(37, 150, 190, 0.5)",
                objectFit: 'cover',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}