import React from "react";

interface SectionTitleProps {
  text: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
  return (
    <div className="flex flex-col items-center text-white">
      <div className="inline-block text-center">
        <h2 className="text-2xl font-bold">{text}</h2>
        <div className="w-full h-1 bg-blue-500 mt-1"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
