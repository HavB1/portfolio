"use client";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import {
  React,
  Nextjs,
  HTML5,
  CSS,
  Tailwind,
  Tanstack,
  Php,
  PostgreSQL,
  Git,
  Github,
  Vercel,
  Figma,
  Supabase,
  Firebase,
  Docker,
  PWA,
  Drizzle,
} from "@/lib/icons";

const ACCENT = "#FFD166";
const BG_GRADIENT =
  "bg-gradient-to-br from-[#23243a] via-[#36394F] to-[#23243a]";

interface SkillCardProps {
  title: string;
  skills: string[];
  icons: Record<string, React.ComponentType>;
}

const SkillCard = ({ title, skills, icons }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center bg-[#23243a]/80 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:bg-[#23243a]/90 transition-colors duration-300"
    >
      <h3 className="text-2xl font-semibold text-white mb-6">{title}</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => {
          const Icon = icons[skill];
          return (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-2 group"
            >
              {Icon && (
                <div className="w-12 h-12 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
                  <div className="[&>svg]:w-full [&>svg]:h-full [&>svg]:fill-[#FFD166] group-hover:[&>svg]:fill-white transition-colors duration-300">
                    <Icon />
                  </div>
                </div>
              )}
              <Badge
                variant="outline"
                className="text-sm py-2 px-3 border-[var(--accent-color,#FFD166)] text-[var(--accent-color,#FFD166)] bg-transparent group-hover:bg-[#FFD166]/10 transition-colors duration-300"
              >
                {skill}
              </Badge>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const frontendSkills = [
    "React",
    "Next.js",
    "HTML5",
    "CSS",
    "Tailwind",
    "Tanstack",
  ];

  const backendSkills = ["PHP", "PostgreSQL", "Supabase", "Firebase"];

  const tools = ["Git", "Github", "Vercel", "Figma", "PWA", "Drizzle"];

  const icons = {
    React,
    "Next.js": Nextjs,
    HTML5,
    CSS,
    Tailwind,
    Tanstack,
    PHP: Php,
    PostgreSQL,
    Git,
    Github,
    Vercel,
    Figma,
    Supabase,
    Firebase,
    Docker,
    PWA,
    Drizzle,
  };

  return (
    <section
      id="skills"
      className={`py-24 px-4 relative ${BG_GRADIENT} rounded-t-2xl shadow-xl`}
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
          className="text-4xl font-extrabold text-white text-center mb-12 tracking-tight"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          <SkillCard title="Frontend" skills={frontendSkills} icons={icons} />
          <SkillCard title="Backend" skills={backendSkills} icons={icons} />
          <SkillCard title="Tools" skills={tools} icons={icons} />
        </div>
      </div>
    </section>
  );
}
