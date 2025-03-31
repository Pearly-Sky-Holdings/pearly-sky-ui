import React, { useState } from 'react';
import { Box, Typography, Grid, Checkbox } from '@mui/material';
import { useLanguage } from '../../context/LanguageContext';

interface EstimateListProps {
  onSelectionChange: (selectedItems: string[]) => void;
}

const EstimateList: React.FC<EstimateListProps> = ({ onSelectionChange }) => {
  const { translate } = useLanguage();
  
  // Internal constant keys that don't change with language
  const ITEM_KEYS = {
    BATHROOM: 'bathroom',
    LIVING_ROOM: 'livingRoom',
    BED_ROOM: 'bedRoom',
    DISHWASHER: 'dishwasher',
    OVEN: 'oven',
    TILES: 'tiles',
    PILLOWS: 'pillows',
    FLOOR_CARPET: 'floorCarpet',
    MATTRESS: 'mattress',
    GLASS: 'glass',
    WINDOWS: 'windows',
    MIRRORS: 'mirrors',
    CURTAINS: 'curtains',
    COUNTER_TOPS: 'counterTops',
    PET_CAGES: 'petCages',
    FRIDGE: 'fridge',
    KITCHEN_APPLIANCES: 'kitchenAppliances',
    DELICATE_FABRICS: 'delicateFabrics',
    INDOOR_OUTDOOR_FURNITURE: 'indoorOutdoorFurniture',
    PATIO_FURNITURE: 'patioFurniture',
    OTHER: 'other'
  };

  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(
    Object.values(ITEM_KEYS).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const handleCheckboxChange = (itemKey: string) => {
    const updatedSelection = {
      ...selectedItems,
      [itemKey]: !selectedItems[itemKey],
    };
    setSelectedItems(updatedSelection);

    const selectedData = Object.keys(updatedSelection)
      .filter((key) => updatedSelection[key])
      .map(key => translate(key)); // Translate when sending to parent
    onSelectionChange(selectedData);
  };

  return (
    <Box sx={{ padding: 1, maxWidth: 1200, margin: '1' }}>
      <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'start', mb: 1, color: 'black' }}>
        {translate('optionTypes')}
      </Typography>

      <Grid container>
        {Object.keys(selectedItems).map((itemKey, index) => (
          <Grid item xs={12} md={4} key={index} sx={{ padding: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox 
                checked={selectedItems[itemKey]} 
                onChange={() => handleCheckboxChange(itemKey)} 
              />
              <Typography variant="body1" sx={{ fontWeight: 'semibold', color: 'black' }}>
                {translate(itemKey)}
              </Typography>              
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EstimateList;