import { Grid, Card, CardContent, List, ListItem, ListItemText } from "@mui/material";
import {
    SpecialEventCleaning1,SpecialEventCleaning2,SpecialEventCleaning3,SpecialEventCleaning4,SpecialEventCleaning5,
    SpecialEventCleaning6
  
} from "../../config/images";

const ImageComponent = () => {
  // Data for the cards
  const cleaningPackages = [
    {
      icon: SpecialEventCleaning1,
      title:"Weeks Before the Event", 
      items: 
      [
        "Define the scope of cleaning needed based on the event type and size.",
        "Schedule a professional cleaning service if required. (Note: Talk with your LACOSTA crew manager as we already know your space and standards to better meet your event needs)",
        "Make a list of cleaning supplies and equipment you’ll need.",
        "Some special cleaning tasks may be requested by your guests so it’s a good idea to check with their group.",
        ],
    },
    {
      icon: SpecialEventCleaning2, 
      title:"Days Before the Event",
      items: 
      [
        "Declutter and organize the space.",
        "Dust all surfaces, including shelves, decorations, and light fixtures.",
        "Vacuum carpets and rugs thoroughly.",
        "Sweep and mop hard floors.",
        "Clean windows and glass surfaces.",
        "Wipe down all seating and tables.",
        "Wipe down and sanitize frequently touched surfaces (doorknobs, light switches, handrails).",
        "Check and replace light bulbs as needed.",
        "Empty trash cans and replace liners.",
        "Set up recycle bins next to the trash cans.",
        ],
    },
    {
        icon: SpecialEventCleaning3,
        title:"The Day of the Event" ,
        items: 
        [
            "Check trash cans and high-traffic areas one more time.",
            "Ensure restrooms are thoroughly cleaned and well-stocked with supplies (toilet paper, soap, hand towels).",
            "Place air fresheners or potpourri in the restroom for a pleasant fragrance.",
            "Check that all signage and decorations are in place and clean.",
            "Set up designated areas for coats, bags, and personal items.",
            "Spot-check for any last-minute cleaning needs."      ],
      },
      {
        icon: SpecialEventCleaning4, 
        title:"Just Before Guests Arrive",
        items: 
        [
            "Do a final walkthrough to ensure everything is in order.",
            "Touch up any visible smudges or marks on surfaces.",
            "Check restroom supplies and cleanliness.",
            "Turn on any air purifiers or ventilation systems.",
            "Light candles or use diffusers for a subtle pleasant scent in main guest areas (if desired).",
            "Ensure all cleaning supplies and equipment are stored out of sight.",

      ],
      },  
      {
        icon: SpecialEventCleaning6, 
        title:"During the Event",
        items: 
        [
            "Assign someone to monitor and empty trash cans as needed.",
            "Quickly clean up spills and messes as they occur.",
            "Restock restroom supplies if necessary.",
            "Ensure good airflow and ventilation in the space.",
            "Keep spot cleaning supplies handy (still hidden) for guest accidents and spills."

      ],
      },
      {
        icon: SpecialEventCleaning5, 
        title:"After the Event",
        items: 
        [
            "Perform a thorough post-event cleaning, including vacuuming, mopping, and surface wiping.",
            "Clean and store any rental equipment or supplies used for the event.",
            "Dispose of trash and recycling properly.",
            "Check for any damage or excessive wear and tear due to the event.",
            "Evaluate the cleaning process for any improvements needed in the future"   ],
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
              <CardContent sx={{ flexGrow: 1, pt: 2, mt: 1,color:"white" }}>
                {pkg.title}
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