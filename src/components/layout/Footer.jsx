import React from "react";
import { motion } from "framer-motion";
import logotrans from "../../assets/images/jvdev-fundotransparente.png";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-300 px-6 py-5 mt-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        {/* LOGO / BRAND */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <img src={logotrans} alt="JVDev Logo" className="w-20" />
          <p className="text-sm text-gray-400">
            Desenvolvedor Front-end focado em interfaces modernas, funcionais e orientadas à experiência do usuário.
          </p>
        </div>

        {/* NAVEGAÇÃO */}
        <div className="flex flex-col items-center gap-2">
          <h4 className="text-white font-semibold mb-2">Navegação</h4>
          {["Home", "About Me", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(" ", "")}`}
              className="hover:text-blue-400 transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* REDES / INFO */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <h4 className="text-white font-semibold mb-2">Contato</h4>
          <a
            href="https://github.com/joaovitor2074"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/joao-vitor-salazar-vieira-9387aa344"
            target="_blank"
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
