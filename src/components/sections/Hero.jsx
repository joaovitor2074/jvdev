import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import ParticlesBg from "../ui/ParticlesBg";
import banner from "../../assets/images/banner.png";
import "../../styles/index.css";
import "../../styles/sections/hero.css";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-bg relative w-full  flex items-center text-white overflow-hidden"
    >
      {/* Particles */}
      <ParticlesBg />

      {/* Overlay */}
      <div className="hero-overlay"></div>

      <div className="container mx-auto px-6 relative z-100 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Olá, eu sou <span className="text-blue-500 glow">João Vitor</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300">
            Desenvolvedor Web em formação | Front-end | Estudante de Tecnologia
          </h2>

          <p className="text-gray-400 max-w-xl">
            Sou estudante da área de desenvolvimento de software, com foco em desenvolvimento web e interesse crescente em cibersegurança. Atuo principalmente no front-end, mas possuo experiência prática no desenvolvimento full stack, integrando front-end, back-end e banco de dados em projetos reais e institucionais.
          </p>

          <div className="flex gap-4">
            <Button variant="primary">Ver Projetos</Button>
            <Button variant="secondary">Contato</Button>
          </div>
        </motion.div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={banner}
            alt="Banner JVDev"
            className="max-w-xs md:max-w-md floating"
          />
        </motion.div>

      </div>
    </section>
  );
}
