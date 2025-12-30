import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Key from "./Key";
import { skills } from "../../components/Skills3D/data";
import "./scene.css"

export default function Scene() {
    return (
        
        <div className={`canvadd three-wrapper`}>
            <Canvas
                camera={{
                    position: [-2, 10.5, 2],
                    fov: 45,
                    near: 0.1,
                    far: 100,
                }}
                shadows

                style={{ height: "520px", width: "100%"}}
            >
                {/* LUZ AMBIENTE */}
                <ambientLight intensity={0.35} />

                {/* LUZ PRINCIPAL (cima/frente) */}
                <directionalLight
                    position={[3, 12, 6]}
                    intensity={1.2}
                    castShadow
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                />

                {/* LUZ DE PREENCHIMENTO */}
                <spotLight
                    position={[-5, 10, 4]}
                    angle={0.35}
                    penumbra={1}
                    intensity={0.6}
                />

                <Environment preset="city" />

                {skills.map((skill, index) => (
                    <Key key={skill.name} {...skill} index={index} />
                ))}

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 5.1}   // ⬅️ trava ângulo
                    maxPolarAngle={Math.PI / 2.2}
                    target={[0, 0, -2]}             // ⬅️ centraliza o teclado
                />
            </Canvas>
        </div>

            );
}
