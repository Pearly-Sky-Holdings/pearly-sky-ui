import { Card, CardContent, Box, Typography } from "@mui/material";
import { girl, homeVideo1 } from "../../config/images";

export default function SecondPage() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        background: "linear-gradient(to bottom, #002F6D, #008CDA)", 
        padding: "20px",
        position: "relative",
      }}
    >
      {/* Left Side - Card with Video */}
      <Card
        sx={{
          width: "50vw",
          height: "62vh",
          borderRadius: "30px",
          backgroundColor: "#D3D3D3",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
          marginRight: "0%",
          marginLeft: "2%",
          overflow: "hidden", // Ensure video doesn't overflow card borders
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
              borderRadius: "30px",
            }}
          >
            <source src={homeVideo1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </CardContent>
      </Card>

      {/* Right Side */}
      <Box 
        sx={{ 
          position: "relative", 
          width: "43%",
          zIndex: 10, 
          display: "flex",
          flexDirection: "column"
        }}
      > 
        <Box 
          sx={{ 
            background: "white", 
            borderRadius: "20px",
            p: 2, 
            color: "black",
            textAlign: "center", 
            boxShadow: "2px 2px 5px rgba(0,0,0,0.2)", 
            marginBottom: "-7%",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            marginLeft: '38%',
            marginRight: '0'
          }}
        >
          <Typography variant="body2">
            Wishing you a life full of{" "}
            <span style={{ color: "#008CDA", fontWeight: "bold" }}>freshness</span>,{" "}
            <span style={{ color: "#008CDA", fontWeight: "bold" }}>clarity</span>, 
            <span> and order! Let us help you make your spaces a reflection of your best half.</span>
          </Typography> 
        </Box>

        {/* Image */}
        <img
          src={girl} 
          alt="Cleaning Lady"
          style={{ 
            width: "60%", 
            height: "auto", 
            position: "relative", 
            zIndex: 10,
            alignItems: 'start', 
            marginBottom: "1%"
          }} 
        />      
      </Box>
    </Box>
  );
}