import React from "react";
import { Box, Typography, Card, CardContent, Grid, List, ListItem, ListItemText } from "@mui/material";
import { aboutUs1, aboutUs2 } from "../../config/images";
import PaymentSupportSection from "../../components/paymentSupportSection/paymentSupportSection";
import { aboutUs, aboutUs3, whyChooseUs } from "../../config/images";
import { useLanguage } from "../../context/LanguageContext";

const AboutUsPage: React.FC = () => {
  const { translate } = useLanguage();

  return (
    <Box sx={{ mt: 5, px: 5 }}>
      {/* About Pearly Sky Cleaning Services */}
      <Box sx={{ px: { xs: 0, md: 10 }, mb: 10 }}>
        <Typography variant="h3" fontWeight="bold" textAlign="center" mb={2} 
          sx={{
            color: "#002F6D",
            fontSize: { xs: "24px", sm: "32px", md: "40px" },
          }}>
          {translate('aboutPageTitle')}
        </Typography>

        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={10} 
          sx={{
            color: "#002F6D",
            fontSize: { xs: "20px", sm: "28px", md: "35px" },
          }}>
          {translate('trustedPartnerTitle')}
        </Typography>

        {/* Paragraph with Image */}
        <Grid container spacing={4} alignItems="center" sx={{ mb: { xs: 5, sm: 10, md: 15 } }}>
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="center">
              <img
                src={aboutUs}
                alt={translate('cleaningServicesAlt')}
                style={{ maxWidth: "100%", borderRadius: "10px" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>            
            <Typography variant="body1" color="black">
              {translate('aboutPageIntro')}
            </Typography>
          </Grid>          
        </Grid>

        {/* Our Story Section */}
        <Grid container spacing={4} alignItems="center" sx={{ mb: { xs: 5, sm: 10, md: 15 } }}>          
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" mb={2} 
              sx={{
                color: "#002F6D",
                fontSize: { xs: "20px", sm: "28px", md: "35px" },
              }}>
              {translate('ourStoryTitle')}
            </Typography>
            
            <Typography variant="body1" color="black">
              {translate('ourStoryContent')}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="center">
              <img
                src={aboutUs3}
                alt={translate('ourStoryAlt')}
                style={{ maxWidth: "100%", borderRadius: "10px" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Vision, Mission, Values, Objectives */}
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={2} 
        sx={{
          color: "#002F6D",
          fontSize: { xs: "20px", sm: "28px", md: "35px" },
        }}>
        {translate('visionMissionTitle')}
      </Typography>
      
      {/* Vision, Mission, Values, Objectives Image */}
      <Box display="flex" justifyContent="center" mb={10} mt={5}>
        <Box
          component="img"
          src="/images/aboutUsPage/vision.png"
          alt={translate('visionMissionAlt')}
          sx={{
            maxWidth: { xs: "300px", sm: "200px", md: "500px" },
            borderRadius: "50%",
            display: "block",
          }}
        />    
      </Box>

      {/* Why choose us */}
      <Box sx={{ px: { xs: 0, md: 10 }, mb: 10, mt: 5 }}>      
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="center">
              <img
                src={whyChooseUs}
                alt={translate('whyChooseUsAlt')}
                style={{ maxWidth: "100%", borderRadius: "10px" }}
              />
            </Box>
          </Grid>        
             
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" mb={4} 
              sx={{
                color: "#002F6D",
                fontSize: { xs: "20px", sm: "28px", md: "35px" },
              }}>
              {translate('whyChooseUsTitle')}
            </Typography>
            <List sx={{ listStyleType: "disc", pl: 4, color: "#002F6D" }}>
              {/* Experienced Team */}
              <ListItem sx={{ py: 1, display: "list-item" }}>
                <ListItemText
                  primary={translate('experiencedTeamTitle')}
                  secondary={translate('experiencedTeamContent')}
                  primaryTypographyProps={{ fontWeight: "bold", color: "#002F6D" }}
                  secondaryTypographyProps={{ color: "text.secondary" }}
                />
              </ListItem>

              {/* Customized Solutions */}
              <ListItem sx={{ py: 1, display: "list-item" }}>
                <ListItemText
                  primary={translate('customizedSolutionsTitle')}
                  secondary={translate('customizedSolutionsContent')}
                  primaryTypographyProps={{ fontWeight: "bold", color: "#002F6D" }}
                  secondaryTypographyProps={{ color: "text.secondary" }}
                />
              </ListItem>

              {/* Eco-Friendly Practices */}
              <ListItem sx={{ py: 1, display: "list-item" }}>
                <ListItemText 
                  primary={translate('aboutecoFriendlyTitle')}
                  secondary={translate('ecoFriendlyContent')}
                  primaryTypographyProps={{ fontWeight: "bold", color: "#002F6D" }}
                  secondaryTypographyProps={{ color: "text.secondary" }}
                />
              </ListItem>

              {/* Affordable Pricing */}
              <ListItem sx={{ py: 1, display: "list-item" }}>
                <ListItemText
                  primary={translate('affordablePricingTitle')}
                  secondary={translate('affordablePricingContent')}
                  primaryTypographyProps={{ fontWeight: "bold", color: "#002F6D" }}
                  secondaryTypographyProps={{ color: "text.secondary" }}
                />
              </ListItem>

              {/* 24/7 Availability */}
              <ListItem sx={{ py: 1, display: "list-item" }}>
                <ListItemText
                  primary={translate('availabilityTitle')}
                  secondary={translate('availabilityContent')}
                  primaryTypographyProps={{ fontWeight: "bold", color: "#002F6D" }}
                  secondaryTypographyProps={{ color: "text.secondary" }}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>      
      </Box>

      {/* Videos */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
          px: 0,
        }}
      >
        <Card sx={{ border: "2px solid #002F6D", borderRadius: 2, background: "linear-gradient(135deg, #002F6D, #0D90C8)" }}>
          <CardContent>
            <Typography variant="h6" mb={2}>
              {translate('healthSafetyVideoTitle')}
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
                aria-label={translate('healthSafetyVideoAlt')}
              >
                <source src={aboutUs1} type="video/mp4" />
                {translate('aboutvideoNotSupported')}
              </video>
            </Box>
          </CardContent>
        </Card>        

        <Card sx={{ border: "2px solid #002F6D", borderRadius: 2, background: "linear-gradient(135deg, #0D90C8, #002F6D)" }}>
          <CardContent>
            <Typography variant="h6" mb={2}>
              {translate('bookingInductionTitle')}
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
                aria-label={translate('bookingInductionAlt')}
              >
                <source src={aboutUs2} type="video/mp4" />
                {translate('videoNotSupported')}
              </video>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Payment Support Section */}
      <Box sx={{ mt: { xs: 10, md: 20 } }}>
        <PaymentSupportSection />
      </Box>        
    </Box>
  );
};

export default AboutUsPage;