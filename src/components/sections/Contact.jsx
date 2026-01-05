import emailicon from "./email.png"
import linkedin from "./linkedin.png"
import github from "./github.png"

export default function Contact() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-white text-3xl md:text-4xl font-semibold">
          Vamos conversar
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Estou aberto a oportunidades, projetos e colaborações.
          Se quiser conversar ou saber mais sobre meu trabalho,
          entre em contato.
        </p>

        {/* Actions */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:jv.dev2074@gmail.com?subject=Contato%20via%20Portfólio&body=Olá,%0D%0A%0D%0AGostaria%20de%20conversar%20sobre%20uma%20oportunidade.%0D%0A%0D%0AObrigado,"
            className="w-45 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition"
          >
            <img src={emailicon} className="w-10 pb-5 flex" alt="" />
            Enviar Email
          </a>

          <a
            href="https://www.linkedin.com/in/joao-vitor-salazar-vieira-9387aa344"
            target="_blank"
            rel="noreferrer"
            className="w-45 px-6 py-3 rounded-lg  bg-blue-400 text-white hover:bg-blue-300 transition"
          >
            <img src={linkedin} className="w-10 pb-5 flex" alt="" />
            LinkedIn
          </a>

          <a
            href="https://github.com/joaovitor2074"
            target="_blank"
            rel="noreferrer"
            className="w-45 px-6 py-3 rounded-lg border border-white/20 text-white hover:border-blue-500/40 transition bg-gray-600 hover:bg-gray-700"
          >
            <img src={github} className="w-10 pb-5 flex" alt="" />
            GitHub
          </a>
        </div>
        <a href="/contact" className="w-45 mt-10 flex m-auto px-6 py-3 rounded-lg  bg-blue-500 text-white hover:bg-blue-600 transition">mais informacoes para contato</a>
      </div>
    </section>
  );
}
