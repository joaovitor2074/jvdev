import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

let enginePromise;

function ensureParticlesEngine() {
  if (!enginePromise) {
    enginePromise = initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }

  return enginePromise;
}

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}

export default function ParticlesBg() {
  const [ready, setReady] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    let active = true;

    ensureParticlesEngine().then(() => {
      if (active) setReady(true);
    });

    return () => {
      active = false;
    };
  }, []);

  const options = useMemo(() => ({
    background: {
      color: "transparent",
    },
    fpsLimit: isMobile ? 30 : 45,
    particles: {
      number: {
        value: isMobile ? 38 : 80,
        density: {
          enable: true,
          area: isMobile ? 1000 : 900,
        },
      },
      color: {
        value: ["#3b82f6", "#60a5fa", "#93c5fd"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: isMobile ? 0.42 : 0.52,
        random: true,
      },
      size: {
        value: { min: 1, max: isMobile ? 2.4 : 3.1 },
      },
      links: {
        enable: !isMobile,
        distance: 145,
        color: "#60a5fa",
        opacity: 0.35,
        width: 1,
      },
      move: {
        enable: true,
        speed: isMobile ? 0.55 : 0.9,
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
          enable: !isMobile,
          mode: "grab",
        },
        onClick: {
          enable: !isMobile,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 180,
          links: {
            opacity: 0.7,
          },
        },
        push: {
          quantity: 3,
        },
      },
    },
    detectRetina: true,
  }), [isMobile]);

  if (!ready || reduceMotion) return null;

  return (
    <Particles
      className="absolute inset-0 z-0"
      options={options}
    />
  );
}
