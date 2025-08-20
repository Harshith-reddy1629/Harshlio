"use client";
import useTriggerAction from "@/services/triggerAction";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ExploreButton() {
  const { handleClickAction } = useTriggerAction();
  return (
    <Link
      href={"/work"}
      onClick={() => handleClickAction("EXPLORE FULL PROJECT DETAILS")}
      className="group mt-4 inline-flex items-center gap-1.5 self-start rounded-md bg-white/10 p-2 px-6 text-sm transition-all duration-300 hover:bg-white/5"
    >
      {" "}
      {/* View more about {each.name} */}
      Explore Full Project Details
      <MoveRight className="size-4 transition-all duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
