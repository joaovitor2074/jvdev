import { lazy, Suspense, useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ParticlesBg from "../components/ui/ParticlesBg";

import "../styles/pages/contact.css";

const ContactCanvas = lazy(() => import("../components/sections/ContactCanvas"));

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

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const isDesktop = useIsDesktop();

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div id="Contact" className="relative">
      <ParticlesBg />

      <section className="relative min-h-screen px-4 sm:px-6 py-16 sm:py-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
          >
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-6">
              Vamos <span className="text-blue-500">conversar</span>
            </h1>

            <p className="text-zinc-400 leading-relaxed mb-8 sm:mb-10 max-w-xl">
              Estou disponível para discutir projetos, ideias técnicas,
              arquitetura de sistemas e oportunidades profissionais.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur p-5 sm:p-6 space-y-5"
            >
              <div>
                <label className="text-sm text-zinc-400" htmlFor="name">Nome</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="Seu nome"
                  className="mt-2 w-full rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-blue-600 transition"
                />
              </div>

              <div>
                <label className="text-sm text-zinc-400" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="seu@email.com"
                  className="mt-2 w-full rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-blue-600 transition"
                />
              </div>

              <div>
                <label className="text-sm text-zinc-400" htmlFor="subject">Assunto</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="mt-2 w-full rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-blue-600 transition"
                >
                  <option value="">Selecione um assunto</option>
                  <option>Projeto / Freelance</option>
                  <option>Pesquisa / Acadêmico</option>
                  <option>Dúvida técnica</option>
                  <option>Outro</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-zinc-400" htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Descreva sua ideia ou proposta"
                  className="mt-2 w-full rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm text-zinc-200 resize-none focus:outline-none focus:border-blue-600 transition"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-blue-600 py-3 text-sm font-medium text-white hover:bg-blue-500 transition disabled:opacity-50"
              >
                {loading ? "Enviando..." : "Enviar mensagem"}
              </button>

              {status === "success" && (
                <p className="text-sm text-green-500">
                  Mensagem enviada com sucesso. Retornarei em breve.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm text-red-500">
                  Não foi possível enviar a mensagem. Tente novamente.
                </p>
              )}
            </form>
          </motion.div>

          {isDesktop && (
            <motion.div
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              className="w-full h-[420px] rounded-lg border border-zinc-800 bg-zinc-900/30 backdrop-blur"
            >
              <Suspense fallback={<div className="contact-canvas-fallback" />}>
                <ContactCanvas />
              </Suspense>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
