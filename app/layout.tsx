import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/client";

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
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
