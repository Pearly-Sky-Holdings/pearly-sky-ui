import React from "react";
import { Box, Typography } from "@mui/material";

const customerLogos = [
  { id: 1, logo: "/images/logo.png", name: "Pearly Sky" },
  { id: 2, logo: "/images/logo.png", name: "Pearly Sky" },
  { id: 3, logo: "/images/logo.png", name: "Pearly Sky" },
  { id: 1, logo: "/images/logo.png", name: "Pearly Sky" },
  { id: 2, logo: "/images/logo.png", name: "Pearly Sky" },
  { id: 3, logo: "/images/logo.png", name: "Pearly Sky" },
  { id: 1, logo: "/images/logo.png", name: "Pearly Sky" },
  { id: 2, logo: "/images/logo.png", name: "Pearly Sky" },
  { id: 3, logo: "/images/logo.png", name: "Pearly Sky" },
];

const CustomerSlider: React.FC = () => {
  return (
    <Box
      sx={{
        mt: 1,
        overflow: "hidden",
        width: "100%",        
        py: 5,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        color="#002F6D"
        mb={4}
      >
        Our Customers
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: { xs: 5, md: 10},
          animation: "scroll 30s linear infinite",
          "@keyframes scroll": {
            "0%": { transform: "translateX(0%)" },
            "100%": { transform: "translateX(-100%)" },
          },
          justifyContent: { xs: "center", md: "flex-start" },
          flexWrap: "nowrap",
        }}
      >
        {[...customerLogos, ...customerLogos].map((customer, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minWidth: { xs: "100px", md: "150px" },
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: "100px", md: "200px" },
                height: { xs: "100px", md: "200px" },
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(to bottom, #002F6D, #0D90C8)",
                mb: 1,                
                overflow: "hidden",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                src={customer.logo}
                alt={customer.name}
                style={{
                  width: "80%",
                  height: "80%",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "0.8rem", md: "1rem" },
                color: "#002b5b",
              }}
            >
              {customer.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CustomerSlider;
