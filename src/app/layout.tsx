import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/common/header/Header";
import "./globals.css";
import Footer from "@/components/common/footer/Footer";
import DPRwrapper from "@/Providers/DPRwrapper";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// const baseurl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

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
  description:
    "Bandam Harshith Reddy - Full-Stack Developer specializing in React.js, Next.js, Node.js with expertise in building scalable, user-centric web apps.",
  creator: "Harshith Reddy",
  openGraph: {
    title: "Harshith Reddy",
    description:
      "Bandam Harshith Reddy - Full-Stack Developer specializing in React.js, Next.js, Node.js with expertise in building scalable, user-centric web apps.",
    url: "https://harshithbandam.vercel.app/",
    siteName: "Harshith Reddy",
    images: [
      {
        url: `https://harshithbandam.vercel.app/im2.png`,
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
  keywords: [
    "Harshith Reddy",
    "Portfolio",
    "Frontend",
    "MERN",
    "Full Stack",
    "Harshith Portfolio",
    "Freelancer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Developer",
    "Freelance",
  ],
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
        <Analytics />
        <SpeedInsights />
        <DPRwrapper />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
