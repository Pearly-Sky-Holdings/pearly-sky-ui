import React, { useState } from 'react';
import { Box, Typography, Grid, Checkbox } from '@mui/material';

interface EstimateListProps {
  onSelectionChange: (selectedItems: string[]) => void;
}

const EstimateList: React.FC<EstimateListProps> = ({ onSelectionChange }) => {
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>({
    'Parking Garages': false,
    'Driveway and Sidewalk Cleaning': false,
    'Deck and Patio Cleaning': false,
    'Outdoor Furniture Cleaning': false,
    'Home Exterior Cleaning': false,
    'Drains and Gutter Cleaning': false,
    'Surface Preparation': false,
    'Outdoor equipment cleaning': false,
    'Playground cleaning': false,
    'Drive ways cleaning': false,
    'Walkways cleaning': false,
    'Parking garages cleaning': false,
    'Pavers cleaning': false,
    'Building exterior cleaning': false,
    'Decks cleaning': false,
    'Fencing Cleaning': false,
    'Other': false,
    
  });

  const handleCheckboxChange = (item: string) => {
    const updatedSelection = {
      ...selectedItems,
      [item]: !selectedItems[item],
    };
    setSelectedItems(updatedSelection);

    const selectedData = Object.keys(updatedSelection).filter((key) => updatedSelection[key]);
    onSelectionChange(selectedData); // Pass the selected items to the parent component
  };

  return (
    <Box sx={{ padding: 1, maxWidth: 1200, margin: '1' }}>
      <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'start', mb: 1, color: 'black' }}>
        Pressure Washing Type
      </Typography>

      <Grid container >
        {Object.keys(selectedItems).map((item, index) => (
          <Grid item xs={12} md={4} key={index} sx={{ padding: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox checked={selectedItems[item]} onChange={() => handleCheckboxChange(item)} />
              <Typography variant="body1" sx={{ fontWeight: 'semibold', color: 'black' }}>
                {item}
              </Typography>              
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EstimateList;