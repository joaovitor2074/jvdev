import { motion, useReducedMotion } from "framer-motion";
import { TECHS } from "../../data/techs";

const ProjectCard = ({
  title,
  category,
  description,
  image,
  technologies = [],
  url,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="project-card"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 40, scale: 0.98 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
    >
      <div className="project-preview">
        <img
          src={image}
          alt={`Prévia do projeto ${title}`}
          className="project-image"
          loading="lazy"
          decoding="async"
          sizes="(min-width: 1024px) 45vw, 100vw"
        />

        <div className="project-overlay">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              Ver projeto
            </a>
          ) : (
            <span className="project-btn project-btn-disabled">
              Em desenvolvimento
            </span>
          )}
        </div>
      </div>

      <div className="project-content">
        {category && <span className="project-category">{category}</span>}
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="project-techs" aria-label="Tecnologias utilizadas">
          {technologies.map((techId, index) => {
            const tech = TECHS[techId];
            if (!tech) return null;
            const Icon = tech.icon;

            return (
              <motion.span
                key={`${tech.id}-${index}`}
                title={tech.name}
                className="tech-badge"
                style={{ color: tech.color }}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.18 }}
              >
                <Icon aria-hidden="true" />
                <span className="sr-only">{tech.name}</span>
              </motion.span>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
