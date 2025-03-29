import { Grid, Card, CardContent, List, ListItem, ListItemText, Typography } from "@mui/material";
import {
    SpecialEventCleaning1, SpecialEventCleaning2, SpecialEventCleaning3, 
    SpecialEventCleaning4, SpecialEventCleaning5, SpecialEventCleaning6
} from "../../config/images";
import { useLanguage } from "../../context/LanguageContext";

// Internal constant keys for timeline items
const EVENT_TIMELINE_KEYS = {
    WEEKS_BEFORE: 'weeksBeforeEvent',
    DAYS_BEFORE: 'daysBeforeEvent',
    DAY_OF: 'dayOfEvent',
    BEFORE_GUESTS: 'beforeGuestsArrive',
    DURING_EVENT: 'duringEvent',
    AFTER_EVENT: 'afterEvent'
};

// Internal constant keys for checklist items
const CHECKLIST_ITEMS = {
    SCOPE_DEFINITION: 'scopeDefinition',
    SCHEDULE_CLEANING: 'scheduleCleaning',
    SUPPLIES_LIST: 'suppliesList',
    GUEST_REQUESTS: 'guestRequests',
    DECLUTTER: 'declutter',
    DUST_SURFACES: 'eventdustSurfaces',
    VACUUM_CARPETS: 'vacuumCarpets',
    MOP_FLOORS: 'mopFloors',
    CLEAN_WINDOWS: 'eventcleanWindows',
    WIPE_FURNITURE: 'wipeFurniture',
    SANITIZE_SURFACES: 'sanitizeSurfaces',
    CHECK_LIGHTS: 'checkLights',
    EMPTY_TRASH: 'eventemptyTrash',
    SETUP_RECYCLING: 'setupRecycling',
    FINAL_CHECK: 'finalCheck',
    RESTROOM_CHECK: 'restroomCheck',
    SIGNAGE_CHECK: 'signageCheck',
    COAT_AREA: 'coatArea',
    SPOT_CHECK: 'spotCheck',
    WALKTHROUGH: 'walkthrough',
    TOUCH_UP: 'touchUp',
    VENTILATION: 'ventilation',
    SCENT: 'scent',
    STORE_SUPPLIES: 'storeSupplies',
    MONITOR_TRASH: 'monitorTrash',
    CLEAN_SPILLS: 'cleanSpills',
    RESTOCK: 'restock',
    AIRFLOW: 'airflow',
    SPOT_SUPPLIES: 'spotSupplies',
    POST_CLEANING: 'postCleaning',
    STORE_EQUIPMENT: 'storeEquipment',
    DISPOSE_TRASH: 'disposeTrash',
    DAMAGE_CHECK: 'damageCheck',
    EVALUATE: 'evaluate'
};

const ImageComponent = () => {
    const { translate } = useLanguage();

    // Data for the cards using translation keys
    const cleaningPackages = [
        {
            icon: SpecialEventCleaning1,
            titleKey: EVENT_TIMELINE_KEYS.WEEKS_BEFORE,
            items: [
                CHECKLIST_ITEMS.SCOPE_DEFINITION,
                CHECKLIST_ITEMS.SCHEDULE_CLEANING,
                CHECKLIST_ITEMS.SUPPLIES_LIST,
                CHECKLIST_ITEMS.GUEST_REQUESTS
            ]
        },
        {
            icon: SpecialEventCleaning2,
            titleKey: EVENT_TIMELINE_KEYS.DAYS_BEFORE,
            items: [
                CHECKLIST_ITEMS.DECLUTTER,
                CHECKLIST_ITEMS.DUST_SURFACES,
                CHECKLIST_ITEMS.VACUUM_CARPETS,
                CHECKLIST_ITEMS.MOP_FLOORS,
                CHECKLIST_ITEMS.CLEAN_WINDOWS,
                CHECKLIST_ITEMS.WIPE_FURNITURE,
                CHECKLIST_ITEMS.SANITIZE_SURFACES,
                CHECKLIST_ITEMS.CHECK_LIGHTS,
                CHECKLIST_ITEMS.EMPTY_TRASH,
                CHECKLIST_ITEMS.SETUP_RECYCLING
            ]
        },
        {
            icon: SpecialEventCleaning3,
            titleKey: EVENT_TIMELINE_KEYS.DAY_OF,
            items: [
                CHECKLIST_ITEMS.FINAL_CHECK,
                CHECKLIST_ITEMS.RESTROOM_CHECK,
                CHECKLIST_ITEMS.SCENT,
                CHECKLIST_ITEMS.SIGNAGE_CHECK,
                CHECKLIST_ITEMS.COAT_AREA,
                CHECKLIST_ITEMS.SPOT_CHECK
            ]
        },
        {
            icon: SpecialEventCleaning4,
            titleKey: EVENT_TIMELINE_KEYS.BEFORE_GUESTS,
            items: [
                CHECKLIST_ITEMS.WALKTHROUGH,
                CHECKLIST_ITEMS.TOUCH_UP,
                CHECKLIST_ITEMS.RESTROOM_CHECK,
                CHECKLIST_ITEMS.VENTILATION,
                CHECKLIST_ITEMS.SCENT,
                CHECKLIST_ITEMS.STORE_SUPPLIES
            ]
        },
        {
            icon: SpecialEventCleaning6,
            titleKey: EVENT_TIMELINE_KEYS.DURING_EVENT,
            items: [
                CHECKLIST_ITEMS.MONITOR_TRASH,
                CHECKLIST_ITEMS.CLEAN_SPILLS,
                CHECKLIST_ITEMS.RESTOCK,
                CHECKLIST_ITEMS.AIRFLOW,
                CHECKLIST_ITEMS.SPOT_SUPPLIES
            ]
        },
        {
            icon: SpecialEventCleaning5,
            titleKey: EVENT_TIMELINE_KEYS.AFTER_EVENT,
            items: [
                CHECKLIST_ITEMS.POST_CLEANING,
                CHECKLIST_ITEMS.STORE_EQUIPMENT,
                CHECKLIST_ITEMS.DISPOSE_TRASH,
                CHECKLIST_ITEMS.DAMAGE_CHECK,
                CHECKLIST_ITEMS.EVALUATE
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
                            <CardContent sx={{ flexGrow: 1, pt: 2, mt: 1, color: "white" }}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                    {translate(pkg.titleKey)}
                                </Typography>
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