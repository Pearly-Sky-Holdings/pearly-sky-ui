import { Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";
import {
    sectorImage1,
    sectorImage2,
    sectorImage3,
    sectorImage4,
    sectorImage5,
} from "../../config/images";

const sectors = [
  {
    title: "Elders Home - Care House",
    description: "Providing compassionate care and a home-like environment to our elders.",
    image: sectorImage1,
  },
  {
    title: "Commercial & Mixed Utilities",
    description: "Building efficient spaces that power growth and innovation.",
    image: sectorImage2,
  },
  {
    title: "Hotels & Restaurants",
    description: "Unforgettable stays and dining experiences await.",
    image: sectorImage3,
  },
  {
    title: "Education",
    description: "Empowering minds through knowledge and innovation.",
    image: sectorImage4,
  },
  {
    title: "Leisure & Hospitality",
    description: "Elevating experiences in leisure and hospitality.",
    image: sectorImage5,
  },
];

const OurSector = () => {
  return (
    <div style={{textAlign: "center" }}>
      <Typography variant="h4" gutterBottom style={{ fontWeight: "bold", color:"#002F6D" }}>
        Our Sector
      </Typography>
      <Grid container spacing={2} justifyContent="center" height="70vh">
        {sectors.map((sector, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
            <Card
              sx={{
                maxWidth: 400,
                borderRadius: 6,
                display: "flex",
                flexDirection: "column",
                height: "77vh",
                
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              }}
            >
              <CardMedia
                component="img"
                style={{borderTopLeftRadius: "100%", 
                    borderTopRightRadius: "100%", 
                    height: "53vh", 
                    paddingLeft: "2vh", 
                    paddingRight: "2vh",
                    paddingTop: "3vh"}}
                image={sector.image}
                alt={sector.title}
                sx={{
                  objectFit: "cover",
                }}
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#0D47A1", paddingLeft: "10px", paddingRight: "10px" }}
                >
                  {sector.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {sector.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OurSector;