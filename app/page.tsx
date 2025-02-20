import CenteredBox from "@/components/centered-box/centered-box";
import Education from "@/components/education/education";
import Experience from "@/components/experience/experience";
import Footer from "@/components/footer/footer";
import HeroSection from "@/components/hero-section/hero-section";
import Proficiency from "@/components/proficiency/proficiency";
import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <CenteredBox>
      <HeroSection />
      <Skills />
      <Education />
      <Experience />
      <Proficiency />
      <Footer />
    </CenteredBox>
  );
}
