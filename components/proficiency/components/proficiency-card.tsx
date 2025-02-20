import React from "react";

interface ProficiencyCardProps {
  category: string;
  level: number; // Percentage (0 - 100)
}

const ProficiencyCard: React.FC<ProficiencyCardProps> = ({
  category,
  level,
}) => {
  return (
    <div className="flex flex-col w-full">
      <span className="text-white text-sm font-semibold uppercase">
        {category}
      </span>
      <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProficiencyCard;
