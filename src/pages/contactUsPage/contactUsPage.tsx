import React from "react";
import UiContactUsPage from "../../pages/HomeContactUsPage/uiContactUsPage.tsx";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";

import {
  Grid,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CountryCard from "../../components/contactUsCountryCards/contactUsCountryCards";
import {  worldMapVideo } from "../../config/images.ts";
const emailIcon = "./images/uiContactUs/mailicon.png";

const countries = [
  {
    name: "France",
    hasOffice: true,
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.8965731406633!2d2.3461149!3d48.860182599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f6025fd8697%3A0xe4968cc599a43374!2sPearly%20Sky%20Cleaning%20Service%20Private%20Ltd!5e0!3m2!1sen!2slk!4v1740018065562!5m2!1sen!2slk",
  },
  {
    name: "United Kingdom",
    hasOffice: true,
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5085732.981617449!2d-0.141364!3d51.508298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760529dc531585%3A0xa9fbeb809edb727d!2s45%20Albemarle%20St%2C%20London%20W1S%204JL%2C%20UK!5e0!3m2!1sen!2slk!4v1740018343718!5m2!1sen!2slk",
  },
  {
    name: "Sri Lanka",
    hasOffice: true,
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.716918665806!2d79.9947566!3d7.042516200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f9000149518b%3A0x4f4b14f553e8f46c!2sPearly%20Sky%20Company%20Private%20LTD!5e0!3m2!1sen!2slk!4v1740018531225!5m2!1sen!2slk",
  },
  { name: "Scotland", hasOffice: false },
  { name: "United Arab Emirates", hasOffice: false },
  { name: "Germany", hasOffice: false },
  { name: "Belgium", hasOffice: false },
  { name: "United Arab Imirates", hasOffice: false },
  { name: "Canada", hasOffice: false },
  { name: "Finland", hasOffice: false },
  { name: "Saudi Arabia", hasOffice: false },
  { name: "Italy", hasOffice: false },
  { name: "United Staes ", hasOffice: false },
  { name: "Austria", hasOffice: false },
  { name: "Swetzealand", hasOffice: false },
  { name: "Denmark", hasOffice: false },
  { name: "Poland", hasOffice: false },
  { name: "Portugal", hasOffice: false },
  { name: "Portugal", hasOffice: false },
  { name: "Ireland", hasOffice: false },
  { name: "Netherlands", hasOffice: false },
  { name: "Qatar", hasOffice: false },
  { name: "New Zealand", hasOffice: false },
  { name: "Luxembourg", hasOffice: false },
];

const emails = [
  { label: "General Info", address: "Info@pearlyskyplc.com" },
  { label: "Support", address: "support@pearlyskyplc.com" },
  { label: "Sales", address: "Sales@pearlyskyplc.com" },
  { label: "Helpdesk", address: "Helpdesk@pearlyskyplc.com" },
  { label: "Recruiting", address: "Recruiting@pearlyskyplc.com" },
];

const ContactUsPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const midPoint = Math.ceil(countries.length / 2);
  const leftColumnCountries = countries.slice(0, midPoint);
  const rightColumnCountries = countries.slice(midPoint);

  return (
    <Box sx={{ py: 5 ,backgroundColor:"white",px:3}}>
    
      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        color="#002F6D"
        sx={{ mb: 1 }}
      >
        Contact Us
      </Typography>
      <UiContactUsPage/>

       {/* Email Section - Now Responsive */}
       <Box sx={{ mt: 1, textAlign: "center",mb:5 }}>
        <Grid
          container
          spacing={isMobile ? 2 : 1}
          justifyContent="center"
          alignItems="center"
          // Remove nowrap to allow wrapping on mobile
          sx={{
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          {emails.map((email, index) => (
            <Grid
              item
              key={index}
              xs={isMobile ? 12 : "auto"}
              sx={{
                width: isMobile ? "100%" : "auto",
                mb: isMobile ? 0 : 1,
                fontSize: isMobile ? "12px" : "",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "20px",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.05)" },
                  width: isMobile ? "100%" : "auto",
                }}
              >
                <Box
                  component="img"
                  src={emailIcon}
                  alt="Email Icon"
                  sx={{ width: "24px", height: "24px", marginBottom: "8px" }}
                />
                <a
                  href={`mailto:${email.address}`}
                  style={{
                    textDecoration: "none",
                    color: "#257ebe",
                    fontWeight: "bold",
                    wordBreak: "break-word", // Prevent email overflow
                  }}
                >
                  {email.address}
                </a>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Images Section - Top Row */}
      <Grid container spacing={3} sx={{ mb: 5, px: 3 }}>
            {/* Video Section */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0px 4px 10px rgba(37, 150, 190, 0.5)",
                  transition: "transform 0.3s ease-in-out",
                  position: "relative",
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              >
                <video
                  src={worldMapVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: isMobile ? "contain" : "cover",
                    borderRadius: "12px",
                  }}
                />
              </Box>
            </Grid>

                          
              {/* Contact Info Section */}
            <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 3 }}>
              {/* Hotline */}
              <Box
                component="a"
                href="tel:+94775678335"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 2,
                  borderRadius: "12px",
                  backgroundColor: "#F3F8FF",      
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {        
                    transform: "scale(1.05)",        
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#D0E8FF",
                    mb: 1,
                  }}
                >
                  <PhoneIcon fontSize="medium" sx={{ color: "#002F6D" }} />
                </Box>
                <Typography variant="body1" fontWeight="bold" color="#002F6D">
                  Our Hotline Number
                </Typography>
                <Typography variant="body2" color="black">
                  +94775678335
                </Typography>
              </Box>

              {/* WhatsApp */}
              <Box
                component="a"
                href="https://wa.me/94775678335"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 2,
                  borderRadius: "12px",
                  backgroundColor: "#F3F8FF",
                
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    
                    transform: "scale(1.05)",
                  
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#D0E8FF",
                    mb: 1,
                  }}
                >
                  <WhatsAppIcon fontSize="medium" sx={{ color: "#002F6D" }} />
                </Box>
                <Typography variant="body1" fontWeight="bold" color="#002F6D">
                  Our WhatsApp Number
                </Typography>
                <Typography variant="body2" color="black">
                  +94775678335
                </Typography>
              </Box>
            </Grid>
          </Grid>         


      {/* Countries List - Two Columns */}
      <Grid container spacing={3} sx={{ py: 5 ,px:3}}>
        <Grid item xs={12} md={6}>
          {leftColumnCountries.map((country, index) => (
            <CountryCard key={index} {...country} />
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          {rightColumnCountries.map((country, index) => (
            <CountryCard key={index + midPoint} {...country} />
          ))}
        </Grid>
      </Grid> 

    </Box>
  );
};

export default ContactUsPage;
