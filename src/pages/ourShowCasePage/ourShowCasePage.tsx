import React from "react";
import ImageCarousel from "../../components/showCaseCarousel/showCaseCarousel";
import { useLanguage } from "../../context/LanguageContext";

const OurShowcasePage: React.FC = () => {
    const { translate } = useLanguage();
  return (
    <div className="container mx-auto px-6 py-10 text-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-blue-900 mb-5">{translate('ourShowcaseTitle')} </h2>

      {/* Carousel */}
      <ImageCarousel />
    </div>
  );
};

export default OurShowcasePage;
