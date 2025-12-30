import { useRef, useState, useMemo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { RoundedBox, Text } from "@react-three/drei";
import * as THREE from "three";
import { createGradientTexture } from "../../utils/createGradientTexture";

export default function Key({ name, colors, icon, index }) {
  const keyRef = useRef();
  const [hovered, setHovered] = useState(false);

  const gradientMap = useMemo(
    () => createGradientTexture(colors[0], colors[1]),
    [colors]
  );

  const iconTexture = useLoader(THREE.TextureLoader, icon);

  useFrame(() => {
    if (!keyRef.current) return;
    const targetY = hovered ? -0.3 : 0;
    keyRef.current.position.y +=
      (targetY - keyRef.current.position.y) * 0.18;
  });

  return (
    <group
      position={[
        (index % 5) * 1.7 - 2.55,
        0,
        Math.floor(index / 5) * -2.1,
      ]}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <group ref={keyRef}>
        {/* BASE */}
        <RoundedBox
          args={[1.6, 0.8, 2.1]}
          radius={0.28}
          smoothness={12}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial
            color={colors[1]}
            roughness={0.6}
            metalness={0.05}
          />
        </RoundedBox>

        {/* TOP LAYER */}
        <RoundedBox
          position={[0, 0.45, 0]}
          args={[1.45, 0.4, 1.9]}
          radius={0.22}
          smoothness={12}
          castShadow
        >
          <meshStandardMaterial
            map={gradientMap}
            roughness={0.25}
            metalness={0.2}
            emissive="#ffffff"
            emissiveIntensity={hovered ? 0.8 : 0.25}
          />
        </RoundedBox>

        {/* ÍCONE */}
        <mesh position={[0, 0.72, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.55, 0.55]} />
          <meshStandardMaterial
            map={iconTexture}
            transparent
            toneMapped={false}
          />
        </mesh>

        {/* TEXTO */}
        <Text
          position={[0, 0.42, 0.55]}
          rotation={[-Math.PI / 2, 0, 0]}
          fontSize={0.16}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
      </group>
    </group>
  );
}
