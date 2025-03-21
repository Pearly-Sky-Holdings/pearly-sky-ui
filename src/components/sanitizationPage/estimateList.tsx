import React, { useState } from 'react';
import { Box, Typography, Grid,  Checkbox, } from '@mui/material';

// Define the type for the categories object
type Categories = {
  [key: string]: string[];
};

// Props for the component
interface EstimateListProps {
  onSelectionChange: (selectedData: { category: string; items: string[] }[]) => void;
}

const EstimateList: React.FC<EstimateListProps> = ({ onSelectionChange }) => {
  // State to track selected categories and their items
  const [selectedCategories, setSelectedCategories] = useState<Record<string, boolean>>({
    Bathroom: false,
    Bedroom: false,
    Kitchen: false,
    'Living Room': false,
    'House Appliances': false,
    Other:false,
  });

  // Data for categories and their items
  const categories: Categories = {
    Bathroom: ['Hand Soap', 'Toilet Paper', '4 Large Towels', '2 Wash Rags, 1 Black Makeup Cloth', 'Shower curtain, liner, and curtain hooks'],
    Bedroom: ['Mattress', 'Hangers', 'Top Sheet', 'Duvet Cover & Shams', '4 Pillowcases Per Bed'],
    Kitchen: ['Coffee Pods', 'Trash Bag', 'Cutting board', 'Dish Brush / Sponge', 'Dish Soap & Dishwasher Pods'],
    'Living Room': ['TV Stand', 'Coffee Table', 'Couch/Chair', 'Curtains/Shades', 'Streaming device'],
    'House Appliances': ['Oven', 'Fridge', 'Iron', 'Washing Machine', 'Vacuum Cleaner'],
    Other:['other']
  };

  // Handle checkbox change
  const handleCheckboxChange = (category: string) => {
    const updatedSelection = {
      ...selectedCategories,
      [category]: !selectedCategories[category],
    };
    setSelectedCategories(updatedSelection);

    // Send selected data to the parent component via callback
    const selectedData = Object.keys(updatedSelection)
      .filter((cat) => updatedSelection[cat])
      .map((cat) => ({
        category: cat,
        items: categories[cat],
      }));
    onSelectionChange(selectedData);
  };

  return (
    <Box sx={{ padding: 1, maxWidth: 1200, margin: 'auto' }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'semibold', textAlign: 'start', mb: 4, color: 'black' }}>
        Get a Free Estimate
      </Typography>

      <Grid container spacing={5}>
        {/* First Row */}
        <Grid item xs={12} md={4} sx={{padding:2}}>          
            <Box sx={{ display: 'flex',  alignItems: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#002F6D' }}>
                Bathroom
              </Typography>
              <Checkbox checked={selectedCategories.Bathroom} onChange={() => handleCheckboxChange('Bathroom')} />
            </Box>
            {categories.Bathroom.map((item, index) => (
              <Typography key={index} variant="body1" sx={{ color: 'black', mt: 1 }}>
                {item}
              </Typography>
            ))}          
        </Grid>

        <Grid item xs={12} md={4} sx={{padding:2}}>          
            <Box sx={{ display: 'flex',  alignItems: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#002F6D' }}>
                Bedroom
              </Typography>
              <Checkbox checked={selectedCategories.Bedroom} onChange={() => handleCheckboxChange('Bedroom')} />
            </Box>
            {categories.Bedroom.map((item, index) => (
              <Typography key={index} variant="body1" sx={{ color: 'black', mt: 1 }}>
                {item}
              </Typography>
            ))}          
        </Grid>

        <Grid item xs={12} md={4} sx={{padding:2}}>          
            <Box sx={{ display: 'flex',  alignItems: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#002F6D' }}>
                Kitchen
              </Typography>
              <Checkbox checked={selectedCategories.Kitchen} onChange={() => handleCheckboxChange('Kitchen')} />
            </Box>
            {categories.Kitchen.map((item, index) => (
              <Typography key={index} variant="body1" sx={{ color: 'black', mt: 1 }}>
                {item}
              </Typography>
            ))}          
        </Grid>

        {/* Second Row */}
        <Grid item xs={12} md={4} sx={{padding:2}}>          
            <Box sx={{ display: 'flex',  alignItems: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#002F6D' }}>
                Living Room
              </Typography>
              <Checkbox checked={selectedCategories['Living Room']} onChange={() => handleCheckboxChange('Living Room')} />
            </Box>
            {categories['Living Room'].map((item, index) => (
              <Typography key={index} variant="body1" sx={{ mt: 1,color: 'black' }}>
                {item}
              </Typography>
            ))}          
        </Grid>

        <Grid item xs={12} md={4} sx={{padding:2}}>          
            <Box sx={{ display: 'flex',  alignItems: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#002F6D' }}>
                House Appliances
              </Typography>
              <Checkbox checked={selectedCategories['House Appliances']} onChange={() => handleCheckboxChange('House Appliances')} />
            </Box>
            {categories['House Appliances'].map((item, index) => (
              <Typography key={index} variant="body1" sx={{ mt: 1,color: 'black' }}>
                {item}
              </Typography>
            ))}          
        </Grid>

        <Grid item xs={12} md={4} sx={{padding:2}}>          
            <Box sx={{ display: 'flex',  alignItems: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#002F6D' }}>
                Other
              </Typography>
              <Checkbox checked={selectedCategories['Other']} onChange={() => handleCheckboxChange('Other')} />
            </Box>
            {categories['Other'].map((item, index) => (
              <Typography key={index} variant="body1" sx={{ mt: 1,color: 'black' }}>
                {item}
              </Typography>
            ))}          
        </Grid>
      </Grid>
    </Box>
  );
};

export default EstimateList;