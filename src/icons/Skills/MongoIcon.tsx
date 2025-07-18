import { IconProps } from "@/types/IconProps";
import React from "react";

export default function MongoIcon({ size = "8", className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={`fill-white ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.74 4.23001C12.9 3.23001 12.17 2.23001 12.03 2.01001H12C11.86 2.22001 11.13 3.23001 10.29 4.23001C3.08998 13.42 11.43 19.62 11.43 19.62L11.5 19.67C11.56 20.62 11.72 22 11.72 22H12.34C12.34 22 12.49 20.63 12.55 19.67L12.62 19.61C12.62 19.61 20.94 13.42 13.74 4.23001ZM12 19.48C11.8247 19.336 11.664 19.1753 11.52 19L12 9.00001L12.45 19C12.3151 19.1735 12.1644 19.3342 12 19.48Z" />
    </svg>
  );
}
