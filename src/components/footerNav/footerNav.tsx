import  { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useNavigate } from "react-router-dom";


const FooterNav = () => {
  const navigate = useNavigate();
  const [openServices, setOpenServices] = useState(false);
  const [openOtherServices, setOpenOtherServices] = useState(false);

  const toggleServices = () => setOpenServices(!openServices);
  const toggleOtherServices = () => setOpenOtherServices(!openOtherServices);

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
      <Typography component="a" href="/"  onClick={(e) => handleNavigation(e, '/')} sx={linkStyle}>
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
            <Stack spacing={1} sx={{ pl: 2, mt: 1 ,fontSize:1}} >
              <Typography component="a" href="/regular-basic-cleaning" 
              onClick={(e) => handleNavigation(e, '/regular-basic-cleaning')}
              sx={{ ...linkStyle, fontSize: '0.7rem' }}>
                Regular Basic Cleaning
              </Typography>
              <Typography component="a" href="/one-time-cleaning"
              onClick={(e) => handleNavigation(e, '/one-time-cleaning')}
               sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              One Time Cleaning
              </Typography>
              <Typography component="a" href="/last-minute-cleaning" 
              onClick={(e) => handleNavigation(e, '/last-minute-cleaning')}
              sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              Last Minute Cleaning
              </Typography>
              <Typography component="a" href="/deep_cleaning" 
              onClick={(e) => handleNavigation(e, '/deep_cleaning')}
              sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              Deep Cleaning
              </Typography>
              <Typography component="a" href="/move_in_out_cleaning" 
              onClick={(e) => handleNavigation(e, '/move_in_out_cleaning')}
               sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              Move In/Out Cleaning
              </Typography>
              <Typography component="a" href="/post_constructor_cleaning"
              onClick={(e) => handleNavigation(e, '/post_constructor_cleaning')}
               sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              Post Construction & Renovation Cleaning
              </Typography>
              <Typography component="a" href="/airbnb_and_short_service" 
              onClick={(e) => handleNavigation(e, '/airbnb_and_short_service')}
              sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              Airbnb And Short Term Rental Cleaning
              </Typography>
              <Typography component="a" href="/child_care_cleaning" 
              onClick={(e) => handleNavigation(e, '/child_care_cleaning')}
              sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              Child Care Cleaning
              </Typography>
              <Typography component="a" href="/elder_care_cleaning" 
              onClick={(e) => handleNavigation(e, '/elder_care_cleaning')}
              sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              Elder Care Cleaning
              </Typography>
              <Typography component="a" href="/upcomming" 
              onClick={(e) => handleNavigation(e, '/upcomming')}
              sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              Sanitization & Disinfection Booking
              </Typography>
              <Typography component="a" href="/upcomming" 
              onClick={(e) => handleNavigation(e, '/upcomming')}
              sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              Office and Commercial Cleaning
              </Typography>
              <Typography component="a" href="/upcomming" 
              onClick={(e) => handleNavigation(e, '/upcomming')}
              sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              Carpet & Upholstery Cleaning Booking
              </Typography>
              <Typography component="a" href="/upcomming" 
              onClick={(e) => handleNavigation(e, '/upcomming')}
              sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              Move In/Out Transport Service Booking
              </Typography>
              <Typography component="a" href="/upcomming" 
              onClick={(e) => handleNavigation(e, '/upcomming')}
              sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              Steam Cleaning Booking
              </Typography>
              <Typography component="a" href="/upcomming" 
              onClick={(e) => handleNavigation(e, '/upcomming')}
              sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              Pressure Washing Booking
              </Typography>
              <Typography component="a" href="/upcomming" 
              onClick={(e) => handleNavigation(e, '/upcomming')}
              sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              Event Cleaning
              </Typography>
              <Typography component="a" href="/upcomming" 
              onClick={(e) => handleNavigation(e, '/upcomming')}
              sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              Pool cleaning Booking
              </Typography>
              <Typography component="a" href="/upcomming" 
              onClick={(e) => handleNavigation(e, '/upcomming')}
              sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              Laundry Services
              </Typography>
            </Stack>
          )}
        </Box>

        {/* Company */}
        <Typography component="a" href="/company" 
        onClick={(e) => handleNavigation(e, '/company')}
        sx={linkStyle}>
          Company
        </Typography>

        {/* Contact Us */}
        <Typography component="a" href="/contactUsPage" 
        onClick={(e) => handleNavigation(e, '/contactUsPage')}
        sx={linkStyle}>
          Contact Us
        </Typography>

        {/* Careers */}
        <Typography component="a" href="/careers" 
        onClick={(e) => handleNavigation(e, '/careers')}
        sx={linkStyle}>
          Careers
        </Typography>

        {/* Other Services with Collapsible Dropdown */}
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
            }}
            onClick={toggleOtherServices}
          >
            <Typography variant="body1">Other Services</Typography>
            {openOtherServices ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Box>
          {openOtherServices && (
            <Stack spacing={1} sx={{ pl: 2, mt: 1 }}>
              <Typography component="a" href="/upcomming" 
              onClick={(e) => handleNavigation(e, '/upcomming')}
              sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              Pearly Sky cleaning services
              </Typography>
              <Typography component="a" href="/upcomming" 
              onClick={(e) => handleNavigation(e, '/upcomming')}
              sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              Pearly Sky Engineering and Construction
              </Typography>
              <Typography component="a" href="/upcomming" 
              onClick={(e) => handleNavigation(e, '/upcomming')}
              sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              Pearly Sky facility maintenance
              </Typography>
              <Typography component="a" href="/upcomming" 
              onClick={(e) => handleNavigation(e, '/upcomming')}
              sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              Pearly Sky  interior and architectural designing
              </Typography>
              <Typography component="a" href="/upcomming" 
              onClick={(e) => handleNavigation(e, '/upcomming')}
              sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              Pearly Sky swimming pool and landscaping
              </Typography>
              <Typography component="a" href="/upcomming" 
              onClick={(e) => handleNavigation(e, '/upcomming')}
              sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              Pearly Sky Hotel and restaurant
              </Typography>
              <Typography component="a" href="/upcomming" 
              onClick={(e) => handleNavigation(e, '/upcomming')}
              sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              Pearly Sky cargo services
              </Typography>
              <Typography component="a" href="/upcomming" 
              onClick={(e) => handleNavigation(e, '/upcomming')}
              sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              Pearly Sky propety magment
              </Typography>
              <Typography component="a" href="/upcomming" 
              onClick={(e) => handleNavigation(e, '/upcomming')}
              sx={{ ...linkStyle, fontSize: '0.7rem' }}>
              Pearly Sky real estate
              </Typography>
              
            </Stack>
          )}
        </Box>

        {/* Our Location */}
        <Typography component="a" href="/our-locations" 
        onClick={(e) => handleNavigation(e, '/our-locations')}
        sx={linkStyle}>
          Our Location
        </Typography>
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

export default FooterNav;
