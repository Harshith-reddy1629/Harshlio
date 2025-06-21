"use client";
import { HeaderRoutes } from "@/constants/Header";

import React, { useRef, useState } from "react";
import LinkButton from "./LinkButton";

const staticStyles =
  "pb-5 fixed top-0 w-full pt-6 px-16  justify-between gap-5 text-white  ";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const timeref = useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (timeref.current) {
        clearTimeout(timeref.current);
      }
      timeref.current = setTimeout(() => {
        setIsScrolled(window.scrollY > 0);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerStyles = isScrolled
    ? `${staticStyles} bg-white/5 backdrop-blur-lg shadow-lg`
    : staticStyles;

  return (
    <header
      className={`flex items-center justify-between p-4 border  
      transition-all duration-700 mx-auto fixed left-1/2 
      -translate-x-1/2 px-12 max-md:px-1 font-[family-name:var(--font-geist-mono)]
       ${
         isScrolled
           ? "top-4 md:w-2/3 w-full max-md:top-0 max-md:rounded-none rounded-3xl border-white/10 shadow-lg bg-white/0 backdrop-blur-lg"
           : "top-0 w-full border-transparent bg-none"
       }`}
    >
      {
        <div
          className={`transition-all duration-500 ease-in-out grow ${
            isScrolled
              ? "opacity-0 max-w-0 overflow-hidden"
              : "opacity-100 max-w-xs"
          }`}
        >
          {" "}
          <span className="text-2xl bg-clip-text text-transparent font-semibold bg-[linear-gradient(to_right,white,_var(--text))] max-md:px-1 px-4 py-1 rounded-lg ">
            H<span className="text-primary max-md:uppercase">a</span>
            <span className="max-md:hidden">rshith</span>
            <span className="text-primary">.</span>
          </span>
        </div>
      }
      <ul className="flex *:cursor-pointer gap-2 text-lg justify-between transition-all duration-500 grow">
        {HeaderRoutes.map((route) => (
          <LinkButton key={route.name} href={route.href}>
            <span className="animate-bounceText">{route.name.slice(0, 1)}</span>
            {route.name.slice(1)}
          </LinkButton>
        ))}
      </ul>
    </header>
  );
}







type k = `bear ${string}`;






const l: k = "sdf";

console.log(l)