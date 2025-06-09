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
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

const ACCENT = "#FFD166";
const BG_GRADIENT =
  "bg-gradient-to-br from-[#23243a] via-[#36394F] to-[#23243a]";

const projects = [
  {
    id: 1,
    title: "Bipp Finance - Client App",
    description:
      "A comprehensive financial management application for Bipp Finance clients, featuring portfolio tracking, investment analysis, and real-time market data. Built with modern web technologies for optimal performance and user experience.",
    image: "/bipp-client-web.jpg",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "REST APIs",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    is_private: false,
  },
  {
    id: 2,
    title: "Bipp Finance - Admin Dashboard",
    description:
      "An advanced administrative dashboard for Bipp Finance, enabling efficient management of client portfolios, financial reports, and system configurations. Features comprehensive analytics and real-time monitoring.",
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
    githubUrl: "#",
    featured: true,
    is_private: true,
  },
  {
    id: 3,
    title: "Entreprises 4 Saisons - Ticket System",
    description:
      "A specialized ticket management system for Entreprises 4 Saisons, streamlining service requests and maintenance operations. Includes ticket creation, tracking, and automated notifications.",
    image: "/e4s-ticket-making.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "WebSocket",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    is_private: false,
  },
  {
    id: 4,
    title: "Bipp Finance - Calculator",
    description:
      "An advanced financial calculator tool for Bipp Finance, helping clients make informed investment decisions with precise calculations and projections.",
    image: "/bipp-calc.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Financial APIs",
    ],
    liveUrl: "https://simulator.bippfinance.com",
    githubUrl: "#",
    featured: false,
    is_private: false,
  },
  {
    id: 5,
    title: "Bipp Finance - Website",
    description:
      "The official website for Bipp Finance, showcasing services, company information, and client resources. Features a modern, responsive design optimized for all devices.",
    image: "/bipp-website.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "SEO Optimization",
    ],
    liveUrl: "https://bippfinance.com",
    githubUrl: "#",
    featured: false,
    is_private: false,
  },
  {
    id: 6,
    title: "Entreprises 4 Saisons - Admin Panel",
    description:
      "Administrative control panel for Entreprises 4 Saisons, providing comprehensive management tools for service operations and business analytics.",
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
    githubUrl: "#",
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
      className={`py-24 px-4 relative ${BG_GRADIENT} rounded-2xl shadow-xl`}
    >
      {/* Subtle pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='%23FFD166' fill-opacity='0.07'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-white text-center mb-4 tracking-tight"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto"
        >
          Here are some of my recent projects that showcase my fullstack
          development skills
        </motion.p>

        {/* Featured Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 80, damping: 18 }}
            >
              <Card className="overflow-hidden group bg-[#23243a]/80 border-none shadow-lg rounded-2xl transition-transform duration-300 hover:scale-[1.025] hover:shadow-2xl relative">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/file.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.is_private && (
                    <div className="absolute top-3 right-3 bg-gray-900/80 text-yellow-300 text-xs px-3 py-1 rounded-full font-semibold z-10">
                      Private
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center gap-2">
                    {project.title}
                    {project.featured && (
                      <span className="inline-block w-2 h-2 rounded-full bg-[var(--accent-color,#FFD166)] animate-pulse" />
                    )}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-[var(--accent-color,#FFD166)] text-[var(--accent-color,#FFD166)] bg-transparent"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge
                        variant="outline"
                        className="text-xs border-[var(--accent-color,#FFD166)] text-[var(--accent-color,#FFD166)] bg-transparent"
                      >
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {!project.is_private && (
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-[var(--accent-color,#FFD166)] text-[#23243a] font-bold hover:bg-[#ffe299]"
                      >
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink size={16} className="mr-1" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                    {!project.is_private && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-[var(--accent-color,#FFD166)] text-[var(--accent-color,#FFD166)]"
                      >
                        <Link href={project.githubUrl} target="_blank">
                          <Github size={16} />
                        </Link>
                      </Button>
                    )}
                    {project.is_private && (
                      <Badge
                        variant="secondary"
                        className="w-full text-center bg-gray-700/80 text-yellow-200"
                      >
                        Private Project
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--accent-color,#FFD166)]/40 to-transparent mb-16" />

        {/* Other Projects */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-white mb-8 text-center"
        >
          Other Projects
        </motion.h3>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {otherProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 80, damping: 18 }}
            >
              <Card className="overflow-hidden group bg-[#23243a]/80 border-none shadow-md rounded-2xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl relative">
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.is_private && (
                    <div className="absolute top-2 right-2 bg-gray-900/80 text-yellow-300 text-xs px-2 py-0.5 rounded-full font-semibold z-10">
                      Private
                    </div>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-xs text-gray-400 line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-[var(--accent-color,#FFD166)] text-[var(--accent-color,#FFD166)] bg-transparent"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 2 && (
                      <Badge
                        variant="outline"
                        className="text-xs border-[var(--accent-color,#FFD166)] text-[var(--accent-color,#FFD166)] bg-transparent"
                      >
                        +{project.technologies.length - 2}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {!project.is_private && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="flex-1 text-xs border-[var(--accent-color,#FFD166)] text-[var(--accent-color,#FFD166)] hover:bg-[#FFD166]/10"
                      >
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink size={14} className="mr-1" />
                          Demo
                        </Link>
                      </Button>
                    )}
                    {!project.is_private && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-[var(--accent-color,#FFD166)] text-[var(--accent-color,#FFD166)]"
                      >
                        <Link href={project.githubUrl} target="_blank">
                          <Github size={14} />
                        </Link>
                      </Button>
                    )}
                    {project.is_private && (
                      <Badge
                        variant="secondary"
                        className="w-full text-center text-xs bg-gray-700/80 text-yellow-200"
                      >
                        Private Project
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
