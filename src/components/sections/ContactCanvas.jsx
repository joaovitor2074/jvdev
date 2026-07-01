import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

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

export default function ContactCanvas() {
  return (
    <Canvas camera={{ position: [5, 3, 0], fov: 65 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 4, 4]} intensity={1} />
      <ContactModel />
    </Canvas>
  );
}
