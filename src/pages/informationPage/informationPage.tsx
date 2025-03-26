import React from "react";
import { inforImage } from "../../config/images.ts";
import { useLanguage } from "../../context/LanguageContext";

const InformationPage: React.FC = () => {
  const { translate } = useLanguage();

  return (
    <div className="bg-[#0A285F] min-h-screen p-6">
      {/* Modified grid with responsive padding */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 m-0 md:m-5">
        {/* Image container with responsive padding */}
        <div className="flex justify-center items-center px-0 md:px-4">
          <img
            src={inforImage}
            alt={translate('companyInfoAlt')}
            className="w-full md:w-[800px] h-auto md:h-[590px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Details */}
        <div className="text-white p-6 rounded-lg md:ml-5">
          <div className="space-y-6">
            <div className="flex flex-col items-start space-y-2">
              <img
                src="./images/info_world.png"
                alt={translate('researchIconAlt')}
                className="w-6 h-6"
              />
              <h3 className="font-bold text-m">{translate('researchPlanningTitle')}</h3>
              <p>{translate('researchPlanningDesc')}</p>
            </div>

            <div className="flex flex-col items-start space-y-2">
              <img
                src="./images/info_recycle.png"
                alt={translate('ecoIconAlt')}
                className="w-6 h-6"
              />
              <h3 className="font-bold text-m">{translate('ecoFriendlyTitle')}</h3>
              <p>{translate('ecoFriendlyDesc')}</p>
            </div>

            <div className="flex flex-col items-start space-y-2">
              <img
                src="./images/info_hammer.png"
                alt={translate('equipmentIconAlt')}
                className="w-6 h-6"
              />
              <h3 className="font-bold text-m">{translate('nextGenEquipmentTitle')}</h3>
              <p>{translate('nextGenEquipmentDesc')}</p>
            </div>

            <div className="flex flex-col items-start space-y-2">
              <img
                src="./images/info_right.png"
                alt={translate('safetyIconAlt')}
                className="w-6 h-6"
              />
              <h3 className="font-bold text-m">{translate('safetyComplianceTitle')}</h3>
              <p>{translate('safetyComplianceDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPage;