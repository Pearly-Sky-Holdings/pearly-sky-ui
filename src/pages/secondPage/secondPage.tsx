import { Card, CardContent, Box, Typography } from "@mui/material";
import { girl} from "../../config/images";

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
      {/* Left Side - Card */}
      <Card
        sx={{
          width: "50vw",
          height: "62vh",
          borderRadius: "30px",
          backgroundColor: "#D3D3D3",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          boxShadow: "3px 3px 10px rgba(0,0,0,0.5)",
          marginRight: "0%",
          marginLeft:"2%"
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
          width : "43%",
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
            marginBottom: "-7%" ,
            alignItems: "flex-end",
            justifyContent:"flex-end",
            marginLeft:'38%',
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
          style={{ width: "60%", height: "auto", position: "relative", zIndex: 10 ,alignItems:'start', marginBottom: "1%"}} 
        />      
      </Box>
    </Box>
  );
}
