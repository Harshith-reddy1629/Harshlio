import React from "react";
import OpenWorkBadge from "@/components/custom/OpenWorkBadge";

export default function NameHeader() {
  return (
    <h1 className="relative mx-auto mb-8 w-fit rounded border border-amber-50/20 p-3 px-6 text-[clamp(1.25rem,2.5vw,2.6rem)] font-medium text-white/85 backdrop-blur-sm before:absolute before:bottom-0 before:left-3 before:h-[1px] before:w-1/2 before:translate-y-full before:bg-[radial-gradient(circle,_#ffffff,_transparent)] before:blur-[0px] before:content-[''] after:absolute after:top-0 after:right-3 after:h-[1px] after:w-1/2 after:-translate-y-full after:bg-[radial-gradient(circle,_#ffffff,_transparent)] after:blur-[0px] after:content-['']">
      <OpenWorkBadge className="!-top-2 -translate-y-full max-md:py-1 max-md:pl-2 max-md:text-[9px]" />
      <span className="block text-[clamp(1rem,2.2vw,1.4rem)] font-light text-white/70">
        Hey!, I&apos;m
      </span>
      Bandam <span className="">Harshith Reddy</span>
      <span className="absolute top-0 left-1/2 h-1/2 w-1/2 overflow-hidden">
        {/* <span className="absolute left-1/2 h-1/9 w-2/3 -translate-1/2 rounded-[100%] bg-foreground/90 blur-xl"></span> */}
      </span>
    </h1>
  );
}
