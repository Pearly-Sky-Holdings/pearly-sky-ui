import { Box, Container, Typography, IconButton, Stack, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import FooterNav from "../../components/footerNav/footerNav.tsx";

import {
  companyLogo,
  footerImage2,
  footerImage3,
  footerImage4,
  flagAustralia,
  flagCanada,
  flagFinland,
  flagFrance,
  flagGermany,
  flagItaly,
  flagSaudiArabia,
  flagScotland,
  flagSrilanka,
  flagUAE,
  flagUk,
  flagUs,
  flagNetherlands,
  flagAustria,
  flagluxembourg,
  flagPortugal,
  flagQatar,
  flagDenmark,
  flagIreland,
  flagNewZealand,
  flagPoland,
  flagSpain,
  flagSwitzerland,
  flagBelgium,
} from "../../config/images.ts";

const countries = [
  { name: "France", flag: flagFrance },
  { name: "United Kingdom", flag: flagUk },
  { name: "Sri Lanka", flag: flagSrilanka },
  { name: "Scotland", flag: flagScotland },
  { name: "Germany", flag: flagGermany },
  { name: "Australia", flag: flagAustralia },
  { name: "United Arab Emirates", flag: flagUAE },
  { name: "Canada", flag: flagCanada },
  { name: "Finland", flag: flagFinland },
  { name: "Saudi Arabia", flag: flagSaudiArabia },
  { name: "Italy", flag: flagItaly },
  { name: "United States", flag: flagUs },
  { name: "Ireland", flag: flagIreland },
  { name: "Austria", flag: flagAustria },
  { name: "Netherlands", flag: flagNetherlands },
  { name: "Switzerland", flag: flagSwitzerland },
  { name: "Qatar", flag: flagQatar },
  { name: "Denmark", flag: flagDenmark },
  { name: "New Zealand", flag: flagNewZealand },
  { name: "Poland", flag: flagPoland },
  { name: "Luxembourg", flag: flagluxembourg },
  { name: "Portugal", flag: flagPortugal },
  { name: "Spain", flag: flagSpain },
  { name: "Belgium", flag: flagBelgium },
  { name: "Ireland", flag: flagIreland },
];

const Footer = () => {

   useNavigate();


  return (
    <Box
      sx={{
        color: "white",
        py: 6,
        backgroundImage: "linear-gradient(to bottom, #002F6D, #0D90C8)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.5fr 1fr 1fr 1fr" },
            gap: { xs: 4, md: 4, lg: 12 },
          }}
        >
          {/* Company Info */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <img
              src={companyLogo}
              alt="Pearly Sky"
              style={{
                width: "200px",
                marginBottom: "1.5rem",
              }}
            />
            <Typography
              variant="body2"
              sx={{
                mb: 3,
                maxWidth: "400px",
                lineHeight: 1.6,
                textAlign: { xs: "center", md: "justify" },
              }}
            >
              Pearly Sky Cleaning offers professional, eco-friendly cleaning
              services for homes, offices, and hotels across France. We focus on
              quality and customer satisfaction, delivering tailored solutions
              to keep your space spotless.
            </Typography>
          </Box>
          
          {/* Footer NavigationBar */}
          <FooterNav/>
                    
          {/* QR Code and Social Media */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <IconButton
                color="inherit"
                size="small"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.5)",
                    color: "blue",
                  },
                  width: 40,
                  height: 40,
                }}
                onClick={() => window.open("https://www.facebook.com/profile.php?id=61561165376278", "_blank")}
              >
                <FacebookIcon sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                color="inherit"
                size="small"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.5)",
                    color: "pink",
                  },
                  width: 40,
                  height: 40,
                }}
                onClick={() => window.open("https://www.instagram.com/pearlyskycleaning/?next=%2F", "_blank")}
              >
                <InstagramIcon sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                color="inherit"
                size="small"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.3)",
                    color: "blue",
                  },
                  width: 40,
                  height: 40,
                }}
                onClick={() => window.open("https://x.com/PEARLYSKYPVTLTD", "_blank")}
              >
                <TwitterIcon sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                color="inherit"
                size="small"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.3)",
                    color: "red",
                  },
                  width: 40,
                  height: 40,
                }}
                onClick={() => window.open("https://www.youtube.com/@pearlyskycleaningservice", "_blank")}
              >
                <YouTubeIcon sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                color="inherit"
                size="small"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.3)",
                    color: "red",
                  },
                  width: 40,
                  height: 40,
                }}
                onClick={() => window.open("", "_blank")}
              >
                <LinkedInIcon sx={{ fontSize: 20 }} />
              </IconButton>
              
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: "center", md: "flex-start" }}
              sx={{ width: "100%" }}
            >
              <Box>
                <img
                  src={footerImage3}
                  alt="Google Play"
                  style={{ height: "40px" }}
                />
              </Box>
              <Box>
                <img
                  src={footerImage4}
                  alt="App Store"
                  style={{ height: "40px" }}
                />
              </Box>
            </Stack>

            <Typography
              variant="body2"
              sx={{
                mb: 3,
                textAlign: { xs: "center", md: "left" },
                width: "100%",
              }}
            >
              Scan the QR code or visit us at iOS App Store or Google Play Store
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: "center", md: "flex-start" }}
              sx={{ width: "100%" }}
            >
                {/* Contact Now Button */}
                <Button
                  variant="outlined"
                  href="https://wa.me/phone-number"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "white",
                    borderColor: "white",
                    borderRadius: "30px",
                    padding: "0.5rem 0.5rem",
                    fontSize: "0.7rem",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "#0A285F",
                    },
                  }}
                >
                  <WhatsAppIcon fontSize="small" />
                  <span>Whats app</span>
                </Button>

                {/* Hotline Button */}
                <Button
                  variant="outlined"
                  href="tel:phone-number"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "white",
                    borderColor: "white",
                    borderRadius: "30px",
                    padding: "0.5rem 0.5rem",
                    fontSize: "0.8rem",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "#0A285F",
                    },
                  }}
                >
                  <PhoneIcon fontSize="small" />
                  <span>Hotline. . .</span>
                </Button>
              </Stack>
          </Box>

          {/* QR Code */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              width: "100%",
            }}
          >
            <img
              src={footerImage2}
              alt="QR Code"
              style={{ width: "200px", height: "200px" }}
            />
          </Box>
        </Box>

        {/* Countries Scroll Section */}
        <Box
          sx={{
            mt: 4,
            overflow: "hidden",
            width: "100%",
          }}
        >
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
            {[...countries, ...countries].map((country, index) => (
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
                    width: { xs: "40px", md: "50px" },
                    height: { xs: "40px", md: "50px" },
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
                      height: { xs: "40px", md: "52px" },
                      width: { xs: "40px", md: "52px" },
                      transform: "scale(1.1)",
                      background: "rgba(255, 255, 255, 0.15)",
                    },
                  }}
                >
                  <img
                    src={country.flag}
                    alt={country.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    opacity: 0.9,
                    fontWeight: 500,
                    fontSize: { xs: "0.75rem", md: "0.875rem" },
                  }}
                >
                  {country.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Copyright */}
        <Typography
          variant="body2"
          sx={{
            mt: 4,
            pt: 4,
            borderTop: "2px solid rgba(255, 255, 255, 0.7)",
            textAlign: "center",
            color: "white",
            textTransform: "none",
            fontSize: { xs: "0.75rem", md: "0.875rem" },
          }}
        >
          Copyright © 2024 pearly sky company pvt ltd. All rights reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;