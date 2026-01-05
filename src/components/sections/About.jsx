import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
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

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile;
}



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
  const isMobile = useIsMobile();

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-transparent"
      style={{ isolation: "isolate" }}
    >
      {/* Glow de fundo */}
      {!isMobile && (
        <motion.div
          variants={glowPulse}
          animate="animate"
          className="absolute -top-40 -left-40 w-500px h-500px rounded-full bg-blue-500/30 blur-[140px] z-0"
        />
      )}

      <motion.div
        className="relative z-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center text-white">

          {/* TEXTO */}
          <motion.div variants={itemLeft} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Sobre <span className="text-blue-500">Mim</span>
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Sou João Vitor, desenvolvedor Full Stack, com atuação no desenvolvimento de sistemas e aplicações web voltadas para uso real. Atualmente sou bolsista CNPq, participando de projetos institucionais focados na criação e organização de sistemas acadêmicos utilizados em ambiente produtivo.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Tenho experiência prática no desenvolvimento front-end e back-end, com foco em arquitetura, organização de dados, boas práticas de código e manutenção de sistemas. Atuo desde a concepção da solução até sua implementação, sempre buscando eficiência, clareza e escalabilidade.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Trabalho principalmente com JavaScript, Node.js, React, HTML, CSS, MySQL e WordPress, além de estar em constante aprimoramento em TypeScript e NestJS. Também possuo interesse e estudos em tecnologias complementares como Three.js, Blender, Linux, redes de computadores e cibersegurança, o que contribui para uma visão técnica mais ampla dos projetos.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Além de projetos institucionais, já desenvolvi soluções reais como freelancer, atendendo demandas específicas e entregando sistemas funcionais, estáveis e alinhados às necessidades do cliente.
            </p>

            <motion.div whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.95 }}>
              <Button variant="primary" className="btn_pro">Ver Projetos</Button>
            </motion.div>
          </motion.div>

          {/* BLOCO VISUAL LEVE */}

          <motion.div
            variants={itemRight}
            className="
    relative
    w-full
    max-w-600px
    h-260px
    sm:h-360px
    md:h-420px
    lg:h-480px
    mx-auto
  "
          >
            {/* Halo – desktop only */}
            {!isMobile && (
              <motion.div
                variants={glowPulse}
                animate="animate"
                className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"
              />
            )}

            {/* CONTEÚDO */}
            {isMobile ? (
              /* MOBILE → elemento leve */
              <div className="
      w-full h-full
      rounded-2xl
      bg-linear-to-br from-blue-500/20 to-cyan-400/10
      border border-white/10
      flex items-center justify-center
      text-gray-300 text-sm
    ">
                Tecnologias • Sistemas • Automação
              </div>
            ) : (
              /* DESKTOP → Canvas */
              <motion.div
                className="relative z-40 w-full h-full flex items-center justify-center"
                animate={{
                  x: ["0%", "0%", "120%", "120%", "-30%", "0%"],
                  opacity: [1, 1, 1, 0, 0, 1],
                  scale: [1, 1, 1, 0.92, 0.92, 1],
                }}
                transition={{
                  duration: 14,
                  times: [0, 0.42, 0.5, 0.52, 0.65, 1],
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ModelTest />
              </motion.div>
            )}
          </motion.div>


        </div>
      </motion.div>
    </section>
  );
}
