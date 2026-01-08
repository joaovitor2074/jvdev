import ParticlesBg from "../components/ui/ParticlesBg";
import CoffeeScene from "../components/Skills3D/CoffeeScene";
import { motion } from "framer-motion";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaNodeJs,
    FaReact,
    FaDatabase,
    FaWordpress,
    FaJava,
    FaLock,
    FaPython,
    FaGit,
    FaGithub,
    FaLinux,
    FaNetworkWired,
    FaHackerNews,
} from "react-icons/fa";
import { SiTailwindcss, SiPython, SiTypescript, SiExpress, SiVercel, SiHackerearth, SiNestjs } from "react-icons/si";

import "../styles/pages/aboutme.css"
const tecnologias = [
    { icon: <FaHtml5 size={50} />, color: "#E34F26" },
    { icon: <FaCss3Alt size={50} />, color: "#1572B6" },
    { icon: <FaJs size={50} />, color: "#F7DF1E" },
    { icon: <FaNodeJs size={50} />, color: "#339933" },
    { icon: <FaReact size={50} />, color: "#61DAFB" },
    { icon: <FaDatabase size={50} />, color: "#4479A1" },
    { icon: <FaWordpress size={50} />, color: "#21759B" },
    { icon: <SiTailwindcss size={50} />, color: "#38B2AC" },
    { icon: <SiPython size={50} />, color: "#3776AB" },
    { icon: <FaGit size={50} />, color: "#F05032" },
    { icon: <FaLinux size={50} />, color: "#FCC624" },
    { icon: <FaGithub size={50} />, color: "#FFFFFF" },
    { icon: <FaNetworkWired size={50} />, color: "#0EA5E9" },
    { icon: <SiTypescript size={50} />, color: "#3178C6" },
    { icon: <SiVercel size={50} />, color: "#E5E7EB" },
    { icon: <SiTailwindcss size={50} />, color: "#38BDF8" },
    { icon: <SiExpress size={50} />, color: "#9CA3AF" },
    { icon: <SiNestjs size={50} />, color: "#E0234E" },
];

import Button from "../components/ui/Button"
import { CgVercel } from "react-icons/cg";
import { DiHackernews } from "react-icons/di";

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};




export default function SobreMim() {
    return (

        <main >
            <div className="fixed inset-0 z-0 pointer-events-none">
                <ParticlesBg />
            </div>
            <main id="aboutme" className=" min-h-screen  text-zinc-100 px-6 md:px-12 py-20">
                {/* HERO */}
                <motion.section
                    className="max-w-5xl mx-auto mb-20"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h1 variants={item} className=" text-4xl md:text-5xl font-bold mb-6">
                        Sobre mim
                    </motion.h1>
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div>
                            <motion.p variants={item} className="text-lg text-zinc-300 leading-relaxed max-w-2xl">
                                Olá, eu sou João Vitor. Sou desenvolvedor web full stack e bolsista CNPq, atuando no desenvolvimento de sistemas e aplicações web voltadas para uso real. Tenho foco em arquitetura, organização e automação de dados, sempre buscando criar soluções eficientes e bem estruturadas.
                            </motion.p>
                            <motion.p variants={item} className="text-lg text-zinc-300 leading-relaxed max-w-2xl">Gosto de entender o problema antes de escrever código, pensando no sistema como um todo e não apenas em partes isoladas, o que me permite desenvolver aplicações mais consistentes e sustentáveis ao longo do tempo.</motion.p>
                        </div>
                        {/* Placeholder para o 3D da xícara */}
                        <div className="coffee-wrapper">
                            <CoffeeScene />
                        </div>

                    </div>
                </motion.section>
                {/* TRAJETÓRIA */}
                <motion.section
                    className="max-w-5xl mx-auto mb-20"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h2 variants={item} className="text-2xl font-semibold mb-4">Minha trajetória</motion.h2>
                    <motion.p variants={item} className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
                        Meu interesse por programação começou em 2023, enquanto trabalhava de forma informal em uma loja de informática. Durante os horários livres, passei a estudar desenvolvimento web de forma autodidata, utilizando esse tempo para compreender os fundamentos de HTML, CSS e JavaScript e aplicá-los na prática sempre que possível.
                    </motion.p>
                    <motion.p variants={item} className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
                        Com o encerramento do contrato, decidi investir no meu próprio computador e intensificar os estudos em casa, aprofundando meus conhecimentos e desenvolvendo projetos por conta própria. Ao ingressar no IFMA, essa experiência prévia com programação e trabalhos como freelancer facilitou minha aproximação com grupos de pesquisa, resultando na participação em projetos reais e na conquista de uma bolsa de pesquisa CNPq.
                    </motion.p>
                </motion.section>
                {/* EXPERIÊNCIA */}
                <motion.section
                    className="max-w-5xl mx-auto mb-20"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h2 variants={item} className="text-2xl font-semibold mb-4">
                        Projetos reais e experiência prática
                    </motion.h2>
                    <motion.p variants={item} className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
                        Atualmente desenvolvo sistemas web para grupos de pesquisa, incluindo um sistema acadêmico que integra dados da Plataforma Lattes a uma aplicação própria. Esses sistemas são projetados para atender demandas reais, lidando com grandes volumes de dados e necessidades específicas de organização e automação.
                    </motion.p>
                    <motion.p variants={item} className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
                        Durante o desenvolvimento desses projetos, sou responsável por todo o ciclo técnico da aplicação, incluindo:
                    </motion.p>
                    <motion.ul variants={item} className="mt-6 space-y-2 text-zinc-300 list-disc list-inside">
                        <motion.li variants={item}>APIs e integrações</motion.li>
                        <motion.li>Bancos de dados relacionais</motion.li>
                        <motion.li>Scraping em produção</motion.li>
                        <motion.li>Arquitetura e organização de código</motion.li>
                    </motion.ul>
                </motion.section>
                {/* MINDSET */}
                <motion.section
                    className="max-w-5xl mx-auto mb-20"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h2 variants={item} className="text-2xl font-semibold mb-4">
                        Como eu trabalho
                    </motion.h2>
                    <motion.p variants={item} className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
                        Meu foco vai além de apenas fazer o sistema funcionar. Busco construir soluções organizadas, escaláveis e pensadas para manutenção a longo prazo, aplicando boas práticas e responsabilidade técnica em cada projeto.
                    </motion.p>
                    <motion.p variants={item} className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
                        Tenho atenção especial à estrutura do código, à clareza da arquitetura e à consistência dos dados, entendendo que sistemas bem planejados facilitam a evolução do produto, reduzem problemas futuros e tornam o desenvolvimento mais eficiente ao longo do tempo.
                    </motion.p>
                </motion.section>
                {/* TECNOLOGIAS */}
                <motion.div className="techs">
                    {tecnologias.map((tech, i) => (
                        <motion.div
                            key={i}
                            className="icon"
                            style={{ color: tech.color }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: [0, -5, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "mirror",
                                delay: i * 0.1,
                            }}
                            whileHover={{ scale: 1.3, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {tech.icon}
                        </motion.div>
                    ))}
                </motion.div>
                {/* CTA */}
                <motion.section
                    className="max-w-5xl mx-auto mt-24 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur px-6 py-12 text-center"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                        Quer ver isso aplicado em projetos reais?
                    </h3>

                    <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
                        Confira sistemas e aplicações que desenvolvi para uso real, com foco em
                        arquitetura, organização de dados e escalabilidade.
                    </p>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
