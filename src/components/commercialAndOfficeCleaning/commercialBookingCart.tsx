import { FaMinus, FaPlus } from "react-icons/fa";
import Dropdown from "../dropDown/dropDown";
import { useLanguage } from "../../context/LanguageContext";

interface SanitizationBookingCartProps { 
  propertyType: string;
  setPropertyType: (type: string) => void;
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

const SanitizationBookingCart: React.FC<SanitizationBookingCartProps> = ({
  propertyType,
  setPropertyType,
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
  const { translate } = useLanguage();
  
  const propertyTypeOptions = [
    { value: "home", label: translate('propertyTypeHome') },
    { value: "apartment", label: translate('propertyTypeApartment') },
    { value: "villa", label: translate('propertyTypeVilla') },
    { value: "commercial property", label: translate('propertyTypeCommercial') },
    { value: "government office", label: translate('propertyTypeGovernmentOffice') },
    { value: "public office", label: translate('propertyTypePublicOffice') },
    { value: "private office", label: translate('propertyTypePrivateOffice') },
    { value: "daycare centre", label: translate('propertyTypeDaycare') },
    { value: "elders care centre", label: translate('propertyTypeEldersCare') },
    { value: "shopping mall", label: translate('propertyTypeShoppingMall') },
    { value: "government hospital", label: translate('propertyTypeGovernmentHospital') },
    { value: "private hospital", label: translate('propertyTypePrivateHospital') },
    { value: "sport centre", label: translate('propertyTypeSportCenter') },
    { value: "gym", label: translate('propertyTypeGym') },
    { value: "restaurant", label: translate('propertyTypeRestaurant') },
    { value: "hotel", label: translate('propertyTypeHotel') },
    { value: "school private or government", label: translate('propertyTypeSchool') },
    { value: "transport sector", label: translate('propertyTypeTransport') },
    { value: "airport", label: translate('propertyTypeAirport') },
    { value: "retail building or shop", label: translate('propertyTypeRetail') },
    { value: "other", label: translate('propertyTypeOther') },
  ];

  const frequencyOptions = [
    { value: "one-time", label: translate('frequencyOneTime') },
    { value: "weekly", label: translate('frequencyWeekly') },
    { value: "every two weeks", label: translate('frequencyBiWeekly') },
    { value: "every three weeks", label: translate('frequencyTriWeekly') },
    { value: "monthly", label: translate('frequencyMonthly') },
    { value: "other", label: translate('frequencyOther') },
  ];

  const contactTypeOptions = [
    { value: "male", label: translate('genderMale') },
    { value: "female", label: translate('genderFemale') },
    { value: "any", label: translate('genderAny') },
  ];

  const languageOptions = [
    { value: "English", label: translate('languageEnglish') },
    { value: "French", label: translate('languageFrench') },
    { value: "Spanish", label: translate('languageSpanish') },
    { value: "Dutch", label: translate('languageDutch') },
    { value: "German", label: translate('languageGerman') },
    { value: "Arabic", label: translate('languageArabic') },
    { value: "any", label: translate('languageAny') },
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
        label={translate('selectPropertyType')}
        value={propertyType}
        options={propertyTypeOptions}
        onChange={setPropertyType}
      />

      <div>
        <label className="block mb-2 text-blue-900">
          {translate('NumberOfCleaners2')}
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
          label={translate('chooseFrequency')}
          value={frequency}
          options={frequencyOptions}
          onChange={setFrequency}
        />      
      </div>

      <Dropdown
        label={translate('selectTimeZone')}
        value={timeZone}
        options={timeZoneOptions}
        onChange={setTimeZone}
      />
      
      <Dropdown
        label={translate('genderRequired')}
        value={contactType}
        options={contactTypeOptions}
        onChange={setContactType}
      />
      
      <div>
        <Dropdown
          label={translate('preferredLanguage')}
          value={language}
          options={languageOptions}
          onChange={setLanguage}
        />
      </div>
    </div>
  );
};

export default SanitizationBookingCart;