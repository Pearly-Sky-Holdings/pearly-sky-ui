import { useState } from "react";
import LocationCard from "../../components/Locations/LocationCart";

import {
  flagAustralia,
  flagCanada,
  flagFinland,
  flagFrance,
  flagGermany,
  flagItaly,
  flagSaudiArabia,
  flagScotland,
  flagSrilanka,
  flagUAE,
  flagUk,
  flagUs,
  flagNetherlands,
  flagAustria,
  flagluxembourg,
  flagPortugal,
  flagQatar,
  flagDenmark,
  flagIreland,
  flagNewZealand,
  flagPoland,
  flagSpain,
  flagSwitzerland,
  flagBelgium,
} from "../../config/images.ts";

type Location = {
  id: string;
  name: string;
  flag: string;
  email1?: string;
  email2?: string;
  email3?: string;
  email4?: string;
  email5?: string;
  address?: string;
  serviceCities?: string[];
};

function OurLocations() {
  const [expandedLocations, setExpandedLocations] = useState<string[]>([]);

  const locations: Location[] = [
    {
      id: "france",
      name: "France",
      flag: flagFrance,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "15 Rue Des Halles, 75001 Paris.",
      serviceCities: [
        "Paris",
        "Nice",
        "Saint-Tropez",
        "Antibes",
        "Cannes",
        "Marseille",
        "Lyon",
        "Bordeaux",
        "Toulouse",
        "Toulon",
        "Montpellier",
        "Monte Carlo",
        "Strasbourg",
        "Monaco",
        "French Riviera",
        "Rouen",
        "Le Havre",
        "Normandy",
        "Deauville",
        "Dieppe",
        "La Rochelle",
        "Nantes",
        "Narbonne",
      ],
    },
    {
      id: "uk",
      name: "United Kingdom",
      flag: flagUk,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address:
        "3rd Floor, 45 Albemarle Street, London, England , W1s 4JL United Kingdom",
      serviceCities: [
        "London",
        "Yake",
        "Bristol",
        "Birmingham",
        "Leicester",
        "Nottingham",
        "Plymouth",
        "Bradford",
        "Edinburgh",
        "Derby",
        "Southampton",
        "Liverpool",
        "Kingston upon Hull",        
        "Portsmouth",
        "Manchester",
        "Chester",
        "Stoke-on-Trent",
        "Pererborough",
        "Conventry",
        "Sheffield",
        "Norwich",
        "Brighton",
        "Cambridge",
        "Newcastle upon Tyne",
        "Oxford",
        "Chelmsford",
        "Leeds",
        "Luton",
        "Milto Keynes",
        "Gloucester",
        "Sunderland",
        "Salisbury",
      ],
    },
    {
      id: "sl",
      name: "Sri Lanka",
      flag: flagSrilanka,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "No - 188/2 Kandy Road , Pahala Imbulgoda, Imbulgoda, Sri Lanka",
      serviceCities: ["Colombo", "Kandy", "Negombo", "Nuwara Eliya"],
    },
    {
      id: "scotland",
      name: "Scotland",
      flag: flagScotland,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "Update soon",
      serviceCities: [
        "Edinburgh",
        "Aberdeen",
        "Glasgow",
        "Dundee",
        "Inverness",
        "Feedback",
        "Stirling",
      ],
    },
    {
      id: "germany",
      name: "Germany",
      flag: flagGermany,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "Update soon",
      serviceCities: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt"],
    },
    {
      id: "belgium",
      name: "Belgium",
      flag: flagBelgium,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "Update soon",
      serviceCities: ["Bruseels"],
    },
    {
      id: "australia",
      name: "Australia",
      flag: flagAustralia,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "Update soon",
      serviceCities: ["Sydney"," Melbourne"," Brisbane","Perth"," Adelaide"],
    },
    {
      id: "uae",
      name: "United Arab Emirates",
      flag: flagUAE,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "Update soon",
      serviceCities: [
        "Dubai Abu","Dhabi","Sharjah","Ras Alkhaimah","Jebel Ali"
      ],
    },
    {
      id: "canada",
      name: "Canada",
      flag: flagCanada,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "Update soon",
      serviceCities: ["Toronto","Montreal","Ottawa","Vancouver","Jebel Ali"],
    },
    {
      id: "finland",
      name: "Finland",
      flag: flagFinland,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "Update soon",
      serviceCities: ["Helsinki","Oulu","Turku","Tampere"],
    },
    {
      id: "saudi-arabia",
      name: "Saudi Arabia",
      flag: flagSaudiArabia,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "Update soon",
      serviceCities: [
        "Riyadh Jeddah"       
      ],
    },
    {
      id: "italy",
      name: "Italy",
      flag: flagItaly,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "Update soon",
      serviceCities: ["Rome","Venice","Florence","Milan","Naples"],
    },
    {
      id: "potugal",
      name: "Portugal",
      flag: flagPortugal,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "Update soon",
      serviceCities: ["Lisbon"],
    },
    {
      id: "us",
      name: "United States",
      flag: flagUs,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "Update soon",
      serviceCities: [
        "New York"," Los Angeles"," Philadelphia","Houston"
      ],
    },
    {
      id: "ireland",
      name: "Ireland",
      flag: flagIreland,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "Update soon",
      serviceCities: [
        "Dublin",
        "Belfast",
        "Cork",
        "Limerick",
        "Galway"],
    },
    {
      id: "austria",
      name: "Austria",
      flag: flagAustria,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "Update soon",
      serviceCities: [
        "Vienna",
        "Villach ",
        "Innsbruck",
        "Graz",
        "Bregenz"],
    },
    {
      id: "netherlands",
      name: "Netherlands",
      flag: flagNetherlands,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "Update soon",
      serviceCities: [
        "Amsterdam",
        "Utrecht" ,
        "Rotterdam",
        "Groningen",
        "The Hague"
      ],
    },
    {
      id: "switzerland",
      name: "Switzerland",
      flag: flagSwitzerland,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "Update soon",
      serviceCities: [
        "Zurich",
         "Geneva Basel",
        "Bern Lausanne"],
    },
    {
      id: "qatar",
      name: "Qatar",
      flag: flagQatar,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "Update soon",
      serviceCities: [
        "Al Wakrah",
        "Doha",
        "Al Rayyan",
        "Dukhan"],
    },
    {
      id: "denmark",
      name: "Denmark",
      flag: flagDenmark,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "Update soon",
      serviceCities: [
        "Helsinki",
        "Oulu",
        "Turku",
        "Tampere"
      ],
    },
    {
      id: "new-zealand",
      name: "New Zealand",
      flag: flagNewZealand,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "Update soon",
      serviceCities: [
        "Auckland",
        "Hamilton",
        "Wellington",
        "Christchurch"],
    },
    {
      id: "poland",
      name: "Poland",
      flag: flagPoland,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "Update soon",
      serviceCities: ["Warsaw"],
    },
    {
      id: "luxembourg",
      name: "Luxembourg",
      flag: flagluxembourg,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "Update soon",
      serviceCities: [
        "Luxembourg City"
      ],
    },
   
    {
      id: "spain",
      name: "Spain",
      flag: flagSpain,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "Update soon",
      serviceCities: [
        "Barcelona",
        "Madrid",
        "Palma",
        "Granada"],
    },
  ];

  locations.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  // Split locations into two halves
  const half = Math.ceil(locations.length / 2);
  const firstColumn = locations.slice(0, half);
  const secondColumn = locations.slice(half);

  const toggleLocation = (locationId: string) => {
    setExpandedLocations((prev) =>
      prev.includes(locationId)
        ? prev.filter((id) => id !== locationId)
        : [...prev, locationId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Our Locations
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Column */}
          <div className="space-y-4">
            {firstColumn.map((location) => (
              <LocationCard
                key={location.id}
                location={location}
                isExpanded={expandedLocations.includes(location.id)}
                toggleLocation={toggleLocation}
              />
            ))}
          </div>

          {/* Second Column */}
          <div className="space-y-4">
            {secondColumn.map((location) => (
              <LocationCard
                key={location.id}
                location={location}
                isExpanded={expandedLocations.includes(location.id)}
                toggleLocation={toggleLocation}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurLocations;
