import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { CaseStudies } from "@/components/CaseStudies";
import { Education } from "@/components/Education";
import { Credentials } from "@/components/Credentials";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <CaseStudies />
      <Education />
      <Credentials />
      <Testimonials />
      <Contact />
    </main>
  );
}
