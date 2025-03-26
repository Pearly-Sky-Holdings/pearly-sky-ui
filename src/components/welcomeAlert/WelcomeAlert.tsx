import { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Switch, 
  Button, 
  IconButton,
  Paper,
  useMediaQuery,
  useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CookiesPolicy from "../../pages/cookiesPolicy/cookiesPolicy.tsx";
import TermsAndConditionsPage from "../../pages/termsAndConditions/termsAndConditions.tsx";

const CookieConsentAlert = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [showAlert, setShowAlert] = useState(false);
  const [openPolicy, setOpenPolicy] = useState<'cookie' | 'terms' | null>(null);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    functional: false,
    performance: false,
    advertising: false,
  });

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookieConsent');
    if (!hasAcceptedCookies) {
      setShowAlert(true);
    }
  }, []);

  const handleToggle = (type: keyof typeof cookiePreferences) => {
    if (type === 'necessary') return;
    setCookiePreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowAlert(false);
  };

  const handleDeny = () => {
    localStorage.setItem('cookieConsent', 'denied');
    setShowAlert(false);
  };

  const handleSaveSelection = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookiePreferences));
    setShowAlert(false);
  };

  const handlePolicyOpen = (type: 'cookie' | 'terms') => {
    setOpenPolicy(type);
  };

  const handlePolicyClose = () => {
    setOpenPolicy(null);
  };

  const handleAdjust = () => {
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
        alignItems: isSmallScreen ? 'flex-start' : 'center',
        justifyContent: 'center',
        zIndex: 10000,
        p: 2,
        overflow: 'auto',
        pt: isSmallScreen ? 4 : 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          gap: 2,
          width: '100%',
          maxWidth: isSmallScreen ? '100%' : '1200px',
          justifyContent: 'center',
        }}
      >
        {/* Main Cookie Consent Box */}
        <Paper
          sx={{
            bgcolor: 'white',
            p: { xs: 2, sm: 4 },
            borderRadius: 2,
            width: '100%',
            maxWidth: isSmallScreen ? '100%' : '500px',
            boxShadow: 3,
            maxHeight: isSmallScreen ? 'auto' : '90vh',
            overflow: 'auto',
          }}
        >
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, flexWrap: 'wrap' }}>
            <Typography variant="body2" sx={{ color: '#002F6D', mb: { xs: 1, sm: 0 } }}>English</Typography>
            <Box>
              <Typography
                variant="body2"
                component="button"
                onClick={() => handlePolicyOpen('cookie')}
                sx={{ 
                  color: '#F5A623', 
                  textDecoration: 'none',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  '&:hover': { textDecoration: 'underline' },
                  fontWeight: openPolicy === 'cookie' ? 'bold' : 'normal'
                }}
              >
                Cookies Policy
              </Typography>
              {' | '}
              <Typography
                variant="body2"
                component="button"
                onClick={() => handlePolicyOpen('terms')}
                sx={{ 
                  color: '#F5A623', 
                  textDecoration: 'none',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  '&:hover': { textDecoration: 'underline' },
                  fontWeight: openPolicy === 'terms' ? 'bold' : 'normal'
                }}
              >
                Terms and Conditions
              </Typography>
            </Box>
          </Box>

          {/* Title */}
          <Typography variant="h6" fontWeight="bold" color="#002F6D" mb={2} sx={{ textAlign: 'start' }}>
            We Use Cookies
          </Typography>

          {/* Description */}
          <Typography variant="body2" mb={3} sx={{ color: '#002F6D', textAlign: 'start' }}>
            At Pearly Sky Cleaning Services Pvt Ltd., we use cookies to improve site functionality, 
            analyse traffic, and personalize content. You can choose to accept all cookies, reject non-essential 
            cookies, or manage your preferences. For more details, see our{' '}
            <Typography
              component="button"
              onClick={() => handlePolicyOpen('cookie')}
              sx={{ 
                color: '#002F6D', 
                textDecoration: 'underline',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                '&:hover': { textDecoration: 'none' }
              }}
            >
              Cookies Policy
            </Typography>.
          </Typography>

          {/* Toggle Switches */}
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
            gap: 2, 
            mb: 3 
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Switch
                checked={cookiePreferences.necessary}
                disabled
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
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
            gap: 2 
          }}>
            <Button
              variant="contained"
              onClick={handleSaveSelection}
              sx={{ bgcolor: '#002F6D', '&:hover': { bgcolor: '#125ea6' } }}
              fullWidth
            >
              Save Selection
            </Button>
            <Button
              variant="contained"
              onClick={handleAccept}
              sx={{ bgcolor: '#002F6D', '&:hover': { bgcolor: '#125ea6' } }}
              fullWidth
            >
              Accept
            </Button>
            <Button
              variant="contained"
              onClick={handleDeny}
              sx={{ bgcolor: '#002F6D', '&:hover': { bgcolor: '#125ea6' } }}
              fullWidth
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
        </Paper>

        {/* Policy Panel */}
        {openPolicy && (
          <Paper
            sx={{
              bgcolor: 'white',
              p: { xs: 2, sm: 4 },
              borderRadius: 2,
              width: '100%',
              maxWidth: isSmallScreen ? '100%' : '600px',
              boxShadow: 3,
              maxHeight: isSmallScreen ? '60vh' : '90vh',
              overflow: 'auto',
              position: 'relative',
            }}
          >
            <IconButton
              onClick={handlePolicyClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: '#002F6D',
              }}
            >
              <CloseIcon />
            </IconButton>
            
            <Box sx={{ p: 1 }}>
              {openPolicy === 'cookie' ? (
                <CookiesPolicy />
              ) : (
                <TermsAndConditionsPage />
              )}
            </Box>
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default CookieConsentAlert;