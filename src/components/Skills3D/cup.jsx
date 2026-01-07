import { useGLTF, Center } from "@react-three/drei";

export default function Coffee() {
    const { scene } = useGLTF("/models/cup.glb");

    return (
        <Center>
            <primitive
                object={scene}
                scale={10}
            />
        </Center>
    );
}

useGLTF.preload("/models/coffee.glb");
