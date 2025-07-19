import { ArrowBigRightDash } from "lucide-react";
import React from "react";

export default function ContactForm({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={className} data-scroll-effect>
      <form action="" className="flex flex-col gap-3 text-sm">
        <div className="flex flex-wrap *:flex-[1_1_45%] gap-3 ">
        <div className="flex flex-col gap-1">
          <label htmlFor="">Name</label>
          <input
            className="rounded-md bg-[#191919] p-3 outline-0"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Email</label>
          <input
            className="rounded-md bg-[#191919] p-3 outline-0"
            type="email"
            placeholder="Email"
          />{" "}
        </div></div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Message</label>
          <textarea
            rows={4}
            placeholder="Message"
            className="resize-none rounded-md bg-[#191919] p-3 outline-0"
          ></textarea>{" "}
        </div>
        <button
          className="px-8 flex items-center gap-1 group w-fit ml-auto cursor-pointer rounded-lg border border-white/10 p-3 transition-all duration-300 hover:bg-black/20"
          type="submit"
        >
          Send Message <ArrowBigRightDash size={16} className="group-hover:translate-x-1 mt-0.5 duration-300 transition-all" />
        </button>
      </form>
    </div>
  );
}
