import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid";
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
];

const OurSector = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontWeight: "bold", color: "#002F6D", paddingTop: "30px" }}
      >
        Our Sector
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{
          marginBottom: { xs: 3, md: 4 }
        }}
      >
        {sectors.map((sector, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={2.4}
            key={index}
            sx={{
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                maxWidth: { xs: 300, sm: 350, md: 400 },
                borderRadius: 6,
                display: "flex",
                flexDirection: "column",
                height: { xs: "60vh", sm: "70vh", md: "70vh" },
                boxShadow: "0px 4px 10px rgba(37, 150, 190, 0.5)",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                              animation: "scroll 30s linear infinite",
              "@keyframes scroll": {
                "0%": {
                  transform: "translateX(0%)",
                },
                "100%": {
                  transform: "translateX(-100%)",
                },
              },
              justifyContent: { xs: 'center', md: 'flex-start' },
              flexWrap: { xs: 'nowrap', md: 'nowrap' },
                "&:hover": {
                  transform: "scale(1.01)",
                  boxShadow: "0px 8px 10px rgba(37, 150, 190, 0.4)",
                },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  borderTopLeftRadius: "130%",
                  borderTopRightRadius: "130%",
                  height: { xs: "50%", sm: "70%" }, 
                  objectFit: "cover",
                  padding: { xs: "1vh", sm: "2vh", md: "3vh" },
                  
                }}
                image={sector.image}
                alt={sector.title}
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: { xs: 1, sm: 1 },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#0D47A1",
                    textAlign: "center",
                  }}
                >
                  {sector.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    textAlign: "center",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3, 
                    WebkitBoxOrient: "vertical",
                  }}
                >
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