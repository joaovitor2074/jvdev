import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"

function Model() {
  const { scene } = useGLTF("/models/keyboard.glb")

  return (
    <primitive
      object={scene}
      scale={1.4}
      position={[0, -0.6, 0]}
      rotation={[-0.25, 0, 0]} // deixa mais "de cima"
    />
  )
}

export default function ModelTest() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas
        camera={{
          position: [0, 1.6, 3], // mais perto e mais alto
          fov: 40               // menos distorção, mais foco
        }}
      >
        {/* Luz ambiente suave */}
        <ambientLight intensity={0.6} />

        {/* Luz principal */}
        <directionalLight
          position={[3, 5, 3]}
          intensity={1}
        />

        {/* Luz de preenchimento */}
        <directionalLight
          position={[-3, 2, 2]}
          intensity={0.4}
        />

        <Model />

        <OrbitControls
          enableZoom={true}
          minDistance={2}
          maxDistance={4}
          maxPolarAngle={Math.PI / 2.2} // impede olhar por baixo
          minPolarAngle={Math.PI / 3}   // força visão superior
        />
      </Canvas>
    </div>
  )
}
