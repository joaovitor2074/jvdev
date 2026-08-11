import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import "../../styles/sections/AboutSection.css";

const ModelTest = lazy(() => import("./ModelTest"));

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const itemLeft = {
  hidden: { opacity: 0, x: -60, filter: "blur(8px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const itemRight = {
  hidden: { opacity: 0, x: 60, scale: 0.96, filter: "blur(8px)" },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const glowPulse = {
  animate: {
    opacity: [0.22, 0.4, 0.22],
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile;
}

export default function AboutSection() {
  const isMobile = useIsMobile();

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-transparent"
      style={{ isolation: "isolate" }}
    >
      {!isMobile && (
        <motion.div
          variants={glowPulse}
          animate="animate"
          className="absolute -top-40 -left-32 w-[420px] h-[420px] rounded-full bg-blue-500/20 blur-[120px] z-0"
        />
      )}

      <motion.div
        className="relative z-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center text-white">
          <motion.div variants={itemLeft} className="space-y-6">
            <span className="section-kicker">Sobre mim</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Experiência em <span className="text-blue-500">sistemas reais</span>
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Sou João Vitor, desenvolvedor Full Stack e bolsista CNPq. Trabalho
              no desenvolvimento de aplicações web para uso real, com foco em
              sistemas institucionais, SaaS, automações, painéis administrativos
              e organização de dados.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Nos projetos mais recentes, evoluí o Servix, uma plataforma para
              assistências e serviços com clientes, orçamentos, ordens,
              estoque, financeiro e comunicação por WhatsApp. Também atuei no
              ecossistema do GIEPI, com integração de dados, scraping e gestão
              acadêmica.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Também desenvolvi o Código TCC e cardápios digitais para negócios
              locais, reforçando minha prática com interfaces responsivas,
              fluxos de pedido e produtos pensados para usuários finais.
            </p>

            <motion.div whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.95 }}>
              <a href="/contact">
                <Button variant="primary" className="btn_pro">Vamos conversar</Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemRight}
            className="relative w-full max-w-[600px] h-[260px] sm:h-[360px] md:h-[420px] lg:h-[480px] mx-auto"
          >
            {!isMobile && (
              <motion.div
                variants={glowPulse}
                animate="animate"
                className="absolute inset-0 rounded-full bg-blue-500/16 blur-3xl"
              />
            )}

            {isMobile ? (
              <div className="about-mobile-panel">
                <span>GIEPI</span>
                <strong>SaaS, dados e automações</strong>
                <small>Servix • GIEPI • Código TCC • Cardápios digitais</small>
              </div>
            ) : (
              <motion.div
                className="relative z-40 w-full h-full flex items-center justify-center"
                animate={{
                  x: ["0%", "0%", "110%", "110%", "-24%", "0%"],
                  opacity: [1, 1, 1, 0, 0, 1],
                  scale: [1, 1, 1, 0.94, 0.94, 1],
                }}
                transition={{
                  duration: 16,
                  times: [0, 0.42, 0.5, 0.52, 0.65, 1],
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Suspense fallback={<div className="about-model-loading" />}>
                  <ModelTest />
                </Suspense>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
