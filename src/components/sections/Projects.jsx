import { motion } from "framer-motion"
import ProjectCard from "../projects/ProjectCard"
import "../projects/projects.css"
import Button from "../ui/Button"

//imgs
import alessandra from "../projects/img/alessandra.png"
import giepi from "../projects/img/giepi.png"

import html from "../../assets/images/icons/html.png"
import css from "../../assets/images/icons/css.png"
import js from "../../assets/images/icons/js.png"
import mysql from "../../assets/images/icons/mysql.png"
import tailwind from "../../assets/images/icons/tailwind.png"
import node from "../../assets/images/icons/node.png"
import nest from "../../assets/images/icons/nest.png"
import vercel from "../../assets/images/icons/vercel.png"
import git from "../../assets/images/icons/git.png"
import github from "../../assets/images/icons/github.png"
import express from "../../assets/images/icons/express.png"
import react from "../../assets/images/icons/react.png"
import wordpress from "../../assets/images/icons/wordpress.png"


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
                <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">
                    Projetos
                </h2>
                <p className="text-xl md:text-2xl text-gray-300">
                    Projetos reais focados em front-end, back-end e automações
                </p>
            </motion.div>

            <div className="projects-grid">
                <ProjectCard
                    title="GIEPI"
                    description="Sistema institucional com scraping, automações e painel admin."
                    image={giepi}
                    technologies={[html, css, mysql, js, tailwind, vercel, git, github, react, node, nest]}
                    url="https://aqarh.vercel.app"
                    direction="left"
                />

                <ProjectCard
                    title="Site Psicóloga"
                    description="Website profissional com foco em conversão e contato via WhatsApp."
                    image={alessandra}
                    technologies={[wordpress, js, html, css]}
                    url="https://alessandramacedo.com"
                    direction="right"
                />
                </div>
                <motion.div
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.95 }}
                    className="divBtn"
                >
                    <Button variant="primary" className="cursor-pointer mt-12">Mais Projetos como esses</Button>
                </motion.div>

        </section>
    )
}

export default Projects
