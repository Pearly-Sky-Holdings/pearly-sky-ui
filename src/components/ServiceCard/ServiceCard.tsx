import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";

interface Service {
  image: string;
  title: string;
  description: string;
}

export default function ServiceCard({ service }: Readonly<{ service: Service }>) {
  return (
    <Card
      sx={{
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <CardMedia component="img" height="250" image={service.image} alt={service.title} />
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
          sx={{
            backgroundColor: "#002F6D",
            color: "white",
            borderRadius: "12px",
            "&:hover": { backgroundColor: "#008CDA" },
          }}
        >
          Book Now
        </Button>
      </Box>
    </Card>
  );
}
