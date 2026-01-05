import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Button from "../ui/Button";
import ModelTest from "./ModelTest";
import "../../styles/sections/AboutSection.css";


/* ================= VARIANTS ================= */
/* ================= VARIANTS ================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};
const isMobile = window.innerWidth < 768;


const itemLeft = {
  hidden: { opacity: 0, x: -80, filter: "blur(10px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const itemRight = {
  hidden: { opacity: 0, x: 80, scale: 0.95, filter: "blur(10px)" },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1, ease: "easeOut" },
  },
};

const glowPulse = {
  animate: {
    opacity: [0.25, 0.45, 0.25],
    scale: [1, 1.08, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* ===== MODEL ANIMATION ===== */

const modelVariants = {
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },

  exitRight: {
    x: "130vw",
    opacity: 1,
    transition: { duration: 0.35, ease: "easeIn" },
  },

  teleportLeft: {
    x: "-130vw",
    opacity: 0,
    transition: { duration: 0 },
  },
};

/* ================= COMPONENT ================= */

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-transparent"
      style={{ isolation: "isolate" }}
    >

      {/* Glow de fundo */}
      <motion.div
        variants={glowPulse}
        animate="animate"
        className="absolute -top-40 -left-40 w-500px h-500px rounded-full bg-blue-500/30 blur-140px z-0"
      />

      <motion.div
        className="relative z-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center text-white mt-15">

          {/* TEXTO */}
          <motion.div
            variants={itemLeft}
            className="space-y-6"
            whileHover={{ scale: 1.02 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold"
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              Sobre <span className="text-blue-500">Mim</span>
            </motion.h2>

            <motion.p
              className="text-gray-300 leading-relaxed"
              variants={itemLeft}
            >
              Sou João Vitor, desenvolvedor web e bolsista CNPq, atuando no
              desenvolvimento de sistemas e aplicações web voltadas para uso real.
              Trabalho com front-end, back-end e banco de dados, participando de
              projetos institucionais desde a concepção até a entrega.
            </motion.p>

            <motion.p
              className="text-gray-400 leading-relaxed"
              variants={itemLeft}
            >
              Atualmente desenvolvo sistemas web para grupos de pesquisa, com foco
              em organização de dados, arquitetura, interface e boas práticas.
              Também aprofundo meus estudos em redes de computadores, Linux e
              cibersegurança.
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="primary">Mais Sobre Mim</Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemRight}
            className="
  relative 
  overflow-visible
  w-full
  max-w-600px
  h-260px
  sm:h-360px
  md:h-420px
  lg:h-480px
  mx-auto
"


          >
            {/* Halo */}
            <motion.div
              variants={glowPulse}
              animate="animate"
              className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"
            />

            {/* Canvas container */}
            <motion.div
              className="relative z-40 w-full h-full flex items-center justify-center"
              animate={
                isMobile
                  ? { opacity: 1, scale: 0.95 }
                  : {
                    x: ["0%", "0%", "120%", "120%", "-30%", "0%"],
                    opacity: [1, 1, 1, 0, 0, 1],
                    scale: [1, 1, 1, 0.92, 0.92, 1],
                  }
              }
              transition={
                isMobile
                  ? { duration: 0 }
                  : {
                    duration: 14,
                    times: [0, 0.42, 0.5, 0.52, 0.65, 1],
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
              }
            >

              <ModelTest />

            </motion.div>
          </motion.div>
        </div>
      </motion.div >
    </section >
  );
}
