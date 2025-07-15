import React from "react";

export default function CrossBorder({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative mt-18 p-5 before:absolute before:bottom-0 before:left-1/2 before:h-[1px] before:w-4/3 before:-translate-x-1/2 before:bg-[radial-gradient(circle,_#ffffff,_transparent)] before:content-[''] after:absolute after:top-0 after:left-1/2 after:h-[0.8px] after:w-4/3 after:-translate-x-1/2 after:bg-[radial-gradient(circle,_#ffffff,_transparent)] after:content-[''] ${className}`}
    >
      <span className="before:absolute before:top-1/2 before:right-0 before:h-8/3 before:w-[0.8px] before:-translate-y-1/2 before:bg-[radial-gradient(circle,_#ffffff,_transparent)] before:content-[''] after:absolute after:top-1/2 after:left-0 after:h-8/3 after:w-[0.8px] after:-translate-y-1/2 after:bg-[radial-gradient(circle,_#ffffff,_transparent)] after:content-['']"></span>
      {children}
    </div>
  );
}
