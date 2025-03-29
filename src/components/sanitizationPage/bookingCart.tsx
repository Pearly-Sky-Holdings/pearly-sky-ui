import Dropdown from "../dropDown/dropDown";
import { useLanguage } from "../../context/LanguageContext";

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
  const { translate } = useLanguage();

  const propertyTypeOptions = [
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
    {
      value: "school private or government",
      label: translate('schoolPrivateOrGovernment')
    },
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
    { value: "dutch", label: translate('dutch') },
    { value: "german", label: translate('german') },
    { value: "arabic", label: translate('arabic') },
    { value: "any", label: translate('any') },
  ];

  const timeZoneOptions = [
    { value: "Pacific/Midway", label: `(UTC-11:00) ${translate('pacificMidway')}` },
    { value: "Pacific/Honolulu", label: `(UTC-10:00) ${translate('pacificHonolulu')}` },
    { value: "America/Anchorage", label: `(UTC-09:00) ${translate('americaAnchorage')}` },
    { value: "America/Los_Angeles", label: `(UTC-08:00) ${translate('americaLosAngeles')}` },
    { value: "America/Denver", label: `(UTC-07:00) ${translate('americaDenver')}` },
    { value: "America/Chicago", label: `(UTC-06:00) ${translate('americaChicago')}` },
    { value: "America/New_York", label: `(UTC-05:00) ${translate('americaNewYork')}` },
    { value: "America/Caracas", label: `(UTC-04:30) ${translate('americaCaracas')}` },
    { value: "America/Halifax", label: `(UTC-04:00) ${translate('americaHalifax')}` },
    { value: "America/St_Johns", label: `(UTC-03:30) ${translate('americaStJohns')}` },
    { value: "America/Buenos_Aires", label: `(UTC-03:00) ${translate('americaBuenosAires')}` },
    { value: "America/Noronha", label: `(UTC-02:00) ${translate('americaNoronha')}` },
    { value: "Atlantic/Azores", label: `(UTC-01:00) ${translate('atlanticAzores')}` },
    { value: "Europe/London", label: `(UTC+00:00) ${translate('europeLondon')}` },
    { value: "Europe/Paris", label: `(UTC+01:00) ${translate('europeParis')}` },
    { value: "Europe/Istanbul", label: `(UTC+03:00) ${translate('europeIstanbul')}` },
    { value: "Africa/Cairo", label: `(UTC+02:00) ${translate('africaCairo')}` },
    { value: "Africa/Nairobi", label: `(UTC+03:00) ${translate('africaNairobi')}` },
    { value: "Asia/Dubai", label: `(UTC+04:00) ${translate('asiaDubai')}` },
    { value: "Asia/Kabul", label: `(UTC+04:30) ${translate('asiaKabul')}` },
    { value: "Asia/Tehran", label: `(UTC+03:30) ${translate('asiaTehran')}` },
    { value: "Asia/Kolkata", label: `(UTC+05:30) ${translate('asiaKolkata')}` },
    { value: "Asia/Kathmandu", label: `(UTC+05:45) ${translate('asiaKathmandu')}` },
    { value: "Asia/Dhaka", label: `(UTC+06:00) ${translate('asiaDhaka')}` },
    { value: "Asia/Bangkok", label: `(UTC+07:00) ${translate('asiaBangkok')}` },
    { value: "Asia/Singapore", label: `(UTC+08:00) ${translate('asiaSingapore')}` },
    { value: "Asia/Shanghai", label: `(UTC+08:00) ${translate('asiaShanghai')}` },
    { value: "Asia/Tokyo", label: `(UTC+09:00) ${translate('asiaTokyo')}` },
    { value: "Australia/Sydney", label: `(UTC+10:00) ${translate('australiaSydney')}` },
    { value: "Pacific/Auckland", label: `(UTC+12:00) ${translate('pacificAuckland')}` },  
  ];  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 mt-5">
      <Dropdown
        label={translate('selectBusinessProperty')}
        value={propertyType}
        options={propertyTypeOptions}
        onChange={setPropertyType}
      />
     
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Dropdown
          label={translate('genderRequired')}
          value={contactType}
          options={contactTypeOptions}
          onChange={setContactType}
        />
        <Dropdown
          label={translate('droppreferredLanguage')}
          value={language}
          options={languageOptions}
          onChange={setLanguage}
        />
      </div>
    </div>
  );
};

export default SanitizationBookingCart;