"use client";
import React from "react";
import Github from "@/icons/Social/Github";
import Linkedin from "@/icons/Social/Linkedin";
import Mail from "@/icons/Social/Mail";
import useTriggerAction from "triggerAction";
// import Whatsapp from "@/icons/Social/Whatsapp";

export default function SocialMedia({
  className = "",
}: {
  className?: string;
}) {
  const { handleClickAction: handleClick } = useTriggerAction();

  // const openWtsp = () => {
  //   const mobileLink = "whatsapp://send?phone=916281715949&text=Hello";

  //   const webLink =
  //     "https://web.whatsapp.com/send/?phone=916281715959&text=Hello";

  //   if (/android|iphone|ipod|ipad/i.test(navigator.userAgent)) {
  //     window.open(mobileLink, "_blank");
  //   } else {
  //     window.open(webLink, "_blank");
  //   }
  // };

  return (
    <div className="flex items-center justify-center gap-4">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/bandam-harshith-reddy/"
        rel="noreferrer"
        aria-label="Linkedin"
        onClick={() => handleClick("LINKEDIN")}
      >
        <Linkedin
          className={`transform-all size-12 rounded border border-white/50 fill-white/50 p-1 duration-300 hover:bg-white/5 hover:fill-white max-sm:size-10 ${className}`}
        />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        aria-label="Github"
        href="https://github.com/Harshith-reddy1629"
        onClick={() => handleClick("GITHUB")}
      >
        <Github
          className={`transform-all size-12 rounded border border-white/50 fill-white/50 p-1 duration-300 hover:bg-white/5 hover:fill-white max-sm:size-10 ${className}`}
        />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        aria-label="Mail"
        href="mailto:reddybharshith3@gmail.com"
        onClick={() => handleClick("MAIL")}
      >
        <Mail
          className={`transform-all size-12 rounded border border-white/50 fill-white/50 p-1 duration-300 hover:bg-white/5 hover:fill-white max-sm:size-10 ${className}`}
        />
      </a>
      {/* <Whatsapp
        onClick={openWtsp}
        className={`transform-all cursor-pointer size-12 rounded border border-white/50 fill-white/50 p-1 duration-300 hover:bg-white/5 hover:fill-white max-sm:size-10 ${className}`}
      /> */}
    </div>
  );
}
