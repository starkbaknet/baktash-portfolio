import CenteredBox from "@/components/centered-box/centered-box";
import HeroSection from "@/components/hero-section/hero-section";
import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <CenteredBox>
      <HeroSection />
      <Skills />
      {/* 
      <SectionTitle text="Education" />
      <SectionTitle text="Experience" />
      <SectionTitle text="Proficiency" /> */}
    </CenteredBox>
  );
}
