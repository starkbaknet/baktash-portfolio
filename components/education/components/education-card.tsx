import React from "react";

interface EducationCardProps {
  logo?: string;
  institution: string;
  degree: string;
  duration: string;
  description: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  logo,
  institution,
  degree,
  duration,
  description,
}) => {
  return (
    <div className="bg-black text-white rounded-lg p-6 shadow-lg flex flex-col md:flex-row items-center gap-4 md:gap-6 max-w-lg">
      {logo && (
        <img
          src={logo}
          alt={institution}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full"
        />
      )}

      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold text-blue-400">{institution}</h3>
        <p className="text-sm text-gray-400">{degree}</p>
        <p className="text-xs text-gray-500">{duration}</p>
        <p className="text-sm mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default EducationCard;
