import React from "react";
import TeamCard from "../../components/teamCard/teamCard";

const teamMembers = [
  {
    name: "Call Center",
    image: "./images/teamExperts/callCenter.png",
    email: "callcenter@company.com",
  },
  {
    name: "Sales Manager",
    image: "./images/teamExperts/salesManager.png",
    email: "callcenter@company.com",
  },
  {
    name: "Customer Relationship Manager",
    image: "./images/teamExperts/customerManager.png",
    email: "callcenter@company.com",
  },
  {
    name: "Team Expertise",
    image: "./images/teamExperts/teamExperts.png",
    email: "callcenter@company.com",
  },
];

const emailIcon = "./images/teamExperts/email_icon.png"; // Path to email icon image

const TeamOfExpertsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-10 py-12">
      {/* Title Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-900">Team of Experts</h2>
        <p className="text-black font-black mt-5">
          Our team is working every day to build a better world & help ensure
          you get the best services.
        </p>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} name={member.name} image={member.image} emailIcon={emailIcon}  email={member.email} />
        ))}
      </div>
    </div>
  );
};

export default TeamOfExpertsPage;
