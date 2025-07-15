"use client";
import CopyRight from "@/icons/Social/CopyRight";
// import SocialMedia from "@/pages/homepage/mainsection/SocialMedia";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className={`pt-12 ${geistMono.className} ${geistSans.className}`}>
      {/* <div className="mb-4 w-fit px-16">
        <p className="mb-2">Get in touch</p>
        <SocialMedia className="!size-8" />
      </div> */}
      <div className="relative flex items-center justify-end gap-1 overflow-hidden border-t border-white/10 p-5 px-18 text-xs text-white/70">
        {" "}
        All Rights <CopyRight /> Harshith Reddy 2025
      </div>
    </footer>
  );
}
