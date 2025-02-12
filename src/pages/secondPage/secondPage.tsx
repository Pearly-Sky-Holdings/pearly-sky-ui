import React from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";
import girl from '../../assets/Girl_1_New.png'

export default function SecondPage() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        background: "linear-gradient(to bottom, #002F6D, #008CDA)", 
        padding: "20px",
        position: "relative",
      }}
    >
      {/* Left Side - Card */}
      <Card
        sx={{
          width: "60%",
          height: "70%",
          borderRadius: "30px",
          backgroundColor: "#D3D3D3",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          // boxShadow: "3px 3px 10px rgba(0,0,0,0.2)",
          marginRight: "0%", // Reduced margin to bring the right side closer
        }}
      >
        <CardContent>
          <Typography variant="h6" align="center">
            
          </Typography>
        </CardContent>
      </Card>

      {/* Right Side */}
      <Box 
        sx={{ 
          position: "relative", 
          width : "35%",
          zIndex: 10, 
          display: "flex",
          flexDirection: "column",
          // alignItems: "flex-start"
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
            marginBottom: "10px" ,
            alignItems: "flex-end",
            justifyContent:"flex-end",
            marginLeft:'30%',
            marginRight:'0'
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
          style={{ width: "70%", height: "auto", position: "relative", zIndex: 10 ,alignItems:'start'}} 
        />      
      </Box>
    </Box>
  );
}
