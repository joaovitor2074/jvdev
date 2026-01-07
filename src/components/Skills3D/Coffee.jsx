import { useGLTF, Center } from "@react-three/drei";

export default function Coffee() {
    const { scene } = useGLTF("/models/coffee.glb");

    return (
        <Center>
            <primitive
                object={scene}
                scale={3}
            />
        </Center>
    );
}

useGLTF.preload("/models/coffee.glb");
