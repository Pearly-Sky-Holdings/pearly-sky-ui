import { Box, Typography } from "@mui/material";
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
  steamService,
  laundryService,
  eventService,
  poolService,
  pressureService
} from "../../config/images";

// Service Data
const services = [
  {
    id: 1,
    title: "Regular Basic Cleaning",
    description:
      "Maintain a clean and comfortable environment with our scheduled cleaning services. Choose daily, weekly, or monthly plans to fit your routine.",
    image: regularService,
  },
  {
    id: 2,
    title: "One Time Cleaning",
    description:
      "Enjoy a spotless space with our thorough one-time cleaning service, tailored to your needs. Perfect for special occasions or seasonal cleaning.",
    image: OneTimeService,
  },
  {
    id: 3,
    title: "Last-Minute Cleaning",
    description:
      "Need urgent cleaning? Our team is ready to handle last-minute tasks efficiently and promptly, ensuring your space is pristine in no time.",
    image: lastMinuteService,
  },
  {
    id: 4,
    title: "Deep Cleaning",
    description:
      "Achieve a fresh, hygienic living or working space with our intensive deep cleaning services, targeting dirt, grime, and hidden corners.",
    image: DeepService,
  },
  {
    id: 5,
    title: "Move In and Out Cleaning",
    description:
      "Start or end your tenancy stress-free with our detailed move-in/out cleaning, leaving the property spotless and ready for the next occupant.",
    image: MoveInAndOutService,
  },
  {
    id: 6,
    title: "Post Construction & Renovation Cleaning",
    description:
      "Enjoy hassle-free living with our reliable maid services, providing everyday assistance for cleaning, organizing, and light household tasks.",
    image: postConstructionService,
  },

  {
    id: 7,
    title: "Airbnb And Short Term Rental Cleaning",
    description: "Impress your guests with our Airbnb cleaning services, ensuring your property is spotless and welcoming for every booking.",
    image: airbnbAndShortService,
  },
  {
    id: 8,
    title: "Child Care Services",
    description: "Trust our experienced professionals to provide attentive and nurturing care for your little ones in a safe and happy environment.",
    image: childCareService,
  },
  {
    id: 9,
    title: "Elder's Care Service",
    description: "Our compassionate elder care services offer assistance and companionship, ensuring comfort, dignity, and well-being for your loved ones.",
    image: elderCareService,
  },
  {
    id: 10,
    title: "Commercial & Office Cleaning",
    description: "Keep your workspace professional and welcoming with our tailored commercial and office cleaning services, designed for businesses of all sizes.",
    image: CommercialService,
  },
  {
    id: 11,
    title: "Steam Cleaning",
    description: "Harness the power of steam to deep-clean and sanitize your surfaces, removing stubborn dirt, bacteria, and allergens effectively.",
    image: steamService,
  },
  {
    id: 12,
    title: "Laundry Services",
    description: "Save time with our convenient laundry services, offering washing, drying, ironing, and folding to keep your wardrobe fresh and clean.",
    image: laundryService,
  },
  {
    id: 13,
    title: "Event Cleaning",
    description: "Whether it’s an annual holiday party or a week of business conferences, an important part of ensuring the event you have planned goes smoothly",
    image: eventService,
  },
  {
    id: 14,
    title: "Pool cleaning",
    description: "Nothing beats relaxing in a pool on these hot days. To make sure your pool is crystal clear and safe for swimming, we offer you all types of indoor and outdoor pool cleaning",
    image: poolService,
  },
  {
    id: 15,
    title: "Pressure Washing",
    description: "Professional Pressure Washing Services Residential and commerical pressure washing service",
    image: pressureService,
  },
];

export default function ServicesPage() {
  return (
    <Box sx={{ textAlign: "center", py: 5, px: 10, backgroundColor: "#f8f8f8" }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold", color: "#002F6D" }}>
        Our Services
      </Typography>
      <ServiceList services={services} />
    </Box>
  );
}
