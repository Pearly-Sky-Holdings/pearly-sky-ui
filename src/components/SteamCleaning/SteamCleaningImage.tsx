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
import { SteamCleaning1,SteamCleaning2,SteamCleaning3,SteamCleaning4} from "../../config/images";

interface CardData {
  image: string;
  title: string;
  description: string;
}

const data: CardData[] = [
  {
    image: SteamCleaning1,
    title: "Steam Cleaning Process",
    description: "Steam cleaning uses heat and pressure to lift dirt, oil, and grease from surfaces. It involves the application of low-pressure steam or hot water mixed with detergent to dissolve and remove contaminants.",
  },
  {
    image: SteamCleaning2,
    title: "Effectiveness",
    description: "The process effectively removes pollutants like dirt and grease, leaving surfaces clean and prepped for further treatment, such as painting or coating.",
  },
  {
    image: SteamCleaning3,
    title: "Surface Preparation",
    description: "Steam cleaning prepares surfaces by removing oils, grease, and other residues, ensuring a clean foundation for coatings or paints to adhere properly.",
  },
  {
    image: SteamCleaning4,
    title: "Environmental Benefits",
    description: "Steam cleaning is an eco-friendly method, using minimal chemicals and reducing environmental impact while still providing effective cleaning results.",
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
  height: "250px",
  background: `url(${image}) center/cover no-repeat`,
  filter: "brightness(0.9)",
}));

const OverlayContent = styled(CardContent)(() => ({
  position: "absolute",
  bottom: "0",
  left: "0",
  right: "0",
  padding: "16px",
  color: "#fff",
}));

const ImageGallery: React.FC = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: "2rem" }}>
      <Grid container spacing={3}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <CardContainer style={{textAlign:"center" }}>
              <ImageBackground image={item.image} />
              <OverlayContent>
                <Typography variant="h6" fontWeight="bold" >
                  {item.title}
                </Typography>
                <Typography variant="body2" style={{ marginTop: "2rem" }}>{item.description}</Typography>
              </OverlayContent>
            </CardContainer>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ImageGallery;
