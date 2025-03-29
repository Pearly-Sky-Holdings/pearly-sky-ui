import React from "react";
import { useLanguage } from "../../context/LanguageContext";

interface DropdownProps {
  label: string;
  value: string;
  options?: { value: string; label: string }[];
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "dropdown" | "text" | "number";
  min?: number;
  max?: number;
  className?: string;
  readOnly?: boolean;
  autoSuggestedValue?: string | number;
  required?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  options = [],
  onChange,
  placeholder = "selectOption",
  type = "dropdown",
  min,
  max,
  className = "",
  readOnly = false,
  autoSuggestedValue,
  required = false,
}) => {
  const { translate } = useLanguage();
  const isEdited = autoSuggestedValue !== undefined && value !== autoSuggestedValue.toString();

  return (
    <div className={`mb-4 ${className}`}>
      <label className={`block mb-2 text-blue-900 ${required ? "font-semibold" : ""}`}>
        {translate(label)}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {type === "dropdown" ? (
        <select
          className={`w-full border border-blue-900 rounded p-2 text-black ${
            readOnly ? "bg-gray-100 cursor-not-allowed" : "hover:border-[#002F6D]"
          }`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={readOnly}
          aria-label={translate(label)}
        >
          <option value="">{translate(placeholder)}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {translate(option.label)}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={translate(placeholder)}
          min={min}
          max={max}
          readOnly={readOnly}
          disabled={readOnly}
          className={`w-full border border-blue-900 rounded p-2 text-black placeholder-gray-400 
            ${readOnly ? "bg-gray-100 cursor-not-allowed" : "hover:border-[#002F6D]"}
            focus:border-[#002F6D] outline-none`}
          aria-label={translate(label)}
        />
      )}

      {isEdited && (
        <p className="mt-1 text-sm text-gray-500">
          {translate('suggestedCleaners')}: {autoSuggestedValue}
        </p>
      )}
    </div>
  );
};

export default Dropdown;