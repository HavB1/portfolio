import { Badge } from "@/components/ui/badge";

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
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Frontend
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {frontendSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-sm py-2 px-3"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Backend
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {backendSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-sm py-2 px-3"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Tools</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {tools.map((tool) => (
                <Badge
                  key={tool}
                  variant="secondary"
                  className="text-sm py-2 px-3"
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
