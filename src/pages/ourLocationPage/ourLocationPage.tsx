import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
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
import PaymentSupportSection from "../../components/paymentSupportSection/paymentSupportSection.tsx";

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
  Company_number?: string;
  siren?: string;
  register_number?: string;
  companyName?: string;
};

function OurLocations() {
  const { translate } = useLanguage();
  const [expandedLocations, setExpandedLocations] = useState<string[]>([]);

  const locations: Location[] = [
    {
      id: "france",
      name: translate('cfrance'),
      flag: flagFrance,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "15 Rue Des Halles, 75001 Paris.",
      siren: "930 651 625",
      companyName: translate('companyName'),
      serviceCities: [
        translate('paris'),
        translate('nice'),
        translate('saintTropez'),
        translate('antibes'),
        translate('cannes'),
        translate('marseille'),
        translate('lyon'),
        translate('bordeaux'),
        translate('toulouse'),
        translate('toulon'),
        translate('montpellier'),
        // translate('monteCarlo'),
        translate('strasbourg'),
        // translate('monaco'),
        translate('frenchRiviera'),
        translate('rouen'),
        translate('leHavre'),
        translate('normandy'),
        translate('deauville'),
        translate('dieppe'),
        translate('laRochelle'),
        translate('nantes'),
        translate('narbonne'),
      ],
    },
    {
      id: "uk",
      name: translate('cunitedKingdom'),
      flag: flagUk,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "3rd Floor, 45 Albemarle Street, London, England , W1s 4JL United Kingdom",
      Company_number: "15307255",
      companyName: translate('companyName'),
      serviceCities: [
        translate('london'),
        translate('yake'),
        translate('bristol'),
        translate('birmingham'),
        translate('leicester'),
        translate('nottingham'),
        translate('plymouth'),
        translate('bradford'),
        translate('edinburgh'),
        translate('derby'),
        translate('southampton'),
        translate('liverpool'),
        translate('kingstonUponHull'),
        translate('portsmouth'),
        translate('manchester'),
        translate('chester'),
        translate('stokeOnTrent'),
        translate('pererborough'),
        translate('conventry'),
        translate('sheffield'),
        translate('norwich'),
        translate('brighton'),
        translate('cambridge'),
        translate('newcastleUponTyne'),
        translate('oxford'),
        translate('chelmsford'),
        translate('leeds'),
        translate('luton'),
        translate('miltoKeynes'),
        translate('gloucester'),
        translate('sunderland'),
        translate('salisbury'),
      ],
    },
    {
      id: "sl",
      name: translate('csriLanka'),
      flag: flagSrilanka,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: "No - 188/2 Kandy Road , Pahala Imbulgoda, Imbulgoda, Sri Lanka",
      register_number: "PV 00295748",
      companyName: translate('companyName'),
      serviceCities: [
        translate('colombo'), 
        translate('kandy'), 
        translate('negombo'), 
        translate('nuwaraEliya')
      ],
    },
    {
      id: "scotland",
      name: translate('scotland'),
      flag: flagScotland,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: translate('updateSoon'),
      companyName: translate('companyName'),
      serviceCities: [
        translate('edinburgh'),
        translate('aberdeen'),
        translate('glasgow'),
        translate('dundee'),
        translate('inverness'),
        // translate('feedback'),
        translate('stirling'),
      ],
    },
    {
      id: "germany",
      name: translate('cgermany'),
      flag: flagGermany,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: translate('updateSoon'),
      companyName: translate('companyName'),
      serviceCities: [
        translate('berlin'), 
        translate('hamburg'), 
        translate('munich'), 
        translate('cologne'), 
        translate('frankfurt')
      ],
    },
    {
      id: "belgium",
      name: translate('belgium'),
      flag: flagBelgium,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: translate('updateSoon'),
      companyName: translate('companyName'),
      serviceCities: [translate('bruseels')],
    },
    {
      id: "australia",
      name: translate('australia'),
      flag: flagAustralia,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: translate('updateSoon'),
      companyName: translate('companyName'),
      serviceCities: [
        translate('sydney'), 
        translate('melbourne'), 
        translate('brisbane'), 
        translate('perth'), 
        translate('adelaide')
      ],
    },
    {
      id: "uae",
      name: translate('unitedArabEmirates'),
      flag: flagUAE,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: translate('updateSoon'),
      companyName: translate('companyName'),
      serviceCities: [
        translate('dubai'), 
        translate('abuDhabi'), 
        translate('sharjah'), 
        translate('rasAlkhaimah'), 
        translate('jebelAli')
      ],
    },
    {
      id: "canada",
      name: translate('canada'),
      flag: flagCanada,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: translate('updateSoon'),
      companyName: translate('companyName'),
      serviceCities: [
        translate('toronto'), 
        translate('montreal'), 
        translate('ottawa'), 
        translate('vancouver'), 
        translate('jebelAli')
      ],
    },
    {
      id: "finland",
      name: translate('finland'),
      flag: flagFinland,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: translate('updateSoon'),
      companyName: translate('companyName'),
      serviceCities: [
        translate('helsinki'), 
        translate('oulu'), 
        translate('turku'), 
        translate('tampere')
      ],
    },
    {
      id: "saudi-arabia",
      name: translate('saudiArabia'),
      flag: flagSaudiArabia,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: translate('updateSoon'),
      companyName: translate('companyName'),
      serviceCities: [translate('riyadh'), translate('jeddah')],
    },
    {
      id: "italy",
      name: translate('italy'),
      flag: flagItaly,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: translate('updateSoon'),
      companyName: translate('companyName'),
      serviceCities: [
        translate('rome'), 
        translate('venice'), 
        translate('florence'), 
        translate('milan'), 
        translate('naples')
      ],
    },
    {
      id: "potugal",
      name: translate('portugal'),
      flag: flagPortugal,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: translate('updateSoon'),
      companyName: translate('companyName'),
      serviceCities: [translate('lisbon')],
    },
    {
      id: "us",
      name: translate('cunitedStates'),
      flag: flagUs,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: translate('updateSoon'),
      companyName: translate('companyName'),
      serviceCities: [
        translate('newYork'), 
        translate('losAngeles'), 
        translate('philadelphia'), 
        translate('houston')
      ],
    },
    {
      id: "ireland",
      name: translate('ireland'),
      flag: flagIreland,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: translate('updateSoon'),
      companyName: translate('companyName'),
      serviceCities: [
        translate('dublin'), 
        translate('belfast'), 
        translate('cork'), 
        translate('limerick'), 
        translate('galway')
      ],
    },
    {
      id: "austria",
      name: translate('austria'),
      flag: flagAustria,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: translate('updateSoon'),
      companyName: translate('companyName'),
      serviceCities: [
        translate('vienna'), 
        translate('villach'), 
        translate('innsbruck'), 
        translate('graz'), 
        translate('bregenz')
      ],
    },
    {
      id: "netherlands",
      name: translate('netherlands'),
      flag: flagNetherlands,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: translate('updateSoon'),
      companyName: translate('companyName'),
      serviceCities: [
        translate('amsterdam'), 
        translate('utrecht'), 
        translate('rotterdam'), 
        translate('groningen'), 
        translate('theHague')
      ],
    },
    {
      id: "switzerland",
      name: translate('switzerland'),
      flag: flagSwitzerland,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: translate('updateSoon'),
      companyName: translate('companyName'),
      serviceCities: [
        translate('zurich'), 
        translate('geneva'), 
        translate('basel'), 
        translate('bern'), 
        translate('lausanne')
      ],
    },
    {
      id: "qatar",
      name: translate('qatar'),
      flag: flagQatar,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: translate('updateSoon'),
      companyName: translate('companyName'),
      serviceCities: [
        translate('alWakrah'), 
        translate('doha'), 
        translate('alRayyan'), 
        translate('dukhan')
      ],
    },
    {
      id: "denmark",
      name: translate('denmark'),
      flag: flagDenmark,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: translate('updateSoon'),
      companyName: translate('companyName'),
      serviceCities: [
        translate('helsinki'), 
        translate('oulu'), 
        translate('turku'), 
        translate('tampere')
      ],
    },
    {
      id: "new-zealand",
      name: translate('newZealand'),
      flag: flagNewZealand,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: translate('updateSoon'),
      companyName: translate('companyName'),
      serviceCities: [
        translate('auckland'), 
        translate('hamilton'), 
        translate('wellington'), 
        translate('christchurch')
      ],
    },
    {
      id: "poland",
      name: translate('poland'),
      flag: flagPoland,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: translate('updateSoon'),
      companyName: translate('companyName'),
      serviceCities: [translate('warsaw')],
    },
    {
      id: "luxembourg",
      name: translate('luxembourg'),
      flag: flagluxembourg,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: translate('updateSoon'),
      companyName: translate('companyName'),
      serviceCities: [translate('luxembourgCity')],
    },
    {
      id: "spain",
      name: translate('spain'),
      flag: flagSpain,
      email1: "Info@Pearlyskyplc.com",
      email2: "support@pearlyskyplc.com",
      email3: "Recruiting@pearlyskyplc.com",
      email4: "Sales@pearlyskyplc.com",
      email5: "Helpdesk@pearlyskyplc.com",
      address: translate('updateSoon'),
      companyName: translate('companyName'),
      serviceCities: [
        translate('barcelona'), 
        translate('madrid'), 
        translate('palma'), 
        translate('granada')
      ],
    },
  ];

  locations.sort((a, b) => a.name.localeCompare(b.name));

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
        <h1 className="text-3xl font-bold text-center mb-8" style={{ color: "#002F6B" }}>
          {translate('ourLocations')}
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
        <div>
          <PaymentSupportSection />
        </div>
      </div>
    </div>
  );
}

export default OurLocations;