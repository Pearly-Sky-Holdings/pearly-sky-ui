import React, { useState } from 'react';
import { Box, Typography, Grid, Checkbox } from '@mui/material';
import { useLanguage } from '../../context/LanguageContext';

interface EstimateListProps {
  onSelectionChange: (selectedItems: string[]) => void;
}

// Internal constant keys that don't change with language
const PRESSURE_WASHING_TYPES = {
  PARKING_GARAGES: 'parkingGarages',
  DRIVEWAY_SIDEWALK: 'drivewaySidewalkCleaning',
  DECK_PATIO: 'deckPatioCleaning',
  OUTDOOR_FURNITURE: 'outdoorFurnitureCleaning',
  HOME_EXTERIOR: 'homeExteriorCleaning',
  DRAINS_GUTTERS: 'drainsGutterCleaning',
  SURFACE_PREP: 'surfacePreparation',
  OUTDOOR_EQUIPMENT: 'outdoorEquipmentCleaning',
  PLAYGROUND: 'playgroundCleaning',
  DRIVEWAYS: 'drivewaysCleaning',
  WALKWAYS: 'walkwaysCleaning',
  PARKING_GARAGES_CLEANING: 'parkingGaragesCleaning',
  PAVERS: 'paversCleaning',
  BUILDING_EXTERIOR: 'buildingExteriorCleaning',
  DECKS: 'decksCleaning',
  FENCING: 'fencingCleaning',
  OTHER: 'other'
};

const EstimateList: React.FC<EstimateListProps> = ({ onSelectionChange }) => {
  const { translate } = useLanguage();
  
  // Initialize state with internal keys
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(
    Object.values(PRESSURE_WASHING_TYPES).reduce((acc, key) => {
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

    // Translate the selected items when sending to parent
    const selectedData = Object.keys(updatedSelection)
      .filter((key) => updatedSelection[key])
      .map(key => translate(key));
    onSelectionChange(selectedData);
  };

  return (
    <Box sx={{ padding: 1, maxWidth: 1200, margin: '1' }}>
      <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'start', mb: 1, color: 'black' }}>
        {translate('pressureWashingType')}
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