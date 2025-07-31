"use client";
import React from "react";
import ContactForm from "./ContactForm";
import Linkedin from "@/icons/Social/Linkedin";
import Mail from "@/icons/Social/Mail";
import ShinyBorder from "@/components/custom/ShinyBorder";
import Call from "@/icons/Call";
import useTriggerAction from "triggerAction";

export default function ConnectSection() {
  const { handleClickAction: handleClick } = useTriggerAction();

  return (
    <div className="mx-auto w-full px-4 py-12 md:max-w-[1200px] md:px-8">
      <div className="mb-12">
        <h2 className="text-5xl">
          {" "}
          <span className="bg-[radial-gradient(#fff9,#fff6)] bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h2>
        <p></p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(260px,_1fr))] gap-4 *:flex-[1_1_33%] *:cursor-pointer">
        <div
          data-scroll-effect
          onClick={() => handleClick("CALL {contact form}")}
          className="flex flex-col gap-1 rounded-xl border border-white/10 bg-[#ffffff04] p-4 text-sm transition-all duration-300 hover:bg-[#ffffff10]"
        >
          <Call className="size-10 rounded-md border border-white/10 p-1" />
          <p className="mt-1">Call me</p>
          <p className="text-sm text-white/60">+91 6281715949</p>
        </div>{" "}
        <a
          href="mailto:reddybharshith3@gmail.com"
          data-scroll-effect
          onClick={() => handleClick("EMAIL {contact form}")}
          className="flex flex-col gap-1 rounded-xl border border-white/10 bg-[#ffffff04] p-4 text-sm transition-all duration-300 hover:bg-[#ffffff10]"
        >
          <Mail className="size-10 rounded-md border border-white/10 p-1" />
          <p className="mt-1">Email me</p>
          <p className="text-sm text-white/60">reddybharshith3@gmail.com</p>
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/bandam-harshith-reddy/"
          target="_blank"
          data-scroll-effect
          rel="noreferrer"
          onClick={() => handleClick("LINKEDIN {contact form}")}
          className="group flex flex-col gap-1 rounded-xl border border-white/10 bg-[#ffffff04] p-4 text-sm transition-all duration-300 hover:bg-[#ffffff10]"
        >
          <Linkedin className="size-10 rounded-md border border-white/10 p-1" />
          <p className="mt-1">Linkedin</p>
          <p className="text-sm text-white/60 group-hover:underline">
            Visit my profile
          </p>
        </a>{" "}
      </div>
      <div className="mt-8 flex flex-col justify-between gap-5 md:flex-row">
        <ShinyBorder className="w-full rounded-xl p-5 after:!h-[0.5px]">
          <>
            <p className="mb-3 text-xl">Please fill the form to get in touch</p>
            <ContactForm className="rounded-lg border-white/20 *:gap-5" />
          </>
        </ShinyBorder>
      </div>
    </div>
  );
}
