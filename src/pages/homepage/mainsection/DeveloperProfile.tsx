import React from "react";
import Image from "next/image";
import Circular from "@/icons/Circular";
import ClickPointer from "@/icons/Cursor/ClickPointer";

export default function DeveloperProfile() {
  return (
    <div className="flex h-full w-1/2 items-center justify-center">
      <div className="group relative aspect-[4/5] w-72 before:absolute before:bottom-[-3px] before:left-1/2 before:h-[1px] before:w-5/3 before:-translate-1/2 before:bg-[radial-gradient(circle,_#ffffff,_transparent)] before:blur-[0px] before:content-[''] after:absolute after:top-[-2px] after:left-1/2 after:h-[1px] after:w-5/3 after:-translate-1/2 after:bg-[radial-gradient(circle,_#ffffff,_transparent)] after:blur-[0px] after:content-['']">
        <div className="before:absolute before:top-1/2 before:right-[-3px] before:h-3/2 before:w-[1px] before:-translate-1/2 before:bg-[radial-gradient(circle,_#ffffff,_transparent)] before:blur-[0px] before:content-[''] after:absolute after:top-1/2 after:left-[-2px] after:h-3/2 after:w-[1px] after:-translate-1/2 after:bg-[radial-gradient(circle,_#ffffff,_transparent)] after:blur-[0px] after:content-['']"></div>
        <Image
          className="size-full object-cover object-[37%_50%]"
          src={"/img.png"}
          width={500}
          height={500}
          alt={""}
        />
        <div className="group/click absolute top-full left-4/5 -translate-1/2 rounded-full">
          <Circular
            textClass="text-[11px]"
            className="peer cursor-pointer border-[0.5px] border-white/10 outline outline-offset-[-19px] outline-white/10 transition-all duration-300 group-hover/click:border-white/40 group-hover/click:outline-white/40 peer-hover/icon:outline-white/40 hover:border-white/40 hover:outline-white/40"
          />
          <ClickPointer className="peer/icon absolute top-1/2 left-1/2 z-10 -translate-1/2 cursor-pointer fill-white/50 transition-all duration-300 group-hover/click:fill-white/75 peer-hover:fill-white/75 hover:fill-white/75" />
        </div>
      </div>
    </div>
  );
}
