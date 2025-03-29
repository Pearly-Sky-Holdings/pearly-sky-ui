import React, { useState } from 'react';
import { Box, Typography, Grid, Checkbox } from '@mui/material';
import { useLanguage } from '../../context/LanguageContext';

// Define the type for the categories object
type Categories = {
  [key: string]: string[];
};

// Props for the component
interface EstimateListProps {
  onSelectionChange: (selectedData: { category: string; items: string[] }[]) => void;
}

const EstimateList: React.FC<EstimateListProps> = ({ onSelectionChange }) => {
  const { translate } = useLanguage();
  
  // State to track selected categories and their items
  const [selectedCategories, setSelectedCategories] = useState<Record<string, boolean>>({
    Bathroom: false,
    Bedroom: false,
    Kitchen: false,
    'Living Room': false,
    'House Appliances': false,
    Other: false,
  });

  // Data for categories and their items
  const categories: Categories = {
    Bathroom: [
      translate('bathroomItem1'),
      translate('bathroomItem2'),
      translate('bathroomItem3'),
      translate('bathroomItem4'),
      translate('bathroomItem5')
    ],
    Bedroom: [
      translate('bedroomItem1'),
      translate('bedroomItem2'),
      translate('bedroomItem3'),
      translate('bedroomItem4'),
      translate('bedroomItem5')
    ],
    Kitchen: [
      translate('kitchenItem1'),
      translate('kitchenItem2'),
      translate('kitchenItem3'),
      translate('kitchenItem4'),
      translate('kitchenItem5')
    ],
    'Living Room': [
      translate('livingRoomItem1'),
      translate('livingRoomItem2'),
      translate('livingRoomItem3'),
      translate('livingRoomItem4'),
      translate('livingRoomItem5')
    ],
    'House Appliances': [
      translate('applianceItem1'),
      translate('applianceItem2'),
      translate('applianceItem3'),
      translate('applianceItem4'),
      translate('applianceItem5')
    ],
    Other: [translate('otherItem')]
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
        category: translate(cat.toLowerCase().replace(' ', '')),
        items: categories[cat],
      }));
    onSelectionChange(selectedData);
  };

  return (
    <Box sx={{ padding: 1, maxWidth: 1200, margin: 'auto' }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'semibold', textAlign: 'start', mb: 4, color: 'black' }}>
        {translate('freeEstimate')}
      </Typography>

      <Grid container spacing={5}>
        {/* First Row */}
        <Grid item xs={12} md={4} sx={{ padding: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#002F6D' }}>
              {translate('bathroom')}
            </Typography>
            <Checkbox checked={selectedCategories.Bathroom} onChange={() => handleCheckboxChange('Bathroom')} />
          </Box>
          {categories.Bathroom.map((item, index) => (
            <Typography key={index} variant="body1" sx={{ color: 'black', mt: 1 }}>
              {item}
            </Typography>
          ))}
        </Grid>

        <Grid item xs={12} md={4} sx={{ padding: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#002F6D' }}>
              {translate('bedroom')}
            </Typography>
            <Checkbox checked={selectedCategories.Bedroom} onChange={() => handleCheckboxChange('Bedroom')} />
          </Box>
          {categories.Bedroom.map((item, index) => (
            <Typography key={index} variant="body1" sx={{ color: 'black', mt: 1 }}>
              {item}
            </Typography>
          ))}
        </Grid>

        <Grid item xs={12} md={4} sx={{ padding: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#002F6D' }}>
              {translate('kitchen')}
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
        <Grid item xs={12} md={4} sx={{ padding: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#002F6D' }}>
              {translate('livingRoom')}
            </Typography>
            <Checkbox checked={selectedCategories['Living Room']} onChange={() => handleCheckboxChange('Living Room')} />
          </Box>
          {categories['Living Room'].map((item, index) => (
            <Typography key={index} variant="body1" sx={{ mt: 1, color: 'black' }}>
              {item}
            </Typography>
          ))}
        </Grid>

        <Grid item xs={12} md={4} sx={{ padding: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#002F6D' }}>
              {translate('houseAppliances')}
            </Typography>
            <Checkbox checked={selectedCategories['House Appliances']} onChange={() => handleCheckboxChange('House Appliances')} />
          </Box>
          {categories['House Appliances'].map((item, index) => (
            <Typography key={index} variant="body1" sx={{ mt: 1, color: 'black' }}>
              {item}
            </Typography>
          ))}
        </Grid>

        <Grid item xs={12} md={4} sx={{ padding: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#002F6D' }}>
              {translate('other')}
            </Typography>
            <Checkbox checked={selectedCategories['Other']} onChange={() => handleCheckboxChange('Other')} />
          </Box>
          {categories['Other'].map((item, index) => (
            <Typography key={index} variant="body1" sx={{ mt: 1, color: 'black' }}>
              {item}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default EstimateList;