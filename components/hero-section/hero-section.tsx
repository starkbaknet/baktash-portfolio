import Button from "../button/button";
import TextSection from "./components/text-section";
import ProfileCard from "./components/profile-card";

const HeroSection = () => {
  return (
    <div
      className="relative flex flex-col md:flex-row items-center justify-center lg:-my-44 md:-my-44 bg-black text-white px-6"
      id="home"
    >
      <br />
      <br />
      <br />
      <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">
        <ProfileCard />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left order-2 md:order-1 mt-10 md:mt-0">
        <TextSection />
        <Button text="Download Resume" />
      </div>
    </div>
  );
};

export default HeroSection;
