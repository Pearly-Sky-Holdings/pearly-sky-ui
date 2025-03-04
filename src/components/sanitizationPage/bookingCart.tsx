
import Dropdown from "../dropDown/dropDown";

interface BookingSectionCartProps {
  propertySize: string;
  setPropertySize: (size: string) => void;
  numCleaners: string;
  setNumCleaners: (num: string) => void;
  duration: string;
  setDuration: (duration: string) => void;
  propertyType: string;
  setPropertyType: (type: string) => void;
  frequency: string;
  setFrequency: (frequency: string) => void;
  contactType: string;
  setContactType: (contactType: string) => void;
  language: string;
  setLanguage: (language: string) => void;
}

const BookingCart: React.FC<BookingSectionCartProps> = ({
  propertyType,
  setPropertyType,
  frequency,
  setFrequency,
  contactType,
  setContactType,
  language,
  setLanguage,
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

  
 return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">      
      <Dropdown
        label="Select your business or property"
        value={propertyType}
        options={propertyTypeOptions}
        onChange={setPropertyType}
      />
      <Dropdown
        label="Choose Frequency"
        value={frequency}
        options={frequencyOptions}
        onChange={setFrequency}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Dropdown
          label="Request Cleanr's Gender"
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

export default BookingCart;
