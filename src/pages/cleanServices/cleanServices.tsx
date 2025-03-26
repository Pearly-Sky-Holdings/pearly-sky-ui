import { Grid, Typography, Container } from "@mui/material";
import CleaningServiceCard from "../../components/ServiceCard/CleaningServiceCard";
import { chooseClening1, chooseClening2, chooseClening3, chooseClening4 } from "../../config/images.ts";
import { useLanguage } from "../../context/LanguageContext";

const CleaningServices = () => {
  const { translate } = useLanguage();

  const services = [
    { 
      id: 1, 
      titleKey: "cleaningIndustryRegulation", 
      image: chooseClening1, 
      link: "/cleaning-industry-regulation" 
    },
    { 
      id: 2, 
      titleKey: "hygieneInPublicSpaces", 
      image: chooseClening2, 
      link: "/hygiene-public-spaces" 
    },
    { 
      id: 3, 
      titleKey: "cleaningHospitality", 
      image: chooseClening3, 
      link: "/cleaning-hospitality" 
    },
    { 
      id: 4, 
      titleKey: "roboticsInCleaning", 
      image: chooseClening4, 
      link: "/robotics-cleaning" 
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        align="center"
        sx={{ color: "#002F6D", fontWeight: 'bold', mb: 6 }}
      >
        {translate('whyChooseOurServices')}
      </Typography>

      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} lg={3} key={service.id}>
            <CleaningServiceCard 
              id={service.id}
              title={translate(service.titleKey)}
              image={service.image}
              link={service.link}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CleaningServices;