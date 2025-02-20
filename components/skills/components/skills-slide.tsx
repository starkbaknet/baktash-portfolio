import React from "react";
import TechBox from "./tech-box";

interface SkillsSlideProps {
  technologies: { name: string; icon: string }[];
}

const SkillsSlide: React.FC<SkillsSlideProps> = ({ technologies }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 p-4 rounded-lg shadow-lg w-full">
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {technologies.map((tech) => (
          <TechBox key={tech.name} name={tech.name} icon={tech.icon} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSlide;
