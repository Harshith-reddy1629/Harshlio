import React from "react";

export default function Circular({
  text = "- Available for Work - Contact Me ",
  size = "80",
  color = "#ffffffc0",
  className = "",
  textClass = "",
  speed = "15s",
}: {
  text?: string;
  size?: string | number;
  color?: string;
  className?: string;
  textClass?: string;
  speed?: string;
}) {
  return (
    <svg
      style={{ "--speed": speed } as React.CSSProperties}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`animate-[spin_var(--speed)_linear_infinite] rounded-full bg-gray-300/5 p-1 text-green-400 backdrop-blur-xs ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="circlePath"
        fill="none"
        d="
          M 10, 50
          a 40,40 0 1,1 80,0
          a 40,40 0 1,1 -80,0
        "
      />
      <text
        id="text"
        fontFamily="monospace"
        fontSize="14"
        fontWeight="bold"
        fill={color}
        className={`tracking-[0.016em] uppercase ${textClass}`}
      >
        <textPath className="" id="textPath" href="#circlePath">
          {text}
        </textPath>
      </text>
    </svg>
  );
}
