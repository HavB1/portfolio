"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

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
      className={`relative min-h-[90vh] w-full flex flex-col justify-between overflow-hidden ${BG_GRADIENT} rounded-2xl shadow-xl`}
    >
      {/* Floating Nav */}
      <nav className="absolute top-8 right-10 z-20 flex gap-8 items-center">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            className={`text-lg font-semibold tracking-wide relative transition-colors duration-200 after:content-[''] after:block after:h-0.5 after:bg-[${ACCENT}] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-300 ${
              i === 0 ? "text-white" : "text-gray-400 hover:text-white"
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            {link.label}
          </motion.a>
        ))}
      </nav>

      {/* Diagonal Split BG */}
      <svg
        className="absolute inset-0 w-full h-full z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="#23243a" points="0,0 100,0 100,100" opacity="0.7" />
      </svg>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full h-full px-6 md:px-20 pt-24 pb-12 md:pb-0">
        {/* Left: Logo, Name, Socials, Taglines */}
        <div className="flex-1 flex flex-col items-start md:items-start justify-center gap-8 md:gap-12">
          {/* Animated Logo Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2,
            }}
            className="mb-2"
          >
            <div className="w-16 h-16 rounded-full bg-[var(--accent-color,#FFD166)] flex items-center justify-center text-3xl font-black text-[#23243a] shadow-lg shadow-yellow-200/30 border-4 border-white/10">
              D
            </div>
          </motion.div>
          {/* Name with animated underline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight relative"
          >
            Dito
            <span className="inline-block relative">
              lab
              <motion.span
                layoutId="hero-underline"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="block h-2 rounded bg-[var(--accent-color,#FFD166)] absolute left-0 -bottom-2 w-full origin-left"
                style={{ zIndex: -1 }}
              />
            </span>
            .
          </motion.h1>
          {/* Taglines */}
          <div className="space-y-2 mt-2">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-200 font-medium"
            >
              Beautifully crafted software solutions for your business and
              personal needs.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-400"
            >
              We create the future you need today.
            </motion.p>
          </div>
          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex gap-6 mt-4"
          >
            <SocialIcon
              href="https://github.com/HavB1"
              icon={<Github size={22} />}
            />
            <SocialIcon
              href="https://linkedin.com/in/dedfegens"
              icon={<Linkedin size={22} />}
            />
            <SocialIcon
              href="mailto:contact@ditolab.com"
              icon={<Mail size={22} />}
            />
          </motion.div>
        </div>

        {/* Right: CTA and Scroll Hint */}
        <div className="flex-1 flex flex-col items-end justify-center mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="w-full md:w-auto flex flex-col items-end gap-6"
          >
            <Button
              asChild
              size="lg"
              className="bg-[var(--accent-color,#FFD166)] text-[#23243a] font-bold px-8 py-4 text-lg shadow-lg hover:bg-[#ffe299] transition-colors"
            >
              <Link href="#about" className="flex items-center gap-2">
                My story <ArrowRight size={20} />
              </Link>
            </Button>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex flex-col items-center mt-8"
            >
              <span className="text-xs text-gray-400 mb-1">Scroll down</span>
              <ArrowDown
                className="text-[var(--accent-color,#FFD166)] animate-bounce"
                size={28}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Subtle pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='%23FFD166' fill-opacity='0.07'/%3E%3C/svg%3E\")",
        }}
      />
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
