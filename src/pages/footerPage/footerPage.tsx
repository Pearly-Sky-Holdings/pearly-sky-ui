import { Box, Container, Typography, IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import {
  companyLogo,
  footerImage2,
  footerImage3,
  footerImage4,
  flagAustralia,
  flagCanada,
  flagFinland,
  flagFrace,
  flagGermany,
  flagItaly,
  flagSaudiArabia,
  flagScotland,
  flagSrilanka,
  flagUAE,
  flagUk,
  flagUs,
} from "../../config/images.ts";

const countries = [
  { name: "France", flag: flagFrace },
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
  { name: "Ireland", flag: "🇮🇪" },
  { name: "Austria", flag: "🇦🇹" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "Switzerland", flag: "🇨🇭" },
  { name: "Qatar", flag: "🇶🇦" },
  { name: "Denmark", flag: "🇩🇰" },
  { name: "New Zealand", flag: "🇳🇿" },
  { name: "Poland", flag: "🇵🇱" },
  { name: "Luxembourg", flag: "🇱🇺" },
  { name: "Portugal", flag: "🇵🇹" },
];

const Footer = () => {
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
          <Box>
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
              align={"justify"}
              sx={{ mb: 3, maxWidth: "400px", lineHeight: 1.6 }}
            >
              Pearly Sky Cleaning offers professional, eco-friendly cleaning
              services for homes, offices, and hotels across France. We focus on
              quality and customer satisfaction, delivering tailored solutions
              to keep your space spotless.
            </Typography>
          </Box>

          {/* Home */}
          <Box sx={{ marginLeft: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Home
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: "flex" }}>
                <Typography
                  variant="body1"
                  sx={{
                    cursor: "pointer",
                    "&:hover": { opacity: 0.8 },
                  }}
                >
                  Services
                </Typography>
                <KeyboardArrowDownIcon sx={{ ml: 0.5 }} />
              </Box>
              <Typography
                variant="body1"
                sx={{
                  cursor: "pointer",
                  "&:hover": { opacity: 0.8 },
                }}
              >
                Company
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  cursor: "pointer",
                  "&:hover": { opacity: 0.8 },
                }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  cursor: "pointer",
                  "&:hover": { opacity: 0.8 },
                }}
              >
                Careers
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="body1"
                  sx={{
                    cursor: "pointer",
                    "&:hover": { opacity: 0.8 },
                  }}
                >
                  Other Services
                </Typography>
                <KeyboardArrowDownIcon sx={{ ml: 0.5 }} />
              </Box>
              <Typography
                variant="body1"
                onClick={() => window.location.href = "/our-locations"}
                sx={{
                  cursor: "pointer",
                  "&:hover": { opacity: 0.8 },
                }}
              >
                Our Location
              </Typography>
            </Stack>
          </Box>

          {/* QR Code and Social Media */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Stack direction="row" spacing={1}>
              <IconButton
                color="inherit"
                size="small"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  "&:hover": { bgcolor: "rgba(255, 255, 255, 0.3)" },
                  width: 35,
                  height: 35,
                }}
              >
                <FacebookIcon sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                color="inherit"
                size="small"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  "&:hover": { bgcolor: "rgba(255, 255, 255, 0.3)" },
                  width: 40,
                  height: 40,
                }}
              >
                <InstagramIcon sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                color="inherit"
                size="small"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  "&:hover": { bgcolor: "rgba(255, 255, 255, 0.3)" },
                  width: 40,
                  height: 40,
                }}
              >
                <TwitterIcon sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                color="inherit"
                size="small"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  "&:hover": { bgcolor: "rgba(255, 255, 255, 0.3)" },
                  width: 40,
                  height: 40,
                }}
              >
                <YouTubeIcon sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                color="inherit"
                size="small"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  "&:hover": { bgcolor: "rgba(255, 255, 255, 0.3)" },
                  width: 40,
                  height: 40,
                }}
              >
                <GitHubIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Stack>

            <Stack direction="row" spacing={2}>
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

            <Typography variant="body2" sx={{ mb: 3, textAlign: "left" }}>
              Scan the QR code or visit us at iOS App Store or Google Play Store
            </Typography>
          </Box>

          {/* QR Code */}
          <Box>
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
            mt: 2,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 6,
              animation: "scroll 20s linear infinite",
              "@keyframes scroll": {
                "0%": {
                  transform: "translateX(0%)",
                },
                "100%": {
                  transform: "translateX(-100%)",
                },
              },
            }}
          >
            {/* Duplicate the flags to create a seamless loop */}
            {[...countries, ...countries].map((country, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minWidth: "100px",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: "80px",
                    height: "80px",
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
                  <Typography 
                    sx={{ 
                      fontSize: "3.5rem",
                      lineHeight: 1,
                      transform: "scale(1.2)",
                    }}
                  >
                    {country.flag}
                  </Typography>
                </Box>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: "white",
                    opacity: 0.9,
                    fontWeight: 500,
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
            mt: 2,
            pt: 4,
            borderTop: "2px solid rgba(255, 255, 255, 0.7)",
            textAlign: "center",
            color: "white",
            textTransform: "none",
          }}
          style={{ marginBottom: "-20px" }}
        >
          Copyright © 2024 pearly sky company pvt ltd. All rights reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;