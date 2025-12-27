import Hero from "../components/sections/Hero";
import React from "react";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Skills from "../components/sections/Skills";

export default function Home() {
    return (
    <>
        <section>
            <Hero />
        </section>
        <section>
            <About />
        </section>
        <section >
            <Projects />
        </section>

        <section>
            <Skills />
        </section>

        <section className="mb-30">
            <Contact />
        </section>
    </>
    )
}