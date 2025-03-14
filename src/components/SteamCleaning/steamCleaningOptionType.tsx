import React, { useState } from 'react';
import { Box, Typography, Grid, Checkbox } from '@mui/material';

interface EstimateListProps {
  onSelectionChange: (selectedItems: string[]) => void;
}

const EstimateList: React.FC<EstimateListProps> = ({ onSelectionChange }) => {
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>({
    'Bathroom': false,
    'Living room': false,
    'Bed room': false,
    'Dishwasher': false,
    'Oven': false,
    'Tiles': false,
    'Pillows': false,
    'Floor Carpet': false,
    'Mattress': false,
    'Glass': false,
    'Windows': false,
    'Mirrors': false,
    'Curtains': false,
    'Counter Tops': false,
    'Pet Cages': false,
    'Fridge': false,
    'Kitchen Appliances': false,
    'Delicate Fabrics': false,
    'Indoor and Outdoor Furniture': false,
    'Patio Furniture': false,
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
        Things to Clean
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