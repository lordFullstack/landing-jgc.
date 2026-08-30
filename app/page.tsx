import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Team from "@/components/sections/Team";
import Method from "@/components/sections/Method";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";

/**
 * JGC.LABS — Landing page assembly.
 *
 * LOOP 01 scope: section order and component boundaries only.
 * Visual implementation of each section is scoped to LOOPS 04-11
 * per docs/context/LOOP_00.md roadmap.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Team />
        <Method />
        <Projects />
        <Services />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
