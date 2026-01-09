import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const contacts = [
  {
    label: "Email",
    icon: FaEnvelope,
    href: "mailto:jv.dev2074@gmail.com?subject=Contato%20via%20Portfólio",
    bg: "from-blue-500 to-blue-600",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/joao-vitor-salazar-vieira-9387aa344",
    bg: "from-sky-400 to-sky-500",
    external: true,
  },
  {
    label: "GitHub",
    icon: FaGithub,
    href: "https://github.com/joaovitor2074",
    bg: "from-gray-700 to-gray-800",
    external: true,
  },
];

export default function Contact() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Background blur */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 blur-3xl" />

      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white text-4xl md:text-5xl font-semibold"
        >
          Vamos conversar
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 mt-6 max-w-xl mx-auto leading-relaxed"
        >
          Estou aberto a oportunidades, projetos e colaborações.
          <br />
          Se quiser conversar ou saber mais sobre meu trabalho,
          fique à vontade para entrar em contato.
        </motion.p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {contacts.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08 }}
                className="group relative rounded-2xl p-8 backdrop-blur-xl
                           bg-white/5 border border-white/10
                           hover:border-blue-500/40 transition-all"
              >
                {/* Gradient glow */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition
                              bg-gradient-to-br ${item.bg}`}
                />

                <div className="relative flex flex-col items-center gap-4">
                  <Icon className="text-4xl text-white group-hover:text-blue-400 transition" />
                  <span className="text-white text-lg font-medium">
                    {item.label}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* More info */}
        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="inline-block mt-16 px-10 py-4 rounded-xl
                     bg-blue-500 text-white font-medium
                     hover:bg-blue-600 transition"
        >
          Mais informações de contato
        </motion.a>
      </div>
    </section>
  );
}
