import { motion } from "framer-motion";
import Button from "../ui/Button";

import ModelTest from "./ModelTest";

import "../../index.css";
import "../../styles/sections/AboutSection.css";

/* Variants */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};



const itemLeft = {
  hidden: { opacity: 0, x: -60, filter: "blur(6px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const itemRight = {
  hidden: { opacity: 0, x: 60, filter: "blur(6px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: "easeOut" },
  },
};


export default function AboutSection() {
  return (
    <section
      id="about"
     className="relative min-h-screen overflow-hidden bg-transparent"
      style={{ isolation: "isolate" }}
    >

      <motion.div
        className="about-content z-20"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-screen text-white">

          <motion.div variants={itemLeft} className="space-y-6">
            <h2 className="text-4xl font-bold">
              Sobre <span className="text-blue-500">Mim</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Sou João Vitor, desenvolvedor web e bolsista CNPq, atuando no
              desenvolvimento de sistemas e aplicações web voltadas para uso real.
              Trabalho com front-end, back-end e banco de dados, participando de
              projetos institucionais desde a concepção até a entrega.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Atualmente desenvolvo sistemas web para grupos de pesquisa, com foco
              em organização de dados, arquitetura, interface e boas práticas.
              Também aprofundo meus estudos em redes de computadores, Linux e
              cibersegurança.
            </p>
            <Button variant="primary">Ver Projetos</Button>
          </motion.div>
          {/* SKILLS 3D */}
          <motion.div variants={itemRight} className="w-full">
            
            <ModelTest />
          </motion.div>
        </div>
      </motion.div>
    </section>

  );
}
