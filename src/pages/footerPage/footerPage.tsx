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
import { useLanguage } from "../../context/LanguageContext";

import {
  companyLogo,
  qrCode,
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

const Footer = () => {
  const { translate } = useLanguage();
  const navigate = useNavigate();

  const countries = [
    { nameKey: "france", flag: flagFrance },
    { nameKey: "unitedKingdom", flag: flagUk },
    { nameKey: "sriLanka", flag: flagSrilanka },
    { nameKey: "scotland", flag: flagScotland },
    { nameKey: "germany", flag: flagGermany },
    { nameKey: "australia", flag: flagAustralia },
    { nameKey: "unitedArabEmirates", flag: flagUAE },
    { nameKey: "canada", flag: flagCanada },
    { nameKey: "finland", flag: flagFinland },
    { nameKey: "saudiArabia", flag: flagSaudiArabia },
    { nameKey: "italy", flag: flagItaly },
    { nameKey: "unitedStates", flag: flagUs },
    { nameKey: "ireland", flag: flagIreland },
    { nameKey: "austria", flag: flagAustria },
    { nameKey: "netherlands", flag: flagNetherlands },
    { nameKey: "switzerland", flag: flagSwitzerland },
    { nameKey: "qatar", flag: flagQatar },
    { nameKey: "denmark", flag: flagDenmark },
    { nameKey: "newZealand", flag: flagNewZealand },
    { nameKey: "poland", flag: flagPoland },
    { nameKey: "luxembourg", flag: flagluxembourg },
    { nameKey: "portugal", flag: flagPortugal },
    { nameKey: "spain", flag: flagSpain },
    { nameKey: "belgium", flag: flagBelgium },
  ];

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
              alt={translate('companyLogoAlt')}
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
              {translate('companyDescription')}
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
                aria-label={translate('facebookLink')}
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
                aria-label={translate('instagramLink')}
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
                aria-label={translate('twitterLink')}
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
                aria-label={translate('youtubeLink')}
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
                aria-label={translate('linkedinLink')}
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
                  alt={translate('googlePlayAlt')}
                  style={{ height: "40px" }}
                />
              </Box>
              <Box>
                <img
                  src={footerImage4}
                  alt={translate('appStoreAlt')}
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
              {translate('downloadAppText')}
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: "center", md: "flex-start" }}
              sx={{ width: "100%" }}
            >
              <Button
                variant="outlined"
                href="https://wa.me/33635508169"
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
                <span>{translate('whatsappButton')}</span>
              </Button>

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
                <span>{translate('hotlineButton')}</span>
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
              src={qrCode}
              alt={translate('qrCodeAlt')}
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
                    alt={translate(country.nameKey)}
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
                  {translate(country.nameKey)}
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
          {translate('copyrightText')}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;