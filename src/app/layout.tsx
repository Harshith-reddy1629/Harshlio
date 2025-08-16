import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/common/header/Header";
import "./globals.css";
import Footer from "@/components/common/footer/Footer";
import DPRwrapper from "@/Providers/DPRwrapper";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Fader from "@/components/custom/Fader";

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
  title: "Bandam Harshith Reddy",
  description:
    "Results-driven full-stack developer skilled in React.js, Next.js, Node.js, Express.js, MongoDB, Stripe, and Razorpay. Proven ability to build scalable web applications with secure payment integrations, seamless booking platforms, and responsive, user-focused interfaces.",
  creator: "Harshith Reddy",
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  openGraph: {
    title: "Bandam Harshith Reddy",
    description:
      "Full-Stack Developer specializing in React.js, Next.js, Node.js, and MongoDB. Discover my work, projects, and how to get in touch.",
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
    "Bandam Harshith Reddy",
    "Bandam",
    "Portfolio",
    "Frontend",
    "Developer",
    "MERN",
    "Full Stack",
    "Harshith Portfolio",
    "Freelancer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Developer",
    "Freelance",
    "full-stack web developer in Hyderabad",
    "React.js developer India",
    "Next.js and MongoDB projects",
    "purecode",
    "purecode.ai",
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
      <head>
        <meta
          name="google-site-verification"
          content="S7sLzTTNn-Gi4U-JGxORgJs078Nsri-VjNiFcne8-XQ"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistMono.className} ${geistSans.className} relative text-white antialiased`}
      >
        <div className="fixed bottom-0 size-32 bg-white/10 blur-[60px]"></div>
        <Analytics />
        <SpeedInsights />
        <DPRwrapper />
        <Fader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
