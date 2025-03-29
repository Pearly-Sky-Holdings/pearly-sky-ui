import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Checkbox } from '@mui/material';
import { useLanguage } from "../../context/LanguageContext";

interface EstimateListProps {
  onSelectionChange: (selectedItems: string[]) => void;
}

// Define the pool types with their original keys
const POOL_TYPES = {
  kiddiePool: 'Kiddie Pool',
  aboveGroundPool: 'Above-Ground Swimming Pool',
  lapPool: 'Lap Pool',
  inGroundPool: 'In-Ground Family Swimming Pool',
  indoorPool: 'Indoor Pool',
  olympicPool: 'Olympic-Size',
  architecturalPool: 'Architectural Pool',
  infinityPool: 'Infinity Pool',
  naturalPool: 'Natural Pool',
  spool: 'Spool',
  saltwaterPool: 'Saltwater Pool',
  plungePool: 'Plunge Pool',
};

const EstimateList: React.FC<EstimateListProps> = ({ onSelectionChange }) => {
  const { translate } = useLanguage();
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(
    Object.keys(POOL_TYPES).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {} as Record<string, boolean>)
  );

  // Update translations when language changes
  const [translatedPoolTypes, setTranslatedPoolTypes] = useState<Record<string, string>>({});

  useEffect(() => {
    const translated = Object.keys(POOL_TYPES).reduce((acc, key) => {
      acc[key] = translate(key);
      return acc;
    }, {} as Record<string, string>);
    setTranslatedPoolTypes(translated);
  }, [translate]);

  const handleCheckboxChange = (key: string) => {
    const updatedSelection = {
      ...selectedItems,
      [key]: !selectedItems[key],
    };
    setSelectedItems(updatedSelection);

    const selectedData = Object.keys(updatedSelection)
      .filter((k) => updatedSelection[k])
      .map(k => translatedPoolTypes[k]);
    onSelectionChange(selectedData);
  };

  return (
    <Box sx={{ padding: 1, maxWidth: 1200, margin: '1' }}>
      <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'start', mb: 1, color: 'black' }}>
        {translate('poolType')}
      </Typography>

      <Grid container>
        {Object.keys(POOL_TYPES).map((key, index) => (
          <Grid item xs={12} md={4} key={index} sx={{ padding: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox 
                checked={selectedItems[key]} 
                onChange={() => handleCheckboxChange(key)} 
              />
              <Typography variant="body1" sx={{ fontWeight: 'semibold', color: 'black' }}>
                {translatedPoolTypes[key]}
              </Typography>              
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EstimateList;