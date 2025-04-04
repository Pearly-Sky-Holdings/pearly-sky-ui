import React from "react";
import TeamCard from "../../components/teamCard/teamCard";
const emailIcon = "./images/teamExperts/email_icon.png";
import { oshan, anusha, nipuna, Shakila } from "../../config/images";
import { useLanguage } from "../../context/LanguageContext";

const TeamOfExpertsPage: React.FC = () => {
  const { translate } = useLanguage();

  const teamMembers = [
    {
      nameKey: "oshanBandara",
      titleKey: "operationsManager",
      image: oshan,
      email: "oshanhb@pearlyskyplc.com",
    },
    {
      nameKey: "anushaNiroshini",
      titleKey: "salesDirector",
      image: anusha,
      email: "anushatan@pearlyskyplc.com",
    },
    {
      nameKey: " ",
      titleKey: "CustomerSupportManager",
      image: nipuna,
      email: "helpdesk@pearlyskyplc.com",
    },
    {
      nameKey: "shakilaBandara",
      titleKey: "operationsManager",
      image: Shakila,
      email: "shakilaib@pearlyskyplc.com",
    },
  ];

  return (
    <div className="container mx-auto px-10 py-12">
      {/* Title Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-900">
          {translate('teamOfExpertsTitle')}
        </h2>
        <p className="text-black font-semibold mt-5">
          {translate('teamOfExpertsDescription')}
        </p>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {teamMembers.map((member, index) => (
          <TeamCard 
            key={index} 
            name={translate(member.nameKey)} 
            title={translate(member.titleKey)} 
            image={member.image} 
            emailIcon={emailIcon} 
            email={member.email} 
          />
        ))}
      </div>
    </div>
  );
};

export default TeamOfExpertsPage;