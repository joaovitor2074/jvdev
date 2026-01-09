import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import ParticlesBg from "../components/ui/ParticlesBg";

// CSS
import "../styles/pages/contact.css";

/* =====================
   3D MODEL
===================== */
function ContactModel() {
  const { scene } = useGLTF("/models/terminal.glb");

  return (
    <primitive
      object={scene}
      scale={0.2}
      position={[-1, -3, 5]}
      rotation={[0, Math.PI / 6, 0]}
    />
  );
}

/* =====================
   PAGE
===================== */
export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error

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

      <section className="relative min-h-screen px-6 py-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-6">
              Vamos <span className="text-blue-600">conversar</span>
            </h1>

            <p className="text-zinc-400 leading-relaxed mb-10 max-w-xl">
              Estou disponível para discutir projetos, ideias técnicas,
              arquitetura de sistemas e oportunidades profissionais.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur p-6 space-y-5"
            >
              {/* Nome */}
              <div>
                <label className="text-sm text-zinc-400">Nome</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Seu nome"
                  className="mt-2 w-full rounded-xl bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-blue-600 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-zinc-400">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="seu@email.com"
                  className="mt-2 w-full rounded-xl bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-blue-600 transition"
                />
              </div>

              {/* Assunto */}
              <div>
                <label className="text-sm text-zinc-400">Assunto</label>
                <select
                  name="subject"
                  required
                  className="mt-2 w-full rounded-xl bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-blue-600 transition"
                >
                  <option value="">Selecione um assunto</option>
                  <option>Projeto / Freelance</option>
                  <option>Pesquisa / Acadêmico</option>
                  <option>Dúvida Técnica</option>
                  <option>Outro</option>
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label className="text-sm text-zinc-400">Mensagem</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Descreva sua ideia ou proposta"
                  className="mt-2 w-full rounded-xl bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm text-zinc-200 resize-none focus:outline-none focus:border-blue-600 transition"
                />
              </div>

              {/* Botão */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-blue-600 py-3 text-sm font-medium text-white hover:bg-blue-500 transition disabled:opacity-50"
              >
                {loading ? "Enviando..." : "Enviar mensagem"}
              </button>

              {/* Feedback */}
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

          {/* 3D – DESKTOP */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block w-full h-[420px] rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur"
          >
            <Canvas camera={{ position: [5, 3, 0], fov: 65 }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[4, 4, 4]} intensity={1} />
              <ContactModel />
            </Canvas>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
