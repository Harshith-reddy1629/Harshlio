import React from "react";
import Github from "@/icons/Social/Github";
import Linkedin from "@/icons/Social/Linkedin";
import Mail from "@/icons/Social/Mail";

export default function SocialMedia({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className="flex items-center justify-center gap-4">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/bandam-harshith-reddy/"
      >
        <Linkedin
          className={`transform-all size-11 rounded border border-white/50 fill-white/50 p-1 duration-300 hover:bg-white/5 hover:fill-white ${className}`}
        />
      </a>
      <a target="_blank" href="https://github.com/Harshith-reddy1629">
        <Github
          className={`transform-all size-11 rounded border border-white/50 fill-white/50 p-1 duration-300 hover:bg-white/5 hover:fill-white ${className}`}
        />
      </a>
      <a target="_blank" href="mailto:reddybharshith3@gmail.com">
        <Mail
          className={`transform-all size-11 rounded border border-white/50 fill-white/50 p-1 duration-300 hover:bg-white/5 hover:fill-white ${className}`}
        />
      </a>
    </div>
  );
}
