import React from "react";
import ProficiencyCard from "./components/proficiency-card";
import { proficiencyList } from "./assets/proficiency-list";
import SectionTitle from "../section-title/section-title";

const ProficiencySection = () => {
  return (
    <div id="proficiency">
      <SectionTitle text="Proficiency" />
      <div className="text-white max-w-3xl mx-auto p-6">
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {Object.entries(proficiencyList).map(([category, level]) => (
            <ProficiencyCard key={category} category={category} level={level} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProficiencySection;
