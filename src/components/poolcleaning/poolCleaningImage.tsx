import { Grid, Card, CardContent, List, ListItem, ListItemText } from "@mui/material";
import { PoolCleaning1, PoolCleaning2 } from "../../config/images";
import { useLanguage } from "../../context/LanguageContext";

// Internal constant keys for pool cleaning items
const POOL_CLEANING_ITEMS = {
  CHECK_WATER_LEVEL: 'checkWaterLevel',
  CHECK_WATER_CHEMISTRY: 'checkWaterChemistry',
  REMOVE_DEBRIS: 'removeFloatingDebris',
  CLEAN_DECK: 'cleanPoolDeck',
  CLEAN_TILES: 'cleanPoolTiles',
  BRUSH_WALLS_FLOOR: 'brushPoolWallsAndFloor',
  INSPECT_EQUIPMENT: 'inspectPoolEquipment',
  CHECK_FILTER: 'checkFilterPressure',
  VACUUM_POOL: 'vacuumPool',
  BRUSH_ENTIRE_POOL: 'brushEntirePool',
  CLEAN_SKIMMER: 'cleanSkimmerAndPumpBaskets',
  STORE_EQUIPMENT: 'storeEquipmentSafely'
};

const ImageComponent = () => {
  const { translate } = useLanguage();

  // Data for the cards using translation keys
  const cleaningPackages = [
    {
      icon: PoolCleaning1,      
      items: [
        POOL_CLEANING_ITEMS.CHECK_WATER_LEVEL,
        POOL_CLEANING_ITEMS.CHECK_WATER_CHEMISTRY,
        POOL_CLEANING_ITEMS.REMOVE_DEBRIS,
        POOL_CLEANING_ITEMS.CLEAN_DECK,
        POOL_CLEANING_ITEMS.CLEAN_TILES,
        POOL_CLEANING_ITEMS.BRUSH_WALLS_FLOOR
      ]
    },
    {
      icon: PoolCleaning2,       
      items: [
        POOL_CLEANING_ITEMS.INSPECT_EQUIPMENT,
        POOL_CLEANING_ITEMS.CHECK_FILTER,
        POOL_CLEANING_ITEMS.VACUUM_POOL,
        POOL_CLEANING_ITEMS.BRUSH_ENTIRE_POOL,
        POOL_CLEANING_ITEMS.CLEAN_SKIMMER,
        POOL_CLEANING_ITEMS.STORE_EQUIPMENT
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
                  transform: "scale(1.02)", 
                  boxShadow: "0px 4px 20px rgba(0,0,0,0.5)",
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, pt: 1, mt: 1, color: "white" }}>                
                <List dense>
                  {pkg.items.map((itemKey, idx) => (
                    <ListItem key={idx} disableGutters>
                      <ListItemText
                        primary={translate(itemKey)}
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: "0.95rem",
                            paddingLeft: "20px",
                            paddingY: "1px",
                            borderColor: "gray",                            
                            marginX: "1%",
                            paddingBottom: "1%",
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
                              backgroundColor: "white",
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