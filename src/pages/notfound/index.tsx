import ShinyBorder from "@/components/common/header/custom/ShinyBorder";
import Back from "@/icons/Arrows/Back";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-6 font-[family-name:var(--font-geist-mono)]">
      <ShinyBorder className="rounded bg-white/5 px-8 py-2 text-6xl">
        404
      </ShinyBorder>
      <h2 className="relative px-4 text-2xl tracking-widest text-white/60 before:absolute before:bottom-[-3px] before:left-1/2 before:h-[0.5px] before:w-6/3 before:-translate-1/2 before:bg-[radial-gradient(circle,_#ffffff,_transparent)] before:blur-[0px] before:content-[''] after:absolute after:top-[-2px] after:left-1/2 after:h-[1px] after:w-6/3 after:-translate-1/2 after:bg-[radial-gradient(circle,_#ffffff,_transparent)] after:blur-[0px] after:content-['']">
        <span className="before:absolute before:top-1/2 before:right-[-3px] before:h-8/2 before:w-[0.8px] before:-translate-1/2 before:bg-[radial-gradient(circle,_#ffffff,_transparent)] before:blur-[0px] before:content-[''] after:absolute after:top-1/2 after:left-[-2px] after:h-8/2 after:w-[0.8px] after:-translate-1/2 after:bg-[radial-gradient(circle,_#ffffff,_transparent)] after:blur-[0px] after:content-['']"></span>
        This <span className="text-white uppercase">page</span> does not exist
      </h2>
      <Link href="/">
        <ShinyBorder className="group transform-all flex cursor-pointer items-center justify-center gap-3 bg-[#252525]/30 tracking-widest duration-300 hover:bg-[#252525]/50">
          <Back
            size="14"
            className="transform-all duration-300 group-hover:-translate-x-1"
          />{" "}
          GO TO HOME
        </ShinyBorder>
      </Link>
    </div>
  );
}
