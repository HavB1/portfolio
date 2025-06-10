"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";

const ACCENT = "#FFD166";
const BG_GRADIENT =
  "bg-gradient-to-br from-[#23243a] via-[#36394F] to-[#23243a]";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Works", href: "#projects" },
  { label: "Blog", href: "#blog" },
];

export default function Hero() {
  return (
    <section
      className={`relative min-h-[90vh] w-full flex flex-col overflow-hidden ${BG_GRADIENT} rounded-t-2xl shadow-xl`}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-8 py-6 bg-white/5 rounded-t-2xl shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-2xl font-black text-[#23243a] border-2 border-gray-200/20">
            D
          </div>
          <span className="text-lg font-bold text-white tracking-wide">
            DITOLAB
          </span>
        </div>
        <a
          href={"#contact"}
          className="bg-white text-[#23243a] font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition-colors"
        >
          Book a call
        </a>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-full px-6 md:px-20 pt-12 pb-8 gap-10 md:gap-0">
        {/* Left: Intro */}
        <div className="flex-1 flex flex-col items-start justify-center gap-6 md:gap-10 mt-8 md:mt-0">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-sky-300 text-sm font-semibold shadow border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-sky-400 inline-block" />
            AVAILABLE FOR WORK
          </span>

          <h1 className="text-2xl md:text-5xl font-extrabold text-white leading-tight">
            Beautifully crafted software solutions for your business and
            personal needs.
            <br />
            <span className="text-lg md:text-2xl font-normal  text-[var(--accent-color,#FFD166)]">
              We create the future you need today.
            </span>
          </h1>

          <Button className="bg-white text-[#23243a] font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition-colors mt-4">
            Contact Us
          </Button>
        </div>

        {/* Right: Projects Masonry Grid */}
        <div className="flex-1 flex flex-col items-center md:items-end gap-6 w-full">
          <div className="columns-2 md:columns-3 gap-4 w-full max-w-xl [column-fill:_balance]">
            <>
              {/* Single images */}
              {[
                { src: "/bipp-website.png", name: "Website" },
                { src: "/bipp-clientapp-1.PNG", name: "PWA" },
                { src: "/bipp-clientapp-2.PNG", name: "PWA" },
                { src: "/bipp-clientapp-3.PNG", name: "PWA" },
                { src: "/bipp-calc.png", name: "Web App" },
                { src: "/ded-viz.png", name: "Website" },
                {
                  src: "/e4s-ticket-making.png",
                  name: "Web App",
                },
                { src: "/e4s-admin.png", name: "PWA" },
                { src: "/bipp-client-web.jpg", name: "PWA" },
              ].map((project) => (
                <div
                  key={project.src}
                  className="mb-4 break-inside-avoid relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
                >
                  <Image
                    src={project.src}
                    alt={project.name}
                    width={400}
                    height={300}
                    className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold text-center px-2">
                      {project.name}
                    </span>
                  </div>
                </div>
              ))}
              {/* Bipp Admin App (2 images) */}
              <div className="mb-4 break-inside-avoid relative rounded-xl overflow-hidden shadow-lg flex flex-col gap-2 group cursor-pointer">
                <div className="relative w-full">
                  <Image
                    src="/bipp-admin-1.png"
                    alt="Bipp Admin App 1"
                    width={400}
                    height={180}
                    className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold text-center px-2">
                      Web App
                    </span>
                  </div>
                </div>
                {/* <div className="relative w-full">
                  <Image
                    src="/bipp-admin-2.png"
                    alt="Bipp Admin App 2"
                    width={400}
                    height={180}
                    className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </div> */}
              </div>
            </>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-[var(--accent-color,#FFD166)] transition-colors duration-200"
    >
      {icon}
    </a>
  );
}
