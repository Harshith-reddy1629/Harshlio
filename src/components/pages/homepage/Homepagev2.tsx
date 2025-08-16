import React from "react";
import DeveloperProfile from "./mainsection/DeveloperProfile";
import DeveloperBio from "./mainsection/DeveloperBio";
import MyWorks from "../Work/work.section";
import Mystacks from "./MyStacks/Mystacks";
import Projects from "../Projects/Projects";
import ConnectSection from "../Contact/ConnectSection";
import About from "../About/About";

export default function Homev2() {
  return (
    <>
      <div className="flex min-h-dvh items-center gap-6 overflow-hidden bg-size-[_5%_5%,cover,cover] pt-22 font-[family-name:var(--font-geist-mono)] *:flex-[1_1_50%] max-md:flex-col max-md:items-center max-md:gap-22 max-md:py-20 md:py-32 md:pt-42">
        <DeveloperProfile />
        <DeveloperBio />
      </div>
      <About />
      <MyWorks />
      <Mystacks />
      <Projects />
      <ConnectSection />
    </>
  );
}
