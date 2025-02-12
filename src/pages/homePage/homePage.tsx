import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { homePageImage1, homePageImage2, homePageImage3, homePageImage4 } from "../../config/images";

export default function HomePage() {
  const imagePairs = [
    [homePageImage1, homePageImage2],
    [homePageImage3, homePageImage4],
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePairs.length);
    }, 3000); // Change images every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ textAlign: 'center', p: 4 }}>
      
      {/* Header */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#002F6D', mb: 2 ,mt:5}}>
        Welcome to Pearly Sky Cleaning Services
      </Typography>

      {/* Sub-description */}
      <Typography variant="h6" sx={{ color: '#555', mb: 3, maxWidth: '700px', margin: 'auto' }}>
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
          fontSize: '16px',
          textTransform: 'none',
          marginTop:'3%',
          fontWeight: 'bold',
          '&:hover': { backgroundColor: '#125ea6' }, 
        }}
      >
        Contact Us
      </Button>

      {/* Space */}
      <Box sx={{ height: 1 }} />

      {/* Images with Smooth Swap and Fixed Size */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt:5 }}>
        {imagePairs[currentIndex].map((imgSrc, i) => (
          <Box 
            key={i} 
            sx={{ 
              width: '50%',
              height: '400px', 
              overflow: 'hidden', 
              borderRadius: '12px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
            }}
          >
            <img
              src={imgSrc}
              alt={`homePageImage${i}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'opacity 1s ease-in-out',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
