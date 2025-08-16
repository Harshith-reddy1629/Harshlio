import React from "react";
import SocialMedia from "./SocialMedia";
import NameHeader from "./NameHeader";
import BioPara from "./BioPara";

export default function DeveloperBio() {
  return (
    <div className="flex md:h-full w-1/2 max-md:w-full max-md:max-w-[480px] max-md:justify-center flex-row items-center">
      <div className="">
        <NameHeader />
        <BioPara />
        <SocialMedia />
      </div>
    </div>
  );
}
