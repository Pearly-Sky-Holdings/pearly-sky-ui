import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useLanguage } from "../../context/LanguageContext";

interface CardData {
  image: string;
  titleKey: string;
  descriptionKey: string;
}

const ImageGallery: React.FC = () => {
  const { translate } = useLanguage();

  const data: CardData[] = [
    {
      image: "/images/service/sanitization/sanitization1.png",
      titleKey: "highTempSteaming",
      descriptionKey: "highTempSteamingDesc"
    },
    {
      image: "/images/service/sanitization/sanitization2.png",
      titleKey: "uvLightSanitization",
      descriptionKey: "uvLightSanitizationDesc"
    },
    {
      image: "/images/service/sanitization/sanitization3.png",
      titleKey: "h2o2Disinfection",
      descriptionKey: "h2o2DisinfectionDesc"
    },
    {
      image: "/images/service/sanitization/sanitization4.png",
      titleKey: "deepCleaningServices",
      descriptionKey: "deepCleaningServicesDesc"
    },
  ];

  const CardContainer = styled(Card)(() => ({
    position: "relative",
    overflow: "hidden",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    },
  }));

  const ImageBackground = styled(Box)<{ image: string }>(({ image }) => ({
    height: "200px",
    background: `url(${image}) center/cover no-repeat`,
    filter: "brightness(0.7)",
  }));

  const OverlayContent = styled(CardContent)(() => ({
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    padding: "16px",
    color: "#fff",
  }));

  return (
    <Container maxWidth="lg" style={{ marginTop: "2rem" }}>
      <Grid container spacing={3}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <CardContainer style={{textAlign:"center"}}>
              <ImageBackground image={item.image} />
              <OverlayContent>
                <Typography variant="h6" fontWeight="bold">
                  {translate(item.titleKey)}
                </Typography>
                <Typography variant="body2" style={{ marginTop: "2rem" }}>
                  {translate(item.descriptionKey)}
                </Typography>
              </OverlayContent>
            </CardContainer>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ImageGallery;