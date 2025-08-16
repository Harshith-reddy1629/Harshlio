import Circular from "@/icons/Circular";
import ClickPointer from "@/icons/Cursor/ClickPointer";
import React from "react";
import ContactDialog from "../homepage/mainsection/ContactDialog";

export default function ContactMe() {
  return (
    <>
      <ContactDialog className="group/click absolute top-full left-4/5 -translate-1/2 rounded-full">
        <Circular
          textClass="text-[12px]"
          className="peer size-22 cursor-pointer border-[0.5px] border-white/10 outline outline-offset-[-20px] outline-white/10 transition-all duration-300 group-hover/click:border-white/40 group-hover/click:outline-white/40 peer-hover/icon:outline-white/40 hover:border-white/40 hover:outline-white/40 max-md:size-14 max-md:outline-offset-[-14px]"
        />
        <ClickPointer className="peer/icon absolute top-1/2 left-1/2 z-10 size-[43%] -translate-1/2 cursor-pointer fill-white/50 transition-all duration-300 group-hover/click:fill-white/75 peer-hover:fill-white/75 hover:fill-white/75 max-md:size-5" />
      </ContactDialog>
    </>
  );
}
