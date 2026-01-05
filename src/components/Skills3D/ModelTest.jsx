import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
const isMobile = window.innerWidth < 768;


export function Keyboard() {
  const { scene } = useGLTF("/models/keyboard.glb");

  const { camera, mouse } = useThree();
  const raycaster = useRef(new THREE.Raycaster());

  const keys = useRef([]);

  useEffect(() => {
    keys.current = [];

    scene.traverse((child) => {
      if (
        child.isMesh &&
        child.name.toLowerCase().startsWith("key_")
      ) {
        child.userData.baseY = child.position.y;

        child.material = new THREE.MeshStandardMaterial({
          map: child.material.map || null,
          color: "#0f172a",
          emissive: "#22d3ee",
          emissiveIntensity: 0.35,
          metalness: 0.4,
          roughness: 0.35,
        });

        keys.current.push(child);
      }
    });
  }, [scene]);

  useFrame(() => {
  if (isMobile) return;

  raycaster.current.setFromCamera(mouse, camera);
  const intersects = raycaster.current.intersectObjects(
    keys.current,
    false
  );

  const hoveredKey = intersects[0]?.object || null;

  keys.current.forEach((key) => {
    const isHovered = key === hoveredKey;
    const targetY = isHovered
      ? key.userData.baseY - 0.05
      : key.userData.baseY;

    key.position.y = THREE.MathUtils.lerp(
      key.position.y,
      targetY,
      0.25
    );
  });
});


  return (
    <primitive
      object={scene}
      scale={1.4}
      position={[0, -0.6, 0]}
      rotation={[-0.25, 0, 0]}
    />
  );
}
