import { Grid, Card, CardContent, List, ListItem, ListItemText } from "@mui/material";
import {
  postConstructorImage1,
  postConstructorImage2,
  postConstructorImage3,
  postConstructorImage4,
  postConstructorImage5,
  postConstructorImage6,
  
} from "../../config/images";

const ImageComponent = () => {
  // Data for the cards
  const cleaningPackages = [
    {
      icon: postConstructorImage1, // Replace with your image URL
      items: 
      ["Mop hard floors",
       "Cleaning bathrooms", 
       "Vacuum hard floor surfaces",
       "Clean glass partitions and doors"
    ],
    },
    {
      icon: postConstructorImage2, // Replace with your image URL
      items: 
      ["Dust and clean furniture", 
        "Trash bags and liners", 
        "Vacuum carpet",
        "Emptying the bin"
    ],
    },
    {
      icon: postConstructorImage3, // Replace with your image URL
      items: 
      ["Remove cobwebs", 
        "Disinfecting", 
        "Dusting high surfaces",
        "Glass Cleaner"
    ],
    },
    {
        icon: postConstructorImage4, // Replace with your image URL
        items:
         ["Vacuum and clean upholstery", 
            "Baseboards dusted", 
            "Cleaning windows and blinds",
            "Deep carpet cleaning"
        ],
      },
      {
        icon: postConstructorImage5, // Replace with your image URL
        items: ["Disinfect door handles", 
            "Dust computers, screens,keyboards & seats", 
            "Vacuuming",
            "Wipe and disinfect all partitions"
        ],
      },
      {
        icon: postConstructorImage6, // Replace with your image URL
        items: 
        ["Air vents dusted", 
            "Clean dishware and utensils", 
            "Dust the light fixtures",
        "Cleaning all office equipment"],
      },
  ];

  return (
    <div
      className="rounded-lg shadow-lg p-4 sm:p-6 "
     
    >    

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