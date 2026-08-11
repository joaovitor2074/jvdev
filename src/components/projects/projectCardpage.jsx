import { motion, useReducedMotion } from "framer-motion";
import { TECHS } from "../../data/techs";

const ProjectCard = ({
  title,
  category,
  description,
  image,
  gallery = [],
  technologies = [],
  url,
  repo,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const galleryPreview = gallery.slice(0, 3);
  const hasActions = Boolean(url || repo);

  return (
    <motion.article
      className="project-page-card"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 44 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
    >
      <div className="project-page-preview">
        <img
          src={image}
          alt={`Prévia do projeto ${title}`}
          loading="lazy"
          decoding="async"
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
        />

        <div className="project-page-overlay">
          {hasActions ? (
            <div className="project-page-actions">
              {url && (
                <a href={url} target="_blank" rel="noreferrer" className="project-page-action">
                  Ver site
                </a>
              )}
              {repo && (
                <a href={repo} target="_blank" rel="noreferrer" className="project-page-action is-secondary">
                  Código
                </a>
              )}
            </div>
          ) : (
            <span className="project-page-action is-disabled">
              Em desenvolvimento
            </span>
          )}
        </div>
      </div>

      {galleryPreview.length > 0 && (
        <div className="project-gallery-strip" aria-label={`Outras telas de ${title}`}>
          {galleryPreview.map((galleryImage, index) => (
            <img
              key={galleryImage}
              src={galleryImage}
              alt={`Tela ${index + 1} de ${title}`}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      )}

      <div className="project-page-content">
        {category && <span>{category}</span>}
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="project-page-techs" aria-label="Tecnologias utilizadas">
          {technologies.map((techId, index) => {
            const tech = TECHS[techId];
            if (!tech) return null;
            const Icon = tech.icon;

            return (
              <motion.span
                key={`${tech.id}-${index}`}
                title={tech.name}
                style={{ color: tech.color }}
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
