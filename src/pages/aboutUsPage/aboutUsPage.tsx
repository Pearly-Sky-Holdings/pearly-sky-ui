import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { aboutUs1, aboutUs2 } from "../../config/images";

const AboutUsPage: React.FC = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: "#f0f8ff" }}>
      {/* Header */}
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={4}
        sx={{ color: "#002F6D" }}
      >
        Our Vision, Mission, Values, Objectives
      </Typography>

      {/* Vision, Mission, Values, Objectives Image */}
      <Box display="flex" justifyContent="center" mb={5}>
        <img
          src="/images/aboutUsPage/vision.png"
          alt="Vision, Mission, Values, Objectives"
          style={{ maxWidth: "300px", borderRadius: "50%" }}
        />
      </Box>

      
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
          px: 3,
        }}
      >
        <Card sx={{ border: "2px solid #002F6D", borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h6" mb={2}>
              Health and Safety Video
            </Typography>
            <Box
              sx={{
                height: { xs: "160px", sm: "420px", md: "320px" }, 
                backgroundColor: "#ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                borderRadius: 2,
              }}
            >
              <video
                controls
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
              >
                <source src={aboutUs1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Box>
          </CardContent>
        </Card>

        {/* Health and Safety Video */}
        <Card sx={{ border: "2px solid #002F6D", borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h6" mb={2}>
              Booking Induction Video
            </Typography>
            <Box
              sx={{
                height: { xs: "160px", sm: "420px", md: "320px" },
                backgroundColor: "#ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                borderRadius: 2,
              }}
            >
              <video
                controls
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
              >
                <source src={aboutUs2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default AboutUsPage;