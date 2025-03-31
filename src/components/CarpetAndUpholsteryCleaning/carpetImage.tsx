import { Grid, Card, CardContent, List, ListItem, ListItemText, Typography } from "@mui/material";
import {
    carpetimg1,
    carpetimg2,
    carpetimg3,
    carpetimg4,
    carpetimg5,
    carpetimg6
 } from "../../config/images";
import { useLanguage } from "../../context/LanguageContext";

const ImageComponent = () => {
  const { translate } = useLanguage();

  // Data for the cards
  const cleaningPackages = [
    {
      icon: carpetimg1, 
      title: translate('carpetCleaningTitle'),
      items: [translate('carpetCleaningDescription')],
    },
    {
      icon: carpetimg2, 
      title: translate('rugCleaningTitle'),
      items: [translate('rugCleaningDescription')],
    },
    {
      icon: carpetimg3, 
      title: translate('upholsteryCleaningTitle'),
      items: [translate('upholsteryCleaningDescription')],
    },
    {
        icon: carpetimg4, 
        title: translate('sofaCleaningTitle'),
        items: [translate('sofaCleaningDescription')],
      },
      {
        icon: carpetimg5, 
        title: translate('mattressCleaningTitle'),
        items: [translate('mattressCleaningDescription')],
      },
      {
        icon: carpetimg6, 
        title: translate('curtainCleaningTitle'),
        items: [translate('curtainCleaningDescription')],
      },
  ];

  return (
    <div className="rounded-lg shadow-lg p-4 sm:p-6">
      <Grid container spacing={3}>
        {cleaningPackages.map((pkg, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              elevation={3}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                position: "relative",
                backgroundImage: `url(${pkg.icon})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                overflow: "visible",
                "&:hover": {
                  transform: "scale(1.05)", 
                  boxShadow: "0px 4px 20px rgba(0,0,0,0.5)", 
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, pt: 2, mt: 1 }}>
                <Typography variant="h6" sx={{ color: "white", textAlign: "center", mb: 2 }}>
                  {pkg.title}
                </Typography>
                <List dense>
                  {pkg.items.map((item, idx) => (
                    <ListItem key={idx} disableGutters>
                      <ListItemText
                        primary={item}
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: "0.95rem",
                            paddingLeft: "20px",
                            paddingY: "5px",
                            marginX: "10%",
                            paddingBottom: "2%",
                            position: "relative",
                            color: "white",
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ImageComponent;