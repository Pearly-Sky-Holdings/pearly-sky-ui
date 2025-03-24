import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { girl, homeVideo1 } from "../../config/images";

export default function SecondPage() {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('lg')); // Target screens smaller than lg (1280px)

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: isMobileOrTablet ? "auto" : "70vh",
        display: "flex",
        flexDirection: isMobileOrTablet ? "column" : "row", // Column layout for mobile, tablet, and iPad Pro
        alignItems: "center",
        justifyContent: isMobileOrTablet ? "center" : "start",
        background: "linear-gradient(to bottom, #002F6D, #008CDA)", 
        padding: isMobileOrTablet ? "10px" : "20px",
        position: "relative",
        overflow: "hidden",
        px: 5,
        py: 5,
      }}
    >
      {/* Video Container */}
      <Box
        sx={{
          width: isMobileOrTablet ? "95%" : "50vw", // Full width on mobile, tablet, and iPad Pro
          height: isMobileOrTablet ? "40vh" : "62vh", // Adjust height for mobile, tablet, and iPad Pro
          borderRadius: isMobileOrTablet ? "20px" : "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: isMobileOrTablet ? "10px auto" : "2% 0% 2% 2%", // Center on mobile, tablet, and iPad Pro
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%", 
            height: "100%",
            objectFit: "contain", 
            borderRadius: isMobileOrTablet ? "20px" : "30px",
            border: "2px solid white",
          }}
        >
          <source src={homeVideo1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>

      {/* Content Box */}
      <Box 
        sx={{ 
          width: isMobileOrTablet ? "95%" : "43%", 
          display: "flex",
          flexDirection: "column",
          alignItems: isMobileOrTablet ? "center" : "flex-end", 
          margin: isMobileOrTablet ? "10px auto" : "0", 
          position: "relative",
        }}
      > 
        {/* Text Box */}
        <Box 
          sx={{ 
            background: "white", 
            borderRadius: "20px",
            p: 2, 
            color: "black",
            textAlign: "center", 
            boxShadow: "2px 2px 5px rgba(0,0,0,0.2)", 
            marginBottom: isMobileOrTablet ? "10px" : "-7%",
            width: isMobileOrTablet ? "100%" : "62%", 
            boxSizing: "border-box",
          }}
        >
          <Typography variant={isMobileOrTablet ? "body2" : "body1"}>
            Wishing you a life full of{" "}
            <span style={{ color: "#008CDA", fontWeight: "bold" }}>freshness</span>,{" "}
            <span style={{ color: "#008CDA", fontWeight: "bold" }}>clarity</span>, <span>and order! Let us help you make your spaces a reflection of your best half.</span>
          </Typography> 
        </Box>

        {/* Image */}
        <img
          src={girl} 
          alt="Cleaning Lady"
          style={{ 
            width: isMobileOrTablet ? "80%" : "60%", 
            height: "auto",
            position: "relative",
            zIndex: 10,
            marginTop: isMobileOrTablet ? "10px" : "0",
          }} 
        />      
      </Box>
    </Box>
  );
}