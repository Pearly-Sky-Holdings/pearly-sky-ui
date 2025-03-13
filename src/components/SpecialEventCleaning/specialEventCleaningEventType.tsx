import React, { useState } from 'react';
import { Box, Typography, Grid, Checkbox } from '@mui/material';

interface EstimateListProps {
  onSelectionChange: (selectedItems: string[]) => void;
}

const EstimateList: React.FC<EstimateListProps> = ({ onSelectionChange }) => {
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>({
    'Conferences': false,
    'Red carpet events': false,
    'Music concerts and festivals': false,
    'Trade shows': false,
    'Product launches': false,
    'Seminars': false,
    'Networking events': false,
    'Sports': false,
    'Festivals': false,
    'Team building events': false,
    'Company parties': false,
    'Workshops': false,
    'Corporate events': false,
    'Weddings': false,
    'Charity events': false,
    'Cultural events': false,
    'Meetings': false,
    'Social events': false,
    'Theatre performance' : false,  
    'Career fairs': false,
    'Exhibition': false,
    'Fashion events': false,
    'Hybrid events': false,
    'Internal events': false,
    'Company meetings and off-sites': false,
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
        Event Type
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