import { IconProps } from "@/types/IconProps";
import React from "react";

export default function HTMLicon({ size = "8", className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={`fill-white ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.13599 3.01202H19.865L18.434 19.162L11.983 20.988L5.56899 19.162L4.13599 3.01202ZM9.40199 10.314L9.22899 8.27902L16.762 8.28102L16.935 6.31802L7.06499 6.31602L7.58699 12.314H14.422L14.179 14.88L12 15.482L9.78599 14.877L9.64499 13.297H7.69099L7.93799 16.42L12 17.506L16.028 16.426L16.586 10.315L9.40199 10.314Z" />
    </svg>
  );
}
