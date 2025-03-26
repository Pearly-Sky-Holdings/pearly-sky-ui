import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ServiceList from "../../components/ServiceCard/ServiceList";
import {
  regularService,
  OneTimeService,
  lastMinuteService,
  DeepService,
  MoveInAndOutService,
  postConstructionService,
  airbnbAndShortService,
  childCareService,
  elderCareService,
  CommercialService,
  SanitizationService,
  CarpetCleaningService,
  MoveInOutTransportService,
  steamService,
  laundryService,
  eventService,
  poolService,
  pressureService
} from "../../config/images";
import { useLanguage } from "../../context/LanguageContext";

// Service Data
const rawServices = [
  {
    id: 1,
    titleKey: "nregularBasicCleaning",
    descriptionKey: "regularBasicCleaningDesc",
    image: regularService,
    link: "/regular-basic-cleaning"
  },
  {
    id: 2,
    titleKey: "noneTimeCleaning",
    descriptionKey: "oneTimeCleaningDesc",
    image: OneTimeService,
    link: "/one-time-cleaning"
  },
  {
    id: 3,
    titleKey: "nlastMinuteCleaning",
    descriptionKey: "lastMinuteCleaningDesc",
    image: lastMinuteService,
    link: "/last-minute-cleaning"
  },
  {
    id: 4,
    titleKey: "ndeepCleaning",
    descriptionKey: "deepCleaningDesc",
    image: DeepService,
    link: "/deep_cleaning"
  },
  {
    id: 5,
    titleKey: "nmoveInOutCleaning",
    descriptionKey: "moveInOutCleaningDesc",
    image: MoveInAndOutService,
    link: "/move_in_out_cleaning"
  },
  {
    id: 6,
    titleKey: "npostConstructionCleaning",
    descriptionKey: "postConstructionCleaningDesc",
    image: postConstructionService,
    link: "/post_constructor_cleaning"
  },
  {
    id: 7,
    titleKey: "nairbnbCleaning",
    descriptionKey: "airbnbCleaningDesc",
    image: airbnbAndShortService,
    link: "/airbnb_and_short_service"
  },
  {
    id: 8,
    titleKey: "nchildCareCleaning",
    descriptionKey: "childCareCleaningDesc",
    image: childCareService,
    link: "/child_care_cleaning"
  },
  {
    id: 9,
    titleKey: "nelderCareCleaning",
    descriptionKey: "elderCareCleaningDesc",
    image: elderCareService,
    link: "/elder_care_cleaning"
  },
  {
    id: 10,
    titleKey: "ncommercialOfficeCleaning",
    descriptionKey: "commercialOfficeCleaningDesc",
    image: CommercialService,
    link: "/commercial_cleaning"
  },
  {
    id: 11,
    titleKey: "nsanitizationDisinfection",
    descriptionKey: "sanitizationDisinfectionDesc",
    image: SanitizationService,
    link: "/sanitization_cleaning"
  },
  {
    id: 12,
    titleKey: "ncarpetCleaning",
    descriptionKey: "carpetCleaningDesc",
    image: CarpetCleaningService,
    link: "/carpet_cleaning"
  },
  {
    id: 13,
    titleKey: "nmoveInOutTransportService",
    descriptionKey: "moveInOutTransportServiceDesc",
    image: MoveInOutTransportService,
    link: "/move_in_out_and_transport_cleaning"
  },
  {
    id: 14,
    titleKey: "nsteamCleaning",
    descriptionKey: "steamCleaningDesc",
    image: steamService,
    link: "/steam_cleaning"
  },
  {
    id: 15,
    titleKey: "nlaundryServices",
    descriptionKey: "laundryServicesDesc",
    image: laundryService,
    link: "/upcomming"
  },
  {
    id: 16,
    titleKey: "neventCleaning",
    descriptionKey: "eventCleaningDesc",
    image: eventService,
    link: "/special_event_cleaning"
  },
  {
    id: 17,
    titleKey: "npoolCleaning",
    descriptionKey: "poolCleaningDesc",
    image: poolService,
    link: "/pool_cleaning"
  },
  {
    id: 18,
    titleKey: "npressureWashing",
    descriptionKey: "pressureWashingDesc",
    image: pressureService,
    link: "/pressure_washing"
  },
];

export default function ServicesPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { translate } = useLanguage();

  return (
    <Box sx={{ 
      textAlign: "center", 
      py: isMobile ? 3 : 5, 
      px: isMobile ? 3 : 10,
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <Typography 
        variant={isMobile ? "h5" : "h4"} 
        sx={{ 
          mb: isMobile ? 3 : 4, 
          fontWeight: "bold", 
          color: "#002F6D",
          px: isMobile ? 1 : 0
        }}
      >
        {translate('ourServices')}
      </Typography>
      <ServiceList services={rawServices.map(service => ({
        ...service,
        title: translate(service.titleKey || ''),
        description: translate(service.descriptionKey),
      }))} />
    </Box>
  );
}