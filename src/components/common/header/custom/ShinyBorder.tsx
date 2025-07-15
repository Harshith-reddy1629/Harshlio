import React from "react";

export default function ShinyBorder({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={` ${className} px-5 rounded py-1 relative border border-amber-50/20 backdrop-blur-sm before:absolute before:bottom-0 before:translate-y-full before:left-3 before:h-[1px] before:w-1/2 before:bg-[radial-gradient(circle,_#ffffff,_transparent)] before:blur-[0px] before:content-[''] after:absolute after:top-0 after:-translate-y-full after:right-3 after:h-[1px] after:w-1/2 after:bg-[radial-gradient(circle,_#ffffff,_transparent)] after:blur-[0px] after:content-['']`}
    >
      {children}
    </div>
  );
}
