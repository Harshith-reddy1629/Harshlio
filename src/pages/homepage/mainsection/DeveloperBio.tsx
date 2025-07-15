import React from "react";
import OpenWorkBadge from "@/components/common/header/custom/OpenWorkBadge";
import Github from "@/icons/Social/Github";
import Linkedin from "@/icons/Social/Linkedin";
import Mail from "@/icons/Social/Mail";

export default function DeveloperBio() {
  return (
    <div className="flex h-full w-1/2 flex-row items-center">
      <div className="">
        <h1 className="relative mx-auto mb-8 w-fit rounded border border-amber-50/20 bg-[radial-gradient(#fff,#fff4)] bg-clip-text p-2 px-8 text-2xl text-transparent backdrop-blur-sm before:absolute before:bottom-0 before:left-3 before:h-[1px] before:w-1/2 before:translate-y-full before:bg-[radial-gradient(circle,_#ffffff,_transparent)] before:blur-[0px] before:content-[''] after:absolute after:top-0 after:right-3 after:h-[1px] after:w-1/2 after:-translate-y-full after:bg-[radial-gradient(circle,_#ffffff,_transparent)] after:blur-[0px] after:content-['']">
          <OpenWorkBadge className="!-top-2 -translate-y-full" />
          <span className="block bg-[radial-gradient(circle_at_var(--y)_50%,_#fff4,#fff4)] bg-clip-text text-xl font-light text-transparent">
            Hey!, I&apos;m
          </span>
          Bandam <span className="text-white/0">Harshith Reddy</span>
        </h1>
        <p className="relative w-full max-w-[550px] p-5 text-sm text-white/50 before:absolute before:bottom-[-3px] before:left-1/2 before:h-[1px] before:w-4/3 before:-translate-1/2 before:bg-[radial-gradient(circle,_#ffffff,_transparent)] before:blur-[0px] before:content-[''] after:absolute after:top-[-2px] after:left-1/2 after:h-[1px] after:w-4/3 after:-translate-1/2 after:bg-[radial-gradient(circle,_#ffffff,_transparent)] after:blur-[0px] after:content-['']">
          <span className="before:absolute before:top-1/2 before:right-[-3px] before:h-8/3 before:w-[0.8px] before:-translate-1/2 before:bg-[radial-gradient(circle,_#ffffff,_transparent)] before:blur-[0px] before:content-[''] after:absolute after:top-1/2 after:left-[-2px] after:h-8/3 after:w-[0.8px] after:-translate-1/2 after:bg-[radial-gradient(circle,_#ffffff,_transparent)] after:blur-[0px] after:content-['']"></span>
          I&apos;m a <span className="text-white">Full-stack Developer</span>{" "}
          based in Hyderabad, India. I specialize in building scalable,
          reliable, and user-friendly web applications using modern technologies
          like <span className="text-white"> React.js</span>,{" "}
          <span className="text-white">Next.js</span>,{" "}
          <span className="text-white">Express</span>,{" "}
          <span className="text-white">Node.js</span>, and{" "}
          <span className="text-white">MongoDB</span>. My approach focuses on
          creating clean code, resolving bugs, and optimizing the overall user
          experience.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="https://www.linkedin.com/in/bandam-harshith-reddy/">
            <Linkedin className="transform-all size-11 rounded border border-white/50 fill-white/50 p-1 duration-300 hover:bg-white/5 hover:fill-white" />
          </a>
          <a href="https://github.com/Harshith-reddy1629">
            <Github className="transform-all size-11 rounded border border-white/50 fill-white/50 p-1 duration-300 hover:bg-white/5 hover:fill-white" />
          </a>
          <a href="mailto:reddybharshith3@gmail.com">
            <Mail className="transform-all size-11 rounded border border-white/50 fill-white/50 p-1 duration-300 hover:bg-white/5 hover:fill-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
