import React from "react";
import { PC } from "../../../icons/Companies/PC";
import ShinyBorder from "@/components/custom/ShinyBorder";
import Kyno from "@/icons/Companies/Kyno";

export default function MyWorks() {
  return (
    <div className="mx-auto w-full max-w-2/3 px-8 py-12">
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
        <ShinyBorder className="rounded-xl mb-6 border border-white/10 bg-[#ffffff08] p-6 before:opacity-40 after:opacity-40">
          <div className="flex items-center gap-4">
            <PC className="size-13 rounded-lg border border-white/10 bg-white/5 p-1.5" />
            <div>
              <h3 className="text-2xl">PureCode.ai</h3>
              <p className="text-sm text-white/50">Software Engineer</p>
            </div>
            <span className="ml-auto rounded-full bg-white/5 px-4 py-1 text-sm">
              2023-2025
            </span>
          </div>
          <div className="mt-6 rounded-xl bg-black p-3">
            <p>Responsibilty</p>
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
          <div className="mt-6 rounded-xl bg-black p-3">
            <p>Responsibilty</p>
          </div>
        </ShinyBorder>
      </div>
    </div>
  );
}
