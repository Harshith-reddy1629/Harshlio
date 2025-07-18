import { IconProps } from "@/types/IconProps";
import React from "react";

export default function LinkIcon({ size = "8", className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={`stroke-white ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.12 8.1865L8.55003 3.61652C7.21938 2.28584 5.03263 2.31515 3.66577 3.68199C2.29893 5.0488 2.26962 7.2356 3.6003 8.56625L7.56793 12.5339"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4513 11.5015L20.419 15.4692C21.7497 16.7999 21.7203 18.9866 20.3535 20.3535C18.9867 21.7203 16.7999 21.7496 15.4692 20.4189L10.8992 15.8489"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0546 13.0708C14.4215 11.704 14.4508 9.5172 13.1201 8.1865"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8994 10.8992C9.53257 12.2661 9.50327 14.4528 10.8339 15.7835"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
