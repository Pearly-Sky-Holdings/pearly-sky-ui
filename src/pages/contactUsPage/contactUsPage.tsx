import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import CountryCard from "../../components/contactUsCountryCards/contactUsCountryCards";
import Navbar from "../../components/navigationBar/navigationBar";
import TopBar from "../../components/topBar/topBar";
import Footer from "../footerPage/footerPage";

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


const mainCountries = countries.slice(0, countries.length - 6); 
const lastSixCountries = countries.slice(-6); 

const ContactUsPage: React.FC = () => {
  return (
    <>
      
      <TopBar />

      
      <Navbar />

      
      <Container sx={{ minHeight: "100vh", py: 5 }}>
        <Typography variant="h4" align="center" fontWeight="bold" color="#002F6D" sx={{ mb: 3 }}>
          Contact Us
        </Typography>

        <Grid container spacing={5}>
          {/* Countries List */}
          <Grid item xs={12} md={6}>
            {mainCountries.map((country, index) => (
              <CountryCard key={index} {...country} />
            ))}
          </Grid>

          {/* Images Section  */}
          <Grid item xs={12} md={6} container direction="column" spacing={3}>
            <Grid item>
              <img
                src="./images/uiContactUs/ContactUs.png"
                alt="Customer Support"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "3px 3px 10px rgba(0,0,0,0.1)",
                }}
              />
            </Grid>
            <Grid item>
              <img
                src="./images/uiContactUs/glob.png"
                alt="Global Presence"
                style={{
                  width: "63%",
                  borderRadius: "12px",
                  boxShadow: "3px 3px 10px rgba(0,0,0,0.1)",
                }}
              />
            </Grid>

            
            <Grid item>
              
              {lastSixCountries.map((country, index) => (
                <CountryCard key={index + mainCountries.length} {...country} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      
      <Footer />
    </>
  );
};

export default ContactUsPage;
