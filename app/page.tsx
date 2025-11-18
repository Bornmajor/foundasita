import React from "react";
import HeroSection from "./sections/HeroSection/HeroSection";
import AboutUs from "./sections/AboutUs/AboutUs";
import OurPrograms from "./sections/OurPrograms/OurPrograms";
import WorkActions from "./sections/WorkActions/WorkActions";
import OurTeam from "./sections/OurTeam/OurTeam";

// home page
const page = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <OurPrograms />
      <WorkActions />
      <OurTeam />
      
    </>
  );
};

export default page;
