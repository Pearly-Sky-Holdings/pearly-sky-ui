import { useState } from 'react';
import { 
  Box,
  IconButton,
  Container,
  Stack,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  ArrowBack as ArrowBackIcon, 
  ArrowForward as ArrowForwardIcon 
} from '@mui/icons-material';
import { OurShowcase1, OurShowcase2, OurShowcase3, OurShowcase4, OurShowcase5 ,OurShowcase6,OurShowcase7,OurShowcase8} from "../../config/images";

const showcaseImages = [
  OurShowcase1,
  OurShowcase2,
  OurShowcase3,
  OurShowcase4,
  OurShowcase5,
  OurShowcase6,
  OurShowcase7,
  OurShowcase8
];

const WorkShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handlePrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? showcaseImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === showcaseImages.length - 1 ? 0 : prev + 1
    );
  };

  const getVisibleImages = () => {
    if (isMobile) {
      return [showcaseImages[currentIndex]];
    }

    const images = [...showcaseImages];
    const visibleImages = [];
    
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    visibleImages.push(images[prevIndex]);
    
    visibleImages.push(images[currentIndex]);
    
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    visibleImages.push(images[nextIndex]);
    
    return visibleImages;
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ position: 'relative', width: '100%' }}>
        <Stack 
          direction="row" 
          spacing={isMobile ? 0 : 3} 
          alignItems="center" 
          justifyContent="center"
          sx={{ position: 'relative' }}
        >
          {getVisibleImages().map((image, index) => (
            <Box
              key={index}
              sx={{
                width: (() => {
                  if (isMobile) return '300px';
                  return index === 1 ? '350px' : '280px';
                })(),
                height: (() => {
                  if (isMobile) return '300px';
                  return index === 1 ? '350px' : '280px';
                })(),
                transition: 'all 0.4s ease',
                transform: (() => {
                  if (isMobile) return 'none';
                  if (index === 1) {
                    return 'scale(1.1) perspective(1000px) rotateY(0deg) translateZ(50px)';
                  } else if (index === 0) {
                    return 'scale(0.85) perspective(1000px) rotateY(15deg) translateZ(0)';
                  } else {
                    return 'scale(0.85) perspective(1000px) rotateY(-15deg) translateZ(0)';
                  }
                })(),
                opacity:(() => {
                  if (isMobile) return 1;
                  return index === 1 ? 1 : 0.6;
                })(),
                position: 'relative',
                display: isMobile && index !== 0 ? 'none' : 'block',
                maxWidth: isMobile ? '320px' : 'none',
                margin: isMobile ? '0 auto' : 'none',
                '&:hover': {
                  cursor: 'pointer',
                  transform: (() => {
                    if (isMobile) return 'none';
                    if (index === 1) {
                      return 'scale(1.1) perspective(1000px) rotateY(0deg) translateZ(50px)';
                    } else if (index === 0) {
                      return 'scale(0.85) perspective(1000px) rotateY(15deg) translateZ(0)';
                    } else {
                      return 'scale(0.85) perspective(1000px) rotateY(-15deg) translateZ(0)';
                    }
                  })(),
                  opacity: isMobile ? 1 : (index === 1 ? 1 : 0.75)
                }
              }}
            >
              <Box
                component="img"
                src={image}
                alt={`Showcase ${index}`}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: index === 1 
                    ? '0 20px 40px rgba(0,0,0,0.3), 0 15px 12px rgba(0,0,0,0.22)'
                    : '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
                }}
              />
            </Box>
          ))}
        </Stack>

        <IconButton
          onClick={handlePrevious}
          sx={{
            position: 'absolute',
            left: isMobile ? 0 : '5%',
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: 3,
            '&:hover': {
              bgcolor: '#0D90C8',
            }
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: isMobile ? 0 : '5%',
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: 3,
            '&:hover': {
              bgcolor: '#0D90C8',
            }
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>

      <Stack 
        direction="row" 
        spacing={1} 
        justifyContent="center" 
        sx={{ mt: 4 }}
      >
        {showcaseImages.map((image, index) => (
          <Box
            key={image}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              bgcolor: currentIndex === index ? 'primary.main' : 'grey.300',
              cursor: 'pointer',
              transition: 'all 0.3s',
              transform: currentIndex === index ? 'scale(1.2)' : 'scale(1)',
              '&:hover': {
                bgcolor: currentIndex === index ? 'primary.dark' : 'grey.700',
                transform: 'scale(1.3)',
              }
            }}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default WorkShowcase;