import { motion } from "framer-motion";
import { TECHS } from "../../data/techs";

const ProjectCard = ({ title, description, image, technologies, url }) => {
  return (
    <motion.div
      className="rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur p-6"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6 }}
    >
      {/* Preview */}
      <div className="relative rounded-xl overflow-hidden mb-4">
        <img src={image} alt={title} className="w-full h-48 object-cover" />

        <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition flex items-center justify-center">
          <button
            onClick={() => window.open(url, "_blank")}
            className="px-4 py-2 bg-blue-600 rounded text-sm"
          >
            Ver projeto
          </button>
        </div>
      </div>

      {/* Conteúdo */}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-zinc-400 mb-4">{description}</p>

      {/* Tecnologias */}
      <div className="flex flex-wrap gap-3">
        {technologies.map((techId) => {
          const tech = TECHS[techId];
          const Icon = tech.icon;

          return (
            <motion.div
              key={tech.id}
              title={tech.name}
              whileHover={{ scale: 1.25 }}
              className="text-xl"
              style={{ color: tech.color }}
            >
              <Icon />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProjectCard;