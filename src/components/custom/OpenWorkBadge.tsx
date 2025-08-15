import React from "react";

export default function OpenWorkBadge({
  className,
  text = "Open to work",
}: {
  className?: string;
  text?: string;
}) {
  return (
    <span
      className={`absolute top-0 left-0 flex items-center justify-center gap-1.5 rounded-full bg-white/10 px-3 py-1 pr-3 text-[11px] font-bold tracking-wide text-white/70 ${className}`}
    >
      {" "}
      <span className="size-1.5 rounded-full bg-green-500"></span> {text}
    </span>
  );
}
