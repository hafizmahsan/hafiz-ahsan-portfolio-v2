import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      <Hero />

      <About />

      <Experience />

      <Projects />

      <Contact />

      <footer className="border-t border-border px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs text-foreground-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Hafiz Ahsan. All rights reserved.
          </p>

          <p className="font-mono">
            AUTOMATION · ARCHITECTURE · ENGINEERING
          </p>
        </div>
      </footer>
    </main>
  );
}
