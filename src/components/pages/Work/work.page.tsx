import React from "react";
import ShinyBorder from "@/components/custom/ShinyBorder";
import { WORK_EXPERIENCE } from "@/constants/work";

export default function WorkPage() {
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
          Engineering scalable, high-impact solutions with modern technologies.
        </p>
      </div>
      <div>
        {WORK_EXPERIENCE.map((each) => (
          <ShinyBorder
            scrollEffect
            key={each.name}
            className="mb-6 rounded-xl border border-white/10 bg-[#ffffff08] p-6 transition-all duration-500 ease-in-out before:opacity-40 after:opacity-40"
          >
            <div>
              <div>
              <div className="flex flex-wrap items-center gap-1 py-6">
                <each.icon className="mr-3 size-14 shrink-0 rounded-lg border border-white/10 bg-white/5 p-1.5" />
                <div>
                  <h3 className="text-3xl">{each.name}</h3>
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
                </p>
              </div></div>
              <div className="pt-4">
                <h4 className="text-xl text-white/80 max-md:text-base">
                  About {each.name}:
                </h4>
                <p className="mt-1 text-white/60 max-md:text-sm">
                  {each.about}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-black px-4 py-4">
              <p className="text-[17px] text-white/90 max-md:text-sm">
                {each.my_experience.desc}
              </p>
              <ul className="mt-2 list-outside list-disc pl-6 text-white/60 *:mb-1 max-md:pl-4.5 max-md:text-sm">
                {Object.entries(each.my_experience.points).map(
                  ([key, value], ind) => (
                    <li key={`keys-${ind}`}>
                      <span className="font-bold text-white/80">{key}</span>:{" "}
                      {value}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </ShinyBorder>
        ))}
      </div>
    </div>
  );
}
