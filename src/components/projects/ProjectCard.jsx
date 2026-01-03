import { motion } from "framer-motion"

const ProjectCard = ({
    title,
    description,
    image,
    technologies,
    url
}) => {
    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0, y: -190, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                type: "spring",
                stiffness: 20,
                damping: 14
            }}
            whileHover={{ y: -6 }}
        >
            <div className="project-preview">
                <img src={image} alt={title} />

                <div className="project-overlay">
                    <button
                        onClick={() => window.open(url, "_blank")}
                        className="project-btn bg-blue-500 overlay"
                    >
                        Ver projeto
                    </button>
                </div>
            </div>

            <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>

                <div className="project-techs">
                    {technologies.map((tech, i) => {
                        // valores aleatórios por ícone
                        const randomDelay = Math.random() * 2
                        const randomDuration = 2 + Math.random() * 2

                        return (
                            <motion.img
                                key={i}
                                src={tech}
                                alt="Tecnologia"
                                className="tech-badge"

                                // entrada quando aparece na tela
                                initial={{ opacity: 0, y: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}

                                // animação contínua própria
                                animate={{
                                    scale: [1, 1.15, 1],
                                    y: [0, -4, 0]
                                }}
                                transition={{
                                    delay: randomDelay,
                                    duration: randomDuration,
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    ease: "easeInOut"
                                }}

                                // hover
                                whileHover={{
                                    scale: 1.3,
                                    filter: "drop-shadow(0 0 12px rgba(59,130,246,0.9))"
                                }}
                            />
                        )
                    })}
                </div>


            </div>
        </motion.div>
    )
}

export default ProjectCard
