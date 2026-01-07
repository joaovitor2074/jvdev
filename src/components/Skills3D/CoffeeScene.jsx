import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Coffee from "./Coffee";
import Cup from "./cup"

export default function CoffeeScene() {
    return (
        <Canvas camera={{ position: [0, 3, 7], fov: 35 }}>
    <ambientLight intensity={0} />
    <directionalLight position={[5, 5, 5]} intensity={1} />

    <Coffee />

    <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.8}
    />

    <Environment preset="night" />
</Canvas>


    );
}
