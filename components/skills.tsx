"use client";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const ACCENT = "#FFD166";
const BG_GRADIENT =
  "bg-gradient-to-br from-[#23243a] via-[#36394F] to-[#23243a]";

export default function Skills() {
  const frontendSkills = [
    "React",
    "Next.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Tanstack Query",
    "tRPC",
    "Responsive Design",
    "UI/UX Design",
  ];

  const backendSkills = [
    "PHP",
    "PostgreSQL",
    "MySQL",
    "RESTful APIs",
    "Node.js",
    "Database Design",
    "Deno",
  ];

  const tools = ["Git", "GitHub", "VS Code", "Figma", "Docker", "Vercel"];

  return (
    <section
      id="skills"
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
          className="text-4xl font-extrabold text-white text-center mb-12 tracking-tight"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-[#23243a]/80 rounded-2xl shadow-lg p-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-white mb-6">Frontend</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {frontendSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="text-sm py-2 px-3 border-[var(--accent-color,#FFD166)] text-[var(--accent-color,#FFD166)] bg-transparent"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="text-center bg-[#23243a]/80 rounded-2xl shadow-lg p-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-white mb-6">Backend</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {backendSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="text-sm py-2 px-3 border-[var(--accent-color,#FFD166)] text-[var(--accent-color,#FFD166)] bg-transparent"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="text-center bg-[#23243a]/80 rounded-2xl shadow-lg p-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-white mb-6">Tools</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {tools.map((tool) => (
                <Badge
                  key={tool}
                  variant="outline"
                  className="text-sm py-2 px-3 border-[var(--accent-color,#FFD166)] text-[var(--accent-color,#FFD166)] bg-transparent"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
