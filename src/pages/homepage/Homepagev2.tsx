import React from "react";
import DeveloperProfile from "./mainsection/DeveloperProfile";
import DeveloperBio from "./mainsection/DeveloperBio";

export default function Homev2() {
  return (
    <main className="animate-slider flex h-[100dvh] gap-6 bg-[linear-gradient(90deg,#0000_1%_,var(--background)_1%_99%_,#0000_99%),radial-gradient(65%_300%_at_0%_calc(100%-var(--y)),#fff9,transparent_10%),radial-gradient(65%_300%_at_100%_var(--y),#fff9,transparent_10%)] bg-size-[_5%_5%,cover,cover] font-[family-name:var(--font-geist-mono)] *:flex-[1_1_50%]">
      <DeveloperProfile />
      <DeveloperBio />
    </main>
  );
}
