import React from "react";
import TeamCard from "../../components/teamCard/teamCard";
const emailIcon = "./images/teamExperts/email_icon.png";
import { teamExperts1, teamExperts2, teamExperts3, teamExperts4 } from "../../config/images";

const teamMembers = [
  {
    name: "Mr Oshan Bandarar",
    title:"Operations Manager",
    image: teamExperts1,
    email: "callcenter@company.com",
  },
  {
    name: "Mrs Anusha Niroshini",
    title:"Sales Director",
    image: teamExperts2,
    email: "callcenter@company.com",
  },
  {
    name: "Mr Nipuna Piyumal",
    title:"Administration Manager",
    image: teamExperts3,
    email: "callcenter@company.com",
  },
  {
    name: "Mr Shakila Bandara",
    title:"Operations Manager",
    image: teamExperts4,
    email: "callcenter@company.com",
  },
];


const TeamOfExpertsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-10 py-12">
      {/* Title Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-900">Team of Experts</h2>
        <p className="text-black font-semibold mt-5">
          Our team is working every day to build a better world & help ensure
          you get the best services.
        </p>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} name={member.name} title={member.title} image={member.image} emailIcon={emailIcon}  email={member.email} />
        ))}
      </div>
    </div>
  );
};

export default TeamOfExpertsPage;
