import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import CountryCard from "../../components/contactUsCountryCards/contactUsCountryCards";
import { contactImage1 } from "../../config/images.ts";
import Globe from "../../components/contactUsCountryCards/Globe";
const emailIcon = "./images/uiContactUs/mailicon.png";

const countries = [
  { name: "France", hasOffice: true, mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.8965731406633!2d2.3461149!3d48.860182599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f6025fd8697%3A0xe4968cc599a43374!2sPearly%20Sky%20Cleaning%20Service%20Private%20Ltd!5e0!3m2!1sen!2slk!4v1740018065562!5m2!1sen!2slk"  },
  { name: "United Kingdom", hasOffice: true, mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5085732.981617449!2d-0.141364!3d51.508298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760529dc531585%3A0xa9fbeb809edb727d!2s45%20Albemarle%20St%2C%20London%20W1S%204JL%2C%20UK!5e0!3m2!1sen!2slk!4v1740018343718!5m2!1sen!2slk"  },
  { name: "Sri Lanka", hasOffice: true, mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.716918665806!2d79.9947566!3d7.042516200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f9000149518b%3A0x4f4b14f553e8f46c!2sPearly%20Sky%20Company%20Private%20LTD!5e0!3m2!1sen!2slk!4v1740018531225!5m2!1sen!2slk" },
  { name: "Scotland", hasOffice: false },
  { name: "United Arab Emirates", hasOffice: false  },
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
  const midPoint = Math.ceil(countries.length / 2);
  const leftColumnCountries = countries.slice(0, midPoint);
  const rightColumnCountries = countries.slice(midPoint);

  return (
    <Container sx={{ minHeight: "100vh", py: 5 }}>
      <Typography variant="h4" align="center" fontWeight="bold" color="#002F6D" sx={{ mb: 3 }} 
      >
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
            backgroundColor:"#ecf0f1",
            boxShadow: "0px 4px 10px rgba(37, 150, 190, 0.5)",
            transition: "transform 0.3s ease-in-out, boxShadow 0.3s ease-in-out",
            "&:hover": { transform: "scale(1.01)", backgroundColor: "#dfe6e9"}
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

      {/* Email Section */}
        <Box sx={{ mt: 5, textAlign: "center" }}>
          <Typography variant="h5" fontWeight="bold" color="#002F6D" sx={{ mb: 3 }}>
            Get in Touch
          </Typography>
          <Grid container spacing={2} justifyContent="center" alignItems="center" wrap="nowrap">
            {emails.map((email, index) => (
              <Grid item key={index} xs="auto">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  <Box
                    component="img"
                    src={emailIcon}
                    alt="Email Icon"
                    sx={{ width: "24px", height: "24px", marginBottom: "8px" }}
                  />
                  <a href={`mailto:${email.address}`} style={{ textDecoration: "none", color: "#257ebe", fontWeight: "bold" }}>
                    {email.address}
                  </a>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

    </Container>
  );
};

export default ContactUsPage;