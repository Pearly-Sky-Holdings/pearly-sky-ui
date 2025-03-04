import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useNavigate } from "react-router-dom";

const FooterNav: React.FC = () => {
  const navigate = useNavigate();
  const [openServices, setOpenServices] = useState(false);

  const toggleServices = () => setOpenServices(!openServices);

  // Function to handle navigation to any page and scroll to top
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Box
      sx={{
        marginLeft: { xs: 0, md: 2 },
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", md: "flex-start" },
      }}
    >
      <Stack spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
        <Typography 
          component="a" 
          href="/" 
          onClick={(e) => handleNavigation(e, '/')} 
          sx={linkStyle}
        >
          Home
        </Typography>
        
        {/* Services with Collapsible Dropdown */}
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
            }}
            onClick={toggleServices}
          >
            <Typography variant="body1">Services</Typography>
            {openServices ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Box>
          {openServices && (
            <Stack spacing={1} sx={{ pl: 2, mt: 1, fontSize: 1 }}>
              {serviceLinks.map((service, index) => (
                <Typography
                  key={index}
                  component="a"
                  href={service.path}
                  onClick={(e) => handleNavigation(e, service.path)}
                  sx={{ ...linkStyle, fontSize: '0.7rem' }}
                >
                  {service.label}
                </Typography>
              ))}
            </Stack>
          )}
        </Box>

        {navigationLinks.map((link, index) => (
          <Typography
            key={index}
            component="a"
            href={link.path}
            onClick={(e) => handleNavigation(e, link.path)}
            sx={linkStyle}
          >
            {link.label}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
};

const linkStyle = {
  cursor: "pointer",
  "&:hover": { opacity: 0.8 },
  textDecoration: "none",
  color: "inherit",
};

const serviceLinks = [
  { label: "Regular Basic Cleaning", path: "/regular-basic-cleaning" },
  { label: "One Time Cleaning", path: "/one-time-cleaning" },
  { label: "Last Minute Cleaning", path: "/last-minute-cleaning" },
  { label: "Deep Cleaning", path: "/deep_cleaning" },
  { label: "Move In/Out Cleaning", path: "/move_in_out_cleaning" },
  { label: "Post Construction & Renovation Cleaning", path: "/post_constructor_cleaning" },
  { label: "Airbnb And Short Term Rental Cleaning", path: "/airbnb_and_short_service" },
  { label: "Child Care Cleaning", path: "/child_care_cleaning" },
  { label: "Elder Care Cleaning", path: "/elder_care_cleaning" },
  { label: "Sanitization & Disinfection Booking", path: "/upcomming" },
  { label: "Office and Commercial Cleaning", path: "/upcomming" },
  { label: "Carpet & Upholstery Cleaning Booking", path: "/upcomming" },
  { label: "Move In/Out Transport Service Booking", path: "/upcomming" },
  { label: "Steam Cleaning Booking", path: "/upcomming" },
  { label: "Pressure Washing Booking", path: "/upcomming" },
  { label: "Event Cleaning", path: "/upcomming" },
  { label: "Pool cleaning Booking", path: "/upcomming" },
  { label: "Laundry Services", path: "/upcomming" },
];

const navigationLinks = [
  { label: "Company", path: "https://pearlyskyplc.com" },
  { label: "Contact Us", path: "/contactUsPage" },
  { label: "Careers", path: "/career" },
  { label: "About Us", path: "/" },
  { label: "Our Location", path: "/our-locations" },
  { label: "Our Customers", path: "/" },
];

export default FooterNav;