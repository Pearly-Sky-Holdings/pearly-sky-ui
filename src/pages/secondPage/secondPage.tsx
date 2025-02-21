import { Card, CardContent, Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { girl, homeVideo1 } from "../../config/images";

export default function SecondPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: isMobile ? "auto" : "70vh",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: isMobile ? "center" : "start",
        background: "linear-gradient(to bottom, #002F6D, #008CDA)", 
        padding: isMobile ? "10px" : "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Video Card */}
      <Card
        sx={{
          width: isMobile ? "95%" : "50vw",
          height: isMobile ? "40vh" : "62vh",
          borderRadius: isMobile ? "20px" : "30px",
          backgroundColor: "#D3D3D3",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
          margin: isMobile ? "10px auto" : "2% 0% 2% 2%",
          overflow: "hidden",
        }}
      >
        <CardContent sx={{ 
          padding: "0 !important", 
          width: "100%", 
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: isMobile ? "20px" : "30px",
            }}
          >
            <source src={homeVideo1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </CardContent>
      </Card>

      {/* Content Box */}
      <Box 
        sx={{ 
          width: isMobile ? "95%" : "43%",
          display: "flex",
          flexDirection: "column",
          alignItems: isMobile ? "center" : "flex-end",
          margin: isMobile ? "10px auto" : "0",
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
            marginBottom: isMobile ? "10px" : "-7%",
            width: isMobile ? "100%" : "62%",
            boxSizing: "border-box",
          }}
        >
          <Typography variant={isMobile ? "body2" : "body1"}>
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
            width: isMobile ? "80%" : "60%", 
            height: "auto",
            position: "relative",
            zIndex: 10,
            marginTop: isMobile ? "10px" : "0",
          }} 
        />      
      </Box>
    </Box>
  );
}