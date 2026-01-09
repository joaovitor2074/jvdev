import { motion } from "framer-motion";
import ParticlesBg from "../components/ui/ParticlesBg";
import Button from "../components/ui/Button";
import ProjectCard from "../components/projects/projectCardpage";
import { projetos } from "../data/projects";

import "../styles/pages/project.css";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <main id="project" className=" relative min-h-screen text-zinc-100 px-6 md:px-12 py-20">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticlesBg />
      </div>

      {/* HERO */}
      <motion.section
        className="relative z-10 max-w-5xl mx-auto mb-24"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={item}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Projetos
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg text-zinc-300 max-w-3xl leading-relaxed"
        >
          Aqui estão alguns dos sistemas e aplicações que desenvolvi para uso
          real, envolvendo arquitetura bem definida, organização de dados e
          soluções pensadas para manutenção e evolução contínua.
        </motion.p>
      </motion.section>

      {/* GRID DE PROJETOS */}
      <motion.section
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projetos.map((projeto) => (
          <ProjectCard
            key={projeto.id}
            title={projeto.titulo}
            description={projeto.descricao}
            image={projeto.image}
            technologies={projeto.techs}
            url={projeto.link}
          />
        ))}
      </motion.section>

      {/* BLOCO TÉCNICO */}
      <motion.section
        className="relative z-10 max-w-5xl mx-auto mb-28"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4">
          Como esses projetos são desenvolvidos
        </h2>

        <p className="text-zinc-300 leading-relaxed max-w-3xl">
          Cada projeto é pensado desde a modelagem dos dados até a arquitetura da
          aplicação, priorizando clareza, escalabilidade e facilidade de
          manutenção. Trabalho com foco em código limpo, boas práticas e
          responsabilidade técnica.
        </p>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="relative z-10 max-w-5xl mx-auto rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur px-6 py-12 text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Quer ver mais detalhes técnicos?
        </h3>

        <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
          Posso explicar decisões de arquitetura, desafios técnicos e soluções
          aplicadas em cada projeto.
        </p>

        <a href="mailto:jv.dev2074@gmail.com?subject=Conversa%20sobre%20criação%20de%20projetos&body=Olá%20João%2C%0A%0AGostaria%20de%20conversar%20sobre%20como%20você%20desenvolve%20seus%20projetos%2C%20arquitetura%2C%20processos%20e%20boas%20práticas.%0A%0AFico%20no%20aguardo.%0A
">
          <Button variant="primary" className="px-8 py-3 text-base cta-project">
            Entrar em contato
          </Button>
        </a>
      </motion.section>
    </main>
  );
}
