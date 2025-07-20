import React from "react";
import Image from "next/image";
import ContactMe from "../Contact/ContactMe";

export default function DeveloperProfile() {
  return (
    <div className="flex h-full w-1/2 items-center justify-center">
      <div className="group relative aspect-[4/5] w-[clamp(200px,25vw,288px)] before:absolute before:bottom-[-3.5px] before:left-1/2 before:h-[0.8px] before:w-5/3 before:-translate-1/2 before:bg-[radial-gradient(circle,_#ffffff,_transparent)] before:blur-[0px] before:content-[''] after:absolute after:top-[-2px] after:left-1/2 after:h-[1px] after:w-5/3 after:-translate-1/2 after:bg-[radial-gradient(circle,_#ffffff,_transparent)] after:blur-[0px] after:content-['']">
        <div className="before:absolute before:top-1/2 before:right-[-4px] before:h-3/2 before:w-[1px] before:-translate-1/2 before:bg-[radial-gradient(circle,_#ffffff,_transparent)] before:blur-[0px] before:content-[''] after:absolute after:top-1/2 after:left-[-2px] after:h-3/2 after:w-[1px] after:-translate-1/2 after:bg-[radial-gradient(circle,_#ffffff,_transparent)] after:blur-[0px] after:content-['']"></div>
        <Image
          priority
          className="size-full object-cover object-[37%_50%]"
          src={"/img.png"}
          width={500}
          height={500}
          alt={""}
        />
        <ContactMe />
      </div>
    </div>
  );
}
