import { lazy, Suspense, useEffect, useState } from "react";

const ParticlesBg = lazy(() => import("./ParticlesBg"));

function shouldRenderParticles() {
  if (typeof window === "undefined") return false;

  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  const allowsMotion = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

  return isDesktop && allowsMotion;
}

export default function DeferredParticlesBg() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const update = () => setEnabled(shouldRenderParticles());

    update();
    desktopQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);

    return () => {
      desktopQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
    };
  }, []);

  if (!enabled) return null;

  return (
    <Suspense fallback={null}>
      <ParticlesBg />
    </Suspense>
  );
}
