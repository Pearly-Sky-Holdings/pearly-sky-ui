import React from "react";
import { motion } from "framer-motion";

interface TeamCardProps {
  name: string;
  title: string;
  image: string;
  emailIcon: string;
  email: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, title, image, emailIcon, email }) => {
  return (
    <motion.div
    style={{boxShadow: "0px 4px 10px rgba(37, 150, 190, 0.5)",}}
      className="bg-gradient-to-b from-[#002F6D] to-[#0D90C8] text-white rounded-3xl p-6 flex flex-col items-center h-100 shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image  */}
      <motion.div
        className="lg:w-[150px] lg:h-[150px] md:w-[150px] md:h-[150px] w-[150px] h-[150px] bg-white rounded-full flex items-center justify-center overflow-hidden mt-2"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
      </motion.div>

      {/* Name */}
      <div className="mt-5">
        <h3 className="text-md font-semibold text-center">{name}</h3>
      </div>

      {/* title */}
      <div className="mt-2">
        <h3 className="text-md font-semibold text-center">{title}</h3>
      </div>

     
      <div className="flex-grow"></div>

      {/* Email*/}
      <motion.a
        href={`mailto:${email}`}
        className="mt-auto mb-10"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <img src={emailIcon} alt="Email" className="w-8 h-8" />
      </motion.a>
    </motion.div>
  );
};

export default TeamCard;
