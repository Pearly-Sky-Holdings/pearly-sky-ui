import { Grid, Card, CardContent, List, ListItem, ListItemText, Typography } from "@mui/material";
import {
    carpetimg1,
    carpetimg2,
    carpetimg3,
    carpetimg4,
    carpetimg5,
    carpetimg6
 } from "../../config/images";

const ImageComponent = () => {
  // Data for the cards
  const cleaningPackages = [
    {
      icon: carpetimg1, 
      title: "Carpet Cleaning",
      items: 
      ["Removes dirt, stains, and allergens using steam or dry extraction, restoring freshness and extending carpet lifespan. Regular cleaning enhances indoor air quality."
      ],
    },
    {
      icon: carpetimg2, 
      title: "Rug Cleaning",
      items: 
      ["Gentle hand washing and steam cleaning preserve colors while eliminating dust, pet dander, and odors. This keeps rugs vibrant and hygienic."
      ],
    },
    {
      icon: carpetimg3, 
      title: "Upholstery Cleaning",
      items: 
      ["Deep cleaning lifts stains, allergens, and bacteria, restoring fabric softness and extending furniture life. It also removes trapped odors for a fresher feel."
      ],
    },
    {
        icon: carpetimg4, 
        title: "Sofa Cleaning",
        items:
         ["Steam or dry cleaning removes stains, dust mites, and odors, ensuring a refreshed and sanitized sofa. This helps maintain fabric durability and comfort."
        ],
      },
      {
        icon: carpetimg5, 
        title: "Mattress Clowing",
        items: ["Steam and UV sanitation eliminate allergens, bacteria, and odors, promoting better sleep and hygiene. Regular cleaning prevents respiratory issues."
        ],
      },
      {
        icon: carpetimg6, 
        title: "Curtain Cleaning.",
        items: 
        ["Dry or steam cleaning removes dust and stains, maintaining freshness, air quality, and fabric integrity. This helps prevent allergens and fading."],
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
                  transform: "scale(1.05)", 
                  boxShadow: "0px 4px 20px rgba(0,0,0,0.5)", 
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, pt: 2, mt: 1 }}>
                {/* Display the title */}
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