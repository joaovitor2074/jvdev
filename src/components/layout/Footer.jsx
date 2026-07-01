import React from "react";
import { motion } from "framer-motion";
import logotrans from "../../assets/images/jvdev-fundotransparente.png";

const links = [
  { label: "Início", href: "/" },
  { label: "Sobre mim", href: "/about" },
  { label: "Projetos", href: "/projects" },
  { label: "Contato", href: "/contact" },
];

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-300 px-4 sm:px-6 py-7 mt-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <img src={logotrans} alt="Logo JVDev" className="w-20" loading="lazy" decoding="async" />
          <p className="text-sm text-gray-400 max-w-sm">
            Desenvolvedor Full Stack focado em sistemas web, automações,
            interfaces responsivas e soluções orientadas a dados.
          </p>
        </div>

        <nav className="flex flex-col items-center gap-2" aria-label="Navegação do rodapé">
          <h4 className="text-white font-semibold mb-2">Navegação</h4>
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-blue-400 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center md:items-end gap-2">
          <h4 className="text-white font-semibold mb-2">Contato</h4>
          <a
            href="https://github.com/joaovitor2074"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/joao-vitor-salazar-vieira-9387aa344"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
          <span className="text-sm text-gray-500 mt-2">
            © 2026 JVDev
          </span>
        </div>
      </div>
    </motion.footer>
  );
}
