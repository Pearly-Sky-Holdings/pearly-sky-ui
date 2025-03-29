import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import { useLanguage } from "../../context/LanguageContext";

const OurServiceProvider = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { translate } = useLanguage();

  return (
    <Box sx={{ 
      textAlign: "center", 
      py: { xs: 3, sm: 4, md: 5 },
      px: { xs: 2, sm: 3, md: 0 }
    }}>
      {/* Section Heading */}
      <Typography 
        variant={isSmallScreen ? "h5" : "h4"} 
        fontWeight="bold" 
        mb={{ xs: 2, sm: 3, md: 4 }} 
        sx={{ color: "#002F6D" }}
      >
        {translate('serviceprovider')}
      </Typography>

      {/* Images Grid */}
      <Grid 
        container 
        justifyContent="center" 
        alignItems="center"
        spacing={isSmallScreen ? 2 : 4}
        sx={{
          px: { xs: 2, sm: 3, md: 0 },
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {/* Slack Image */}       
        <Grid item xs={12} sm={4} md={3} lg={2}>
          <Box
            component="img"
            src="/images/ourSericeProvider/slack.png" 
            alt="Slack"
            sx={{
              width: '100%',
              maxWidth: { xs: '120px', sm: '150px', md: '180px' },
              height: 'auto',
              borderRadius: "8px",
              objectFit: 'contain',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          />       
        </Grid>

        {/* CalliApp Image */}       
        <Grid item xs={12} sm={4} md={3} lg={2}>
          <Box
            component="img"
            src="/images/ourSericeProvider/hippo.png" 
            alt="CalliApp"
            sx={{
              width: '100%',
              maxWidth: { xs: '120px', sm: '150px', md: '180px' },
              height: 'auto',
              borderRadius: "8px",
              objectFit: 'contain',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          />        
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurServiceProvider;