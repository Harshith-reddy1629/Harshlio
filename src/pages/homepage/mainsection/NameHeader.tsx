import React from "react";
import OpenWorkBadge from "@/components/custom/OpenWorkBadge";

export default function NameHeader() {
  return (
    <h1 className="relative mx-auto mb-8 w-fit rounded border border-amber-50/20 bg-[radial-gradient(#fff,#fff4)] bg-clip-text p-2 px-8 text-2xl text-transparent backdrop-blur-sm before:absolute before:bottom-0 before:left-3 before:h-[1px] before:w-1/2 before:translate-y-full before:bg-[radial-gradient(circle,_#ffffff,_transparent)] before:blur-[0px] before:content-[''] after:absolute after:top-0 after:right-3 after:h-[1px] after:w-1/2 after:-translate-y-full after:bg-[radial-gradient(circle,_#ffffff,_transparent)] after:blur-[0px] after:content-['']">
      <OpenWorkBadge className="!-top-2 -translate-y-full" />
      <span className="block bg-[radial-gradient(circle_at_var(--y)_50%,_#fff4,#fff4)] bg-clip-text text-xl font-light text-transparent">
        Hey!, I&apos;m
      </span>
      Bandam <span className="text-white/0">Harshith Reddy</span>
    </h1>
  );
}
