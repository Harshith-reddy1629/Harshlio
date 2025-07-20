import Circular from "@/icons/Circular";
import Image from "next/image";
import React from "react";

export default function ProfileCard() {
  return (
    <div className="relative z-0 aspect-square w-24">
      <Circular
        speed="18s"
        text="- Full Stack - Frontend - MERN - Harshith Reddy"
        size={130}
        textClass="text-[8px] tracking-widest"
        className="absolute top-1/2 left-1/2 -z-10 -translate-1/2 !p-0"
      />
      <Image
        className="z-20 size-full rounded-full object-cover object-[30%_50%]"
        src={"/img.png"}
        width={500}
        height={500}
        alt={""}
      />
    </div>
  );
}
