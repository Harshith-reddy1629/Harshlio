import React from "react";

export default function Header() {
  return (
    <header className="pb-5 fixed top-0 w-full pt-6 px-16 text-white flex items-center justify-between gap-5 font-[family-name:var(--font-geist-mono)]">
      <span className="text-2xl font-semibold bg-background px-4 py-1 rounded-lg">
        H<span className="text-primary">a</span>rshith<span className="text-primary">.</span>
      </span>
      <ul className="flex *:cursor-pointer gap-2 text-lg justify-between w-1/2 ">
        <li className="underline-offset-4 underline decoration-2 decoration-primary">
          Home
        </li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}
