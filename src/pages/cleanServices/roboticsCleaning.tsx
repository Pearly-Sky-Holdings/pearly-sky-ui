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
  chooseClening3,
  readMoreImage4,
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
    id: 3,
    title: "Cleaning Hospitality",
    image: chooseClening3,
    link: "/cleaning-hospitality",
  },
];

const RoboticsCleaning = () => {
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
              src={readMoreImage4}
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
              Robotics in Cleaning
            </Typography>

            <Typography paragraph sx={{ fontSize: "1.1rem" }}>
              The integration of robotics and automation in the cleaning
              industry is revolutionizing how cleaning tasks are performed. Our
              cutting-edge robotic cleaning solutions offer increased
              efficiency, consistency, and cost-effectiveness while reducing
              human exposure to hazardous environments.
            </Typography>

            <Typography
              variant="h5"
              sx={{ color: "#002F6D", fontWeight: "bold", mt: 2 }}
            >
              UV Disinfection Robots
            </Typography>
            <Typography paragraph sx={{ fontSize: "1.1rem" }}>
              Our UV-C disinfection robots provide hospital-grade sanitization
              without chemicals. These autonomous units emit powerful
              ultraviolet light that destroys the DNA of pathogens, including
              bacteria, viruses, and other microorganisms, making them ideal for
              healthcare facilities, schools, and other environments where
              thorough disinfection is critical.
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="h5"
          sx={{ color: "#002F6D", fontWeight: "bold", mt: 2 }}
        >
          Data-Driven Cleaning
        </Typography>
        <Typography paragraph sx={{ fontSize: "1.1rem" }}>
          Our robotic cleaning solutions are equipped with advanced analytics
          capabilities that track cleaning performance, identify high-traffic
          areas requiring additional attention, and optimize cleaning schedules
          based on usage patterns. This data-driven approach ensures resources
          are allocated efficiently while maintaining the highest standards of
          cleanliness.
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

export default RoboticsCleaning;
