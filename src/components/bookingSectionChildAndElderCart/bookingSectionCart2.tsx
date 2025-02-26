import Dropdown from "../dropDown/dropDown";

interface BookingSectionCartProps {
  numChild: string;
  setNumChild: (num: string) => void;
  duration: string;
  setDuration: (duration: string) => void;
  frequency: string;
  setFrequency: (frequency: string) => void;
  contactType: string;
  setContactType: (contactType: string) => void;
  language: string;
  setLanguage: (language: string) => void;
  childAge: string;
  setChildAge: (age: string) => void;
  type: string;
  setType: (type: string) => void;
  numProfession: string;
  setNumProfession: (numProfession: string) => void;
  profession: string;
  setProfession: (profession: string) => void;
  pageType: "child" | "elder";
  specialRequest: string;
  setSpecialRequest: (specialRequest: string) => void;
  propertyType: string;
  setPropertyType: (propertyType: string) => void;
}

const BookingSectionCart2: React.FC<BookingSectionCartProps> = ({
  numChild,
  setNumChild,
  duration,
  setDuration,
  frequency,
  setFrequency,
  contactType,
  setContactType,
  language,
  setLanguage,
  childAge,
  setChildAge,
  type,
  setType,
  numProfession,
  setNumProfession,
  specialRequest,
  setSpecialRequest,
  propertyType,
  setPropertyType,
  pageType,
}) => {
  const durationOptions = [
    { value: "2", label: "2 hours" },
    { value: "2.5", label: "2.5 hours" },
    { value: "3", label: "3 hours" },
    { value: "3.5", label: "3.5 hours" },
    { value: "4", label: "4 hours" },
    { value: "4.5", label: "4.5 hours" },
    { value: "5", label: "5 hours" },
    { value: "5.5", label: "5.5 hours" },
    { value: "6", label: "6 hours" },
    { value: "6.5", label: "6.5 hours" },
    { value: "7", label: "7 hours" },
    { value: "7.5", label: "7.5 hours" },
    { value: "8", label: "8 hours" },
    { value: "8.5", label: "8.5 hours" },
    { value: "9", label: "9 hours" },
    { value: "9.5", label: "9.5 hours" },
    { value: "10", label: "10 hours" },
    { value: "10.5", label: "10.5 hours" },
    { value: "11", label: "11 hours" },
    { value: "11.5", label: "11.5 hours" },
    { value: "12", label: "12 hours" },
    { value: "12.5", label: "12.5 hours" },
    { value: "13", label: "13 hours" },
    { value: "13.5", label: "13.5 hours" },
    { value: "14", label: "14 hours" },
    { value: "14.5", label: "14.5 hours" },
    { value: "15", label: "15 hours" },
    { value: "15.5", label: "15.5 hours" },
    { value: "16", label: "16 hours" },
    { value: "16.5", label: "16.5 hours" },
    { value: "17", label: "17 hours" },
    { value: "17.5", label: "17.5 hours" },
    { value: "18", label: "18 hours" },
    { value: "18.5", label: "18.5 hours" },
    { value: "19", label: "19 hours" },
    { value: "19.5", label: "19.5 hours" },
    { value: "20", label: "20 hours" },
    { value: "20.5", label: "20.5 hours" },
    { value: "21", label: "21 hours" },
    { value: "21.5", label: "21.5 hours" },
    { value: "22", label: "22 hours" },
    { value: "22.5", label: "22.5 hours" },
    { value: "23", label: "23 hours" },
    { value: "23.5", label: "23.5 hours" },
    { value: "24", label: "24 hours" },
    { value: "24.5", label: "24.5 hours" },
    { value: "25", label: "25 hours" },
  ];

  const numchildOptions = [
    { value: "1", label: "1 " },
    { value: "2", label: "2 " },
    { value: "3", label: "3 " },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
    { value: "13", label: "13" },
    { value: "14", label: "14" },
    { value: "15", label: "15" },
    { value: "16", label: "16" },
    { value: "17", label: "17" },
    { value: "18", label: "18" },
    { value: "19", label: "19" },
    { value: "20", label: "20" },
  ];
  const numCareProfession = [
    { value: "1", label: "1 " },
    { value: "2", label: "2 " },
    { value: "3", label: "3 " },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
    { value: "13", label: "13" },
    { value: "14", label: "14" },
    { value: "15", label: "15" },
    { value: "16", label: "16" },
    { value: "17", label: "17" },
    { value: "18", label: "18" },
    { value: "19", label: "19" },
    { value: "20", label: "20" },
  ];

  const frequencyOptions = [
    { value: "once", label: "One-time" },
    { value: "weekly", label: "Weekly" },
    { value: "every2weeks", label: "Every 02 weeks" },
    { value: "every3weeks", label: "Every 03 weeks" },
    { value: "monthly", label: "Monthly" },
  ];

  const contactTypeOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "both", label: "Both" },
  ];

  const languageOptions = [
    { value: "english", label: "English" },
    { value: "french", label: "French" },
    { value: "spanish", label: "Spanish" },
  ];
  const childageOption = [
    { value: "1 month", label: "1 Month" },
    { value: "6 month", label: "6 Month" },
    { value: "1 year", label: "1 Year" },
    { value: "2 years", label: "2 Years" },
    { value: "3 years", label: "3 Years" },
    { value: "4 years", label: "4 Years" },
    { value: "5 years", label: "5 Years" },
    { value: "6 years", label: "6 Years" },
    { value: "7 years", label: "7 Years" },
    { value: "8 years", label: "8 Years" },
    { value: "9 years", label: "9 Years" },
    { value: "10 years", label: "10 Years" },
  ];
  const elderageOption = [
    { value: "1 month", label: "60" },
    { value: "6 month", label: "65" },
    { value: "1 year", label: "70" },
    { value: "2 years", label: "75" },
    { value: "3 years", label: "80" },
    { value: "4 years", label: "85" },
    { value: "5 years", label: "90" },
    { value: "6 years", label: "95" },
    { value: "7 years", label: "100" },
  ];
  const specialRequestOptions = [
    { value: "disable", label: "Disable" },
    { value: "non-disable", label: "Non-Disable" },
  ];

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
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <Dropdown
        label="Duration (in hours)"
        value={duration}
        options={durationOptions}
        onChange={setDuration}
      />
      <Dropdown
        label="Request Care Professionals"
        value={numProfession}
        options={numCareProfession}
        onChange={setNumProfession}
      />
      <Dropdown
        label="Select Frequency"
        value={frequency}
        options={frequencyOptions}
        onChange={setFrequency}
      />
      <Dropdown
        label="Preferred Language to Contact"
        value={language}
        options={languageOptions}
        onChange={setLanguage}
      />
      <Dropdown
        label={pageType === "child" ? "Children Gender" : "Elder Gender"}
        value={type}
        options={contactTypeOptions}
        onChange={setType}
      />
      <Dropdown
        label="Care Professional Gender"
        value={contactType}
        options={contactTypeOptions}
        onChange={setContactType}
      />
      <Dropdown
        label={pageType === "child" ? "Number of Children" : "Number of Elders"}
        value={numChild}
        options={numchildOptions}
        onChange={setNumChild}
      />
      <Dropdown
        label={pageType === "child" ? "Child Age" : "Elder Age"}
        value={childAge}
        options={pageType === "child" ? childageOption : elderageOption}
        onChange={setChildAge}
      />
      <Dropdown
        label="Special Request"
        value={specialRequest}
        options={specialRequestOptions}
        onChange={setSpecialRequest}
      />
      <Dropdown
        label="Service Providing Place"
        value={propertyType}
        options={propertyTypeOptions}
        onChange={setPropertyType}
      />
    </div>
  );
};

export default BookingSectionCart2;
