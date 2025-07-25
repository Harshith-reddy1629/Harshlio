import ShinyBorder from "@/components/custom/ShinyBorder";
import { SKILLSET_WITH_SVG } from "@/constants/skills";

import React from "react";

export default function Mystacks() {
  return (
    <div className="mx-auto w-full px-4 py-12 md:max-w-2/3 md:px-8">
      <div className="mb-12">
        <h2 className="text-5xl">
          {" "}
          <span className="bg-[radial-gradient(#fff9,#fff6)] bg-clip-text text-transparent">
            My
          </span>{" "}
          <br />{" "}
          <span className="bg-[radial-gradient(#fff9,#fff9)] bg-clip-text text-transparent">
            {" "}
            Skills
          </span>
        </h2>
        <p></p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-4">
        {SKILLSET_WITH_SVG.map((i) => (
          <ShinyBorder
            scrollEffect
            key={i.name}
            className="rounded-xl border border-white/10 bg-[#ffffff08] p-3 px-6 transition-all duration-500 before:opacity-40 after:opacity-40"
          >
            <div className="flex items-center gap-4">
              <i.icon className="size-10 rounded-lg border border-white/15 bg-white/5 p-1" />
              <div>
                <h3 className="text-xl">{i.name}</h3>
              </div>
            </div>
            <p className="mt-3 rounded-lg bg-black p-1.5 px-3 text-[10px] text-white/80">
              {i.description}
            </p>
          </ShinyBorder>
        ))}
      </div>
    </div>
  );
}
