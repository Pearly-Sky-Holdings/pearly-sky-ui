import React from 'react';

interface TermsItem {
  title: string;
  items: string[];
}

interface TermsAndConditionsProps {
  title?: string;
  showCheckbox?: boolean;
  isAccepted?: boolean;
  onAcceptChange?: (accepted: boolean) => void;
  checkboxLabel?: string;
  className?: string;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({
  title = "Before you book",
  showCheckbox = true,
  isAccepted = false,
  onAcceptChange,
  checkboxLabel = "I have read and accept the above terms and considerations",
  className = "",
}) => {
  // Integrated bookingTerms data directly into the component
  const terms: TermsItem[] = [
    {
      title: "Consider Property Size and Architecture",
      items: [
        "Evaluate the size and layout of your property before deciding on the number of cleaners",
        "Larger properties or complex layouts may require more time or additional cleaners",
      ],
    },
    {
      title: "Factor in Additional Cleaning Services",
      items: [
        "Some services may require specialized cleaning or additional time",
        "Consider bundling services for better value",
      ],
    },
    {
      title: "Limitations or Continuous Working Hours",
      items: [
        "Maximum continuous working hours apply",
        "Plan the number of cleaners accordingly",
      ],
    },
    {
      title: "Booking cancellation",
      items: [
        "24-hour notice required for cancellations",
        "Late cancellations may incur fees",
      ],
    },
    {
      title: "Accept company cookies policy",
      items: [],
    },
  ];

  return (
    <div className={`bg-blue-950 text-white rounded-lg p-4 md:p-6 ${className}`}>
      <h3 className="text-lg md:text-xl font-semibold mb-4">{title}</h3>
      <ol className="list-decimal pl-4 md:pl-5 space-y-4">
        {terms.map((term, index) => (
          <li key={index}>
            {term.title}
            {term.items.length > 0 && (
              <ul className="list-disc pl-4 md:pl-5 mt-2 text-sm text-gray-400">
                {term.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
      {showCheckbox && (
        <div className="mt-6">
          <label className="flex items-start space-x-2 text-white">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              checked={isAccepted}
              onChange={(e) => onAcceptChange?.(e.target.checked)}
            />
            <span className="text-sm">{checkboxLabel}</span>
          </label>
        </div>
      )}
    </div>
  );
};

export default TermsAndConditions;