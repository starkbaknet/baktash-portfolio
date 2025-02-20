import React from "react";
import ExperienceCard from "./components/experience-card";
import SectionTitle from "../section-title/section-title";
import { ExperiencesList } from "./assets/experience-list";

const Experience: React.FC = () => {
  return (
    <div id="experience">
      <SectionTitle text="Experience" />
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {ExperiencesList.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
