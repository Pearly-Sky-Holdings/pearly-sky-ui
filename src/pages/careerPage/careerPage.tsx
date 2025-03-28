import { Search, MapPin, Clock } from "lucide-react";
import { careerImage1 } from "../../config/images";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

function CareerPage() {
  const navigate = useNavigate();
  const { translate } = useLanguage();

  const jobListings = [
    {
      id: 1,
      title: translate('careerCleanerTitle'),
      type: translate('careerCleanerType'),
      location: `${translate('france')} / ${translate('unitedKingdom')}`
    },
    {
      id: 2,
      title: translate('careerChildCareTitle'),
      type: translate('careerFullPartTime'),
      location: `${translate('france')} / ${translate('unitedKingdom')}`
    },
    {
      id: 3,
      title: translate('careerElderCareTitle'),
      type: translate('careerFullPartTime'),
      location: `${translate('france')} / ${translate('unitedKingdom')}`
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col gap-6 md:gap-10 pt-1">
      {/* Hero section with search */}
      <div
        className="w-full bg-cover bg-center relative h-[300px] md:h-[500px] bg-blue"
        style={{
          backgroundImage: `url(${careerImage1})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-30 md:bg-opacity-0">
          <div className="w-full max-w-4xl px-4 mx-2 md:mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-2 md:p-3 border-b md:border-b-0 md:border-r border-gray-200">
                  <div className="flex items-center">
                    <Search className="h-4 w-4 md:h-5 md:w-5 text-gray-400 mr-2" />
                    <input
                      type="text"
                      placeholder={translate('jobTitlePlaceholder')}
                      className="w-full outline-none text-sm md:text-base text-gray-700"
                    />
                  </div>
                </div>
                <div className="flex-1 p-2 md:p-3 border-b md:border-b-0 md:border-r border-gray-200">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-gray-400 mr-2" />
                    <input
                      type="text"
                      placeholder={translate('locationPlaceholder')}
                      className="w-full outline-none text-sm md:text-base text-gray-700"
                    />
                  </div>
                </div>
                <div className="p-2 md:p-3">
                  <button
                    className="w-30 h-8"                  
                    style={{ background: "#002F6D", fontSize: "12px", color: "white" }}
                  >
                    {translate('searchJob')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job listings */}
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-6xl">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {jobListings.map((job, index) => (
              <div key={index} className="p-4 md:p-6 mb-3 md:mb-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-medium text-gray-900">
                      {job.title}
                    </h3>
                    <div className="mt-2 flex flex-col sm:flex-row sm:items-center text-xs md:text-sm text-gray-500">
                      <div className="flex items-center mb-1 sm:mb-0">
                        <Clock className="flex-shrink-0 mr-1.5 h-3 w-3 md:h-4 md:w-4 text-gray-400" />
                        <p>{job.type}</p>
                      </div>
                      <div className="flex items-center sm:ml-4">
                        <MapPin className="flex-shrink-0 mr-1.5 h-3 w-3 md:h-4 md:w-4 text-gray-400" />
                        <p>{job.location}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 md:mt-0 md:ml-4">
                    <button
                      className="w-35 h-auto py-2 px-2 md:py-2 md:px-4"
                      onClick={() => {navigate(`/application-form/${job.id}`); }}
                      style={{ background: "#002F6D", fontSize: "12px", color: "white" }}
                    >
                      {translate('applyNow')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerPage;