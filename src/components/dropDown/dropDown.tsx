import React from "react";

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
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  options = [],
  onChange,
  placeholder = "Select an option",
  type = "dropdown",
  min,
  max,
  className = "",
  readOnly = false,
  autoSuggestedValue,
}) => {
  const isEdited = autoSuggestedValue !== undefined && value !== autoSuggestedValue.toString();

  return (
    <div className={`mb-4 ${className}`}>
      <label className="block mb-2 text-blue-900">{label}</label>

      {type === "dropdown" ? (
        <select
          className="w-full border border-blue-900 rounded p-2 text-black"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          min={min}
          max={max}
          readOnly={readOnly}
          className={`w-full border border-blue-900 rounded p-2 text-black placeholder-gray-400 
            hover:border-[#002F6D] focus:border-[#002F6D] outline-none ${
              readOnly ? "bg-gray-100 text-black" : ""
            }`}
        />
      )}

      {isEdited && (
        <p className="mt-1 text-sm text-gray-500">
          suggested cleaners: {autoSuggestedValue}
        </p>
      )}
    </div>
  );
};

export default Dropdown;
