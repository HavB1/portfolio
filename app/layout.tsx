import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/client";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ditolab - Fullstack Web Developer",
  description:
    "Experienced fullstack web developer specializing in React, Next.js, PHP, and PostgreSQL. Creating modern, responsive web applications.",
  keywords:
    "fullstack developer, web developer, React, Next.js, PHP, PostgreSQL, frontend, backend",
  authors: [{ name: "Ditolab" }],
  openGraph: {
    title: "Ditolab - Fullstack Web Developer",
    description:
      "Experienced fullstack web developer specializing in React, Next.js, PHP, and PostgreSQL.",
    type: "website",
    url: "https://portfolio.ditolab.com",
    images: [
      {
        url: "https://portfolio.ditolab.com/opengraph-image.png",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ditolab - Portfolio",
    description:
      "Experienced fullstack web developer specializing in React, Next.js, PHP, and PostgreSQL.",
    images: {
      url: "https://portfolio.ditolab.com/twitter-image.png",
      alt: "Ditolab - Portfolio",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <TRPCReactProvider>
          <main className="min-h-screen bg-slate-950">
            {children}
            <Toaster richColors />
          </main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
