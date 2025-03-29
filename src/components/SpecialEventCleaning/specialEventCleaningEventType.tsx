import React, { useState } from 'react';
import { Box, Typography, Grid, Checkbox } from '@mui/material';
import { useLanguage } from '../../context/LanguageContext';

interface EstimateListProps {
  onSelectionChange: (selectedItems: string[]) => void;
}

// Internal constant keys for event types
const EVENT_TYPES = {
  CONFERENCES: 'conferences',
  RED_CARPET: 'redCarpetEvents',
  MUSIC_CONCERTS: 'musicConcerts',
  TRADE_SHOWS: 'tradeShows',
  PRODUCT_LAUNCHES: 'productLaunches',
  SEMINARS: 'seminars',
  NETWORKING: 'networkingEvents',
  SPORTS: 'sportsEvents',
  FESTIVALS: 'festivals',
  TEAM_BUILDING: 'teamBuilding',
  COMPANY_PARTIES: 'companyParties',
  WORKSHOPS: 'workshops',
  CORPORATE_EVENTS: 'corporateEvents',
  WEDDINGS: 'weddings',
  CHARITY: 'charityEvents',
  CULTURAL: 'culturalEvents',
  MEETINGS: 'meetings',
  SOCIAL: 'socialEvents',
  THEATRE: 'theatrePerformance',
  CAREER_FAIRS: 'careerFairs',
  EXHIBITIONS: 'exhibitions',
  FASHION: 'fashionEvents',
  HYBRID: 'hybridEvents',
  INTERNAL: 'internalEvents',
  COMPANY_MEETINGS: 'companyMeetings',
  OTHER: 'otherEvent'
};

const EstimateList: React.FC<EstimateListProps> = ({ onSelectionChange }) => {
  const { translate } = useLanguage();
  
  // Initialize state with internal keys
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(
    Object.values(EVENT_TYPES).reduce((acc, key) => {
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
        {translate('eventTypeLabel')}
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