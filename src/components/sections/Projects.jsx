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
                    Projetos em Destaque
                </h2>
                <p className="text-xl md:text-2xl text-gray-300">
                    Projetos reais com foco em front-end, back-end, automação e integração com dados reais.
                </p>
            </motion.div>

            <div className="projects-grid">
                <ProjectCard
                    title="GIEPI — Sistema Institucional de Pesquisa"
                    description="Desenvolvido para organizar dados do CNPq (Lattes), linhas de pesquisa, pesquisadores e projetos, com automação de coleta, normalização e publicação controlada."
                    image={giepi}
                    technologies={[html, css, mysql, js, tailwind, vercel, git, github, react, node, nest]}
                    url="https://aqarh.vercel.app"
                    direction="left"
                />

                <ProjectCard
                    title="Site Profissional — Psicologia"
                    description="Projeto desenvolvido para psicóloga, com identidade visual, conteúdo estratégico e integração direta com WhatsApp para agendamentos."
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
                    <Button variant="primary" className="cursor-pointer mt-12">Explorar mais projetos</Button>
                </motion.div>

        </section>
    )
}

export default Projects
