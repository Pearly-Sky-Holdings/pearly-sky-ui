import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";
import { useEffect, useRef } from "react";
import {
  sectorImage1,
  sectorImage2,
  sectorImage3,
  sectorImage4,
  sectorImage5,
  finance,
  healthcare,
  privateProperties,
  retail,
  sports,
  residential,
} from "../../config/images";

const sectors = [
  {
    title: "Commercial & Mixed Utilities",
    description: "Building efficient spaces that power growth and innovation.",
    image: sectorImage2,
  },
  {
    title: "Sports",
    description: "Elevating performance and passion through every game.",
    image: sports,
  },
  {
    title: "Private Properties",
    description: "Exclusive spaces tailored for comfort and luxury.",
    image: privateProperties,
  },
  {
    title: "Residential",
    description: "Creating welcoming and vibrant communities.",
    image: residential,
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
    title: "Healthcare",
    description: "Transforming healthcare for a healthier tomorrow.",
    image: healthcare,
  },
  {
    title: "Finance",
    description: "Unlocking financial growth and security.",
    image: finance,
  },
  {
    title: "Leisure & Hospitality",
    description: "Elevating experiences in leisure and hospitality.",
    image: sectorImage5,
  },
  {
    title: "Elders Home - Care House",
    description: "Providing compassionate care and a home-like environment to our elders.",
    image: sectorImage1,
  },
  {
    title: "Retail",
    description: "Redefining the shopping experience with innovation and convenience.",
    image: retail,
  },
];

const OurSector = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const container = containerRef.current;

    if (scrollContainer && container) {
      const content = container.innerHTML;
      container.innerHTML = content + content;

      const scroll = () => {
        if (scrollContainer.scrollLeft >= container.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      };

      const scrollInterval = setInterval(scroll, 30);
      return () => clearInterval(scrollInterval);
    }
  }, []);

  return (
    <Box sx={{ textAlign: "center", overflow: "hidden" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#002F6D",
          pt: "30px",
          mb: 4,
        }}
      >
        Our Sector
      </Typography>
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "hidden",
          width: "100%",
          position: "relative",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <Box
          ref={containerRef}
          sx={{
            display: "flex",
            gap: 2,
            py: 2,
            px: 4,
            minWidth: "calc(5 * 320px + 4 * 16px)",
            flexWrap: "nowrap",
          }}
        >
          {sectors.map((sector, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 200,
                maxWidth: 250,
                borderRadius: 6,
                display: "flex",
                flexDirection: "column",
                height: { xs: "350px", sm: "400px", md: "350px" }, // Reduced height
                boxShadow: "0px 4px 10px rgba(37, 150, 190, 0.5)",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.01)",
                  boxShadow: "0px 8px 10px rgba(37, 150, 190, 0.4)",
                },
                flex: "0 0 auto",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  borderTopLeftRadius: "130%",
                  borderTopRightRadius: "130%",
                  height: { xs: "45%", sm: "50%" }, // Reduced image height
                  objectFit: "cover",
                  padding: { xs: "0.5vh", sm: "1vh", md: "1.5vh" }, // Reduced padding
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
                  padding: { xs: "8px", sm: "12px" }, // Reduced padding
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#0D47A1",
                    textAlign: "center",
                    mb: 0,
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
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default OurSector;