import React from "react";
import ShinyBorder from "@/components/custom/ShinyBorder";
import { PROJECTS_OVERVIEW } from "@/constants/work";
import LinkIcon from "@/icons/LinkIcon";

export default function Projects() {
  return (
    <div className="mx-auto w-full px-4 py-12 md:max-w-2/3 md:px-8">
      <div className="mb-12">
        <h2 className="text-5xl">
          <span className="bg-[radial-gradient(#fff9,#fff9)] bg-clip-text text-transparent">
            {" "}
            Projects
          </span>
        </h2>
        <p></p>
      </div>
      <div>
        {PROJECTS_OVERVIEW.map((each) => (
          <ShinyBorder
            scrollEffect
            key={each.name}
            className="mb-6 flex flex-wrap gap-2 rounded-xl border border-white/10 bg-[#ffffff08] p-5 ease-in-out before:opacity-40 after:opacity-40"
          >
            <div className="flex-[1_1_35%] rounded-lg bg-black p-3">
              <div className="">
                <div className="flex items-center gap-1.5">
                  <h3 className="inline text-2xl">{each.name}</h3>
                  <p className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 pr-3 text-[10px] text-white/50">
                    <LinkIcon /> LINK
                  </p>
                </div>
                <div>
                  <p className="mt-2 text-sm text-white/65">Technologies:</p>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs *:rounded *:bg-white/10 *:px-2 *:py-0.5">
                    {each.skillsOverview.map((i, ind) => (
                      <div
                        key={`skillss-${ind}`}
                        className="text-xs text-white/70"
                      >
                        {i}
                      </div>
                    ))}{" "}
                    {/* <div className="!bg-transparent !px-1 text-white">
                      + more
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="min-w-[300px] flex-[1_1_60%] px-3">
              <p>Responsibilities</p>
              <ul className="mt-2 list-inside list-disc text-xs text-white/70 *:mb-1">
                {each.points.map((i, ind) => (
                  <li key={`keys-${ind}`}>{i}</li>
                ))}
              </ul>
            </div>
          </ShinyBorder>
        ))}
      </div>
    </div>
  );
}
