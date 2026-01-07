import ParticlesBg from "../components/ui/ParticlesBg";
import CoffeeScene from "../components/Skills3D/CoffeeScene";



export default function SobreMim() {
    return (

        <>
            <div className="fixed inset-0 z-0 pointer-events-none">
                <ParticlesBg />
            </div>
            <main className=" min-h-screen  text-zinc-100 px-6 md:px-12 py-20">
                {/* HERO */}
                <section className=" max-w-5xl mx-auto mb-24">
                    <h1 className=" text-4xl md:text-5xl font-bold mb-6">
                        Sobre mim
                    </h1>
                    <div className="flex">
                        <p className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
                            Olá, eu sou João Vitor. Desenvolvedor web full stack e bolsista CNPq,
                            atuando no desenvolvimento de sistemas e aplicações web voltadas para
                            uso real, com foco em arquitetura, organização e automação de dados.
                        </p>
                        {/* Placeholder para o 3D da xícara */}
                        <div className="mt-12 h-64 md:h-80 rounded-xl border border-zinc-800 overflow-hidden">
                            <CoffeeScene />
                        </div>

                    </div>
                </section>
                {/* TRAJETÓRIA */}
                <section className="max-w-5xl mx-auto mb-20">
                    <h2 className="text-2xl font-semibold mb-4">Minha trajetória</h2>
                    <p className="text-zinc-300 leading-relaxed">
                        Meu interesse por programação começou em 2023, enquanto trabalhava de forma
                        informal em uma loja de informática. Nos horários livres, passei a estudar
                        desenvolvimento web de forma autodidata, iniciando pelos fundamentos de
                        HTML, CSS e JavaScript.
                    </p>
                    <p className="text-zinc-300 leading-relaxed mt-4">
                        Após o encerramento do contrato, investi no meu próprio computador e continuei
                        estudando em casa. Ao ingressar no IFMA, minha experiência prévia com programação
                        e freelances levou à participação em projetos de pesquisa, incluindo uma bolsa CNPq.
                    </p>
                </section>
                {/* EXPERIÊNCIA */}
                <section className="max-w-5xl mx-auto mb-20">
                    <h2 className="text-2xl font-semibold mb-4">
                        Projetos reais e experiência prática
                    </h2>
                    <p className="text-zinc-300 leading-relaxed">
                        Atualmente desenvolvo sistemas web para grupos de pesquisa, incluindo um
                        sistema acadêmico que integra dados da Plataforma Lattes a uma aplicação própria.
                    </p>
                    <ul className="mt-6 space-y-2 text-zinc-300 list-disc list-inside">
                        <li>Desenvolvimento completo de APIs</li>
                        <li>Modelagem e uso de bancos de dados relacionais</li>
                        <li>Implementação de scraping em ambiente de produção</li>
                        <li>Boas práticas de arquitetura e organização de código</li>
                    </ul>
                </section>
                {/* MINDSET */}
                <section className="max-w-5xl mx-auto mb-20">
                    <h2 className="text-2xl font-semibold mb-4">
                        Como eu trabalho
                    </h2>
                    <p className="text-zinc-300 leading-relaxed">
                        Meu foco vai além de apenas fazer o sistema funcionar. Busco construir
                        soluções organizadas, escaláveis e pensadas para manutenção a longo prazo,
                        aplicando boas práticas e responsabilidade técnica em cada projeto.
                    </p>
                </section>
                {/* TECNOLOGIAS */}
                <section className="max-w-5xl mx-auto mb-24">
                    <h2 className="text-2xl font-semibold mb-6">
                        Tecnologias e ferramentas
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-zinc-300">
                        <span>JavaScript / TypeScript</span>
                        <span>React / Node.js</span>
                        <span>NestJS / Express</span>
                        <span>MySQL</span>
                        <span>Tailwind CSS</span>
                        <span>Three.js</span>
                        <span>Git / GitHub</span>
                        <span>Linux</span>
                        <span>Blender (3D)</span>
                    </div>
                </section>
                {/* CTA */}
                <section className="max-w-5xl mx-auto border-t border-zinc-800 pt-12">
                    <p className="text-zinc-400">
                        Quer conhecer melhor meu trabalho?
                    </p>
                    <a
                        href="/projects"
                        className="inline-block mt-4 text-white font-medium border-b border-white hover:opacity-80 transition"
                    >
                        Ver projetos
                    </a>
                </section>
            </main>
        </>
    );
}
