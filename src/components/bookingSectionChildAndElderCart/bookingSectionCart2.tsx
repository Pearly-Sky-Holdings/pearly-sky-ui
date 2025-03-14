import Dropdown from "../dropDown/dropDown";
import { Info as InfoIcon } from "@mui/icons-material";

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
  childAge: string[];
  setChildAge: (ages: string[]) => void;
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
  ];

  const numchildOptions = [
    { value: "1", label: "1 " },
    { value: "2", label: "2 " },
    { value: "3", label: "3 " },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
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
  ];

  const frequencyOptions = [
    { value: "once", label: "One-time" },
    { value: "weekly", label: "Weekly" },
    { value: "every2weeks", label: "Every 02 weeks" },
    { value: "every3weeks", label: "Every 03 weeks" },
    { value: "monthly", label: "Monthly" },
    { value: "other", label: "Other" },
  ];

  const contactTypeOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "any", label: "Any" },
  ];

  const languageOptions = [
    { value: "english", label: "English" },
    { value: "french", label: "French" },
    { value: "spanish", label: "Spanish" },
    { value: "Dutch", label: "Dutch" },
    { value: "German", label: "German" },
    { value: "Arabic", label: "Arabic" },
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
    { value: "60", label: "60" },
    { value: "65", label: "65" },
    { value: "70", label: "70" },
    { value: "75", label: "75" },
    { value: "80", label: "80" },
    { value: "85", label: "85" },
    { value: "90", label: "90" },
    { value: "95", label: "95" },
    { value: "100", label: "100" },
  ];

  const specialRequestOptions = [
    { value: "disable", label: "Disable" },
    { value: "non-disable", label: "Non-Disable" },
  ];

  const propertyTypeOptions = [
    { value: "home", label: "Home" },
    { value: "apartment", label: "Apartment" },
    { value: "villa", label: "Villa" },
    { value: "child care center", label: "Child Care Center " },
    { value: "elders care centre", label: "Elder's Care Centre" },
    { value: "government hospital", label: "Government hospital" },
    { value: "private hospital", label: "Private hospital" },
    { value: "other", label: "Other" },
  ];

  const handleDurationChange = (value: string) => {
    setDuration(value);
  };

  const handleNumChildChange = (value: string) => {
    setNumChild(value);
    const numChildren = parseInt(value, 10);
    const newChildAges = Array(numChildren).fill("");
    setChildAge(newChildAges);
  };

  const handleChildAgeChange = (index: number, value: string) => {
    const newChildAges = [...childAge];
    newChildAges[index] = value;
    setChildAge(newChildAges);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <Dropdown
        label="Duration (in hours)"
        value={duration}
        options={durationOptions}
        onChange={handleDurationChange}
      />

      <div>
        <Dropdown
          label="Request Care Professionals"
          value={numProfession}
          options={numCareProfession}
          onChange={setNumProfession}
        />
        {parseFloat(duration) > 8 && (
          <div className="text-sm text-blue-500   px-1">
            <InfoIcon sx={{ color: "black", mx: 1 }} />
            If you need more than 8 hours, please select additional care
            professionals.
          </div>
        )}
      </div>

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
        onChange={handleNumChildChange}
      />
      {parseInt(numChild, 10) > 0 &&
        Array.from({ length: parseInt(numChild, 10) }, (_, index) => (
          <Dropdown
            key={index}
            label={`${pageType === "child" ? "Child" : "Elder"} Age ${
              index + 1
            }`}
            value={childAge[index] || ""}
            options={pageType === "child" ? childageOption : elderageOption}
            onChange={(value) => handleChildAgeChange(index, value)}
          />
        ))}
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
