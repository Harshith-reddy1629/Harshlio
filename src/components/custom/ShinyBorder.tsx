import React from "react";

export default function ShinyBorder({
  children,
  className = "",
  scrollEffect = false,
}: {
  children?: React.ReactNode;
  className?: string;
  scrollEffect?: boolean;
}) {
  return (
    <div
      {...{ "data-scroll-effect": scrollEffect }}
      className={ ` ${className} relative rounded border border-amber-50/20 backdrop-blur-sm before:absolute before:bottom-0 before:left-3 before:h-[1px] before:w-1/2 before:translate-y-full before:bg-[radial-gradient(circle,_#ffffff,_transparent)] before:blur-[0px] before:content-[''] after:absolute after:top-0 after:right-3 after:h-[1px] after:w-1/2 after:-translate-y-full after:bg-[radial-gradient(circle,_#ffffff,_transparent)] after:blur-[0px] after:content-['']`}
    >
      {children}
    </div>
  );
}
