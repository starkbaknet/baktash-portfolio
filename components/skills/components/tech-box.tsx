import React from "react";

interface TechBoxProps {
  icon: string;
  name: string;
}

const TechBox: React.FC<TechBoxProps> = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 rounded-md w-20 h-20 sm:w-36 sm:h-36 shadow-md">
      <img src={icon} alt={name} className="w-12 h-12 sm:w-16 sm:h-16" />
      <p className="text-white mt-1 text-xs sm:text-sm">{name}</p>
    </div>
  );
};

export default TechBox;
