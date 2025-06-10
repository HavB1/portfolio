import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import GitHubContributions from "@/components/github-contributions";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      {/* <About /> */}
      <div className="max-w-7xl mx-auto  py-20">
        <GitHubContributions />
      </div>
      <Skills />
      <Contact />
    </main>
  );
}
