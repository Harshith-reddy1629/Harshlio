import { IconProps } from "@/types/IconProps";
import React from "react";

export default function Mail({ size = "32", className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={`fill-white ${className}`}
      viewBox="0 0 7 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_201_18461)">
        <path d="M6.36567 1.77116C6.36567 1.46572 6.11577 1.21582 5.81033 1.21582H1.3676C1.06216 1.21582 0.812256 1.46572 0.812256 1.77116V5.10321C0.812256 5.40865 1.06216 5.65855 1.3676 5.65855H5.81033C6.11577 5.65855 6.36567 5.40865 6.36567 5.10321V1.77116ZM5.81033 1.77116L3.58896 3.15951L1.3676 1.77116H5.81033ZM5.81033 5.10321H1.3676V2.3265L3.58896 3.71486L5.81033 2.3265V5.10321Z" />
      </g>
      <defs>
        <clipPath id="clip0_201_18461">
          <rect
            width="6.6641"
            height="6.6641"
            fill="white"
            transform="translate(0.256836 0.104492)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
