import Back from "@/icons/Arrows/Back";
import Circular from "@/icons/Circular";
import Image from "next/image";
// bg-[linear-gradient(0deg,#0004,#0004),linear-gradient(90deg,#0002,transparent,transparent,#0002),url('/img.png')]
import React from "react";

export default function Homev2() {
  return (
    <>
      <main className="animate-slider flex h-[100dvh] gap-6 bg-[linear-gradient(90deg,#0000_1%_,var(--background)_1%_99%_,#0000_99%),radial-gradient(circle_at_0%_calc(100%-var(--y)),#fff9,transparent_10%),radial-gradient(circle_at_100%_var(--y),#fff9,transparent_10%)] bg-size-[_5%_5%,cover,cover] font-[family-name:var(--font-geist-mono)] *:flex-[1_1_50%]">
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
            <Circular
              textClass="text-[11px]"
              className="peer absolute top-full left-4/5 -translate-1/2 cursor-pointer border-[0.5px] border-white/10 outline outline-offset-[-19px] outline-white/10 transition-all duration-300 hover:border-white/40 hover:outline-white/40"
            />
            <Back
              color="#fff5"
              className="absolute top-full left-4/5 z-10 -translate-1/2 rotate-140 cursor-pointer fill-white/50 transition-all duration-300 peer-hover:fill-white/75"
            />
          </div>
        </div>
        <div className="flex h-full w-1/2 flex-row items-center">
          <div className="">
            <h1 className="relative mx-auto mb-8 w-fit rounded border border-amber-50/20 bg-[radial-gradient(#fff,#0000)] bg-clip-text p-2 px-8 text-2xl text-transparent backdrop-blur-sm before:absolute before:bottom-[-0.5px] before:left-3 before:h-[1px] before:w-1/2 before:bg-[radial-gradient(circle,_#ffffff,_transparent)] before:blur-[0px] before:content-[''] after:absolute after:top-[-0.5px] after:right-3 after:h-[1px] after:w-1/2 after:bg-[radial-gradient(circle,_#ffffff,_transparent)] after:blur-[0px] after:content-['']">
              {/* animate-[slider_2s_alternate_infinite_linear] */}
              <span className="absolute top-[-32px] left-1/2 -translate-1/2 bg-[radial-gradient(circle_at_var(--y)_50%,_#fff,#fff4)] bg-clip-text text-4xl font-light text-transparent">
                Hey, I&apos;m
              </span>
              Bandam{" "}
              <span /**className="text-shadow-[_0px_0px_8px_#fff,_0px_0px_32px_yellow]" */
              >
                Harshith Reddy
              </span>
            </h1>
            <p className="relative w-full max-w-[550px] p-5 text-sm text-white/50 before:absolute before:bottom-[-3px] before:left-1/2 before:h-[1px] before:w-4/3 before:-translate-1/2 before:bg-[radial-gradient(circle,_#ffffff,_transparent)] before:blur-[0px] before:content-[''] after:absolute after:top-[-2px] after:left-1/2 after:h-[1px] after:w-4/3 after:-translate-1/2 after:bg-[radial-gradient(circle,_#ffffff,_transparent)] after:blur-[0px] after:content-['']">
              <span className="before:absolute before:top-1/2 before:right-[-3px] before:h-8/3 before:w-[0.8px] before:-translate-1/2 before:bg-[radial-gradient(circle,_#ffffff,_transparent)] before:blur-[0px] before:content-[''] after:absolute after:top-1/2 after:left-[-2px] after:h-8/3 after:w-[0.8px] after:-translate-1/2 after:bg-[radial-gradient(circle,_#ffffff,_transparent)] after:blur-[0px] after:content-['']"></span>
              I&apos;m a{" "}
              <span className="text-white">Full-stack Developer</span> based in
              Hyderabad, India. I specialize in building scalable, reliable, and
              user-friendly web applications using modern technologies like{" "}
              <span className="text-white"> React.js</span>,{" "}
              <span className="text-white">Next.js</span>,{" "}
              <span className="text-white">Express</span>,{" "}
              <span className="text-white">Node.js</span>, and{" "}
              <span className="text-white">MongoDB</span>. My approach focuses
              on creating clean code, resolving bugs, and optimizing the overall
              user experience.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
