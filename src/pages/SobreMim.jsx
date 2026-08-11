import { lazy, Suspense, useEffect, useState } from "react";
import DeferredParticlesBg from "../components/ui/DeferredParticlesBg";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaWordpress,
  FaLock,
  FaPython,
  FaGit,
  FaGithub,
  FaLinux,
  FaNetworkWired,
  FaPhp,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiVercel,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiVite,
} from "react-icons/si";

import Button from "../components/ui/Button";
import "../styles/pages/aboutme.css";

const CoffeeScene = lazy(() => import("../components/Skills3D/CoffeeScene"));

function useIsDesktop(breakpoint = 768) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= breakpoint);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isDesktop;
}

const tecnologias = [
  { icon: <FaHtml5 size={50} />, color: "#E34F26" },
  { icon: <FaCss3Alt size={50} />, color: "#1572B6" },
  { icon: <FaJs size={50} />, color: "#F7DF1E" },
  { icon: <FaNodeJs size={50} />, color: "#339933" },
  { icon: <FaReact size={50} />, color: "#61DAFB" },
  { icon: <FaDatabase size={50} />, color: "#4479A1" },
  { icon: <FaWordpress size={50} />, color: "#21759B" },
  { icon: <SiTailwindcss size={50} />, color: "#38BDF8" },
  { icon: <FaPython size={50} />, color: "#3776AB" },
  { icon: <FaGit size={50} />, color: "#F05032" },
  { icon: <FaLinux size={50} />, color: "#FCC624" },
  { icon: <FaGithub size={50} />, color: "#FFFFFF" },
  { icon: <FaNetworkWired size={50} />, color: "#0EA5E9" },
  { icon: <SiTypescript size={50} />, color: "#3178C6" },
  { icon: <SiVercel size={50} />, color: "#E5E7EB" },
  { icon: <SiExpress size={50} />, color: "#9CA3AF" },
  { icon: <SiNestjs size={50} />, color: "#E0234E" },
  { icon: <SiPostgresql size={50} />, color: "#4169E1" },
  { icon: <SiPrisma size={50} />, color: "#DDE7F0" },
  { icon: <SiVite size={50} />, color: "#A855F7" },
  { icon: <FaPhp size={50} />, color: "#777BB4" },
  { icon: <FaLock size={50} />, color: "#22C55E" },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function SobreMim() {
  const isDesktop = useIsDesktop();

  return (
    <main>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DeferredParticlesBg />
      </div>

      <main id="aboutme" className="min-h-screen text-zinc-100 px-4 sm:px-6 md:px-12 py-16 sm:py-20">
        <motion.section
          className="max-w-5xl mx-auto mb-20"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span variants={item} className="section-kicker">
            Perfil profissional
          </motion.span>
          <motion.h1 variants={item} className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Sobre mim
          </motion.h1>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div>
              <motion.p variants={item} className="text-lg text-zinc-300 leading-relaxed max-w-2xl">
                Olá, eu sou João Vitor. Sou desenvolvedor web full stack e
                bolsista CNPq, atuando no desenvolvimento de sistemas e
                aplicações web voltadas para uso real, desde soluções
                institucionais até sistemas comerciais e SaaS.
              </motion.p>
              <motion.p variants={item} className="text-lg text-zinc-300 leading-relaxed max-w-2xl">
                Tenho trabalhado com arquitetura de aplicações, organização de
                dados, integrações, scraping, painéis administrativos,
                cardápios digitais, checkout via WhatsApp e interfaces
                responsivas. Gosto de entender o problema antes de escrever
                código, pensando no sistema como um produto útil, sustentável e
                claro para quem usa.
              </motion.p>
            </div>

            <div className="coffee-wrapper">
              {isDesktop ? (
                <Suspense fallback={<div className="coffee-fallback" />}>
                  <CoffeeScene />
                </Suspense>
              ) : (
                <div className="aboutme-mobile-panel">
                  <span>Full Stack</span>
                  <strong>Sistemas reais, dados e automações</strong>
                  <small>Servix • GIEPI • Código TCC • Cardápios digitais</small>
                </div>
              )}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="max-w-5xl mx-auto mb-20"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2 variants={item} className="text-2xl font-semibold mb-4">
            Minha trajetória
          </motion.h2>
          <motion.p variants={item} className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
            Meu interesse por programação começou em 2023, enquanto trabalhava
            de forma informal em uma loja de informática. Durante os horários
            livres, passei a estudar desenvolvimento web de forma autodidata,
            praticando HTML, CSS, JavaScript e fundamentos de lógica.
          </motion.p>
          <motion.p variants={item} className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
            Depois, investi no meu próprio computador e intensifiquei os estudos
            em casa. Ao ingressar no IFMA, essa experiência prévia com
            programação e freelas facilitou minha aproximação com grupos de
            pesquisa, resultando em projetos reais e na bolsa de pesquisa CNPq.
          </motion.p>
        </motion.section>

        <motion.section
          className="max-w-5xl mx-auto mb-20"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2 variants={item} className="text-2xl font-semibold mb-4">
            Projetos reais e experiência prática
          </motion.h2>
          <motion.p variants={item} className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
            Atualmente evoluo projetos como o Servix, uma plataforma full stack
            para assistências e serviços com clientes, orçamentos, ordens,
            estoque, financeiro, prospecção e comunicação por WhatsApp. Também
            desenvolvo soluções para o GIEPI, incluindo sistema acadêmico com
            integração de dados da Plataforma Lattes e painel administrativo.
          </motion.p>
          <motion.p variants={item} className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
            Também criei o Código TCC e cardápios digitais para negócios locais,
            como pizzaria, churrascaria e restaurante, com experiências
            responsivas, carrinho, personalização de pedido e fluxo de envio
            pelo WhatsApp.
          </motion.p>
          <motion.ul variants={item} className="mt-6 space-y-2 text-zinc-300 list-disc list-inside">
            <li>APIs, integrações e automações</li>
            <li>Bancos de dados relacionais</li>
            <li>Scraping aplicado a fluxos reais</li>
            <li>Interfaces responsivas, cardápios digitais e painéis administrativos</li>
            <li>Arquitetura, organização e manutenção de código</li>
          </motion.ul>
        </motion.section>

        <motion.section
          className="max-w-5xl mx-auto mb-20"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2 variants={item} className="text-2xl font-semibold mb-4">
            Como eu trabalho
          </motion.h2>
          <motion.p variants={item} className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
            Meu foco vai além de apenas fazer o sistema funcionar. Busco
            construir soluções organizadas, escaláveis e pensadas para
            manutenção a longo prazo, aplicando boas práticas e responsabilidade
            técnica em cada entrega.
          </motion.p>
          <motion.p variants={item} className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
            Tenho atenção especial à estrutura do código, à clareza da
            arquitetura e à consistência dos dados, porque sistemas bem
            planejados evoluem melhor e reduzem problemas futuros.
          </motion.p>
        </motion.section>

        <motion.div className="techs">
          {tecnologias.map((tech, i) => (
            <motion.div
              key={i}
              className="icon"
              style={{ color: tech.color }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              whileHover={{ scale: 1.18, rotate: 6 }}
              whileTap={{ scale: 0.94 }}
            >
              {tech.icon}
            </motion.div>
          ))}
        </motion.div>

        <motion.section
          className="max-w-5xl mx-auto mt-24 about-cta px-5 sm:px-6 py-10 text-center"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Quer ver isso aplicado em projetos reais?
          </h3>

          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            Confira sistemas e aplicações que desenvolvi para uso real, com foco
            em arquitetura, organização de dados, automações e responsividade.
          </p>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }}>
            <a href="/projects">
              <Button variant="primary" className="px-8 py-3 text-base cta-btn">
                Ver projetos
              </Button>
            </a>
          </motion.div>
        </motion.section>
      </main>
    </main>
  );
}
