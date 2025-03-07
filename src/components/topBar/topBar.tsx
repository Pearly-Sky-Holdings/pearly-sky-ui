import { AppBar, Toolbar, Select, MenuItem, Box, IconButton, useTheme, useMediaQuery, Button } from "@mui/material";
import { LinkedIn } from "@mui/icons-material";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const countries = [
  { code: "us", name: "United States" },
  { code: "gb", name: "United Kingdom" },
  { code: "fr", name: "France" },
  { code: "de", name: "Germany" },
  { code: "jp", name: "Japan" },
];

export default function TopBar() {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState("us");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const socialIcons = [
    { icon: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=61561165376278" },
    { icon: <AiFillInstagram />, link: "https://www.instagram.com/pearlyskycleaning/?next=%2F" },
    { icon: <FaXTwitter />, link: "https://x.com/PEARLYSKYPVTLTD" },
    { icon: <FaYoutube />, link: "https://www.youtube.com/@pearlyskycleaningservice" },
    { icon: <AiFillTikTok />, link: "https://www.tiktok.com/@pearlyskycleaningservice?_t=ZN-8uNBR57FgaU&_r=1" },
    { icon: <LinkedIn />, link: "https://linkedin.com" }
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white", width: "100%", left: 0, top: 0 }}>
      <Toolbar 
        sx={{ 
          display: "flex", 
          justifyContent: "space-between", // Space between left and right sections
          alignItems: "center", // Vertically center items
          minHeight: "0.1vh", 
          paddingY: "0.1vh",
          px: isMobile ? 1 : 2,
          py: isMobile ? 1 : 0
        }}
      >
        {/* Left Side - Country Selector (Hidden on mobile) */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginLeft: "5%" }}>
            <img
              src={`https://flagcdn.com/w40/${selectedCountry}.png`}
              alt="flag"
              width="30"
              height="20"
              style={{ borderRadius: 4 }}
            />
            <Select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              sx={{
                color: "black",
                minWidth: 120,
                fontWeight: "bold",
                border: "none",
                outline: "none",
                "& fieldset": { border: "none" },
                backgroundColor: "transparent",
                "& .MuiSelect-icon": {
                  color: "black",
                },
              }}
              disableUnderline
            >
              {countries.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </Box>
        )}

        {/* Center - Social Media Icons */}
        <Box 
          sx={{ 
            display: "flex", 
            alignItems: "center",
            gap: isMobile ? 1 : 2, // Gap between icons
            position: "absolute", // Position absolutely to center
            left: isMobile ? "35%" : "80%", // Center horizontally
            transform: "translateX(-50%)", // Adjust for exact center
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
                width: isMobile ? 30 : 35,
                height: isMobile ? 30 : 35,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "0.3s",
                "&:hover": { backgroundColor: "#BBDEFB" },
              }}
            >
              <Box sx={{ fontSize: isMobile ? 16 : 20 }}>{icon}</Box>
            </IconButton>
          ))}
        </Box>

        {/* Right Side - Login Button */}
        <Box 
          sx={{ 
            display: "flex", 
            alignItems: "center",
            marginLeft: "auto", // Push the box to the right
            marginRight: isMobile ? "8px" : "1%", // Add some margin for mobile
          }}
        >
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
              px: isMobile ? 3 : 3, // Adjust horizontal padding for mobile
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}