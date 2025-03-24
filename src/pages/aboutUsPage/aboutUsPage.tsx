import React from "react";
import { Box, Typography, Card, CardContent, Grid , List, ListItem,  ListItemText } from "@mui/material";
import { aboutUs1, aboutUs2 } from "../../config/images";
import PaymentSupportSection from "../../components/paymentSupportSection/paymentSupportSection";

const AboutUsPage: React.FC = () => {
  return (
    <Box sx={{  mt: 5,px:5 }}>
      {/*  About Pearly Sky Cleaning Services */}
      <Box sx={{ px:{xs:0,md:10}, mb: 10 }}>
        <Typography variant="h3" fontWeight="bold" textAlign="center" mb={2} 
        sx={{
        color: "#002F6D",
        fontSize: { xs: "24px", sm: "32px", md: "40px" }, // Responsive font size
      }}>
          About Pearly Sky Cleaning Services
        </Typography>

        <Typography variant="h4"  fontWeight="bold" textAlign="center" mb={10} 
         sx={{
          color: "#002F6D",
          fontSize: { xs: "20px", sm: "28px", md: "35px" }, 
        }}>
          Your Trusted Cleaning Partner
        </Typography>

        {/* Paragraph with Image */}
        <Grid container spacing={4} alignItems="center" sx={{mb:{xs:5,sm:10,md:15}}}>
        <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="center">
              <img
                src="/images/aboutUsPage/aboutUs.png" //  image path
                alt="Cleaning Services"
                style={{ maxWidth: "100%", borderRadius: "10px" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>            
            <Typography variant="body1" color="black">
            At Pearly Sky Cleaning Services Pvt Ltd, we believe that a clean space is the foundation of a healthy 
            and productive environment. With years of experience and a commitment to excellence, we provide 
            top-notch cleaning solutions tailored to meet the unique needs of our clients. Whether it’s your home, 
            office, or industrial facility, we’re here to make it sparkle            
            </Typography>
          </Grid>          
        </Grid>

        {/* Our Story Section */}
        
        <Grid container spacing={4} alignItems="center" sx={{mb:{xs:5,sm:10,md:15}}}>          
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold"  mb={2} 
        sx={{
          color: "#002F6D",
          fontSize: { xs: "20px", sm: "28px", md: "35px" }, 
        }}>
          Our Story
        </Typography>
            
            <Typography variant="body1" color="black">
            Founded in [24 November 2023], Pearly Sky Cleaning Services began as a small local business with a 
            big vision: to revolutionize the cleaning industry. Over the years, we’ve grown into a trusted name, 
            serving clients across [133] cities and [24] countries. Our journey has been guided by a passion for 
            cleanliness, innovation, and customer satisfaction.            
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="center">
              <img
                src="/images/aboutUsPage/ourStory.png" //  image path
                alt="Our Story"
                style={{ maxWidth: "100%", borderRadius: "10px" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/*  Vision, Mission, Values, Objectives */}
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={2} 
       sx={{
        color: "#002F6D",
        fontSize: { xs: "20px", sm: "28px", md: "35px" }, 
      }}>
        Our Vision, Mission, Values, Objectives
      </Typography>
      {/* Vision, Mission, Values, Objectives Image */}
      <Box display="flex" justifyContent="center" mb={10} mt={5}>
      <Box
        component="img"
        src="/images/aboutUsPage/vision.png"
        alt="Vision, Mission, Values, Objectives"
        sx={{
          maxWidth: { xs: "300px", sm: "200px", md: "500px" }, // Responsive maxWidth
          borderRadius: "50%", // Circular image
          display: "block", // Ensure the image is centered
          
        }}
      />    
      </Box>

      {/* why choose us */}
      <Box sx={{ px:{xs:0,md:10}, mb: 10,mt:5 }}>      
     
      {/* List */}
      <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} md={6}>
        <Box display="flex" justifyContent="center">
          <img
            src="/images/aboutUsPage/whyChooseUs.png" //  image path
            alt="Our Story"
            style={{ maxWidth: "100%", borderRadius: "10px" }}
          />
        </Box>
      </Grid>        
             
      <Grid item xs={12} md={6} >
      <Typography variant="h4" fontWeight="bold" mb={4} 
       sx={{
        color: "#002F6D",
        fontSize: { xs: "20px", sm: "28px", md: "35px" }, 
      }}>
        Why Choose Us
      </Typography>
        <List  sx={{ listStyleType: "disc", pl: 4,color:"#002F6D" }}>
          {/* Experienced Team */}
          <ListItem sx={{ py: 1, display: "list-item" }}>
            <ListItemText
              primary="Experienced Team"
              secondary="Our trained and professional cleaners are equipped to handle any cleaning challenge."
              primaryTypographyProps={{ fontWeight: "bold", color: "#002F6D" }}
              secondaryTypographyProps={{ color: "text.secondary" }}
            />
          </ListItem>

          {/* Customized Solutions */}
          <ListItem sx={{ py: 1, display: "list-item" }}>
            <ListItemText
              primary="Customized Solutions"
              secondary="We tailor our services to meet your specific needs and preferences."
              primaryTypographyProps={{ fontWeight: "bold", color: "#002F6D" }}
              secondaryTypographyProps={{ color: "text.secondary" }}
            />
          </ListItem>

          {/* Eco-Friendly Practices */}
          <ListItem sx={{ py: 1, display: "list-item" }}>
            <ListItemText 
              primary="Eco-Friendly Practices"
              secondary="We use safe, non-toxic cleaning products that are gentle on the environment."
              primaryTypographyProps={{ fontWeight: "bold", color: "#002F6D" }}
              secondaryTypographyProps={{ color: "text.secondary" }}
            />
          </ListItem>

          {/* Affordable Pricing */}
          <ListItem sx={{ py: 1, display: "list-item" }}>
            <ListItemText
              primary="Affordable Pricing"
              secondary="We offer competitive rates without compromising on quality."
              primaryTypographyProps={{ fontWeight: "bold", color: "#002F6D" }}
              secondaryTypographyProps={{ color: "text.secondary" }}
            />
          </ListItem>

          {/* 24/7 Availability */}
          <ListItem sx={{ py: 1, display: "list-item" }}>
            <ListItemText
              primary="24/7 Availability"
              secondary="We’re here for you, anytime you need us."
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
              Health and Safety Video
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
              >
                <source src={aboutUs1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Box>
          </CardContent>
        </Card>        

        <Card sx={{ border: "2px solid #002F6D", borderRadius: 2, background: "linear-gradient(135deg, #0D90C8, #002F6D)" }}>
          <CardContent>
            <Typography variant="h6" mb={2}>
              Booking Induction Video
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
              >
                <source src={aboutUs2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Payment Support Section */}
      <Box sx={{mt:{xs:10,md:20}}}>
      <PaymentSupportSection />
      </Box>        
      
    </Box>
  );
};

export default AboutUsPage;