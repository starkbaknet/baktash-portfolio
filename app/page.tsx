import CenteredBox from "@/components/centered-box/centered-box";
import Education from "@/components/education/education";
import HeroSection from "@/components/hero-section/hero-section";
import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <CenteredBox>
      <HeroSection />
      <Skills />
      <Education />
      {/* 
      <SectionTitle text="Education" />
      <SectionTitle text="Experience" />
      <SectionTitle text="Proficiency" /> */}
    </CenteredBox>
  );
}
