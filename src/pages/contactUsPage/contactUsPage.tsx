import React, { useMemo } from "react";
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
import { worldMapVideo } from "../../config/images.ts";
import { useLanguage } from "../../context/LanguageContext";

const emailIcon = "./images/uiContactUs/mailicon.png";

const ContactUsPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { translate } = useLanguage();

  const countries = useMemo(() => [
    {
      name: translate('cfrance'),
      hasOffice: true,
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.8965731406633!2d2.3461149!3d48.860182599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f6025fd8697%3A0xe4968cc599a43374!2sPearly%20Sky%20Cleaning%20Service%20Private%20Ltd!5e0!3m2!1sen!2slk!4v1740018065562!5m2!1sen!2slk",
    },
    {
      name: translate('cunitedKingdom'),
      hasOffice: true,
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2680519800388!2d-0.14136389999999996!3d51.5082981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605f3a642a9c1%3A0x7b739a1a3f9ba4!2sPEARLY%20SKY%20CLEANING%20AND%20FACILITY%20MAINTENANCE%20COMPANY%20PRIVATE%20LTD!5e0!3m2!1sen!2slk!4v1743831274206!5m2!1sen!2slk" ,
    },
    {
      name: translate('csriLanka'),
      hasOffice: true,
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.716918665806!2d79.9947566!3d7.042516200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f9000149518b%3A0x4f4b14f553e8f46c!2sPearly%20Sky%20Company%20Private%20LTD!5e0!3m2!1sen!2slk!4v1740018531225!5m2!1sen!2slk",
    },
    { name: translate('scotland'), hasOffice: false },
    { name: translate('unitedArabEmirates'), hasOffice: false },
    { name: translate('cgermany'), hasOffice: false },
    { name: translate('belgium'), hasOffice: false },
    { name: translate('canada'), hasOffice: false },
    { name: translate('finland'), hasOffice: false },
    // { name: translate('saudiArabia'), hasOffice: false },
    { name: translate('monaco'), hasOffice: false },
    { name: translate('italy'), hasOffice: false },
    { name: translate('cunitedStates'), hasOffice: false },
    { name: translate('spain'), hasOffice: false }, 
    { name: translate('australia'), hasOffice: false },
    { name: translate('austria'), hasOffice: false },
    { name: translate('switzerland'), hasOffice: false },
    { name: translate('denmark'), hasOffice: false },
    { name: translate('poland'), hasOffice: false },
    { name: translate('portugal'), hasOffice: false },
    { name: translate('ireland'), hasOffice: false },
    { name: translate('netherlands'), hasOffice: false },
    { name: translate('qatar'), hasOffice: false },
    { name: translate('newZealand'), hasOffice: false },
    { name: translate('luxembourg'), hasOffice: false },
  ], [translate]);

  const emails = [
    { label: translate('generalInfo'), address: "Info@pearlyskyplc.com" },
    { label: translate('support'), address: "support@pearlyskyplc.com" },
    { label: translate('sales'), address: "Sales@pearlyskyplc.com" },
    { label: translate('helpdesk'), address: "Helpdesk@pearlyskyplc.com" },
    { label: translate('recruiting'), address: "Administration@pearlyskyplc.com" },
  ];

  const midPoint = Math.ceil(countries.length / 2);
  const leftColumnCountries = countries.slice(0, midPoint);
  const rightColumnCountries = countries.slice(midPoint);

  return (
    <Box sx={{ py: 5, backgroundColor: "white", px: 3 }}>
      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        color="#002F6D"
        sx={{ mb: 1 }}
      >
        {translate('contactUs')}
      </Typography>
      <UiContactUsPage/>

      {/* Email Section */}
      <Box sx={{ mt: 1, textAlign: "center", mb: 5 }}>
        <Grid
          container
          spacing={isMobile ? 2 : 1}
          justifyContent="center"
          alignItems="center"
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
                  alt={translate('emailIconAlt')}
                  sx={{ width: "24px", height: "24px", marginBottom: "8px" }}
                />
                <a
                  href={`mailto:${email.address}`}
                  style={{
                    textDecoration: "none",
                    color: "#257ebe",
                    fontWeight: "bold",
                    wordBreak: "break-word",
                  }}
                >
                  {email.address}
                </a>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Images Section */}
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
              aria-label={translate('worldMapVideoAlt')}
            />
          </Box>
        </Grid>
                      
        {/* Contact Info Section */}
        <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 3 }}>
          {/* Hotline */}
          <Box
            component="a"
            href="tel:+33635508169"
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
              {translate('hotlineNumber')}
            </Typography>
            <Typography variant="body2" color="black">
              +33635508169
            </Typography>
          </Box>

          {/* WhatsApp */}
          <Box
            component="a"
            href="https://wa.me/33635508169"
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
              {translate('whatsappNumber')}
            </Typography>
            {/* <Typography variant="body2" color="black">
            +33635508169
            </Typography> */}
          </Box>
        </Grid>
      </Grid>         

      {/* Countries List */}
      <Grid container spacing={3} sx={{ py: 5, px: 3 }}>
        <Grid item xs={12} md={6}>
          {leftColumnCountries.map((country, index) => (
            <CountryCard key={`left-${index}`} {...country} />
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          {rightColumnCountries.map((country, index) => (
            <CountryCard key={`right-${index}`} {...country} />
          ))}
        </Grid>
      </Grid> 
    </Box>
  );
};

export default ContactUsPage;