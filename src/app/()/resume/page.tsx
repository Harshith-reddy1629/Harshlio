"use client";
import ShinyBorder from "@/components/custom/ShinyBorder";
import useTriggerAction from "triggerAction";
import { Download } from "lucide-react";
import React from "react";

export const metadata = {
  title: "Resume - Bandam Harshith Reddy",
};

export default function Page() {
  const { handleClickAction: handleClick } = useTriggerAction();

  return (
    <div className="relative mx-auto min-h-[88dvh] w-full px-4 py-10 md:max-w-2/3 md:px-8">
      <a
        href="/harshith_reddy_06.pdf"
        className="absolute top-3 right-15 z-50 hidden translate-y-full items-center gap-2 rounded-lg border border-white bg-[#000] p-2 px-4 text-xs shadow-xl transition-all duration-300 hover:bg-[#0f0f0f] md:flex"
        download={"Harshith_Reddy"}
        onClick={() => handleClick("Download Resume")}
      >
        {" "}
        <Download size={16} />
        Download Resume
      </a>
      <ShinyBorder className="border-2">
        <iframe
          className="min-h-[88dvh] w-full"
          src="/harshith_reddy_06.pdf#toolbar=0&scrollbar=0"
        ></iframe>
      </ShinyBorder>
    </div>
  );
}
