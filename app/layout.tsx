import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/client";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const description =
  "Dito, fullstack engineer in Montréal. Web apps, SaaS and AI tools, from idea to production.";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.ditolab.com"),
  title: "ditolab · Fullstack engineer",
  description,
  keywords:
    "fullstack engineer, web developer, Next.js, React, SaaS, AI tools, Montréal",
  authors: [{ name: "Ditolab" }],
  openGraph: {
    title: "ditolab · Fullstack engineer",
    description,
    type: "website",
    url: "https://portfolio.ditolab.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "ditolab · Fullstack engineer",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0c0d",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
