import React from "react";
import Button from "../ui/Button";

// imagem do banner
import banner from "../../assets/images/banner.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-96   text-white"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-24">

        {/* Texto - lado esquerdo */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Olá, eu sou <span className="text-blue-500">JV</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300">
            Desenvolvedor Front-end & Estudante de Programação
          </h2>

          <p className="text-gray-400 max-w-xl">
            Crio interfaces modernas, responsivas e bem estruturadas,
            focadas em performance, usabilidade e código limpo.
          </p>

          <div className="flex gap-4">
            <Button variant="primary">
              Ver Projetos
            </Button>

            <Button variant="secondary">
              Contato
            </Button>
          </div>
        </div>

        {/* Imagem - lado direito */}
        <div className="flex justify-center md:justify-end">
          <img
            src={banner}
            alt="Banner JVDev"
            className="max-w-xs md:max-w-md"
          />
        </div>

      </div>
    </section>
  );
}
