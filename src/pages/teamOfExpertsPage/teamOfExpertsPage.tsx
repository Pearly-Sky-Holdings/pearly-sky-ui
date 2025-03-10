import React from "react";
import TeamCard from "../../components/teamCard/teamCard";
const emailIcon = "./images/teamExperts/email_icon.png";
import { oshan, anusha, nipuna, Shakila} from "../../config/images";

const teamMembers = [
  {
    name: "Mr Oshan Bandara",
    title:"Operations Manager",
    image: oshan,
    email: "oshanhb@pearlyskyplc.com ",
  },
  {
    name: "Mrs Anusha Niroshini",
    title:"Sales Director",
    image: anusha,
    email: "anushatan@pearlyskyplc.com",
  },
  {
    name: "Mr Nipuna Piyumal",
    title:"Technical Support ",
    image: nipuna,
    email: "nipunapiyumal@pearlyskyplc.com",
  },
  {
    name: "Mr Shakila Bandara",
    title:"Operations Manager",
    image: Shakila,
    email: "shakilaib@pearlyskyplc.com",
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
