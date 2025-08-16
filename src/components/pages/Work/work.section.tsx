import React from "react";
import ShinyBorder from "@/components/custom/ShinyBorder";
import { WORK_EXPERIENCE } from "@/constants/work";

export default function MyWorks() {
  return (
    <div className="mx-auto w-full px-4 py-12 md:max-w-[1200px] md:px-8">
      <div className="mb-12">
        <h2 data-scroll-effect className="text-5xl">
          {" "}
          <span
            data-scroll-effect
            className="bg-[radial-gradient(#fff9,#fff8)] bg-clip-text text-transparent"
          >
            Work
          </span>{" "}
          <br />{" "}
          <span
            data-scroll-effect
            className="bg-[radial-gradient(#fff9,#fff9)] bg-clip-text text-transparent"
          >
            {" "}
            Experience
          </span>
        </h2>
        <p data-scroll-effect className="mt-6 text-white/60">
          Crafting robust, scalable applications with precision and modern
          technologies.
        </p>
      </div>
      <div>
        {WORK_EXPERIENCE.map((each) => (
          <ShinyBorder
            scrollEffect
            key={each.name}
            className="mb-6 rounded-xl border border-white/10 bg-[#ffffff08] p-6 transition-all duration-500 ease-in-out before:opacity-40 after:opacity-40"
          >
            <div className="flex flex-wrap items-center gap-1">
              <each.icon className="mr-3 size-13 shrink-0 rounded-lg border border-white/10 bg-white/5 p-1.5" />
              <div>
                <h3 className="text-2xl">{each.name}</h3>
                <p className="text-sm text-white/50">{each.role}</p>
              </div>
              {each.date && (
                <span className="ml-auto rounded-full bg-white/5 px-4 py-1 text-xs max-sm:text-[10px] md:text-sm">
                  {each.date}
                </span>
              )}
            </div>
            <div>
              <p className="mt-3 flex flex-wrap text-xs text-white/50 *:rounded-md *:bg-white/5 *:px-3 *:py-1">
                {each.skillsOverview.map((skill) => (
                  <span
                    key={`${skill}-${each.name}`}
                    className="mr-2 mb-1 text-white"
                  >
                    {skill}
                  </span>
                ))}
                {/* <span className="!bg-transparent !px-1 text-white">
                  + more
                </span>{" "} */}
              </p>
            </div>
            {each?.description && (
              <div className="mt-6 rounded-xl bg-black px-4 py-5">
                <p className="text-[clamp(12px,1.5vw,14px)]">
                  {each.description}
                </p>
              </div>
            )}
          </ShinyBorder>
        ))}
      </div>
    </div>
  );
}
