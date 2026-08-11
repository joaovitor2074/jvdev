import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

import banner from "../../assets/images/banner-optimized.jpg";
import "../../styles/index.css";
import "../../styles/sections/hero.css";

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
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
            Desenvolvedor Web Full Stack <br />
            TypeScript • React • Node.js • PostgreSQL • MySQL • Vite
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-400 max-w-xl"
          >
            Atuo no desenvolvimento de sistemas web institucionais, SaaS,
            cardápios digitais e aplicações responsivas, com experiência em
            front-end, back-end, banco de dados, automações e painéis
            administrativos. Meus projetos recentes incluem Servix, GIEPI,
            Código TCC e soluções comerciais para atendimento via WhatsApp.
          </motion.p>

          <motion.div variants={item} className="hero-actions">
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <a href="/projects">
                <Button variant="primary" className="btn_pro">Ver projetos</Button>
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <a href="/contact">
                <Button variant="secondary" className="btn-con">Entrar em contato</Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

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
          whileHover={{ scale: 1.04 }}
          className="relative flex justify-center md:justify-end hero-visual"
        >
          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-40"
            style={{
              background:
                "radial-gradient(circle at center, #3b82f6 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 rounded-lg p-2 bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
            <img
              src={banner}
              alt="Ilustração de João Vitor desenvolvendo sistemas"
              className="max-w-xs md:max-w-md rounded-lg"
              width="900"
              height="600"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
