import React, { useState } from 'react';
import { Box, Typography, Grid, Checkbox } from '@mui/material';

interface EstimateListProps {
  onSelectionChange: (selectedItems: string[]) => void;
}

const EstimateList: React.FC<EstimateListProps> = ({ onSelectionChange }) => {
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>({
    'Kiddie Pool': false,
    'Above-Ground Swimming Pool': false,
    'Lap Pool': false,
    'In-Ground Family Swimming Pool': false,
    'Indoor Pool': false,
    'Olympic-Size': false,
    'Architectural Pool': false,
    'Infinity Pool': false,
    'Natural Pool': false,
    'Spool': false,
    'Saltwater Pool': false,
    'Plunge Pool': false,
    
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
        Pool Type
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