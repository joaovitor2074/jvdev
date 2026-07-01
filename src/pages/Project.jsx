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
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <main id="project" className="relative min-h-screen text-zinc-100 px-4 sm:px-6 md:px-12 py-16 sm:py-20">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticlesBg />
      </div>

      <motion.section
        className="relative z-10 max-w-5xl mx-auto mb-14 sm:mb-20"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.span variants={item} className="section-kicker">
          Sistemas e experiências recentes
        </motion.span>

        <motion.h1
          variants={item}
          className="text-4xl md:text-5xl font-bold mt-3 mb-6"
        >
          Projetos
        </motion.h1>

        <motion.p
          variants={item}
          className="text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed"
        >
          Aqui estão sistemas e aplicações que desenvolvi para contextos reais,
          incluindo gestão acadêmica, painéis administrativos, automações,
          aplicações web responsivas e projetos de estudo.
        </motion.p>
      </motion.section>

      <motion.section
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6 mb-20"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {projetos.map((projeto) => (
          <ProjectCard
            key={projeto.id}
            title={projeto.titulo}
            category={projeto.categoria}
            description={projeto.descricao}
            image={projeto.image}
            gallery={projeto.gallery}
            technologies={projeto.techs}
            url={projeto.link}
          />
        ))}
      </motion.section>

      <motion.section
        className="relative z-10 max-w-5xl mx-auto mb-20 px-5 sm:px-6 py-8 project-info-band"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4">
          Como esses projetos são desenvolvidos
        </h2>

        <p className="text-zinc-300 leading-relaxed max-w-3xl">
          Cada entrega parte do entendimento do problema, passa pela modelagem
          dos dados e segue para a implementação com atenção a arquitetura,
          responsividade, performance e manutenção. Nos projetos institucionais,
          também trabalho com integração de dados, automações e rotinas de
          acompanhamento administrativo.
        </p>
      </motion.section>

      <motion.section
        className="relative z-10 max-w-5xl mx-auto project-info-band px-5 sm:px-6 py-10 text-center"
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Quer ver mais detalhes técnicos?
        </h3>

        <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
          Posso explicar decisões de arquitetura, desafios técnicos e soluções
          aplicadas em cada projeto.
        </p>

        <a href="mailto:jv.dev2074@gmail.com?subject=Conversa%20sobre%20projetos&body=Ol%C3%A1%20Jo%C3%A3o%2C%0A%0AGostaria%20de%20conversar%20sobre%20seus%20projetos%2C%20arquitetura%20e%20processos.%0A%0AFico%20no%20aguardo.">
          <Button variant="primary" className="px-8 py-3 text-base cta-project">
            Entrar em contato
          </Button>
        </a>
      </motion.section>
    </main>
  );
}
