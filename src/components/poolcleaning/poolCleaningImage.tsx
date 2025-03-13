import { Grid, Card, CardContent, List, ListItem, ListItemText } from "@mui/material";
import {
    PoolCleaning1,PoolCleaning2  
} from "../../config/images";

const ImageComponent = () => {
  // Data for the cards
  const cleaningPackages = [
    {
      icon: PoolCleaning1,      
      items: 
      [
        "Cleaning a Pool",
        "Check water level",
        "Check water chemistry",
        "Use a test kit or take a sample to the local pool store.",
        "Use a surface skimmer or leaf net to collect all floating debris",
        "Clean deck around the pool or spa of all leaves and debris to keep them from blowing into the pool.",
        "Brush the walls first and then brush the floor staring at the shallow end and working toward the bottom drain."
         ],
    },
    {
      icon: PoolCleaning2,       
      items: 
      [
        "Clean the tile around the pool edge, using only pool tile soap.",
        "Be sure that all equipment is operating correctly and there are no visible leaks.",
        "Clean the skimmer basket and the pump strainer basket if needed.",
        "Check the pressure on the filter while the pump is running",
        "Vacuum the pool using the correct vac-head for your pool surface.",
        "Brush the entire pool using the nylon brush attached to the tele-pole.",
        "Be sure to put all the pool cleaning equipment and chemicals away safely.",
        ],
    },
    
  ];

  return (
    <div
      className="rounded-lg shadow-lg p-4 sm:p-6 "     
    >  
      <Grid container spacing={3}>
        {cleaningPackages.map((pkg, index) => (
          <Grid item xs={12} sm={6}  key={index}>
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
                  transform: "scale(1.02)", // Zoom effect
                  boxShadow: "0px 4px 20px rgba(0,0,0,0.5)", // Enhanced shadow on hover
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, pt: 1, mt: 1,color:"white" }}>                
                <List dense>
                  {pkg.items.map((item, idx) => (
                    <ListItem key={idx} disableGutters>
                      <ListItemText
                        primary={item}
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