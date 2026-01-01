import Hero from "../components/sections/Hero";
import React from "react";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Skills from "../components/sections/Skills";
import ParticlesBg from "../components/ui/ParticlesBg";
import styles from "../styles/pages/home.module.css";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617]">

      {/* CAMADA 0 — OVERLAY GLOBAL */}
      <div className={styles.homeBg} />

      {/* CAMADA 1 — PARTICLES */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticlesBg />
      </div>

      {/* CAMADA 2 — CONTEÚDO */}
      <div className="relative z-2">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>

    </main>
  );
}
