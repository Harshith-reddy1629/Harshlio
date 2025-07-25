import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/common/header/Header";
import "./globals.css";
import Footer from "@/components/common/footer/Footer";
import DPRwrapper from "@/Providers/DPRwrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harshith Reddy",
  description: "Harshith Reddy's Portfolio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistMono.className} ${geistSans.className} text-white antialiased`}
      >
        <DPRwrapper />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
