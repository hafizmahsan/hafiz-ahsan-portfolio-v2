import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
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

      <Footer />
    </main>
  );
}
