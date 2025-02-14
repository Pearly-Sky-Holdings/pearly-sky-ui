import { Box, Typography, Grid, Card, CardMedia, Container } from '@mui/material';
import {
  galleryImage1,
  galleryImage2,
  galleryImage3,
  galleryImage4,
  galleryImage5,
} from '../../config/images';

const progressData = [
  { label: 'Assessment and Planning', value: 100 },
  { label: 'Execution', value: 95 },
  { label: 'Project Completion', value: 95 },
];

const images = [galleryImage1, galleryImage2, galleryImage3, galleryImage4, galleryImage5];

const Gallery = () => {
  return (
    <Container>
      {/* Progress Section */}
      <Box display="flex" justifyContent="center" textAlign="center">
        <Box
          display="flex"
          justifyContent="space-around"
          mt={6}
          mb={8}
          bgcolor="white"
          textAlign="center"
          pt={1}
          pb={8}
          borderRadius={50}
          width="70%"
          height={35}
          boxShadow="2px 2px 5px rgba(198, 131, 131, 0.5)"
        >
          {progressData.map((item) => (
            <Box key={item.label} textAlign="center">
              <Typography variant="h6" color="#008CDA" fontWeight="bold">
                {item.value}%
              </Typography>
              <Typography variant="body2" color="black">
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Gallery Section */}
      <Typography variant="h5" color="#003370" fontWeight="bold" align="center" mb={2}>
        Gallery
      </Typography>

      <Grid container spacing={1} mb={4}>
        {/* Large Image on the Left */}
        <Grid item xs={12} md={5}>
          <Card sx={{ height: '100%', width: '100%' }}>
            <CardMedia
              component="img"
              image={images[0]}
              alt="Gallery image 1"
              sx={{ height: '100%', objectFit: 'cover' }}
            />
          </Card>
        </Grid>

        {/* Smaller Images on the Right */}
        <Grid item xs={12} md={7}>
          <Grid container spacing={1}>
            {/* Vertical Stack for Images 2 and 3 */}
            <Grid item xs={12} md={5}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia
                      component="img"
                      image={images[1]}
                      alt="Gallery image 2"
                      sx={{ height: '200px', objectFit: 'cover' }}
                    />
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia
                      component="img"
                      image={images[2]}
                      alt="Gallery image 3"
                      sx={{ height: '200px', objectFit: 'cover' }}
                    />
                  </Card>
                </Grid>
              </Grid>
            </Grid>

            {/* Horizontal Stack for Images 4 and 5 */}
            <Grid item xs={12} md={7}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Card>
                    <CardMedia
                      component="img"
                      image={images[3]}
                      alt="Gallery image 4"
                      sx={{ height: '405px', objectFit: 'cover' }}
                    />
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card>
                    <CardMedia
                      component="img"
                      image={images[4]}
                      alt="Gallery image 5"
                      sx={{ height: '405px', objectFit: 'cover' }}
                    />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Gallery;