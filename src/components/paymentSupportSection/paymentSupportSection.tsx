import React from 'react';
import {
  supportPayment1,
  supportPayment2,
  supportPayment3,
  supportPayment4,
  supportPayment5,
  supportPayment6,
  supportPayment7,
  supportPayment8,
  supportPayment9,
  supportPayment10,
} from "../../config/images";
import { Box } from '@mui/material';

const paymentMethods = [
  { icon: supportPayment1, alt: "Visa" },
  { icon: supportPayment2, alt: "Stripe" },
  { icon: supportPayment3, alt: "PayPal" },
  { icon: supportPayment4, alt: "Mastercard" },
  { icon: supportPayment5, alt: "American Express" },
  { icon: supportPayment6, alt: "Apple Pay" },
  { icon: supportPayment7, alt: "Google Pay" },
  { icon: supportPayment8, alt: "Bitcoin" },
  { icon: supportPayment9, alt: "Amazon Pay" },
  { icon: supportPayment10, alt: "Discover" },
];

const PaymentSupportSection = () => {
  return (
    <Box
      sx={{
        mt: 4,
        overflow: "hidden",
        width: "100%",
      }}
    >
      <h2 className="text-xl font-semibold mb-4 text-blue-900 text-center">{"We Support"}</h2>
      <Box
        sx={{
          display: "flex",
          gap: { xs: 3, md: 6 },
          animation: "scroll 30s linear infinite",
          "@keyframes scroll": {
            "0%": {
              transform: "translateX(0%)",
            },
            "100%": {
              transform: "translateX(-100%)",
            },
          },
          justifyContent: { xs: "center", md: "flex-start" },
          flexWrap: { xs: "nowrap", md: "nowrap" },
        }}
      >
        {[...paymentMethods, ...paymentMethods].map((method, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minWidth: { xs: "80px", md: "100px" },
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: "60px", md: "80px" }, // Increased size for better visibility
                height: { xs: "60px", md: "80px" }, // Increased size for better visibility
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(5px)",
                mb: 1,
                overflow: "hidden",
                border: "2px solid rgba(255, 255, 255, 0.2)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  background: "rgba(255, 255, 255, 0.15)",
                },
              }}
            >
              <img
                src={method.icon}
                alt={method.alt}
                style={{
                  width: "70%", 
                  height: "70%", 
                  objectFit: "contain", 
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PaymentSupportSection;