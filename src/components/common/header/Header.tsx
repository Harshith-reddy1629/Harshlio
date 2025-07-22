"use client";
import { HeaderRoutes } from "@/constants/Header";

import React, { useEffect, useRef, useState } from "react";
import LinkButton from "./LinkButton";
import Document from "@/icons/Document";
import ShinyBorder from "@/components/custom/ShinyBorder";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";
import useTriggerAction from "triggerAction";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const timeref = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const { handleClickAction: handleClick } = useTriggerAction();

  useEffect(() => {
    const handleScroll = () => {
      if (timeref.current) {
        clearTimeout(timeref.current);
      }
      timeref.current = setTimeout(() => {
        setIsScrolled(window.scrollY > 80);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-1/2 z-50 mx-auto flex -translate-x-1/2 items-center justify-between border p-2 px-12 font-[family-name:var(--font-geist-mono)] backdrop-blur-xs transition-all duration-700 max-md:px-2 max-md:py-1 ${
          isScrolled
            ? "top-3 w-full rounded-lg border-white/20 bg-white/5 !px-1 py-0.5 shadow-2xl backdrop-blur-xs max-md:top-0 max-md:rounded-none md:w-1/3"
            : "top-0 w-full border-transparent bg-none"
        }`}
      >
        {
          <div
            className={`relative grow transition-all duration-500 ease-in-out max-sm:hidden ${
              isScrolled
                ? "max-w-0 overflow-hidden opacity-0"
                : "max-w-xs opacity-100"
            }`}
          >
            {" "}
            <Link onClick={() => handleClick("LOGO")} href={"/"}>
              <span className="rounded-lg bg-[linear-gradient(to_right,white,_var(--text))] bg-clip-text px-4 py-1 text-2xl font-semibold text-transparent max-md:px-1">
                {"<"}H<span className="text-primary max-md:uppercase">a</span>
                <span className="max-md:hidden">rshith</span>
                <span className="text-primary">.</span>
                {"/>"}
              </span>
            </Link>
          </div>
        }
        <div
          data-scrolled={isScrolled}
          className={`group flex w-1/2 justify-between gap-2 text-lg transition-all duration-500 *:cursor-pointer *:text-center before:absolute before:bottom-[-1px] before:left-3 before:transition-all before:duration-1000 before:content-[''] after:absolute after:top-[-1px] after:right-3 after:h-[1px] after:w-0 after:transition-all after:duration-1000 after:content-[''] max-lg:grow max-md:text-sm md:*:flex-[_1_1_25%_] ${
            isScrolled
              ? "grow text-sm *:rounded-3xl before:h-[1px] before:w-1/2 before:bg-[radial-gradient(circle,_#ffffff,_transparent)] before:blur-[0px] after:w-1/2 after:bg-[radial-gradient(circle,_#ffffff,_transparent)] after:blur-[0px]"
              : ""
          }`}
        >
          {HeaderRoutes.map((route) => (
            <LinkButton key={route.name} href={route.href}>
              <span className="text-primary">{route.name.slice(0, 1)}</span>
              {route.name.slice(1)}
            </LinkButton>
          ))}
        </div>
      </header>
      {pathname.startsWith("/resume") ? (
        <ShinyBorder className="!fixed !right-6 !bottom-4 z-60 flex cursor-pointer items-center gap-1 rounded-md bg-[#000] shadow-2xl shadow-white/10 transition-all duration-300 hover:bg-[#1118]">
          <a
            href="/harshith_reddy_06.pdf"
            className="z-50 flex items-center gap-2 rounded-lg bg-[#000] p-3 px-5 text-xs shadow-xl transition-all duration-300 hover:bg-[#0f0f0f]"
            download={"Harshith_Reddy"}
            rel="noreferrer"
            onClick={() => handleClick("View Full RESUME")}
            target="_blank"
          >
            {" "}
            <Download size={16} />
            View full Resume
          </a>
        </ShinyBorder>
      ) : (
        <Link onClick={() => handleClick("Resume")} href="/resume">
          <ShinyBorder className="!fixed !right-6 !bottom-4 z-60 flex cursor-pointer items-center gap-1 rounded-md bg-[#000] p-2 px-6 shadow-2xl shadow-white/10 transition-all duration-300 hover:bg-[#1118]">
            <>
              <Document
                className={`transform-all size-6 rounded fill-white duration-300`}
              />
              Resume
            </>
          </ShinyBorder>
        </Link>
      )}
    </>
  );
}
