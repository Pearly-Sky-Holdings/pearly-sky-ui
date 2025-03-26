import { useState } from "react";
import { Grid, Box, Button } from "@mui/material";
import ServiceCard from "./ServiceCard";
import { useLanguage } from "../../context/LanguageContext";

interface Service {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

interface ServiceListProps {
  readonly services: Service[];
}

export default function ServiceList({ services }: ServiceListProps) {
  const [visibleCount, setVisibleCount] = useState(6);
  const maxVisibleCount = services.length;
  const { translate } = useLanguage();

  const handleSeeMore = () => {
    setVisibleCount((prevCount) =>
      Math.min(prevCount + 3, maxVisibleCount)
    ); 
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Grid container spacing={4} justifyContent="center">
        {services.slice(0, visibleCount).map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>

      {visibleCount < Math.min(services.length, maxVisibleCount) && (
        <Button
          onClick={handleSeeMore}
          sx={{
            mt: 4,
            color: "#002F6D",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: "bold",
            textDecoration: "underline"
          }}
        >
          {translate('seeMore')}
        </Button>
      )}
    </Box>
  );
}
