import clsx from "clsx";
import React, { CSSProperties } from "react";

export default function ShortBorders({
  bordersize = "12px",
  bordercolor = "#ffffff",
  borderwidth = "2px",
  className = "",
}: {
  bordersize?: string;
  bordercolor?: string;
  borderwidth?: string;
  className?: string;
}) {
  return (
    <span
      style={
        {
          "--bordersize": bordersize,
          "--bordercolor": bordercolor,
          "--borderwidth": borderwidth,
        } as CSSProperties
      }
      className={clsx(
        "absolute inset-0 *:aspect-square *:h-[calc(var(--bordersize)+var(--borderwidth))] *:transition-all *:duration-300",
        className,
      )}
    >
      <span className="absolute bottom-0 left-0 -translate-x-[calc(var(--borderwidth)+1px)] translate-y-[calc(var(--borderwidth)+1px)] border-b-[calc(var(--borderwidth))] border-l-[_calc(var(--borderwidth))_] border-b-[var(--bordercolor)] border-l-[var(--bordercolor)]"></span>
      <span className="absolute top-0 left-0 -translate-x-[calc(var(--borderwidth)+1px)] -translate-y-[calc(var(--borderwidth)+1px)] border-t-[_calc(var(--borderwidth))_] border-l-[_calc(var(--borderwidth))_] border-t-[var(--bordercolor)] border-l-[var(--bordercolor)]"></span>
      <span className="absolute right-0 bottom-0 translate-x-[calc(var(--borderwidth)+1px)] translate-y-[calc(var(--borderwidth)+1px)] border-r-[_calc(var(--borderwidth))_] border-b-[_calc(var(--borderwidth))_] border-r-[var(--bordercolor)] border-b-[var(--bordercolor)]"></span>
      <span className="absolute top-0 right-0 translate-x-[calc(var(--borderwidth)+1px)] -translate-y-[calc(var(--borderwidth)+1px)] border-t-[_calc(var(--borderwidth))_] border-r-[_calc(var(--borderwidth))_] border-t-[var(--bordercolor)] border-r-[var(--bordercolor)]"></span>
    </span>
  );
}
