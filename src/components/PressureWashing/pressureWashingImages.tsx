import { Grid, Card, CardContent, List, ListItem, ListItemText } from "@mui/material";
import { PressureWashing1, PressureWashing2 } from "../../config/images";
import { useLanguage } from "../../context/LanguageContext";

// Internal constant keys for items
const PRESSURE_WASHING_ITEMS = {
  PATIOS: 'patios',
  DRIVEWAYS: 'driveways',
  FENCING: 'fencing',
  WALKWAYS: 'walkways',
  PARKING_GARAGES: 'parkingGarages',
  DECKS: 'decks',
  PAVERS: 'pavers',
  PLAYGROUNDS: 'playgrounds',
  BUILDING_EXTERIOR: 'buildingExterior',
  OUTDOOR_FURNITURE: 'outdoorFurniture'
};

const ImageComponent = () => {
  const { translate } = useLanguage();

  // Data for the cards using translation keys
  const cleaningPackages = [
    {
      icon: PressureWashing1, 
      items: [
        PRESSURE_WASHING_ITEMS.PATIOS,
        PRESSURE_WASHING_ITEMS.DRIVEWAYS,
        PRESSURE_WASHING_ITEMS.FENCING,
        PRESSURE_WASHING_ITEMS.WALKWAYS,
        PRESSURE_WASHING_ITEMS.PARKING_GARAGES
      ]
    },
    {
      icon: PressureWashing2, 
      items: [
        PRESSURE_WASHING_ITEMS.DECKS,
        PRESSURE_WASHING_ITEMS.PAVERS,
        PRESSURE_WASHING_ITEMS.PLAYGROUNDS,
        PRESSURE_WASHING_ITEMS.BUILDING_EXTERIOR,
        PRESSURE_WASHING_ITEMS.OUTDOOR_FURNITURE
      ]
    }  
  ];

  return (
    <div className="rounded-lg shadow-lg p-4 sm:p-6">  
      <Grid container spacing={3}>
        {cleaningPackages.map((pkg, index) => (
          <Grid item xs={12} sm={6} key={index}>
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
                <List dense>
                  {pkg.items.map((itemKey, idx) => (
                    <ListItem key={idx} disableGutters>
                      <ListItemText
                        primary={translate(itemKey)}
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: "0.95rem",
                            paddingLeft: "20px",
                            paddingY: "5px",
                            borderColor: "gray",
                            borderBottomWidth: "1px",
                            marginX: "10%",
                            paddingBottom: "2%",
                            position: "relative",
                            color: "white",
                            "&::before": {
                              content: '""',
                              position: "absolute",
                              left: 0,
                              top: "50%",
                              transform: "translateY(-50%)",
                              width: "6px",
                              height: "6px",
                              backgroundColor: "primary.main",
                              borderRadius: "50%",
                            },
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