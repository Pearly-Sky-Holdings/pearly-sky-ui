import { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Container, 
  useMediaQuery, 
  useTheme 
} from '@mui/material';

const ANIMATION_DURATION = 2000;
const ANIMATION_STEPS = 60;
const INTERSECTION_THRESHOLD = 0.1;

const PROGRESS_DATA = [
  { label: 'Assessment and Planning', value: 100 },
  { label: 'Execution', value: 95 },
  { label: 'Project Completion', value: 95 }
];

const cardStyles = {
  boxShadow: "0px 4px 10px rgba(37, 150, 190, 0.5)",
  borderRadius: 3,
  backgroundColor: 'white'
};

const desktopBoxStyles = {
  display: "flex",
  justifyContent: "space-around",
  marginBottom: 8,
  backgroundColor: "white",
  textAlign: "center",
  paddingTop: 1,
  paddingBottom: 8,
  borderRadius: 50,
  width: "75%",
  height: 35,
  boxShadow: "0px 4px 10px rgba(37, 150, 190, 0.5)"
};

const Gallery = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const progressRef = useRef(null);
  

  const [currentValues, setCurrentValues] = useState(PROGRESS_DATA.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: INTERSECTION_THRESHOLD }
    );

    const currentRef = progressRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Handle animation
  useEffect(() => {
    if (!isVisible) return;

    const interval = ANIMATION_DURATION / ANIMATION_STEPS;
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      
      if (currentStep <= ANIMATION_STEPS) {
        setCurrentValues(PROGRESS_DATA.map((item) => {
          const progress = (currentStep / ANIMATION_STEPS) * item.value;
          return Math.min(Math.round(progress), item.value);
        }));
      } else {
        clearInterval(timer);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, [isVisible]);

  // Render progress cards for mobile view
  const renderMobileView = () => (
    <Box mb={4}>
      <Grid container spacing={2}>
        {PROGRESS_DATA.map((item, index) => (
          <Grid item xs={12} key={item.label}>
            <Card sx={cardStyles}>
              <CardContent sx={{ textAlign: 'center', py: 2 }}>
                <Typography variant="h6" color="#008CDA" fontWeight="bold" gutterBottom>
                  {currentValues[index]}%
                </Typography>
                <Typography variant="body2" color="black">
                  {item.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  // Render progress boxes for desktop view
  const renderDesktopView = () => (
    <Box display="flex" justifyContent="center" textAlign="center">
      <Box sx={desktopBoxStyles}>
        {PROGRESS_DATA.map((item, index) => (
          <Box key={item.label} textAlign="center">
            <Typography variant="h6" color="#008CDA" fontWeight="bold">
              {currentValues[index]}%
            </Typography>
            <Typography variant="body2" color="black">
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );

  return (
    <Container style={{ marginTop: '5%' }}>
      <div ref={progressRef}>
        {isMobile ? renderMobileView() : renderDesktopView()}
      </div>
    </Container>
  );
};

export default Gallery;