// components/SkillsSection.tsx
import React from "react";
import SkillsSlide from "./components/skills-slide";
import Slider from "./components/slider";
import SectionTitle from "../section-title/section-title";
import { skillsList } from "./assets/skills-list";

const Skills = () => {
  return (
    <>
      <SectionTitle text="Skills" />
      <div className="py-10 bg-black text-white text-center" id="skills">
        <Slider
          slides={skillsList.map((techs, i) => (
            <SkillsSlide key={i} technologies={techs} />
          ))}
        />
      </div>
    </>
  );
};

export default Skills;
