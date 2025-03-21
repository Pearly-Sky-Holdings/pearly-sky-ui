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
        "Check Water Level",
        "Check Water Chemistry",
        "Remove Floating Debris",
       " Clean the Pool Deck",
       " Clean Pool Tiles ",
       " Brush the Pool Walls and Floor"

],
    },
    {
      icon: PoolCleaning2,       
      items: 
      [
        "Inspect Pool Equipment",
        "Check Filter Pressure",
       " Vacuum the Pool",
       " Brush the Entire Pool",
        "Clean Skimmer and Pump Baskets",
        "Store Equipment and Chemicals Safely"
        
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
                  transform: "scale(1.02)", 
                  boxShadow: "0px 4px 20px rgba(0,0,0,0.5)",
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