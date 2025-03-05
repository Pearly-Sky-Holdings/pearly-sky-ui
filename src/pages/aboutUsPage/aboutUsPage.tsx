import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

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

      {/* Videos Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
          px: 3,
        }}
      >
        {/* Booking Induction Video */}
        <Card sx={{ border: "2px solid #002F6D", borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h6" mb={2}>
              Booking Induction Video
            </Typography>
            <Box
              sx={{
                height: "200px",
                backgroundColor: "#ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Video Placeholder
            </Box>
          </CardContent>
        </Card>

        {/* Health and Safety Video */}
        <Card sx={{ border: "2px solid #002F6D", borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h6" mb={2}>
              Health and Safety Video
            </Typography>
            <Box
              sx={{
                height: "200px",
                backgroundColor: "#ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Video Placeholder
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default AboutUsPage;
