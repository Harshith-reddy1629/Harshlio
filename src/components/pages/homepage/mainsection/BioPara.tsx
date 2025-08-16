import React from "react";

export default function BioPara() {
  return (
    <p className="relative mr-2 mb-8 w-full p-5 px-8 text-[clamp(0.9rem,1.8vw,1.125rem)] leading-[150%] text-white/60 before:absolute before:bottom-[-3px] before:left-1/2 before:h-[1px] before:w-4/3 before:-translate-1/2 before:bg-[radial-gradient(circle,_#ffffff,_transparent)] before:blur-[0px] before:content-[''] after:absolute after:top-[-2px] after:left-1/2 after:h-[1px] after:w-4/3 after:-translate-1/2 after:bg-[radial-gradient(circle,_#ffffff,_transparent)] after:blur-[0px] after:content-[''] max-md:py-3 md:max-w-[650px]">
      <span className="before:absolute before:top-1/2 before:right-3 before:h-8/3 before:w-[0.8px] before:-translate-1/2 before:bg-[radial-gradient(circle,_#ffffff,_transparent)] before:blur-[0px] before:content-[''] after:absolute after:top-1/2 after:left-3 after:h-8/3 after:w-[1px] after:-translate-1/2 after:bg-[radial-gradient(circle,_#ffffff,_transparent)] after:blur-[0px] after:content-['']"></span>
      I&apos;m a <span className="text-white">Full-stack Developer</span> based
      in Hyderabad, India. I specialize in building scalable, reliable, and
      user-friendly web applications using modern technologies like{" "}
      <span className="text-white"> React.js</span>,{" "}
      <span className="text-white">Next.js</span>,{" "}
      <span className="text-white">Express</span>,{" "}
      <span className="text-white">Node.js</span>, and{" "}
      <span className="text-white">MongoDB</span>. Open to{" "}
      <span className="text-white">freelance </span> and{" "}
      <span className="text-white">collaborative opportunities. </span>{" "}
      Let&apos;s build something impactful.
      <span className="absolute inset-[0_12px] bg-white/5"></span>
      <span className="absolute bottom-full left-[calc(100%-12px)] h-3/4 w-1/6 bg-gradient-to-tr from-white/5 to-55%"></span>
      <span className="absolute right-[calc(100%-12px)] bottom-full h-3/4 w-1/6 bg-gradient-to-tl from-white/5 to-55%"></span>
      <span className="absolute top-full left-[calc(100%-12px)] h-3/4 w-1/6 bg-gradient-to-br from-white/5 to-55%"></span>
      <span className="absolute top-full right-[calc(100%-12px)] h-3/4 w-1/6 bg-gradient-to-bl from-white/5 to-55%"></span>
    </p>
  );
}
