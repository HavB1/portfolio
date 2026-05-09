"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
  is_private: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Bipp Finance - Client App",
    description:
      "A platform that empowers individuals and businesses worldwide with reliable financial solutions, making global transactions simpler and safer.",
    image: "/bipp-client-web.jpg",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "REST APIs",
    ],
    liveUrl: "https://app.bippfinance.com",
    featured: true,
    is_private: false,
  },
  {
    id: 7,
    title: "Monétiq",
    description:
      "Personal finance app for tracking expenses, managing budgets, and gaining insights through detailed reports. Features multi-currency support and intelligent recommendations.",
    image: "/monetiq.png",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "convex",
      "tRPC",
      "Clerk",
      "Recharts",
    ],
    liveUrl: "https://monetiq.ditolab.com",
    featured: true,
    is_private: false,
  },
  {
    id: 8,
    title: "Doeit",
    description:
      "A personal workout companion app to track workouts, create custom training plans, and achieve fitness goals with progress tracking.",
    image: "/doeit.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://doeit.ditolab.com",
    featured: true,
    is_private: false,
  },
  {
    id: 9,
    title: "Squish",
    description:
      "Client-side image compressor for JPEG, PNG & WebP. Drag-and-drop, adjustable quality, Google Drive import — everything runs in-browser, 100% private.",
    image: "/squish.png",
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "React Router v7",
      "Canvas API",
      "Google Drive API",
    ],
    liveUrl: "https://squish.ditolab.com",
    featured: true,
    is_private: false,
  },
  {
    id: 10,
    title: "LitQuiz - Student Notes",
    description:
      "AI-powered SaaS that generates interactive quizzes and flashcards from uploaded study materials like PDFs and images. Subscription-based with Row-Level Security.",
    image: "/litquiz-note.png",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Clerk",
      "Neon PostgreSQL",
      "AI/LLM",
      "Drizzle ORM",
    ],
    liveUrl: "https://note.litquiz.pro",
    featured: true,
    is_private: false,
  },
  {
    id: 3,
    title: "E4S - Ticket System",
    description:
      "A marketing tool that lets users generate unique event ticket designs using their own images.",
    image: "/e4s-ticket-making.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "WebSocket",
    ],
    liveUrl: "https://tickets.e4shaiti.com",
    featured: false,
    is_private: false,
  },
  {
    id: 2,
    title: "Bipp Finance - Admin Dashboard",
    description:
      "Administrative dashboard for managing client portfolios, financial reports, and system configurations with real-time analytics.",
    image: "/bipp-admin-1.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Chart.js",
    ],
    liveUrl: "#",
    featured: false,
    is_private: true,
  },
  {
    id: 4,
    title: "Bipp Finance - Calculator",
    description:
      "Financial calculator tool for precise investment projections and informed decision-making.",
    image: "/bipp-calc.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Financial APIs",
    ],
    liveUrl: "https://simulator.bippfinance.com",
    featured: false,
    is_private: false,
  },
  {
    id: 5,
    title: "Bipp Finance - Website",
    description:
      "Company marketing website with modern, responsive design optimized for all devices and SEO.",
    image: "/bipp-website.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO"],
    liveUrl: "https://bippfinance.com",
    featured: false,
    is_private: false,
  },
  {
    id: 6,
    title: "E4S - Admin Panel",
    description:
      "Service operations management and business analytics for Entreprises 4 Saisons.",
    image: "/e4s-admin.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Analytics",
    ],
    liveUrl: "#",
    featured: false,
    is_private: true,
  },
];

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="py-28 px-4 bg-linear-to-b from-[#23243a] via-[#2a2c42] to-[#23243a]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#FFD166] text-sm font-medium tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            A Gist of My Work
          </h2>
        </motion.div>

        {/* Featured Projects — Horizontal cards */}
        <div className="space-y-6 mb-24">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              <Link
                href={project.liveUrl}
                target="_blank"
                className="group block"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 p-5 md:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300">
                  {/* Image */}
                  <div className="relative w-full md:w-72 h-44 md:h-44 shrink-0 rounded-xl overflow-hidden bg-[#1a1b2e]">
                    <Image
                      src={project.image || "/file.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between flex-1 py-1">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-[#FFD166] transition-colors duration-200">
                          {project.title}
                        </h3>
                        {project.is_private && (
                          <Lock size={14} className="text-gray-500" />
                        )}
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed mb-4 max-w-lg">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] text-gray-500">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center">
                    <ExternalLink
                      size={18}
                      className="text-gray-600 group-hover:text-[#FFD166] transition-colors duration-200"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Other Projects — Compact grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-lg font-medium text-gray-400 mb-8">
            Other Projects
          </h3>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="grid md:grid-cols-2 gap-4"
        >
          {otherProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.35 }}
            >
              {project.is_private ? (
                <div className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-[#1a1b2e]">
                    <Image
                      src={project.image || "/file.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-medium text-white truncate">
                        {project.title}
                      </h4>
                      <Lock size={12} className="text-gray-600 shrink-0" />
                    </div>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] text-gray-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="group flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.08] transition-all duration-300"
                >
                  <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-[#1a1b2e]">
                    <Image
                      src={project.image || "/file.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-white group-hover:text-[#FFD166] transition-colors duration-200 mb-1 truncate">
                      {project.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-gray-600 group-hover:text-[#FFD166] transition-colors duration-200 shrink-0 mt-1"
                  />
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
