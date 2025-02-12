import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <Box sx={{ textAlign: 'center', p: 4 }}>
      
      {/* Header */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#002F6D', mb: 2 ,mt:5}}>
        Welcome to Pearly Sky Cleaning Services
      </Typography>

      {/* Sub-description */}
      <Typography variant="h6" sx={{ color: '#555', mb: 3, maxWidth: '600px', margin: 'auto' }}>
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

      {/* Images*/}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt:5 }}>
        <img
          src="./images/homePageImage1.png" 
          alt="homePageImage1"
          style={{
            width: '50%',              
            borderRadius: '12px',
            objectFit: 'contain', 
          }}
        />
        <img
          src="./images/homePageImage2.png" 
          alt="homePageImage2"
          style={{
            width: '50%', 
            borderRadius: '12px',
            objectFit: 'contain', 
          }}
        />
      </Box>

    </Box>
  );
}
