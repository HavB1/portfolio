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

const projects = [
  {
    id: 1,
    title: "Bipp Finance - Client App",
    description:
      "A comprehensive financial management application for Bipp Finance clients, featuring portfolio tracking, investment analysis, and real-time market data. Built with modern web technologies for optimal performance and user experience.",
    image: "/bipp-clientapp-1.PNG",
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
    liveUrl: "#",
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
    liveUrl: "#",
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
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my fullstack
          development skills
        </p>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  {!project.is_private && (
                    <Button asChild size="sm" className="flex-1">
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink size={16} className="mr-1" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                  {!project.is_private && (
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.githubUrl} target="_blank">
                        <Github size={16} />
                      </Link>
                    </Button>
                  )}
                  {project.is_private && (
                    <Badge variant="secondary" className="w-full text-center">
                      Private Project
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-2xl font-bold text-gray-900 mb-8">
          Other Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-xs line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 2 && (
                    <Badge variant="outline" className="text-xs">
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
                      className="flex-1 text-xs"
                    >
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink size={14} className="mr-1" />
                        Demo
                      </Link>
                    </Button>
                  )}
                  {!project.is_private && (
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.githubUrl} target="_blank">
                        <Github size={14} />
                      </Link>
                    </Button>
                  )}
                  {project.is_private && (
                    <Badge
                      variant="secondary"
                      className="w-full text-center text-xs"
                    >
                      Private Project
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
