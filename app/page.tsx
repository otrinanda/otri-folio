import { Hero }             from "@/components/sections/Hero";
import { About }            from "@/components/sections/About";
import { Skills }           from "@/components/sections/Skills";
import { Projects }         from "@/components/sections/Projects";
import { ExperienceSection} from "@/components/sections/Experience";
import { Writing }          from "@/components/sections/Writing";
import { Contact }          from "@/components/sections/Contact";
import { Footer }           from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      {/* Hero — grid visible */}
      <Hero />

      {/* Middle — clean, no grid */}
      <div style={{ background: "var(--body-bg)" }}>
        <div className="max-w-240 mx-auto px-20">
          <About />
          <Skills />
          <Projects />
          <ExperienceSection />
          <Writing />
        </div>
      </div>

      {/* Contact — grid visible */}
      <Contact />

      <Footer />
    </main>
  );
}