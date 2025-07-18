import { IconProps } from "@/types/IconProps";
import React from "react";

export default function NextIcon({ size = "8", className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={`stroke-[#fff] ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_211_94272)">
        <path
          d="M8.99997 15.0001V9.00011L16.745 19.6501C14.8284 20.8406 12.5345 21.2678 10.3179 20.847C8.10119 20.4262 6.12342 19.1882 4.77635 17.3783C3.42927 15.5683 2.81117 13.3184 3.04449 11.0742C3.2778 8.83006 4.34551 6.7554 6.03611 5.26123C7.7267 3.76707 9.91684 2.96239 12.1726 3.00661C14.4285 3.05084 16.5854 3.94074 18.2161 5.50002C19.8468 7.0593 20.8324 9.17421 20.9776 11.4258C21.1228 13.6773 20.417 15.9013 19 17.6571"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 12V9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_211_94272">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
