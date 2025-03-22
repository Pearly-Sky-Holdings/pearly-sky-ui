import { Box, Typography, Grid } from "@mui/material";

const OurServiceProvider = () => {
  return (
    <Box sx={{ textAlign: "center", py: 5,}}>
      {/* Section Heading */}
      <Typography variant="h4" fontWeight="bold" mb={4} sx={{ color: "#002F6D" }}>
        Our Service Provider
      </Typography>

      {/* Images Grid */}
      <Grid container  justifyContent="center" sx={{gap:5}}>
        {/* Slack Image */}       
          <Box
            component="img"
            src="/images/ourSericeProvider/slack.png" 
            alt="Slack"
            sx={{
              maxWidth: "10%",
              height: "10%",
              borderRadius: "8px",              
            }}
          />       

        {/* CalliApp Image */}       
          <Box
            component="img"
            src="/images/ourSericeProvider/hippo.png" 
            alt="CalliApp"
            sx={{
              maxWidth: "10%",
              height: "10%",
              borderRadius: "8px",             
            }}
          />        
      </Grid>
    </Box>
  );
};

export default OurServiceProvider;