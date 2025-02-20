import React from "react";
import EducationCard from "./components/education-card";
import SectionTitle from "../section-title/section-title";
import { educationList } from "./assets/education-list";

const Education: React.FC = () => {
  return (
    <div id="education">
      <SectionTitle text="Education" />
      <section className="bg-gray-900 py-12 my-5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6">
            {educationList.map((edu, index) => (
              <EducationCard key={index} {...edu} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
