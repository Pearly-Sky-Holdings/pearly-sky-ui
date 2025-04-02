import { AppBar, Toolbar, Select, MenuItem, Box, IconButton, useTheme, useMediaQuery, Button } from "@mui/material";
import { LinkedIn } from "@mui/icons-material";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage, countryToLanguage } from "../../context/LanguageContext";

// Define the country interface for better type safety
interface Country {
  code: string;
  nameKey: string; // Translation key for country name
}

const countries: Country[] = [
  { code: "us", nameKey: "US" },
  { code: "fr", nameKey: "France" },
  { code: "nl", nameKey: "Dutch" },
  { code: "de", nameKey: "Germany" },
  { code: "es", nameKey: "Spanish" },
  { code: "se", nameKey: "Swedish" },
  { code: "jp", nameKey: "Japan" },
  { code: "cn", nameKey: "Chinese" },
  { code: "ar", nameKey: "Arabic" },
  { code: "fi", nameKey: "Finnish" },
];

export default function TopBar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Get language context
  const { setLanguage, translate } = useLanguage();
  
  // Initialize selected country from localStorage or default to "us"
  const [selectedCountry, setSelectedCountry] = useState(() => {
    const savedCountry = localStorage.getItem('selectedCountry');
    return savedCountry || "us";
  });

  // Update language when country changes and save to localStorage
  useEffect(() => {
    const languageCode = countryToLanguage[selectedCountry];
    if (languageCode) {
      setLanguage(languageCode);
      // Save selected country to localStorage
      localStorage.setItem('selectedCountry', selectedCountry);
    }
  }, [selectedCountry, setLanguage]);

  const handleCountryChange = (code: string) => {
    setSelectedCountry(code);
  };

  const socialIcons = [
    { icon: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=61561165376278" },
    { icon: <AiFillInstagram />, link: "https://www.instagram.com/pearlyskycleaning/?next=%2F" },
    { icon: <FaXTwitter />, link: "https://x.com/PEARLYSKYPVTLTD" },
    { icon: <FaYoutube />, link: "https://www.youtube.com/@pearlyskycleaningservice" },
    { icon: <AiFillTikTok />, link: "https://www.tiktok.com/@pearlyskycleaningservice?_t=ZN-8uNBR57FgaU&_r=1" },
    { icon: <LinkedIn />, link: "https://www.linkedin.com/company/pearly-sky-company-private-ltd/" }
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", width: "100%", left: 0, top: 0 }}>
      <Toolbar 
        sx={{ 
          display: "flex", 
          flexDirection: isMobile ? "column" : "row", // Column layout for mobile, row for desktop
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "0.1vh", 
          paddingY: "0.1vh",
          px: isMobile ? 1 : 2,
          py: isMobile ? 1 : 0,
          gap: isMobile ? 1 : 0, // Add gap between rows on mobile
          overflow: "hidden", // Prevent overflow issues
        }}
      >
        {/* First Row - Country Selector and Login Button */}
        <Box 
          sx={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between", 
            width: "100%", // Ensure full width for proper alignment
            gap: 1,
          }}
        >
          {/* Country Selector */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img
              src={`https://flagcdn.com/w40/${selectedCountry}.png`}
              alt="flag"
              width="30"
              height="20"
              style={{ borderRadius: 4 }}
            />
            <Select
              value={selectedCountry}
              onChange={(e) => handleCountryChange(e.target.value)}
              sx={{
                color: "black",
                minWidth: isMobile ? 100 : 120,
                fontWeight: "bold",
                border: "none",
                outline: "none",
                "& fieldset": { border: "none" },
                backgroundColor: "transparent",
                "& .MuiSelect-icon": {
                  color: "black",
                },
              }}
            >
              {countries.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                 {country.nameKey}
                </MenuItem>
              ))}
            </Select>
          </Box>

          {/* Login Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#002F6D",
              color: "white",
              borderRadius: "10px",
              textTransform: "none",
              fontWeight: "bold",
              padding: "6px 16px",
              "&:hover": {
                backgroundColor: "#002F6D",
              },
            }}
            onClick={() => navigate("/login")}
          >
            {translate('login')}
          </Button>
        </Box>

        {/* Second Row - Social Media Icons (Only on mobile) */}
        {isMobile && (
          <Box 
            sx={{ 
              display: "flex", 
              alignItems: "center",
              gap: 1,
              justifyContent: "center",
              width: "100%",
              background: "#F5FBFF",
              padding: 1, // Add padding for better spacing
            }}
          >
            {socialIcons.map(({ icon, link }) => (
              <IconButton
                key={link}
                component="a"
                href={link}
                target="_blank"
                sx={{
                  color: "#002F6D",
                  backgroundColor: "#D3D3D3",
                  borderRadius: "50%",
                  width: 30,
                  height: 30,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "0.3s",
                  "&:hover": { backgroundColor: "#BBDEFB" },
                }}
              >
                <Box sx={{ fontSize: 16 }}>{icon}</Box>
              </IconButton>
            ))}
          </Box>
        )}

        {/* Social Media Icons (Only on desktop) */}
        {!isMobile && (
          <Box 
            sx={{ 
              display: "flex", 
              alignItems: "center",
              gap: 2,
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {socialIcons.map(({ icon, link }) => (
              <IconButton
                key={link}
                component="a"
                href={link}
                target="_blank"
                sx={{
                  color: "#002F6D",
                  backgroundColor: "#D3D3D3",
                  borderRadius: "50%",
                  width: 35,
                  height: 35,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "0.3s",
                  "&:hover": { backgroundColor: "#BBDEFB" },
                }}
              >
                <Box sx={{ fontSize: 20 }}>{icon}</Box>
              </IconButton>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}