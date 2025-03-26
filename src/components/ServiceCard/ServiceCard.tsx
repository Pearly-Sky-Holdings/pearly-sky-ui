import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import { Link } from 'react-router-dom';
import { useLanguage } from "../../context/LanguageContext";

interface Service {
  image: string;
  title: string;
  description: string;
  link: string;
}

export default function ServiceCard({ service }: Readonly<{ service: Service }>) {
  const { translate } = useLanguage();

  return (
    <Card
      sx={{
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(37, 150, 190, 0.5)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <Box sx={{ 
        height: "250px", 
        overflow: "hidden",
        position: "relative"
      }}>
        <CardMedia 
          component="img" 
          image={service.image} 
          alt={service.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center"
          }} 
        />
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          {service.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
          {service.description}
        </Typography>
      </CardContent>
      <Box sx={{ textAlign: "center", pb: 3 }}>
        <Button
          variant="contained"
          component={Link}
          to={service.link}
          sx={{
            backgroundColor: "#002F6D",
            color: "white",
            borderRadius: "12px",
            "&:hover": { backgroundColor: "#008CDA" },
          }}
        >
          {translate('bookNow')}
        </Button>
      </Box>
    </Card>
  );
}