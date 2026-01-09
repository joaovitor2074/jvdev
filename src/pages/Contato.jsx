import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

//css
import "../styles/pages/contact.css"

/* =====================
   3D MODEL
===================== */
function ContactModel() {
    const { scene } = useGLTF("/models/terminal.glb");

    return (
        <primitive
            object={scene}
            scale={0.2}
            position={[-1, -2.5, 5]}
        />
    );
}

/* =====================
   PAGE
===================== */
export default function Contact() {
    return (
        <section className="m-auto min-h-screen px-6 py-24 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* TEXTO */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">
                        Entre em contato
                    </h1>
                    <div className="flex">
                        <p className="flex text-zinc-400 leading-relaxed mb-8">
                            Estou aberto para conversar sobre desenvolvimento de sistemas,
                            criação de projetos, arquitetura de aplicações e soluções web
                            voltadas para uso real.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur p-6">
                        <h2 className="text-lg font-semibold mb-3">
                            Vamos conversar?
                        </h2>

                        <p className="text-sm text-zinc-400 mb-6">
                            Se você quiser entender como desenvolvo meus projetos,
                            discutir ideias ou propor colaborações técnicas,
                            é só me chamar.
                        </p>

                        <a
                            href="mailto:jv.dev2074@gmail.com?subject=Conversa%20sobre%20criação%20de%20projetos&body=Olá%20João%2C%0A%0AGostaria%20de%20conversar%20sobre%20como%20você%20desenvolve%20seus%20projetos%2C%20arquitetura%20e%20boas%20práticas.%0A%0A"
                            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium hover:bg-blue-500 transition"
                        >
                            Enviar e-mail
                        </a>
                    </div>
                </motion.div>

                {/* 3D */}

            <div className=" gap-16 items-center">

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur contact-canvas"
                        >
                            <Canvas camera={{ position: [5, 1.5, 4], fov: 60 }}>
                                <ambientLight intensity={0.7} />
                                <directionalLight position={[4, 4, 4]} intensity={1} />
                                <ContactModel />
                                <OrbitControls enableZoom={false} enablePan={false} />
                            </Canvas>
                        </motion.div>
            </div>
            </div>
        </section>
    );
}
