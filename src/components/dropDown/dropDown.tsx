import React from "react";

interface DropdownProps {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  options,
  onChange,
  placeholder = "Select an option",
  className = "",
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block mb-2 text-black">{label}</label>
      <select
        className="w-full border border-blue-900 rounded p-2 text-gray-400"
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
    </div>
  );
};

export default Dropdown;