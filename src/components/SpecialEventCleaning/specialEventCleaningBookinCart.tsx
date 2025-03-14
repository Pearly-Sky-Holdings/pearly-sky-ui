import { FaMinus, FaPlus } from "react-icons/fa";
import Dropdown from "../dropDown/dropDown";

interface SanitizationBookingCartProps { 
  eventType: string;
  setEventType: (type: string) => void;
  numCleaners: string;
  setNumCleaners: (cleaners: string) => void;
  frequency: string;
  setFrequency: (frequency: string) => void;
  contactType: string;
  setContactType: (contactType: string) => void;
  language: string;
  setLanguage: (language: string) => void;
  timeZone: string;
  setTimeZone: (timeZone: string) => void;
}

const SpecialEventBookingCart: React.FC<SanitizationBookingCartProps> = ({
  eventType,
  setEventType,
  numCleaners,
  setNumCleaners,
  frequency,
  setFrequency,
  contactType,
  setContactType,
  language,
  setLanguage,
  timeZone,
  setTimeZone,
}) => {
  

  const eventTypeOptions = [
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
    { value: "Pacific/Midway", label: "(UTC-11:00) Pacific/Midway" },
      { value: "Pacific/Honolulu", label: "(UTC-10:00) Pacific/Honolulu" },
      { value: "America/Anchorage", label: "(UTC-09:00) America/Anchorage" },
      { value: "America/Los_Angeles", label: "(UTC-08:00) America/Los_Angeles" },
      { value: "America/Denver", label: "(UTC-07:00) America/Denver" },
      { value: "America/Chicago", label: "(UTC-06:00) America/Chicago" },
      { value: "America/New_York", label: "(UTC-05:00) America/New_York" },
      { value: "America/Caracas", label: "(UTC-04:30) America/Caracas" },
      { value: "America/Halifax", label: "(UTC-04:00) America/Halifax" },
      { value: "America/St_Johns", label: "(UTC-03:30) America/St_Johns" },
      { value: "America/Buenos_Aires", label: "(UTC-03:00) America/Buenos_Aires" },
      { value: "America/Noronha", label: "(UTC-02:00) America/Noronha" },
      { value: "Atlantic/Azores", label: "(UTC-01:00) Atlantic/Azores" },
      { value: "Europe/London", label: "(UTC+00:00) Europe/London" },
      { value: "Europe/Paris", label: "(UTC+01:00) Europe/Paris" },
      { value: "Europe/Istanbul", label: "(UTC+03:00) Europe/Istanbul" },
      { value: "Africa/Cairo", label: "(UTC+02:00) Africa/Cairo" },
      { value: "Africa/Nairobi", label: "(UTC+03:00) Africa/Nairobi" },
      { value: "Asia/Dubai", label: "(UTC+04:00) Asia/Dubai" },
      { value: "Asia/Kabul", label: "(UTC+04:30) Asia/Kabul" },
      { value: "Asia/Tehran", label: "(UTC+03:30) Asia/Tehran" },
      { value: "Asia/Kolkata", label: "(UTC+05:30) Asia/Kolkata" },
      { value: "Asia/Kathmandu", label: "(UTC+05:45) Asia/Kathmandu" },
      { value: "Asia/Dhaka", label: "(UTC+06:00) Asia/Dhaka" },
      { value: "Asia/Bangkok", label: "(UTC+07:00) Asia/Bangkok" },
      { value: "Asia/Singapore", label: "(UTC+08:00) Asia/Singapore" },
      { value: "Asia/Shanghai", label: "(UTC+08:00) Asia/Shanghai" },
      { value: "Asia/Tokyo", label: "(UTC+09:00) Asia/Tokyo" },
      { value: "Australia/Sydney", label: "(UTC+10:00) Australia/Sydney" },
      { value: "Pacific/Auckland", label: "(UTC+12:00) Pacific/Auckland" },  

  ];  

return (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 mt-5">
    <Dropdown
        label="Select your event,venue"
        value={eventType}
        options={eventTypeOptions}
        onChange={setEventType}
      />

      <div >
              <label className="block mb-2 text-blue-900">
                Number of Request Cleaners 
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={numCleaners}
                  onChange={(e) => {
                    const value = Math.max(1, Math.min(20, Number(e.target.value)));
                    setNumCleaners(value.toString());
                  }}
                  className="w-full p-2 border border-blue-900 rounded-sm text-center text-black"
                  min={1}
                  max={20}
                />
                <div
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  onClick={() => {
                    setNumCleaners(Math.max(1, Number(numCleaners) - 1).toString());
                  }}
                >
                  <FaMinus />
                </div>
                <div
                  className="p-2 bg-blue-900 text-white rounded-lg hover:bg-blue-950 transition-colors"
                  onClick={() => {
                    setNumCleaners(Math.min(20, Number(numCleaners) + 1).toString());
                  }}
                >
                  <FaPlus />
                </div>
              </div>              
            </div>
     
     <div>
     <Dropdown
        label="Choose Frequency"
        value={frequency}
        options={frequencyOptions}
        onChange={setFrequency}
      /> 
     
      </div>

      <Dropdown
            label="Time Zone"
            value={timeZone}
            options={timeZoneOptions}
            onChange={setTimeZone}
      />
      
      <Dropdown
        label="Gender Required"
        value={contactType}
        options={contactTypeOptions}
        onChange={setContactType}
      />
      <div >
      <Dropdown
        label="Preferred Language"
        value={language}
        options={languageOptions}
        onChange={setLanguage}
      />
    </div>
  </div>
);
};



export default SpecialEventBookingCart;
