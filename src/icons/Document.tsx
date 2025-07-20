import { IconProps } from "@/types/IconProps";
import React from "react";

export default function Document({ size = "28", className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={`fill-white ${className}`}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_201_18869)">
        <path
          d="M2.52336 1.51465C2.37607 1.51465 2.23482 1.57316 2.13067 1.6773C2.02653 1.78145 1.96802 1.9227 1.96802 2.06999V6.51272C1.96802 6.66001 2.02653 6.80126 2.13067 6.90541C2.23482 7.00955 2.37607 7.06806 2.52336 7.06806H5.85541C6.00269 7.06806 6.14395 7.00955 6.24809 6.90541C6.35224 6.80126 6.41075 6.66001 6.41075 6.51272V3.18067L4.74472 1.51465H2.52336ZM2.52336 2.06999H4.46705V3.45834H5.85541V6.51272H2.52336V2.06999ZM3.0787 4.29135V4.8467H5.30007V4.29135H3.0787ZM3.0787 5.40204V5.95738H4.46705V5.40204H3.0787Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_201_18869">
          <rect
            width="6.6641"
            height="6.6641"
            fill="white"
            transform="translate(0.8573 0.958984)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
