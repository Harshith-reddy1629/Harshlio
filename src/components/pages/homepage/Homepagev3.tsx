import Circular from "@/icons/Circular";
import Image from "next/image";
import React from "react";

export default function Homev2() {
  return (
    <>
      <main className="animate-slider flex h-[100dvh] items-center justify-center bg-[linear-gradient(90deg,#0000_1%_,#000_1%_99%_,#0000_99%),radial-gradient(circle_at_0%_var(--y),#fff9,transparent_10%),radial-gradient(circle_at_100%_calc(100%-var(--y)),#fff9,transparent_10%)] bg-size-[_5%_5%,cover,cover] font-[family-name:var(--font-geist-mono)]">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="aspect-square w-24 z-0 relative ">
            <Circular speed="18s" text="- Full Stack - Frontend - MERN - Harshith Reddy" size={130} textClass="text-[8px] tracking-widest" className="absolute -z-10 top-1/2 !p-0 left-1/2 -translate-1/2 " />
            <Image
              className="size-full rounded-full z-20 object-cover object-[30%_50%]"
              src={"/img.png"}
              width={500}
              height={500}
              alt={""}
            />
          </div>
          <div className="text-2xl mt-6">
            <h1>Hi, I&apos;m Harshith Reddy</h1>
          </div>
        </div>
      </main>
    </>
  );
}
