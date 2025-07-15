import React from "react";

export default function BioPara() {
  return (
    <p className="relative w-full mb-8 max-w-[550px] p-5 text-sm text-white/50 before:absolute before:bottom-[-3px] before:left-1/2 before:h-[1px] before:w-4/3 before:-translate-1/2 before:bg-[radial-gradient(circle,_#ffffff,_transparent)] before:blur-[0px] before:content-[''] after:absolute after:top-[-2px] after:left-1/2 after:h-[1px] after:w-4/3 after:-translate-1/2 after:bg-[radial-gradient(circle,_#ffffff,_transparent)] after:blur-[0px] after:content-['']">
      <span className="before:absolute before:top-1/2 before:right-[-3px] before:h-8/3 before:w-[0.8px] before:-translate-1/2 before:bg-[radial-gradient(circle,_#ffffff,_transparent)] before:blur-[0px] before:content-[''] after:absolute after:top-1/2 after:left-[-2px] after:h-8/3 after:w-[0.8px] after:-translate-1/2 after:bg-[radial-gradient(circle,_#ffffff,_transparent)] after:blur-[0px] after:content-['']"></span>
      I&apos;m a <span className="text-white">Full-stack Developer</span> based
      in Hyderabad, India. I specialize in building scalable, reliable, and
      user-friendly web applications using modern technologies like{" "}
      <span className="text-white"> React.js</span>,{" "}
      <span className="text-white">Next.js</span>,{" "}
      <span className="text-white">Express</span>,{" "}
      <span className="text-white">Node.js</span>, and{" "}
      <span className="text-white">MongoDB</span>. My approach focuses on
      creating clean code, resolving bugs, and optimizing the overall user
      experience.
    </p>
  );
}
