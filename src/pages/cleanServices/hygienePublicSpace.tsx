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
import { useLanguage } from "../../context/LanguageContext";

const HygienePublicSpaces = () => {
  const { translate } = useLanguage();

  const otherServices = [
    {
      id: 1,
      titleKey: "cleaningIndustryRegulation",
      image: chooseClening1,
      link: "/cleaning-industry-regulation",
    },
    {
      id: 3,
      titleKey: "cleaningHospitality",
      image: chooseClening3,
      link: "/cleaning-hospitality",
    },
    {
      id: 4,
      titleKey: "roboticsInCleaning",
      image: chooseClening4,
      link: "/robotics-cleaning",
    },
  ];

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
              alt={translate('hygienePublicSpacesImageAlt')}
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
              variant="h3"
              component="h1"
              sx={{ color: "#002F6D", fontWeight: "bold", mb: 2 }}
            >
              {translate('hygienePublicSpacesTitle')}
            </Typography>

            <Typography paragraph sx={{ fontSize: "1.1rem" }}>
              {translate('hygienePublicSpacesIntro')}
            </Typography>

            <Typography
              variant="h5"
              sx={{ color: "#002F6D", fontWeight: "bold", mt: 2 }}
            >
              {translate('highTouchSurfaceTitle')}
            </Typography>
            <Typography paragraph sx={{ fontSize: "1.1rem" }}>
              {translate('highTouchSurfaceContent')}
            </Typography>

            <Typography
              variant="h5"
              sx={{ color: "#002F6D", fontWeight: "bold", mt: 2 }}
            >
              {translate('publicRestroomTitle')}
            </Typography>
            <Typography paragraph sx={{ fontSize: "1.1rem" }}>
              {translate('publicRestroomContent')}
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="h5"
          sx={{ color: "#002F6D", fontWeight: "bold", mt: 2 }}
        >
          {translate('airQualityTitle')}
        </Typography>
        <Typography paragraph sx={{ fontSize: "1.1rem" }}>
          {translate('airQualityContent')}
        </Typography>
        {/* Social sharing section */}
        <Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {translate('shareArticle')} :
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton size="small" sx={{ color: "#1877F2" }} aria-label={translate('shareOnFacebook')}>
              <FacebookIcon />
            </IconButton>
            <IconButton size="small" sx={{ color: "#1DA1F2" }} aria-label={translate('shareOnTwitter')}>
              <TwitterIcon />
            </IconButton>
            <IconButton size="small" sx={{ color: "#0A66C2" }} aria-label={translate('shareOnLinkedIn')}>
              <LinkedInIcon />
            </IconButton>
            <IconButton size="small" sx={{ color: "#E60023" }} aria-label={translate('shareOnPinterest')}>
              <PinterestIcon />
            </IconButton>
          </Box>
        </Box>
      </Paper>

      {/* Other services section - Cards */}
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {otherServices.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
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

export default HygienePublicSpaces;