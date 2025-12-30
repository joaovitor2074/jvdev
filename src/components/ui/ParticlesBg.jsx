import { useEffect, useMemo } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

export default function ParticlesBg() {
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine)
        })
    }, [])

    const options = useMemo(() => ({
        background: {
            color: "transparent",
        },

        fpsLimit: 60,

        particles: {
            number: {
                value: 130, // ⬅️ mais partículas
                density: {
                    enable: true,
                    area: 900,
                },
            },

            color: {
                value: ["#3b82f6", "#60a5fa", "#93c5fd"], // ⬅️ azuis variados
            },

            shape: {
                type: "circle",
            },

            opacity: {
                value: 0.6,
                random: true,
            },

            size: {
                value: { min: 1.5, max: 3.5 },
            },

            links: {
                enable: true,
                distance: 150,
                color: "#60a5fa",
                opacity: 0.45,
                width: 1,
            },

            move: {
                enable: true,
                speed: 1.2,
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                    default: "out",
                },
            },
        },

        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab", // 🔥 NÃO SOME MAIS
                },
                onClick: {
                    enable: true,
                    mode: "push", // adiciona partículas
                },
                resize: true,
            },

            modes: {
                grab: {
                    distance: 200,
                    links: {
                        opacity: 0.8,
                    },
                },

                push: {
                    quantity: 4,
                },
            },
        },

        detectRetina: true,
    }), [])


    return (
        <Particles
            className="absolute inset-0 z-1"
            options={options}
        />
    )
}
