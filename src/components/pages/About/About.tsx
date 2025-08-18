import ShinyBorder from "@/components/custom/ShinyBorder";
import { EllipsisVertical } from "lucide-react";
import React from "react";

export default function About() {
  return (
    <div className="mx-auto w-full px-4 py-4 pb-20 md:max-w-[1200px] md:px-8">
      {/* <h2 data-scroll-effect className="text-5xl">
        {" "}
        <span
          data-scroll-effect
          className="bg-[radial-gradient(#fff9,#fff8)] bg-clip-text text-transparent"
        >
          About Me
        </span>
      </h2>{" "} */}
      <ShinyBorder
        scrollEffect
        className="rounded-3xl bg-[#ffffff08] pt-0 shadow-2xl shadow-white/10 "
      >
        <div className="flex border-white/20 px-8 max-sm:px-5 py-2">
          <div className="flex flex-[1_1_33%] items-center">
            <span className="mr-2 size-3 rounded-full bg-red-600/80"></span>
            <span className="mr-2 size-3 rounded-full bg-yellow-400"></span>
            <span className="mr-2 size-3 rounded-full bg-green-600"></span>
          </div>
          <div className="flex flex-[1_1_33%] items-center justify-center rounded-full p-1 px-2">
            {/* <Info className="size-4 text-white/60 mr-2" /> */}
            <p className="text-center text-white/60">About</p>
          </div>
          <div className="flex flex-[1_1_33%] items-center justify-end">
            <EllipsisVertical className="size-4.5 text-white/50" />
          </div>
        </div>
        {/* <div className="mb-6 flex items-center justify-center gap-8">
          <div className="relative h-[1px] w-[180px] bg-gradient-to-r from-transparent from-15% to-white/80 after:absolute after:top-1/2 after:left-full after:size-2 after:-translate-y-1/2 after:rotate-45 after:rounded-full after:bg-white/80 after:content-['']"></div>
          <h2 className="rounded-full bg-background border border-white/20 px-8 py-1.5 text-white/70">
            About Me
          </h2>
          <div className="relative h-[1px] w-[180px] bg-gradient-to-l from-transparent from-15% to-white/80 after:absolute after:top-1/2 after:right-full after:size-2 after:-translate-y-1/2 after:rotate-45 after:rounded-full after:bg-white/80 after:content-['']"></div>
        </div> */}
        {/* I’m a passionate full-stack developer experienced in creating
        high-performance, responsive web platforms. My expertise covers
        everything from frontend frameworks to backend systems and integrations
        of third-party services like Stripe, Paddle, Razorpay, and MailerLite. I
        thrive in fast-paced, Agile environments and focus on clean code, bug
        resolution, and delivering seamless user experiences. */}
        {/* I approach web development as both a craft and a challenge—transforming
        ideas into seamless, reliable applications that empower users. My work
        blends thoughtful UI with robust backend engineering and smart
        third-party integrations. Driven by a love of learning and
        collaboration, I thrive on solving tough problems and refining user
        experiences. Every project is a fresh opportunity to make technology
        work beautifully, for everyone. */}
        <h2 className="p-8 text-lg text-white/65 max-md:p-4 max-md:text-[14px]">
          As a developer, I view web development as both a craft and a
          challenge—where ideas are transformed into seamless, reliable
          applications that empower users and clients. My work is defined by
          precision, thoughtful design, and robust engineering across both
          frontend and backend systems, including smart integrations with
          leading third-party services. Guided by curiosity and a commitment to
          continuous improvement, I collaborate with purpose and embrace
          complexity as an opportunity for growth and innovation. Every project
          is a chance to create technology that works beautifully and makes a
          positive impact.
        </h2>
      </ShinyBorder>
    </div>
  );
}
