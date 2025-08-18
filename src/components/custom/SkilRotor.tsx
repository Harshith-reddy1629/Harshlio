import Docker from "@/icons/Skills/Docker";
import MongoIcon from "@/icons/Skills/MongoIcon";
import NextIcon from "@/icons/Skills/NextIcon";
import Nodejs from "@/icons/Skills/Nodejs";
import Postgresql from "@/icons/Skills/Postgresql";
import ReactIcon from "@/icons/Skills/React";
import Redux from "@/icons/Skills/Redux";
import Tailwind from "@/icons/Skills/Tailwind";
import React, { HTMLAttributes } from "react";

export default function SkilRotor(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <div className="relative size-80 opacity-30">
        <div className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 animate-[spin_20s_linear_infinite] rounded-full border-[0.01px] border-white/30 *:absolute *:size-1/8 *:-translate-1/2 *:animate-[spin_20s_linear_infinite_reverse] *:shadow-[0px_4px_6px_#fff3] *:backdrop-blur-2xl">
          <ReactIcon className="top-1/2 left-0 rounded-lg border border-white/25 bg-white/15 p-1" />
          <NextIcon className="top-full left-1/2 rounded-lg border border-white/25 bg-white/15 p-1" />
          <Tailwind className="top-1/2 left-full rounded-lg border border-white/25 bg-white/15 p-1" />
          <Nodejs className="top-0 left-1/2 rounded-lg border border-white/25 bg-white/15 p-1" />
        </div>
        <div className="absolute top-1/2 left-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 animate-[spin_15s_linear_infinite_reverse] rounded-full border-[0.01px] border-white/40 *:absolute *:size-1/5 *:-translate-1/2 *:-rotate-45 *:animate-[spin_15s_linear_infinite] *:shadow-[0px_4px_8px_#fff3] *:backdrop-blur-2xl">
          <Redux className="top-1/2 left-0 rounded-lg border border-white/25 bg-white/15 p-1" />
          <MongoIcon className="top-full left-1/2 rounded-lg border border-white/25 bg-white/15 p-1" />
          <Postgresql className="top-1/2 left-full rounded-lg border border-white/25 bg-white/15 p-1" />
          <Docker className="top-0 left-1/2 rounded-lg border border-white/25 bg-white/15 p-1" />
        </div>
      </div>
    </div>
  );
}
