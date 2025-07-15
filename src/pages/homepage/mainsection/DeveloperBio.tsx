import React from "react";
import SocialMedia from "./SocialMedia";
import NameHeader from "./NameHeader";
import BioPara from "./BioPara";

export default function DeveloperBio() {
  return (
    <div className="flex h-full w-1/2 flex-row items-center">
      <div className="">
        <NameHeader />
        <BioPara />
        <SocialMedia />
      </div>
    </div>
  );
}
