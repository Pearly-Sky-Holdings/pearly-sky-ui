import { Grid, Card, CardContent, List, ListItem, ListItemText } from "@mui/material";
import {
    PressureWashing1,
    PressureWashing2,
  
} from "../../config/images";

const ImageComponent = () => {
  // Data for the cards
  const cleaningPackages = [
    {
      icon: PressureWashing1, 
      items: 
      ["Patios",
       "Drive Ways", 
       "Fencing",
       "Walkways",
       "Parking Garages"
    ],
    },
    {
      icon: PressureWashing2, 
      items: 
      ["Decks", 
        "Pavers", 
        "Playgrounds",
        "Building Exterior",
        "Outdoor furniture"
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
                  transform: "scale(1.05)", // Zoom effect
                  boxShadow: "0px 4px 20px rgba(0,0,0,0.5)", // Enhanced shadow on hover
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