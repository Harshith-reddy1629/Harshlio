import { IconProps } from "@/types/IconProps";
import React from "react";

export default function Prisma({ size = "8", className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={`fill-white stroke-[#252525] ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_211_94406)">
        <path
          d="M4.18483 16.2022L7.79983 21.5152C8.06483 21.9052 8.55383 22.0852 9.01483 21.9622L19.1808 19.2442C19.3353 19.2044 19.4791 19.131 19.602 19.0294C19.7249 18.9277 19.8239 18.8003 19.8919 18.656C19.96 18.5118 19.9954 18.3543 19.9958 18.1948C19.9961 18.0353 19.9613 17.8777 19.8938 17.7332L12.3888 2.25019C12.3534 2.17772 12.299 2.11616 12.2315 2.07202C12.164 2.02788 12.0858 2.0028 12.0052 1.99942C11.9245 1.99604 11.8445 2.01449 11.7735 2.05282C11.7025 2.09115 11.6432 2.14794 11.6018 2.21719L4.14883 15.0552C4.04544 15.2302 3.994 15.4309 4.00056 15.6341C4.00711 15.8372 4.07037 16.0343 4.18483 16.2022Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 22L12 2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_211_94406">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
