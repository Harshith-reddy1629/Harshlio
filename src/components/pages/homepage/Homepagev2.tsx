import React from "react";
import DeveloperProfile from "./mainsection/DeveloperProfile";
import DeveloperBio from "./mainsection/DeveloperBio";
import MyWorks from "./MyworkSection/MyWorks";
import Mystacks from "./MyStacks/Mystacks";
import Projects from "./Projects/Projects";
import ConnectSection from "./Contact/ConnectSection";

export default function Homev2() {
  return (
    <>
      <div className="animate-slider overflow-hidden flex items-center gap-6 sm:bg-[linear-gradient(90deg,#0000_1%_,var(--background)_1%_99%_,#0000_99%),radial-gradient(65%_300%_at_0%_calc(100%-var(--y)),#fff9,transparent_10%),radial-gradient(65%_300%_at_100%_var(--y),#fff9,transparent_10%)] bg-size-[_5%_5%,cover,cover] pt-22 font-[family-name:var(--font-geist-mono)] *:flex-[1_1_50%] max-md:flex-col max-md:items-center max-md:gap-20 md:py-32 md:pt-42">
        <DeveloperProfile />
        <DeveloperBio />
      </div>
      <MyWorks />
      <Mystacks />
      <Projects />
      <ConnectSection />
    </>
  );
}
