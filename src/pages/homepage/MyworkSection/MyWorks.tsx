import React from "react";
import PC from "../../../icons/Companies/PC";
import ShinyBorder from "@/components/custom/ShinyBorder";
import Kyno from "@/icons/Companies/Kyno";

export default function MyWorks() {
  return (
    <div className="mx-auto w-full px-4 py-12 md:max-w-2/3 md:px-8">
      <div className="mb-12">
        <h2 className="text-5xl">
          {" "}
          <span className="bg-[radial-gradient(#fff9,#fff6)] bg-clip-text text-transparent">
            Work
          </span>{" "}
          <br />{" "}
          <span className="bg-[radial-gradient(#fff9,#fff9)] bg-clip-text text-transparent">
            {" "}
            Experience
          </span>
        </h2>
        <p></p>
      </div>
      <div>
        <ShinyBorder className="mb-6 rounded-xl border border-white/10 bg-[#ffffff08] p-6 before:opacity-40 after:opacity-40">
          <div className="flex items-center gap-4">
            <PC className="size-13 rounded-lg border border-white/10 bg-white/5 p-1.5" />
            <div>
              <h3 className="text-2xl">PureCode.ai</h3>
              <p className="text-sm text-white/50">Software Engineer</p>
            </div>
            <span className="ml-auto rounded-full bg-white/5 px-4 py-1 text-xs md:text-sm">
              2023-2025
            </span>
          </div>
          <div>
            <p className="mt-3 text-xs text-white/50 *:rounded-md *:bg-white/5 *:px-3 *:py-1">
              <span className="text-white">React.js</span>{" "}
              <span className="text-white">Next.js</span>{" "}
              <span className="text-white">Express</span>{" "}
              <span className="!bg-transparent !px-1 text-white">+ more</span>{" "}
              {/* <span className="text-white">MongoDB</span>{" "}
              <span className="text-white">Stripe</span>{" "} */}
            </p>
          </div>
          <div className="mt-6 rounded-xl bg-black p-3 px-4">
            <p className="text-xs">
              At PureCode, I spearheaded the integration of Stripe for seamless,
              secure payment processing and MailerLite for dynamic email
              automation, driving higher user engagement. Optimized the
              platform’s UI/UX, ensuring responsiveness and performance across
              all devices. Successfully resolved over 100 bugs, significantly
              improving application stability and overall user experience.
            </p>
          </div>
        </ShinyBorder>
        <ShinyBorder className="rounded-xl border border-white/10 bg-[#ffffff08] p-6 before:opacity-40 after:opacity-40">
          <div className="flex items-center gap-4">
            <Kyno className="size-13 rounded-lg border border-white/10 bg-white/5 p-1.5" />
            <div>
              <h3 className="text-2xl">Kyno Health</h3>
              <p className="text-sm text-white/50">Freelance</p>
            </div>
            {/* <span className="ml-auto rounded-full bg-white/5 px-4 py-1 text-sm">
              2023-2025
            </span> */}
          </div>
          <div>
            <p className="mt-3 text-xs text-white/50 *:rounded-md *:bg-white/5 *:px-3 *:py-1">
              <span className="text-white">React.js</span>{" "}
              <span className="text-white">Razorpay</span>{" "}
              <span className="!bg-transparent !px-1 text-white">
                + more
              </span>{" "}
            </p>
          </div>
          <div className="mt-6 rounded-xl bg-black p-3 px-4">
            <p className="text-xs">
              At Kyno Health, developed an intuitive doctor booking system,
              integrating Razorpay for smooth and secure payment processing.
              Incorporated Google Maps API to display real-time locations and
              availability, enhancing user convenience. Designed a responsive,
              user-friendly interface to ensure seamless accessibility across
              all devices and platforms.
            </p>
          </div>
        </ShinyBorder>
      </div>
    </div>
  );
}
