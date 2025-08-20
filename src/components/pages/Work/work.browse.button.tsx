"use client";
// import ShortBorders from "@/components/custom/ShortBorders";
import useTriggerAction from "@/services/triggerAction";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function BrowseButton() {
  const { handleClickAction } = useTriggerAction();
  return (
    <Link
      href={"/work"}
      onClick={() => handleClickAction("BROWSE ALL MY WORK")}
      className="group relative mx-auto mt-4 inline-flex items-center gap-2 rounded-md bg-white/10 p-2 px-6 text-sm transition-all duration-300 hover:bg-white/5"
    >
      {/* <ShortBorders className=" inset-1 group-hover:inset-[2px] transition-all duration-300 " bordersize="5px" /> */}
      Browse All My Work
      <MoveRight className="size-4 transition-all duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
