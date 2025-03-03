import React from "react";
import { inforImage } from "../../config/images.ts";

const InformationPage: React.FC = () => {
  return (
    <div className="bg-[#0A285F] min-h-screen p-6">
      {/* Modified grid with responsive padding */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-0 md:m-5">
        {/* Image container with responsive padding */}
        <div className="flex justify-center items-center px-0 md:px-4">
          <img
            src={inforImage}
            alt="Company Info"
            className="w-full md:w-[800px] h-auto md:h-[590px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Details */}
        <div className="text-white p-6 rounded-lg md:ml-5">
          <div className="space-y-6">
            <div className="flex flex-col items-start space-y-2">
              <img
                src="./images/info_world.png"
                alt="Research Icon"
                className="w-6 h-6"
              />
              <h3 className="font-bold text-m">Researching and Planning</h3>
              <p>
                At Pearly Sky Cleaning, we tailor efficient cleaning strategies
                through careful research and planning, ensuring top-quality
                results for homes and businesses across France.
              </p>
            </div>

            <div className="flex flex-col items-start space-y-2">
              <img
                src="./images/info_recycle.png"
                alt="Eco Icon"
                className="w-6 h-6"
              />
              <h3 className="font-bold text-m">Eco-Friendly Cleaning</h3>
              <p>
                At Pearly Sky Cleaning, we deliver sustainable, eco-friendly
                solutions that protect the environment while ensuring top-quality
                results. Trust us to prioritize efficiency, conservation, and a
                cleaner planet.
              </p>
            </div>

            <div className="flex flex-col items-start space-y-2">
              <img
                src="./images/info_hammer.png"
                alt="Equipment Icon"
                className="w-6 h-6"
              />
              <h3 className="font-bold text-m">Next Gen Equipments</h3>
              <p>
                At Pearly Sky Cleaning, we use state-of-the-art equipment to
                ensure superior efficiency and results. Experience the difference
                with our innovative, next-generation cleaning solutions.
              </p>
            </div>

            <div className="flex flex-col items-start space-y-2">
              <img
                src="./images/info_right.png"
                alt="Safety Icon"
                className="w-6 h-6"
              />
              <h3 className="font-bold text-m">Safety and Compliance</h3>
              <p>
                At Pearly Sky Cleaning, we prioritize safety and adhere to strict
                compliance standards, ensuring the well-being of both clients and
                employees. Trust us to follow rigorous safety protocols for peace
                of mind on every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPage;