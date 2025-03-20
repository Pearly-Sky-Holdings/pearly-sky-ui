import { useState, useEffect } from 'react';
import { Box, Typography, Switch, Button } from '@mui/material';

const CookieConsentAlert = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: false, // Always true, as per the UI (non-toggleable)
    functional: false,
    performance: false,
    advertising: false,
  });

  useEffect(() => {
    // Check if the user has already seen the cookie consent popup
    const hasAcceptedCookies = localStorage.getItem('cookieConsent');
    if (!hasAcceptedCookies) {
      setShowAlert(true); // Show the popup for first-time visitors
    }
  }, []);

  const handleToggle = (type: keyof typeof cookiePreferences) => {
    setCookiePreferences((prev) => ({
      ...prev,
      [type]: !prev[type] , // Toggle the value
    }));
  };

  const handleAccept = () => {
    // Save the preference (all cookies accepted)
    localStorage.setItem('cookieConsent', 'accepted');
    setShowAlert(false);
  };

  const handleDeny = () => {
    // Deny non-essential cookies
    localStorage.setItem('cookieConsent', 'denied');
    setShowAlert(false);
  };

  const handleSaveSelection = () => {
    // Save the user's preferences
    localStorage.setItem('cookieConsent', JSON.stringify(cookiePreferences));
    setShowAlert(false);
  };

  const handleAdjust = () => {
    // For now, this could just re-show the popup or navigate elsewhere
    console.log('Adjust preferences clicked');
  };

  if (!showAlert) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        bgcolor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000000,
        paddingTop:10
      }}
    >
      <Box
        sx={{
          bgcolor: 'white',
          p: 4,
          borderRadius: 2,
          maxWidth: 500,
          width: '100%',
          boxShadow: 3,
        }}
      >
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="body2" sx={{ color: '#002F6D' }}>English</Typography>
          <Typography
            variant="body2"
            component="a"
            href="#"
            sx={{ color: '#F5A623', textDecoration: 'none' }}
          >
            Cookies Policy | Terms and Conditions
          </Typography>
        </Box>

        {/* Title */}
        <Typography variant="h6" fontWeight="bold" color="#002F6D" mb={2} sx={{ textAlign: 'start' }}>
          We Use Cookies
        </Typography>

        {/* Description */}
        <Typography variant="body2" mb={3} sx={{color: '#002F6D', textAlign: 'start'}}>
          At Pearly Sky Cleaning Services Pvt Ltd., we use cookies to improve site functionality, analyse traffic, and personalize content. You can choose to accept all cookies, reject non-essential cookies, or manage your preferences. For more details, see our{' '}
          <Typography
            component="a"
            href="#"
            sx={{ color: '#002F6D', textDecoration: 'underline' }}
          >
            Cookies Policy
          </Typography>.
        </Typography>

        {/* Toggle Switches */}
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Switch
              checked={cookiePreferences.necessary}
              onChange={() => handleToggle('necessary')}
            />
            <Typography variant="body2" sx={{ color: '#002F6D' }}>Necessary</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Switch
              checked={cookiePreferences.performance}
              onChange={() => handleToggle('performance')}
            />
            <Typography variant="body2" sx={{ color: '#002F6D' }}>Performance</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Switch
              checked={cookiePreferences.functional}
              onChange={() => handleToggle('functional')}
            />
            <Typography variant="body2" sx={{ color: '#002F6D' }}>Functional</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Switch
              checked={cookiePreferences.advertising}
              onChange={() => handleToggle('advertising')}
            />
            <Typography variant="body2" sx={{ color: '#002F6D' }}>Advertising</Typography>
          </Box>
        </Box>

        {/* Buttons */}
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          <Button
            variant="contained"
            onClick={handleSaveSelection}
            sx={{ bgcolor: '#002F6D', '&:hover': { bgcolor: '#125ea6' } }}
          >
            Save Selection
          </Button>
          <Button
            variant="contained"
            onClick={handleAccept}
            sx={{ bgcolor: '#002F6D', '&:hover': { bgcolor: '#125ea6' } }}
          >
            Accept
          </Button>
          <Button
            variant="contained"
            onClick={handleDeny}
            sx={{ bgcolor: '#002F6D', '&:hover': { bgcolor: '#125ea6' } }}
          >
            Deny
          </Button>
          <Button
            variant="contained"
            onClick={handleAdjust}
            sx={{ bgcolor: '#002F6D', '&:hover': { bgcolor: '#125ea6' } }}
          >
            Adjust
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CookieConsentAlert;