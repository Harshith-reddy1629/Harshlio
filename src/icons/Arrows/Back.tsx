import { IconProps } from "@/types/IconProps";
import React from "react";

export default function Back({ size = "16", className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-white ${className}`}
    >
      <path d="M7.70711 0.292893C8.09763 0.683418 8.09763 1.31658 7.70711 1.70711L3.41421 6H15C15.5523 6 16 6.44771 16 7C16 7.55228 15.5523 8 15 8H3.41421L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C0.105357 7.51957 0 7.26522 0 7C0 6.73478 0.105357 6.48043 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z" />
    </svg>
  );
}
