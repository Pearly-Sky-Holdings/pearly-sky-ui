import React, { useState } from "react";
import Dropdown from "../dropDown/dropDown";
import { Info as InfoIcon } from "@mui/icons-material";
import { useLanguage } from "../../context/LanguageContext";

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
  const { translate } = useLanguage();
  const [isOtherSelected, setIsOtherSelected] = useState(false);

  const durationOptions = [
    { value: "2", label: translate('twoHours') },
    { value: "2.5", label: translate('twoHalfHours') },
    { value: "3", label: translate('threeHours') },
    { value: "3.5", label: translate('threeHalfHours') },
    { value: "4", label: translate('fourHours') },
    { value: "4.5", label: translate('fourHalfHours') },
    { value: "5", label: translate('fiveHours') },
    { value: "5.5", label: translate('fiveHalfHours') },
    { value: "6", label: translate('sixHours') },
    { value: "6.5", label: translate('sixHalfHours') },
    { value: "7", label: translate('sevenHours') },
    { value: "7.5", label: translate('sevenHalfHours') },
    { value: "8", label: translate('eightHours') },
    { value: "8.5", label: translate('eightHalfHours') },
    { value: "9", label: translate('nineHours') },
    { value: "9.5", label: translate('nineHalfHours') },
    { value: "10", label: translate('tenHours') },
    { value: "10.5", label: translate('tenHalfHours') },
    { value: "11", label: translate('elevenHours') },
    { value: "11.5", label: translate('elevenHalfHours') },
    { value: "12", label: translate('twelveHours') },
  ];

  const numchildOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "other", label: translate('other') },
  ];

  const numCareProfession = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
  ];

  const frequencyOptions = [
    { value: "once", label: translate('oneTime') },
    { value: "weekly", label: translate('weekly') },
    { value: "every2weeks", label: translate('everyTwoWeeks') },
    { value: "every3weeks", label: translate('everyThreeWeeks') },
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

  const childageOption = [
    { value: "1 month", label: translate('oneMonth') },
    { value: "6 month", label: translate('sixMonths') },
    { value: "1 year", label: translate('oneYear') },
    { value: "2 years", label: translate('twoYears') },
    { value: "3 years", label: translate('threeYears') },
    { value: "4 years", label: translate('fourYears') },
    { value: "5 years", label: translate('fiveYears') },
    { value: "6 years", label: translate('sixYears') },
    { value: "7 years", label: translate('sevenYears') },
    { value: "8 years", label: translate('eightYears') },
    { value: "9 years", label: translate('nineYears') },
    { value: "10 years", label: translate('tenYears') },
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
    { value: "disable", label: translate('disabled') },
    { value: "non-disable", label: translate('nonDisabled') },
  ];

  const propertyTypeOptions = [
    { value: "home", label: translate('home') },
    { value: "apartment", label: translate('apartment') },
    { value: "villa", label: translate('villa') },
    { value: "child care center", label: translate('childCareCenter') },
    { value: "elders care centre", label: translate('eldersCareCenter') },
    { value: "government hospital", label: translate('governmentHospital') },
    { value: "private hospital", label: translate('privateHospital') },
    { value: "other", label: translate('other') },
  ];

  const genderOptions = [
    { value: "male", label: translate('male') },
    { value: "female", label: translate('female') },
    { value: "other", label: translate('other') },
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
        label={translate('durationHours')}
        value={duration}
        options={durationOptions}
        onChange={handleDurationChange}
      />

      <div>
        <Dropdown
          label={translate('requestCareProfessionals')}
          value={numProfession}
          options={numCareProfession}
          onChange={(value) => setNumProfession(value)}
        />
        {parseFloat(duration) > 8 && (
          <div className="text-sm text-blue-500 px-1">
            <InfoIcon sx={{ color: "black", mx: 1 }} />
            {translate('durationWarning')}
          </div>
        )}
      </div>

      <Dropdown
        label={translate('selectFrequency')}
        value={frequency}
        options={frequencyOptions}
        onChange={(value) => setFrequency(value)}
      />
      <Dropdown
        label={translate('preferredLanguage')}
        value={language}
        options={languageOptions}
        onChange={(value) => setLanguage(value)}
      />
      <Dropdown
        label={translate('careProfessionalGender')}
        value={contactType}
        options={contactTypeOptions}
        onChange={(value) => setContactType(value)}
      />
      <div>
        <Dropdown
          label={pageType === "child" ? translate('numberOfChildren') : translate('numberOfElders')}
          value={numChild}
          options={numchildOptions}
          onChange={handleNumChildChange}
        />
        {isOtherSelected && (
          <div className="text-md text-blue-500 px-1">
            <InfoIcon sx={{ color: "black", mx: 1 }} />
            {translate('otherNumberWarning')}
          </div>
        )}
      </div>

      {parseInt(numChild, 10) > 0 &&
        Array.from({ length: parseInt(numChild, 10) }, (_, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:space-x-2 space-y-4 sm:space-y-0"
          >
            <div className="w-full sm:w-2/4">
              <Dropdown
                label={`${pageType === "child" ? translate('child') : translate('elder')} ${index + 1} ${translate('age')}`}
                value={childInfo[index]?.age || ""}
                options={pageType === "child" ? childageOption : elderageOption}
                onChange={(value) => handleChildInfoChange(index, "age", value)}
              />
            </div>
            <div className="w-full sm:w-1/3">
              <Dropdown
                label={translate('gender')}
                value={childInfo[index]?.gender || ""}
                options={genderOptions}
                onChange={(value) => handleChildInfoChange(index, "gender", value)}
              />
            </div>
            <div className="w-full sm:w-1/3">
              <label className="text-sm font-medium text-blue-900">
                {translate('name')}
              </label>
              <input
                type="text"
                className="w-full border mt-2 border-blue-900 rounded p-2 text-black placeholder-gray-400 hover:border-[#002F6D] focus:border-[#002F6D] outline-none"
                placeholder={translate('enterName')}
                value={childInfo[index]?.name || ""}
                onChange={(e) => handleChildInfoChange(index, "name", e.target.value)}
              />
            </div>
          </div>
        ))}

      <Dropdown
        label={translate('specialRequest')}
        value={specialRequest}
        options={specialRequestOptions}
        onChange={(value) => setSpecialRequest(value)}
      />
      <Dropdown
        label={translate('serviceProvidingPlace')}
        value={propertyType}
        options={propertyTypeOptions}
        onChange={(value) => setPropertyType(value)}
      />
    </div>
  );
};

export default BookingSectionCart2;