"use client";
import useTriggerAction from "triggerAction";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function LinkButton({
  href = "/",
  children,
  ref,
  i = 0,
}: {
  href?: string;
  children: React.ReactNode;
  ref?: React.RefObject<HTMLAnchorElement[]>;
  i?: number;
}) {
  const { handleClickAction: handleClick } = useTriggerAction();

  // rounded-3xl data-[active=true]:shadow-[inset_1px_5px_5px_#ffffff40_,_inset_-1px_-5px_5px_#000000ff,_inset_-1px_-5px_10px_#ffffff30,_2px_2px_4px_#0005]
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      ref={(e) => {
        if (e && ref) {
          ref.current[i] = e;
        }
      }}
      data-active={isActive}
      className="group/clik relative py-2 tracking-widest text-white/60 opacity-90 transition-all duration-1000 group-data-[scrolled=true]:text-white/80 after:absolute after:bottom-1 after:left-1/2 after:h-[1px] after:w-0 after:-translate-x-1/2 after:bg-[radial-gradient(circle,_var(--text)_,_transparent)] after:transition-all after:duration-500 after:content-[''] hover:text-white after:hover:w-1/2 data-[active=true]:text-white data-[active=true]:opacity-100 data-[active=true]:after:w-1/2 data-[active=true]:after:bg-[radial-gradient(circle,_#ffffff,_transparent)] group-data-[scrolled=true]:data-[active=true]:after:h-[0.5px] group-data-[scrolled=true]:data-[active=true]:after:w-2/3 data-[active=true]:after:max-md:w-2/2"
      href={href}
      onClick={() => handleClick(href)}
    >
      {
        <span className="absolute top-1/2 left-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,_rgba(255,255,255,0.15)_0%,_rgba(255,255,255,0.06)_50%,_rgba(194,65,12,0)_100%)] opacity-0 blur-[3px] transition-all duration-500 group-hover/clik:opacity-100"></span>
      }{" "}
      {children}
    </Link>
  );
}
