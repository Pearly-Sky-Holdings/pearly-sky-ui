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
import { useLanguage } from "../../context/LanguageContext";

const OurSector = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { translate } = useLanguage();

  const sectors = [
    {
      titleKey: "commercialMixedUtilities",
      descriptionKey: "commercialMixedUtilitiesDesc",
      image: sectorImage2,
    },
    {
      titleKey: "sportsSector",
      descriptionKey: "sportsSectorDesc",
      image: sports,
    },
    {
      titleKey: "privateProperties",
      descriptionKey: "privatePropertiesDesc",
      image: privateProperties,
    },
    {
      titleKey: "residentialSector",
      descriptionKey: "residentialSectorDesc",
      image: residential,
    },
    {
      titleKey: "hotelsRestaurants",
      descriptionKey: "hotelsRestaurantsDesc",
      image: sectorImage3,
    },
    {
      titleKey: "educationSector",
      descriptionKey: "educationSectorDesc",
      image: sectorImage4,
    },
    {
      titleKey: "healthcareSector",
      descriptionKey: "healthcareSectorDesc",
      image: healthcare,
    },
    {
      titleKey: "financeSector",
      descriptionKey: "financeSectorDesc",
      image: finance,
    },
    {
      titleKey: "leisureHospitality",
      descriptionKey: "leisureHospitalityDesc",
      image: sectorImage5,
    },
    {
      titleKey: "eldersHomeCare",
      descriptionKey: "eldersHomeCareDesc",
      image: sectorImage1,
    },
    {
      titleKey: "retailSector",
      descriptionKey: "retailSectorDesc",
      image: retail,
    },
  ];

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
        {translate('ourSectorTitle')}
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
                height: { xs: "350px", sm: "400px", md: "350px" },
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
                  height: { xs: "45%", sm: "50%" },
                  objectFit: "cover",
                  padding: { xs: "0.5vh", sm: "1vh", md: "1vh" },
                }}
                image={sector.image}
                alt={translate(sector.titleKey)}
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: { xs: "8px", sm: "8px" },
                }}
              >
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
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#0D47A1",
                      textAlign: "center",
                    }}
                  >
                    {translate(sector.titleKey)}
                  </Typography>
                  {translate(sector.descriptionKey)}
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