import React from 'react';
import { Search, MapPin, Clock } from "lucide-react";
import { careerImage1 } from "../../config/images";

function CareerPage() {
    const jobListings = [
      {
        title: "Cleaners Male / Female",
        type: "Full time",
        location: "France",
      },
      {
        title: "Children Care Worker Male / Female",
        type: "Full time",
        location: "France",
      },
      {
        title: "Elder Care Worker Male / Female",
        type: "Full time",
        location: "France",
      },
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col gap-10">
        {/* Hero section with search */}
        <div
          className="w-full h-64 bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${careerImage1})`,
            height: "500px",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-4xl px-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-3 border-b md:border-b-0 md:border-r border-gray-200">
                    <div className="flex items-center">
                      <Search className="h-5 w-5 text-gray-400 mr-2" />
                      <input
                        type="text"
                        placeholder="Job Title"
                        className="w-full outline-none text-gray-700"
                      />
                    </div>
                  </div>
                  <div className="flex-1 p-3 border-b md:border-b-0 md:border-r border-gray-200">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                      <input
                        type="text"
                        placeholder="City, State, Zip"
                        className="w-full outline-none text-gray-700"
                      />
                    </div>
                  </div>
                  <div className="p-3">
                    <button className="w-full bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-6 rounded">
                      Search Job
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Job listings */}
        <div className="container mx-auto px-4 py-8 max-w-6xl mt-3">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden ">
            <div className="divide-y divide-gray-200  ">
              {jobListings.map((job, index) => (
                <div key={index} className="p-6 mb-5">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {job.title}
                      </h3>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                        <p>{job.type}</p>
                        <MapPin className="flex-shrink-0 ml-4 mr-1.5 h-4 w-4 text-gray-400" />
                        <p>{job.location}</p>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Apply Now
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