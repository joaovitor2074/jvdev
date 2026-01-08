import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Keyboard } from "./ModelTest";

export default function ModelTest() {
  return (
    <Canvas
      camera={{ position: [0, 1.6, 3], fov: 40 }}
    >
      <ambientLight intensity={0.25} />

      <directionalLight position={[3, 5, 4]} intensity={0.8} />
      <directionalLight
        position={[-4, 2, -3]}
        intensity={1}
        color="#22d3ee"
      />

      <pointLight position={[0, 2, 2]} intensity={0.6} color="#38bdf8" />
      <pointLight position={[-2, 1, -2]} intensity={0.4} color="#a78bfa" />
      <pointLight position={[2, 1, -2]} intensity={0.4} color="#22d3ee" />

      <Keyboard />

      <OrbitControls
        enableZoom
        minDistance={2}
        maxDistance={4}
        maxPolarAngle={Math.PI / 2.2}
        minPolarAngle={Math.PI / 3}
        enablePan={false}
      />
    <Environment preset="night" />
    </Canvas>

  );
}
