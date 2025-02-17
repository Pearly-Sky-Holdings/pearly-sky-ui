import { AppBar, Toolbar, Select, MenuItem, Box, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { LinkedIn } from "@mui/icons-material";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

const countries = [
  { code: "us", name: "United States" },
  { code: "gb", name: "United Kingdom" },
  { code: "fr", name: "France" },
  { code: "de", name: "Germany" },
  { code: "jp", name: "Japan" },
];

export default function TopBar() {
  const [selectedCountry, setSelectedCountry] = useState("us");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const socialIcons = [
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <AiFillInstagram />, link: "https://instagram.com" },
    { icon: <FaXTwitter />, link: "https://x.com" },
    { icon: <FaYoutube />, link: "https://youtube.com" },
    { icon: <AiFillTikTok />, link: "https://tiktok.com" },
    { icon: <LinkedIn />, link: "https://linkedin.com" }
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white", width: "100%", left: 0, top: 0 }}>
      <Toolbar 
        sx={{ 
          display: "flex", 
          justifyContent: isMobile ? "center" : "space-between",
          minHeight: "0.1vh", 
          paddingY: "0.1vh",
          px: isMobile ? 1 : 2
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

        {/* Right Side - Social Media Links (Centered on mobile) */}
        <Box 
          sx={{ 
            display: "flex", 
            gap: isMobile ? 1 : 1.5,
            marginRight: isMobile ? 0 : "5%",
            flexWrap: "wrap",
            justifyContent: "center",
            py: { xs: 1, sm: 0 }
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
      </Toolbar>
    </AppBar>
  );
}