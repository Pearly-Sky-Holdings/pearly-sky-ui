import { Card, CardContent, CardMedia, Typography, Box, Link } from "@mui/material";
import { useLanguage } from "../../context/LanguageContext";

interface CleaningServiceCardProps {
  title: string;
  image: string;
  link: string;
}

const CleaningServiceCard = ({ title, image, link }: CleaningServiceCardProps) => {
const { translate } = useLanguage();


  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease-in-out',
        boxShadow: '0px 4px 10px rgba(37, 150, 190, 0.5)',
        borderRadius: 4,
        overflow: 'hidden',
        '&:hover': {
          transform: 'scale(1.03)',
          '& .MuiCardMedia-root': {
            transform: 'scale(1.05)',
          },
        },
      }}
    >
      <Box sx={{ width: '100%', height: 200, overflow: 'hidden', position: 'relative' }}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease-in-out',
          }}
        />
      </Box>

      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h6"
          component="h3"
          align="center"
          sx={{ mb: 1, fontWeight: 600, fontSize: '1.1rem' }}
        >
          {title}
        </Typography>

        <Box sx={{ marginTop: 'auto' }}>
          <Link
            href={link}
            underline="hover"
            sx={{
              display: 'inline-block',
              color: 'primary.main',
              borderRadius: 2,
              fontSize: '0.875rem',
              fontWeight: 500,
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: 'white',
                padding:"5px",
                textDecoration: 'none',
              },
            }}
          >
             {translate('readMore')}
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CleaningServiceCard;
