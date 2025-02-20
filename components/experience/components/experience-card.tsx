import React from "react";

interface WorkExperienceCardProps {
  logo?: string;
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
}

const ExperienceCard: React.FC<WorkExperienceCardProps> = ({
  logo,
  company,
  position,
  duration,
  responsibilities,
}) => {
  return (
    <div className="bg-gray-900 text-white rounded-lg p-6 shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6 max-w-2xl">
      {logo && (
        <img
          src={logo}
          alt={company}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full"
        />
      )}

      <div>
        <h3 className="text-xl font-bold text-yellow-400">{position}</h3>
        <p className="text-md font-semibold text-gray-300">{company}</p>
        <p className="text-xs text-gray-500 mb-2">{duration}</p>

        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
