import React from "react";

interface SectionTitleProps {
  text: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
  return (
    <div className="flex flex-col items-center text-white">
      <h2 className="text-2xl font-bold">{text}</h2>
      <div className="w-16 h-1 bg-blue-500 mt-1"></div>
    </div>
  );
};

export default SectionTitle;
