import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import ParticlesBg from "../ui/ParticlesBg";

import banner from "../../assets/images/banner.png";
import "../../styles/index.css";
import "../../styles/sections/hero.css";

/* Variants */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full flex items-center text-white overflow-hidden"
    >
      

      {/* Overlay */}
      <ParticlesBg />
  

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* TEXTO */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6 hero-text"
        >
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl font-bold"
          >
            Olá, eu sou{" "}
            <motion.span
              className="text-blue-500 glow inline-block"
              animate={{
                textShadow: [
                  "0 0 10px #3b82f6",
                  "0 0 25px #3b82f6",
                  "0 0 10px #3b82f6",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              João Vitor
            </motion.span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-xl md:text-2xl text-gray-300"
          >
            Desenvolvedor Web Full Stack <br/>| JavaScript • React • Node.js • MySQL | Tailwind | Linux |
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-400 max-w-xl"
          >
            Atuo no desenvolvimento de sistemas e aplicações web institucionais, com experiência em front-end, back-end e banco de dados. Bolsista CNPq, participo da criação de soluções utilizadas em ambientes reais, com foco em qualidade, organização e desempenho.
          </motion.p>

          <motion.div
            variants={item}
            className="flex gap-4"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a href="/projects"><Button variant="primary" className="btn_pro">Ver Projetos</Button></a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a href="/contact"><Button variant="secondary" className="btn-con">Entrar em Contato</Button></a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* IMAGEM */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{
    opacity: 1,
    scale: 1,
    y: [0, -14, 0],
  }}
  transition={{
    opacity: { duration: 0.8 },
    scale: { duration: 0.8 },
    y: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  whileHover={{
    scale: 1.05,
  }}
  className="relative flex justify-center md:justify-end"
>
  {/* Halo / Glow atrás */}
  <div
    className="absolute inset-0 rounded-full blur-3xl opacity-40"
    style={{
      background:
        "radial-gradient(circle at center, #3b82f6 0%, transparent 70%)",
    }}
  />

  {/* Container glass */}
  <div className="relative z-10 rounded-2xl p-2 bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
    <img
      src={banner}
      alt="Banner JVDev"
      className="max-w-xs md:max-w-md rounded-xl"
    />
  </div>
</motion.div>


      </div>
    </section>
  );
}
