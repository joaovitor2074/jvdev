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
      className="hero-bg relative w-full flex items-center text-white overflow-hidden"
    >
      

      {/* Overlay */}
      <ParticlesBg />
  

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* TEXTO */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
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
            Desenvolvimento Web | JavaScript • React • Node.js • MySQL | Tailwind | Linux | Bolsista CNPq
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-400 max-w-xl"
          >
            Atuação no desenvolvimento de sistemas e aplicações web institucionais,
            com experiência prática em front-end, back-end e banco de dados.
            Bolsista CNPq, participando da criação e organização de soluções web
            utilizadas em ambiente real.
          </motion.p>

          <motion.div
            variants={item}
            className="flex gap-4"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="primary" className="btn_pro">Ver Projetos</Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="secondary" className="btn-con">Contato</Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* IMAGEM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            rotate: { duration: 0.8 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            scale: 1.05,
            rotate: 1,
          }}
          className={`doido flex justify-center md:justify-end `}
        >
          <img
            src={banner}
            alt="Banner JVDev"
            className="max-w-xs md:max-w-md drop-shadow-2xl z-10"
          />
        </motion.div>

      </div>
    </section>
  );
}
