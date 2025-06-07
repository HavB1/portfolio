import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
            DB
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Ditolab
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Fullstack Web Developer
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            I am a fullstack web developer with a passion for creating
            exceptional digital experiences. I specialize in React/Next.js
            frontend development and robust backend solutions.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <Link
            href="https://github.com/HavB1"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <GithubIcon />
          </Link>
          <Link
            href="https://linkedin.com/in/dedfegens"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href="mailto:contact@ditolab.com"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Mail size={24} />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-400" size={24} />
      </div>
    </section>
  );
}

const GithubIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors"
  >
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);
