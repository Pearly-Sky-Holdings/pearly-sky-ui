import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import CountryCard from "../../components/contactUsCountryCards/contactUsCountryCards";
import { contactImage1 } from "../../config/images.ts";
import Globe from "../../components/contactUsCountryCards/Globe";

const countries = [
  { name: "France", hasOffice: true, mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.716918665806!2d79.9947566!3d7.042516200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f9000149518b%3A0x4f4b14f553e8f46c!2sPearly%20Sky%20Company%20Private%20LTD!5e0!3m2!1sen!2slk!4v1739700229122!5m2!1sen!2slk" },
  { name: "United Arab Emirates", hasOffice: true, mapSrc: "https://www.google.com/maps/embed?pb=VALID_GOOGLE_MAP_URL_HERE" },
  { name: "United Kingdom", hasOffice: true, mapSrc: "https://www.google.com/maps/embed?pb=VALID_GOOGLE_MAP_URL_HERE" },
  { name: "Sri Lanka", hasOffice: true, mapSrc: "https://www.google.com/maps/embed?pb=VALID_GOOGLE_MAP_URL_HERE" },
  { name: "Scotland", hasOffice: false },
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

const ContactUsPage: React.FC = () => {
  const midPoint = Math.ceil(countries.length / 2);
  const leftColumnCountries = countries.slice(0, midPoint);
  const rightColumnCountries = countries.slice(midPoint);

  return (
    <Container sx={{ minHeight: "100vh", py: 5 }}>
      <Typography variant="h4" align="center" fontWeight="bold" color="#002F6D" sx={{ mb: 3 }}>
        Contact Us
      </Typography>

      {/* Images Section - Top Row */}
      <Grid container spacing={3} sx={{ mb: 5 }}>
        <Grid item xs={12} md={6} style={{ height: "60vh" }}>
          <Box
            component="img"
            src={contactImage1}
            alt="Customer Support"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow: "0px 4px 10px rgba(37, 150, 190, 0.5)",
              transition: "transform 0.3s ease-in-out, boxShadow 0.3s ease-in-out",
              "&:hover": { transform: "scale(1.01)" },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} style={{ height: "60vh" }}>
        <Box sx={{
            width: "100%",
            height: "100%",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0px 4px 10px rgba(37, 150, 190, 0.5)",
            transition: "transform 0.3s ease-in-out, boxShadow 0.3s ease-in-out",
            "&:hover": { transform: "scale(1.01)" }
          }}>
            <Globe />
          </Box>
        </Grid>
      </Grid>

      {/* Countries List - Two Columns */}
      <Grid container spacing={3}>
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
    </Container>
  );
};

export default ContactUsPage;