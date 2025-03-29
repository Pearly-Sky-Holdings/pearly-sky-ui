import { Grid, Card, CardContent, List, ListItem, ListItemText } from "@mui/material";
import {
  postConstructorImage1,
  postConstructorImage2,
  postConstructorImage3,
  postConstructorImage4,
  postConstructorImage5,
  postConstructorImage6,
} from "../../config/images";
import { useLanguage } from "../../context/LanguageContext";

const ImageComponent = () => {
  const { translate } = useLanguage();
  
  // Data for the cards
  const cleaningPackages = [
    {
      icon: postConstructorImage1,
      items: [
        translate('mopHardFloors'),
        translate('cleaningBathrooms'), 
        translate('vacuumHardFloor'),
        translate('cleanGlassPartitions')
      ],
    },
    {
      icon: postConstructorImage2,
      items: [
        translate('dustCleanFurniture'), 
        translate('trashBagsLiners'), 
        translate('vacuumCarpet'),
        translate('emptyBins')
      ],
    },
    {
      icon: postConstructorImage3,
      items: [
        translate('removeCobwebs'), 
        translate('disinfecting'), 
        translate('dustingHighSurfaces'),
        translate('glassCleaner')
      ],
    },
    {
      icon: postConstructorImage4,
      items: [
        translate('vacuumCleanUpholstery'), 
        translate('baseboardsDusted'), 
        translate('cleanWindowsBlinds'),
        translate('deepCarpetCleaning')
      ],
    },
    {
      icon: postConstructorImage5,
      items: [
        translate('disinfectDoorHandles'), 
        translate('dustElectronics'), 
        translate('vacuuming'),
        translate('wipeDisinfectPartitions')
      ],
    },
    {
      icon: postConstructorImage6,
      items: [
        translate('airVentsDusted'), 
        translate('cleanDishware'), 
        translate('dustLightFixtures'),
        translate('cleanOfficeEquipment')
      ],
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