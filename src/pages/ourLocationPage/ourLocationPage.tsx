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
  email?: string;
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
      email: "info@pearlyskyholdings.com",
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
        "Le Rochelle",
        "Touliuse",
        "Nantes",
        "Narbonne",
      ],
    },
    {
      id: "uk",
      name: "United Kingdom",
      flag: flagUk,
      email: "info@pearlyskyholdings.com",
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
        "Kingston upon",
        "Hull",
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
      email: "us@ventilationholdings.com",
      address: "No - 188/2 Kandy Road , Pahala Imbulgoda, Imbulgoda, Sri Lanka",
      serviceCities: ["Colombo", "Kandy", "Negombo", "Nuwara Eliya"],
    },
    {
      id: "scotland",
      name: "Scotland",
      flag: flagScotland,
      email: "info@ventilationholdings.com",
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
      email: "uk@ventilationholdings.com",
      address: "Update soon",
      serviceCities: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt"],
    },
    {
      id: "australia",
      name: "Australia",
      flag: flagAustralia,
      email: "us@ventilationholdings.com",
      address: "Update soon",
      serviceCities: ["Bruseels"],
    },
    {
      id: "uae",
      name: "United Arab Emirates",
      flag: flagUAE,
      email: "info@ventilationholdings.com",
      address: "Update soon",
      serviceCities: [
        "Paris",
        "Nice",
        "Saint-Tropez",
        "Antibes",
        "Cannes",
        "Lyon",
        "Monaco",
        "French Riviera",
        "Rouen",
        "Marseille",
      ],
    },
    {
      id: "canada",
      name: "Canada",
      flag: flagCanada,
      email: "uk@ventilationholdings.com",
      address: "Update soon",
      serviceCities: ["London", "Manchester", "Birmingham", "Edinburgh"],
    },
    {
      id: "finland",
      name: "Finland",
      flag: flagFinland,
      email: "us@ventilationholdings.com",
      address: "Update soon",
      serviceCities: ["New York", "Los Angeles", "Chicago", "Miami"],
    },
    {
      id: "saudi-arabia",
      name: "Saudi Arabia",
      flag: flagSaudiArabia,
      email: "info@ventilationholdings.com",
      address: "Update soon",
      serviceCities: [
        "Paris",
        "Nice",
        "Saint-Tropez",
        "Antibes",
        "Cannes",
        "Lyon",
        "Monaco",
        "French Riviera",
        "Rouen",
        "Marseille",
      ],
    },
    {
      id: "italy",
      name: "Italy",
      flag: flagItaly,
      email: "uk@ventilationholdings.com",
      address: "Update soon",
      serviceCities: ["London", "Manchester", "Birmingham", "Edinburgh"],
    },
    {
      id: "potugal",
      name: "Portugal",
      flag: flagPortugal,
      email: "us@ventilationholdings.com",
      address: "Update soon",
      serviceCities: ["New York", "Los Angeles", "Chicago", "Miami"],
    },
    {
      id: "us",
      name: "United States",
      flag: flagUs,
      email: "info@ventilationholdings.com",
      address: "Update soon",
      serviceCities: [
        "Paris",
        "Nice",
        "Saint-Tropez",
        "Antibes",
        "Cannes",
        "Lyon",
        "Monaco",
        "French Riviera",
        "Rouen",
        "Marseille",
      ],
    },
    {
      id: "ireland",
      name: "Ireland",
      flag: flagIreland,
      email: "uk@ventilationholdings.com",
      address: "Update soon",
      serviceCities: ["London", "Manchester", "Birmingham", "Edinburgh"],
    },
    {
      id: "austria",
      name: "Austria",
      flag: flagAustria,
      email: "us@ventilationholdings.com",
      address: "Update soon",
      serviceCities: ["New York", "Los Angeles", "Chicago", "Miami"],
    },
    {
      id: "netherlands",
      name: "Netherlands",
      flag: flagNetherlands,
      email: "info@ventilationholdings.com",
      address: "Update soon",
      serviceCities: [
        "Paris",
        "Nice",
        "Saint-Tropez",
        "Antibes",
        "Cannes",
        "Lyon",
        "Monaco",
        "French Riviera",
        "Rouen",
        "Marseille",
      ],
    },
    {
      id: "switzerland",
      name: "Switzerland",
      flag: flagSwitzerland,
      email: "uk@ventilationholdings.com",
      address: "Update soon",
      serviceCities: ["London", "Manchester", "Birmingham", "Edinburgh"],
    },
    {
      id: "qatar",
      name: "Qatar",
      flag: flagQatar,
      email: "us@ventilationholdings.com",
      address: "Update soon",
      serviceCities: ["New York", "Los Angeles", "Chicago", "Miami"],
    },
    {
      id: "denmark",
      name: "Denmark",
      flag: flagDenmark,
      email: "info@ventilationholdings.com",
      address: "Update soon",
      serviceCities: [
        "Paris",
        "Nice",
        "Saint-Tropez",
        "Antibes",
        "Cannes",
        "Lyon",
        "Monaco",
        "French Riviera",
        "Rouen",
        "Marseille",
      ],
    },
    {
      id: "new-zealand",
      name: "New Zealand",
      flag: flagNewZealand,
      email: "uk@ventilationholdings.com",
      address: "Update soon",
      serviceCities: ["London", "Manchester", "Birmingham", "Edinburgh"],
    },
    {
      id: "poland",
      name: "Poland",
      flag: flagPoland,
      email: "us@ventilationholdings.com",
      address: "Update soon",
      serviceCities: ["New York", "Los Angeles", "Chicago", "Miami"],
    },
    {
      id: "luxembourg",
      name: "Luxembourg",
      flag: flagluxembourg,
      email: "info@ventilationholdings.com",
      address: "Update soon",
      serviceCities: [
        "Paris",
        "Nice",
        "Saint-Tropez",
        "Antibes",
        "Cannes",
        "Lyon",
        "Monaco",
        "French Riviera",
        "Rouen",
        "Marseille",
      ],
    },
    {
      id: "belgium",
      name: "Belgium",
      flag: flagBelgium,
      email: "uk@ventilationholdings.com",
      address: "Update soon",
      serviceCities: ["Bruseels"],
    },
    {
      id: "spain",
      name: "Spain",
      flag: flagSpain,
      email: "us@ventilationholdings.com",
      address: "Update soon",
      serviceCities: ["New York", "Los Angeles", "Chicago", "Miami"],
    },
  ];

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
