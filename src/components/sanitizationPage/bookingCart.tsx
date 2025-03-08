
import Dropdown from "../dropDown/dropDown";

interface SanitizationBookingCartProps { 
  propertyType: string;
  setPropertyType: (type: string) => void;
  frequency: string;
  setFrequency: (frequency: string) => void;
  contactType: string;
  setContactType: (contactType: string) => void;
  language: string;
  setLanguage: (language: string) => void;
  timeZone: string;
  setTimeZone: (timeZone: string) => void;
}

const SanitizationBookingCart: React.FC<SanitizationBookingCartProps> = ({
  propertyType,
  setPropertyType,
  frequency,
  setFrequency,
  contactType,
  setContactType,
  language,
  setLanguage,
  timeZone,
  setTimeZone,
}) => {
  

  const propertyTypeOptions = [
    { value: "home", label: "Home" },
    { value: "apartment", label: "Apartment" },
    { value: "villa", label: "Villa" },
    { value: "commercial property", label: "Commercial property" },
    { value: "government office", label: "Government office" },
    { value: "public office", label: "Public office" },
    { value: "private office", label: "Private office " },
    { value: "daycare centre", label: "Daycare centre " },
    { value: "elders care centre", label: "Elder's Care Centre" },
    { value: "shopping mall", label: "Shopping mall" },
    { value: "government hospital", label: "Government hospital" },
    { value: "private hospital", label: "Private hospital" },
    { value: "sport centre", label: "Sport centre" },
    { value: "gym", label: "Gym " },
    { value: "restaurant", label: "Restaurant" },
    { value: "hotel", label: "Hotel" },
    {
      value: "school private or government",
      label: "School Private or Government",
    },
    { value: "transport sector", label: "Transport sector" },
    { value: "airport", label: "Airport" },
    { value: "retail building or shop", label: "Retail building or shop" },
    { value: "other", label: "Other sector" },
  ];
  const frequencyOptions = [
    { value: "once", label: "One-time" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
  ];

  const contactTypeOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const languageOptions = [
    { value: "english", label: "English" },
    { value: "french", label: "French" },
    { value: "spanish", label: "Spanish" },
    { value: "Dutch", label: "Dutch" },
    { value: "German", label: "German" },
    { value: "Arabic", label: "Arabic" },
  ];

  const timeZoneOptions = [
    { value: "UTC-12:00", label: "(UTC-12:00) International Date Line West" },
    { value: "UTC-11:00", label: "(UTC-11:00) Coordinated Universal Time-11" },
    { value: "UTC-10:00", label: "(UTC-10:00) Hawaii" },
    { value: "UTC-09:00", label: "(UTC-09:00) Alaska" },
    { value: "UTC-08:00", label: "(UTC-08:00) Pacific Time (US & Canada)" },
    { value: "UTC-07:00", label: "(UTC-07:00) Mountain Time (US & Canada)" },
    { value: "UTC-06:00", label: "(UTC-06:00) Central Time (US & Canada)" },
    { value: "UTC-05:00", label: "(UTC-05:00) Eastern Time (US & Canada)" },
    { value: "UTC-04:00", label: "(UTC-04:00) Atlantic Time (Canada)" },
    { value: "UTC-03:00", label: "(UTC-03:00) Buenos Aires" },
    { value: "UTC-02:00", label: "(UTC-02:00) Mid-Atlantic" },
    { value: "UTC-01:00", label: "(UTC-01:00) Azores" },
    { value: "UTC+00:00", label: "(UTC+00:00) Greenwich Mean Time" },
    { value: "UTC+01:00", label: "(UTC+01:00) Central European Time" },
    { value: "UTC+02:00", label: "(UTC+02:00) Eastern European Time" },
    { value: "UTC+03:00", label: "(UTC+03:00) Moscow Standard Time" },
    { value: "UTC+04:00", label: "(UTC+04:00) Gulf Standard Time" },
    { value: "UTC+05:00", label: "(UTC+05:00) Pakistan Standard Time" },
    { value: "UTC+06:00", label: "(UTC+06:00) Bangladesh Standard Time" },
    { value: "UTC+07:00", label: "(UTC+07:00) Indochina Time" },
    { value: "UTC+08:00", label: "(UTC+08:00) China Standard Time" },
    { value: "UTC+09:00", label: "(UTC+09:00) Japan Standard Time" },
    { value: "UTC+10:00", label: "(UTC+10:00) Australian Eastern Time" },
    { value: "UTC+11:00", label: "(UTC+11:00) Solomon Islands Time" },
    { value: "UTC+12:00", label: "(UTC+12:00) Fiji Time" },
  ];

  

return (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 mt-5">
    <Dropdown
        label="Select your business or property"
        value={propertyType}
        options={propertyTypeOptions}
        onChange={setPropertyType}
      />
     
     <div>
     <Dropdown
        label="Choose Frequency"
        value={frequency}
        options={frequencyOptions}
        onChange={setFrequency}
      /> 
     
      </div>

      <Dropdown
            label="Select Time Zone"
            value={timeZone}
            options={timeZoneOptions}
            onChange={setTimeZone}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Dropdown
        label="Gender Required"
        value={contactType}
        options={contactTypeOptions}
        onChange={setContactType}
      />
      <Dropdown
        label="Select Language"
        value={language}
        options={languageOptions}
        onChange={setLanguage}
      />
    </div>
  </div>
);
};



export default SanitizationBookingCart;
