import React from "react";
import {
  Grid,
  Typography,
  Container,
  Box,
  Paper,
  IconButton,
} from "@mui/material";

import CleaningServiceCard from "../../components/ServiceCard/CleaningServiceCard";
import {
  chooseClening1,
  chooseClening2,
  chooseClening4,
  readMoreImage3,
} from "../../config/images.ts";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";

const otherServices = [
  {
    id: 1,
    title: "Cleaning Industry Regulation",
    image: chooseClening1,
    link: "/cleaning-industry-regulation",
  },
  {
    id: 2,
    title: "Hygiene in Public Spaces",
    image: chooseClening2,
    link: "/hygiene-public-spaces",
  },
  {
    id: 4,
    title: "Robotics in Cleaning",
    image: chooseClening4,
    link: "/robotics-cleaning",
  },
];

const CleaningHospitality = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Main content section with image and text */}
      <Paper
        elevation={1}
        sx={{ mb: 6, overflow: "hidden", borderRadius: 2, p: 3 }}
      >
        <Grid container spacing={4} alignItems="stretch">
          {/* Left side - Image */}
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={readMoreImage3}
              alt="Cleaning Industry Regulation"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                borderRadius: 2,
              }}
            />
          </Grid>

          {/* Right side - Content */}
          <Grid item xs={12} md={7}>
            <Typography
              variant="h3" // Increased font size
              component="h1"
              sx={{ color: "#002F6D", fontWeight: "bold", mb: 2 }}
            >
              Cleaning Hospitality
            </Typography>

            <Typography paragraph sx={{ fontSize: "1.1rem" }}>
              In the hospitality industry, cleanliness is directly linked to
              guest satisfaction and business reputation. Our specialized
              cleaning services for hotels, restaurants, and other hospitality
              venues ensure the highest standards of hygiene while enhancing the
              guest experience.
            </Typography>

            <Typography
              variant="h5"
              sx={{ color: "#002F6D", fontWeight: "bold", mt: 2 }}
            >
              Guest Room Sanitation
            </Typography>
            <Typography paragraph sx={{ fontSize: "1.1rem" }}>
              Our comprehensive room cleaning protocols go beyond basic
              housekeeping. We implement hospital-grade disinfection techniques
              for all high-touch surfaces, use HEPA-filtered vacuum cleaners for
              improved air quality, and apply specialized treatments for soft
              furnishings to ensure a pristine environment for each guest.
            </Typography>

            <Typography
              variant="h5"
              sx={{ color: "#002F6D", fontWeight: "bold", mt: 2 }}
            >
              Food Service Area Cleanin
            </Typography>
            <Typography paragraph sx={{ fontSize: "1.1rem" }}>
              Restaurant and kitchen cleanliness is critical for food safety and
              regulatory compliance. Our teams are trained in food safety
              protocols and use specialized cleaning agents that are effective
              yet safe for food preparation areas. We help maintain compliance
              with health department regulations while ensuring a safe
              environment for both staff and customers.
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="h5"
          sx={{ color: "#002F6D", fontWeight: "bold", mt: 2 }}
        >
          Public Area Maintenance
        </Typography>
        <Typography paragraph sx={{ fontSize: "1.1rem" }}>
          Lobbies, corridors, and other public spaces create the first
          impression for guests. Our specialized cleaning programs for these
          high-traffic areas include regular maintenance of floors, walls, and
          fixtures, as well as specialized treatments for carpets, upholstery,
          and decorative elements to maintain their appearance and extend their
          lifespan.
        </Typography>
        {/* Social sharing section */}
        <Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            SHARE ARTICLE :
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton size="small" sx={{ color: "#1877F2" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton size="small" sx={{ color: "#1DA1F2" }}>
              <TwitterIcon />
            </IconButton>
            <IconButton size="small" sx={{ color: "#0A66C2" }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton size="small" sx={{ color: "#E60023" }}>
              <PinterestIcon />
            </IconButton>
          </Box>
        </Box>
      </Paper>

      {/* Other services section - Cards */}
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {otherServices.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <CleaningServiceCard {...service} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CleaningHospitality;
