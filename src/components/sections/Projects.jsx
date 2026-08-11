import { motion } from "framer-motion";
import ProjectCard from "../projects/ProjectCard";
import Button from "../ui/Button";
import { projetosDestaque } from "../../data/projects";
import "../projects/projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-kicker">GitHub e Vercel recentes</span>
        <h2>Projetos em destaque</h2>
        <p>
          Sistemas reais e produtos demonstráveis com foco em SaaS, front-end,
          back-end, automação, dados e experiências web responsivas.
        </p>
      </motion.div>

      <div className="projects-grid">
        {projetosDestaque.map((projeto) => (
          <ProjectCard
            key={projeto.id}
            title={projeto.titulo}
            category={projeto.categoria}
            description={projeto.descricao}
            image={projeto.image}
            technologies={projeto.techs}
            url={projeto.link}
            repo={projeto.repo}
          />
        ))}
      </div>

      <motion.div
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.95 }}
        className="divBtn"
      >
        <a href="/projects">
          <Button variant="primary" className="cursor-pointer mt-12">
            Explorar mais projetos
          </Button>
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;
