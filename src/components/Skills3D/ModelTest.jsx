import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

function Model() {
  const { scene } = useGLTF("/models/keyboard.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          map: child.material.map || null,
          color: new THREE.Color("#0f172a"), // base escura
          emissive: new THREE.Color("#22d3ee"), // LED cyan
          emissiveIntensity: 0.35,
          metalness: 0.4,
          roughness: 0.35,
        });
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      scale={1.4}
      position={[0, -0.6, 0]}
      rotation={[-0.25, 0, 0]}
    />
  );
}

export default function ModelTest() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas
        camera={{
          position: [0, 1.6, 3],
          fov: 40,
        }}
      >
        {/* AMBIENTE (baixo para não lavar cores) */}
        <ambientLight intensity={0.25} />

        {/* LUZ PRINCIPAL (frontal suave) */}
        <directionalLight
          position={[3, 5, 4]}
          intensity={0.8}
          
        />

        {/* RIM LIGHT (contorno LED) */}
        <directionalLight
          position={[-4, 2, -3]}
          intensity={1}
          color="#22d3ee"
        />

        {/* LED RGB subtle */}
        <pointLight position={[0, 2, 2]} intensity={0.6} color="#38bdf8" />
        <pointLight position={[-2, 1, -2]} intensity={0.4} color="#a78bfa" />
        <pointLight position={[2, 1, -2]} intensity={0.4} color="#22d3ee" />

        <Model />

        <OrbitControls
          enableZoom={true}
          minDistance={2}
          maxDistance={4}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 3}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}
