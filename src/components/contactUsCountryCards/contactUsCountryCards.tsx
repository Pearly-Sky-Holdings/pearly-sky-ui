import React, { useState } from "react";
import { Card, CardContent, Button, Typography, Collapse } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface CountryProps {
  name: string;
  hasOffice: boolean;
  mapSrc?: string;
}

const CountryCard: React.FC<CountryProps> = ({ name, hasOffice, mapSrc }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    if (!hasOffice) return;
    setIsSelected(!isSelected);
  };

  return (
    <Card sx={{ mb: 2, boxShadow: 3, borderRadius: "12px" }}>
      <Button
        fullWidth
        onClick={handleClick}
        disabled={!hasOffice}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textTransform: "none",
          fontSize: "1rem",
          fontWeight: "semibold",
          p: 1,
          borderRadius: "12px",
          transition: "all 0.3s ease-in-out",
          color: hasOffice ? (isSelected ? "white" : "black") : "gray",
          backgroundColor: hasOffice ? (isSelected ? "#002F6D" : "white") : "#e0e0e0",
          "&:hover": {
            backgroundColor: hasOffice ? "#002F6D" : "#e0e0e0",
            color: hasOffice ? "white" : "gray",
          },
        }}
      >
        {name}
        {isSelected ? <RemoveIcon /> : <AddIcon />}
      </Button>

      <Collapse in={isSelected}>
        <CardContent>
          <Typography fontSize="1rem" fontWeight="medium" color="gray">
            {name} Office
          </Typography>
          {mapSrc && (
            <iframe
              src={mapSrc}
              title={`${name} Office Location`}
              style={{
                width: "60%",
                height: "250px",
                borderRadius: "12px",
                marginTop: "10px",
              }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          )}
          {mapSrc && (
            <Typography
              component="a"
              href={mapSrc}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              sx={{ display: "block", mt: 1, fontWeight: "bold" }}
            >
              {/* VIEW IN MAP → */}
            </Typography>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CountryCard;
