import React from "react";
import {
  Grid,
  Typography,
  Container,
  Box,
  Button,
  Paper,
  IconButton,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import CleaningServiceCard from "../../components/ServiceCard/CleaningServiceCard";
import {
  chooseClening1,
  chooseClening2,
  chooseClening3,
  chooseClening4,
  readMoreImage1,
} from "../../config/images.ts";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";

const otherServices = [
  {
    id: 2,
    title: "Hygiene in Public Spaces",
    image: chooseClening2,
    link: "/hygiene-public-spaces",
  },
  {
    id: 3,
    title: "Cleaning Hospitality",
    image: chooseClening3,
    link: "/cleaning-hospitality",
  },
  {
    id: 4,
    title: "Robotics in Cleaning",
    image: chooseClening4,
    link: "/robotics-cleaning",
  },
];

const CleaningIndustryRegulation = () => {
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
              src={readMoreImage1}
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
              Cleaning Industry Regulation
            </Typography>

            <Typography paragraph sx={{ fontSize: "1.1rem" }}>
              The cleaning industry is subject to various regulations and
              standards aimed at ensuring the safety, health, and well-being of
              workers, clients, and the environment. These regulations can vary
              by location but may encompass areas such as occupational safety,
              environmental protection, chemical safety, and more.
            </Typography>

            <Typography
              variant="h5"
              sx={{ color: "#002F6D", fontWeight: "bold", mt: 2 }}
            >
              Worker Training
            </Typography>
            <Typography paragraph sx={{ fontSize: "1.1rem" }}>
              OSHA often mandates that cleaning workers receive training on the
              safe use of cleaning chemicals and equipment, as well as proper
              procedures for handling hazardous materials.
            </Typography>

            <Typography
              variant="h5"
              sx={{ color: "#002F6D", fontWeight: "bold", mt: 2 }}
            >
              Chemical Labeling
            </Typography>
            <Typography paragraph sx={{ fontSize: "1.1rem" }}>
              Many countries have regulations requiring proper labeling of
              cleaning chemicals to ensure safe handling. Standards like the
              Globally Harmonized System (GHS) help with chemical classification
              and labeling.
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="h5"
          sx={{ color: "#002F6D", fontWeight: "bold", mt: 2 }}
        >
          Wastewater Discharge
        </Typography>
        <Typography paragraph sx={{ fontSize: "1.1rem" }}>
          Cleaning companies generating wastewater with chemical contaminants
          may require permits and must comply with environmental regulations.
          Adhering to these standards prevents pollution and ensures compliance
          with legal requirements. Proper wastewater management involves
          treating the water to remove harmful chemicals before it is discharged
          into the environment. This process not only protects aquatic life but
          also ensures that the water supply remains safe for human consumption.
          Companies must regularly monitor and report their wastewater discharge
          to regulatory bodies to maintain compliance and avoid penalties.
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

export default CleaningIndustryRegulation;
