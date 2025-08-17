import React from "react";
import ShinyBorder from "@/components/custom/ShinyBorder";
import { WORK_EXPERIENCE } from "@/constants/work";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function MyWorks() {
  return (
    <div className="mx-auto flex w-full flex-col px-4 py-12 md:max-w-[1200px] md:px-8">
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
      <div className="grid gap-x-6 md:grid-cols-2">
        {WORK_EXPERIENCE.map((each) => (
          <ShinyBorder
            scrollEffect
            key={each.name}
            className="mb-6 flex flex-col rounded-xl border border-white/10 bg-[#ffffff08] p-6 transition-all duration-500 ease-in-out before:opacity-40 after:opacity-40 first:md:col-span-2"
          >
            <div>
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
            </div>
            {each?.description && (
              <div className="mt-6 grow rounded-xl bg-black px-4 py-5">
                <p className="text-[clamp(12px,1.5vw,14px)]">
                  {each.description}
                </p>
              </div>
            )}
            <Link
              href={"/work"}
              className="group mt-4 inline-flex items-center gap-1.5 self-start rounded-md bg-white/10 p-2 px-6 text-sm transition-all duration-300 hover:bg-white/5"
            >
              {" "}
              {/* View more about {each.name} */}
              Explore Full Project Details
              <MoveRight className="size-4 transition-all duration-300 group-hover:translate-x-1" />
            </Link>
          </ShinyBorder>
        ))}
      </div>
      <Link
        href={"/work"}
        className="group mx-auto mt-4 inline-flex items-center gap-1.5 rounded-md bg-white/10 p-2 px-6 text-sm transition-all duration-300 hover:bg-white/5"
      >
        {" "}
        Browse All My Work
        <MoveRight className="size-4 transition-all duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
