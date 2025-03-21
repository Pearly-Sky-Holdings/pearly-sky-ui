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
  chooseClening3,
  chooseClening4,
  readMoreImage2,
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

const HygienePublicSpaces = () => {
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
              src={readMoreImage2}
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
              Hygiene in Public Spaces
            </Typography>

            <Typography paragraph sx={{ fontSize: "1.1rem" }}>
              Maintaining hygiene in public spaces is crucial for public health
              and safety. From shopping malls to transportation hubs, proper
              cleaning protocols help prevent the spread of diseases and create
              a pleasant environment for all users.
            </Typography>

            <Typography
              variant="h5"
              sx={{ color: "#002F6D", fontWeight: "bold", mt: 2 }}
            >
              High-Touch Surface Cleaning
            </Typography>
            <Typography paragraph sx={{ fontSize: "1.1rem" }}>
              Regular disinfection of high-touch surfaces such as door handles,
              elevator buttons, handrails, and public seating is essential to
              reduce the transmission of pathogens. Our professional teams use
              hospital-grade disinfectants that are effective against a wide
              range of bacteria and viruses.
            </Typography>

            <Typography
              variant="h5"
              sx={{ color: "#002F6D", fontWeight: "bold", mt: 2 }}
            >
              Public Restroom Sanitation
            </Typography>
            <Typography paragraph sx={{ fontSize: "1.1rem" }}>
              Public restrooms require special attention to maintain proper
              hygiene. Our comprehensive cleaning protocols include thorough
              disinfection of all surfaces, regular restocking of supplies, and
              proper waste management to ensure these facilities remain clean
              and safe for all users.
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="h5"
          sx={{ color: "#002F6D", fontWeight: "bold", mt: 2 }}
        >
          Air Quality Management
        </Typography>
        <Typography paragraph sx={{ fontSize: "1.1rem" }}>
          Indoor air quality in public spaces significantly impacts health and
          comfort. Our services include HVAC system maintenance, air filter
          replacement, and the use of air purification technologies to reduce
          airborne contaminants and create a healthier environment for everyone.
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

export default HygienePublicSpaces;
