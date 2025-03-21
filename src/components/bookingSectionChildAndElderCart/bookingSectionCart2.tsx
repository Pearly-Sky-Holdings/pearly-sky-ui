import React, { useState } from "react";
import Dropdown from "../dropDown/dropDown";
import { Info as InfoIcon } from "@mui/icons-material";

interface ChildInfo {
  age: string;
  gender: string;
  name: string;
}

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
  numProfession: string;
  setNumProfession: (numProfession: string) => void;
  profession: string;
  setProfession: (profession: string) => void;
  pageType: "child" | "elder";
  specialRequest: string;
  setSpecialRequest: (specialRequest: string) => void;
  propertyType: string;
  setPropertyType: (propertyType: string) => void;
  childInfo: ChildInfo[];
  setChildInfo: (info: ChildInfo[]) => void;
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
  numProfession,
  setNumProfession,
  specialRequest,
  setSpecialRequest,
  propertyType,
  setPropertyType,
  pageType,
  childInfo,
  setChildInfo,
}) => {
  const [isOtherSelected, setIsOtherSelected] = useState(false);

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
    { value: "other", label: "Other" },
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
    { value: "any", label: "Any" },
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

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const handleDurationChange = (value: string) => {
    setDuration(value);
  };

  const handleNumChildChange = (value: string) => {
    setNumChild(value);
    setIsOtherSelected(value === "other");

    if (value !== "other") {
      const numChildren = parseInt(value, 10);
      const newChildInfo = Array(numChildren)
        .fill(null)
        .map((_, index) => childInfo[index] || { age: "", gender: "", name: "" });
      setChildInfo(newChildInfo);
    }
  };

  const handleChildInfoChange = (
    index: number,
    field: keyof ChildInfo,
    value: string
  ) => {
    const newChildInfo = [...childInfo];
    newChildInfo[index] = {
      ...newChildInfo[index],
      [field]: value,
    };
    setChildInfo(newChildInfo);
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
          onChange={(value) => setNumProfession(value)}
        />
        {parseFloat(duration) > 8 && (
          <div className="text-sm text-blue-500 px-1">
            <InfoIcon sx={{ color: "black", mx: 1 }} />
            If you need more than 8 hours, please select additional care professionals.
          </div>
        )}
      </div>

      <Dropdown
        label="Select Frequency"
        value={frequency}
        options={frequencyOptions}
        onChange={(value) => setFrequency(value)}
      />
      <Dropdown
        label="Preferred Language to Contact"
        value={language}
        options={languageOptions}
        onChange={(value) => setLanguage(value)}
      />
      <Dropdown
        label="Care Professional Gender"
        value={contactType}
        options={contactTypeOptions}
        onChange={(value) => setContactType(value)}
      />
      <div>
        <Dropdown
          label={pageType === "child" ? "Number of Children" : "Number of Elders"}
          value={numChild}
          options={numchildOptions}
          onChange={handleNumChildChange}
        />
        {isOtherSelected && (
          <div className="text-md text-blue-500 px-1">
            <InfoIcon sx={{ color: "black", mx: 1 }} />
            Kindly specify the number of elders and their ages in the additional notes section.
          </div>
        )}
      </div>

      {parseInt(numChild, 10) > 0 &&
        Array.from({ length: parseInt(numChild, 10) }, (_, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:space-x-2 space-y-4 sm:space-y-0"
          >
            <div className="w-full sm:w-1/3">
              <Dropdown
                label={`Child ${index + 1} Age`}
                value={childInfo[index]?.age || ""}
                options={pageType === "child" ? childageOption : elderageOption}
                onChange={(value) => handleChildInfoChange(index, "age", value)}
              />
            </div>
            <div className="w-full sm:w-1/3">
              <Dropdown
                label={`Gender`}
                value={childInfo[index]?.gender || ""}
                options={genderOptions}
                onChange={(value) => handleChildInfoChange(index, "gender", value)}
              />
            </div>
            <div className="w-full sm:w-1/3">
              <label className="text-sm font-medium text-blue-900">
                Name
              </label>
              <input
                type="text"
                className="w-full border mt-2 border-blue-900 rounded p-2 text-black placeholder-gray-400 hover:border-[#002F6D] focus:border-[#002F6D] outline-none"
                placeholder="Enter Name"
                value={childInfo[index]?.name || ""}
                onChange={(e) => handleChildInfoChange(index, "name", e.target.value)}
              />
            </div>
          </div>
        ))}

      <Dropdown
        label="Special Request"
        value={specialRequest}
        options={specialRequestOptions}
        onChange={(value) => setSpecialRequest(value)}
      />
      <Dropdown
        label="Service Providing Place"
        value={propertyType}
        options={propertyTypeOptions}
        onChange={(value) => setPropertyType(value)}
      />
    </div>
  );
};

export default BookingSectionCart2;