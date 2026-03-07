"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const roles = ["Web Apps", "Mobile Apps", "SaaS Platforms", "APIs"];

const featuredProjects = [
  { src: "/squish.png", name: "Squish" },
  { src: "/doeit.png", name: "Doeit" },
  { src: "/litquiz-note.png", name: "LitQuiz" },
  { src: "/bipp-website.png", name: "Bipp Website" },
];

export default function HeroV2() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-slate-950 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-amber-500/10 blur-[100px]" />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-16 py-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-lg font-black text-slate-950">
            D
          </div>
          <span className="text-white font-semibold tracking-wide text-sm">
            DITOLAB
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#projects"
            className="hidden md:block text-sm text-slate-400 hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hidden md:block text-sm text-slate-400 hover:text-white transition-colors"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-sm bg-white text-slate-950 font-medium px-5 py-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-16 md:pt-28 pb-16">
        {/* Status badge */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-emerald-400 text-xs font-medium tracking-wide uppercase">
            Available for work
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-7xl font-bold text-white leading-[1.1] max-w-4xl">
          I build things
          <br />
          that people love to use.
        </h1>
        <div className="mt-4 h-10 md:h-14 flex items-center justify-center">
          <span
            key={roleIndex}
            className="text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400 animate-fade-in"
          >
            {roles[roleIndex]}
          </span>
        </div>

        <p className="mt-6 text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
          Fullstack developer crafting modern, performant web experiences with
          React, Next.js, and a keen eye for design.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href="#projects"
            className="bg-white text-slate-950 font-semibold px-8 py-3.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="border border-slate-700 text-white font-medium px-8 py-3.5 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Contact me
          </a>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-8 md:gap-16 mt-16 text-center">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "20+", label: "Projects Delivered" },
            { value: "10+", label: "Happy Clients" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-slate-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Project showcase strip */}
        <div className="mt-20 w-full max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredProjects.map((project) => (
              <a
                key={project.src}
                href="#projects"
                className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-colors"
              >
                <Image
                  src={project.src}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {project.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Fade-in animation style */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </section>
  );
}
