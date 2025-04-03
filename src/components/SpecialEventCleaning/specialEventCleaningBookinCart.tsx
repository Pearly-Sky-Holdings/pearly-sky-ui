import { FaMinus, FaPlus } from "react-icons/fa";
import Dropdown from "../dropDown/dropDown";
import { useLanguage } from "../../context/LanguageContext";

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
  const { translate } = useLanguage();

  const eventTypeOptions = [
    { value: "home", label: translate('home') },
    { value: "apartment", label: translate('apartment') },
    { value: "villa", label: translate('villa') },
    { value: "commercial property", label: translate('commercialProperty') },
    { value: "government office", label: translate('governmentOffice') },
    { value: "public office", label: translate('publicOffice') },
    { value: "private office", label: translate('privateOffice') },
    { value: "daycare centre", label: translate('daycareCentre') },
    { value: "elders care centre", label: translate('eldersCareCentre') },
    { value: "shopping mall", label: translate('shoppingMall') },
    { value: "government hospital", label: translate('governmentHospital') },
    { value: "private hospital", label: translate('privateHospital') },
    { value: "sport centre", label: translate('sportCentre') },
    { value: "gym", label: translate('gym') },
    { value: "restaurant", label: translate('restaurant') },
    { value: "hotel", label: translate('hotel') },
    { value: "school private or government", label: translate('schoolPrivateOrGovernment') },
    { value: "transport sector", label: translate('transportSector') },
    { value: "airport", label: translate('airport') },
    { value: "retail building or shop", label: translate('retailBuildingOrShop') },
    { value: "other sector", label: translate('otherSector') },
  ];

  const frequencyOptions = [
    { value: "One-time", label: translate('oneTime') },
    { value: "weekly", label: translate('weekly') },
    { value: "every two weeks", label: translate('everyTwoWeeks') },
    { value: "every three weeks", label: translate('everyThreeWeeks') },
    { value: "monthly", label: translate('monthly') },
    { value: "other", label: translate('other') },
  ];

  const contactTypeOptions = [
    { value: "male", label: translate('male') },
    { value: "female", label: translate('female') },
    { value: "any", label: translate('any') },
  ];

  const languageOptions = [
    { value: "english", label: translate('english') },
    { value: "french", label: translate('french') },
    { value: "spanish", label: translate('spanish') },
    { value: "Dutch", label: translate('dutch') },
    { value: "German", label: translate('german') },
    { value: "Arabic", label: translate('arabic') },
    { value: "any", label: translate('any') },
  ];

  const timeZoneOptions = [
    { value: "Pacific/Midway", label: translate('timezoneMidway') },
    { value: "Pacific/Honolulu", label: translate('timezoneHonolulu') },
    { value: "America/Anchorage", label: translate('timezoneAnchorage') },
    { value: "America/Los_Angeles", label: translate('timezoneLosAngeles') },
    { value: "America/Denver", label: translate('timezoneDenver') },
    { value: "America/Chicago", label: translate('timezoneChicago') },
    { value: "America/New_York", label: translate('timezoneNewYork') },
    { value: "America/Caracas", label: translate('timezoneCaracas') },
    { value: "America/Halifax", label: translate('timezoneHalifax') },
    { value: "America/St_Johns", label: translate('timezoneStJohns') },
    { value: "America/Buenos_Aires", label: translate('timezoneBuenosAires') },
    { value: "America/Noronha", label: translate('timezoneNoronha') },
    { value: "Atlantic/Azores", label: translate('timezoneAzores') },
    { value: "Europe/London", label: translate('timezoneLondon') },
    { value: "Europe/Paris", label: translate('timezoneParis') },
    { value: "Europe/Istanbul", label: translate('timezoneIstanbul') },
    { value: "Africa/Cairo", label: translate('timezoneCairo') },
    { value: "Africa/Nairobi", label: translate('timezoneNairobi') },
    { value: "Asia/Dubai", label: translate('timezoneDubai') },
    { value: "Asia/Kabul", label: translate('timezoneKabul') },
    { value: "Asia/Tehran", label: translate('timezoneTehran') },
    { value: "Asia/Kolkata", label: translate('timezoneKolkata') },
    { value: "Asia/Kathmandu", label: translate('timezoneKathmandu') },
    { value: "Asia/Dhaka", label: translate('timezoneDhaka') },
    { value: "Asia/Bangkok", label: translate('timezoneBangkok') },
    { value: "Asia/Singapore", label: translate('timezoneSingapore') },
    { value: "Asia/Shanghai", label: translate('timezoneShanghai') },
    { value: "Asia/Tokyo", label: translate('timezoneTokyo') },
    { value: "Australia/Sydney", label: translate('timezoneSydney') },
    { value: "Pacific/Auckland", label: translate('timezoneAuckland') },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 mt-5">
      <Dropdown
        label={translate('selectEventVenue')}
        value={eventType}
        options={eventTypeOptions}
        onChange={setEventType}
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
     
      <Dropdown
        label={translate('chooseFrequency')}
        value={frequency}
        options={frequencyOptions}
        onChange={setFrequency}
      />

      <Dropdown
        label={translate('timeZone')}
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
      
      <Dropdown
        label={translate('preferredLanguage')}
        value={language}
        options={languageOptions}
        onChange={setLanguage}
      />
    </div>
  );
};

export default SpecialEventBookingCart;