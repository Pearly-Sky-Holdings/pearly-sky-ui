import React from "react";
import { useLanguage } from "../../context/LanguageContext";

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
  title,
  showCheckbox = true,
  isAccepted = false,
  onAcceptChange,
  checkboxLabel,
  className = "",
}) => {
  const { translate } = useLanguage();

  // Translated terms data
  const terms: TermsItem[] = [
    {
      title: translate('termsPropertySizeTitle'),
      items: [
        translate('termsPropertySizeItem1'),
        translate('termsPropertySizeItem2'),
      ],
    },
    {
      title: translate('termsAdditionalServicesTitle'),
      items: [
        translate('termsAdditionalServicesItem1'),
        translate('termsAdditionalServicesItem2'),
      ],
    },
    {
      title: translate('termsWorkingHoursTitle'),
      items: [
        translate('termsWorkingHoursItem1'),
        translate('termsWorkingHoursItem2'),
      ],
    },
    {
      title: translate('termsCancellationTitle'),
      items: [
        translate('termsCancellationItem1'),
        translate('termsCancellationItem2'),
      ],
    },
    {
      title: translate('termsCookiesTitle'),
      items: [],
    },
  ];

  return (
    <div
      className={`bg-blue-950 bg-cover bg-center text-white rounded-lg p-4 md:p-6 ${className}`}
    >
      <h3 className="text-lg md:text-xl font-semibold mb-4">
        {title || translate('termsDefaultTitle')}
      </h3>
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
            <span className="text-sm">
              {checkboxLabel || translate('termsCheckboxLabel')}
            </span>
          </label>
        </div>
      )}
    </div>
  );
};

export default TermsAndConditions;