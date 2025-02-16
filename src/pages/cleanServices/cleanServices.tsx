import { Grid, Typography, Container } from "@mui/material";
import CleaningServiceCard from "../../components/ServiceCard/CleaningServiceCard";
import { chooseClening1, chooseClening2, chooseClening3, chooseClening4 } from "../../config/images.ts";

const services = [
  { id: 1, title: "Cleaning Industry Regulation", image: chooseClening1, link: "#" },
  { id: 2, title: "Hygiene in Public Spaces", image: chooseClening2, link: "#" },
  { id: 3, title: "Cleaning Hospitality", image: chooseClening3, link: "#" },
  { id: 4, title: "Robotics in Cleaning", image: chooseClening4, link: "#" },
];

const CleaningServices = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        align="center"
        sx={{ color: "#002F6D", fontWeight: 'bold', mb: 6 }}
      >
        Why Choose Our Cleaning Services in Global?
      </Typography>

      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} lg={3} key={service.id}>
            <CleaningServiceCard {...service} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CleaningServices;
