import React from "react";
import ImageCarousel from "../../components/showCaseCarousel/showCaseCarousel";

const OurShowcasePage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-10 text-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-blue-900 mb-5">Our Showcase</h2>

      {/* Carousel */}
      <ImageCarousel />
    </div>
  );
};

export default OurShowcasePage;
