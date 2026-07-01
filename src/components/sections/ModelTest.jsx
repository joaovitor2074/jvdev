import { Suspense, useEffect, useMemo } from "react";
import * as THREE from "three";

import { Canvas, useLoader } from "@react-three/fiber";
import {
  useGLTF,
  useAnimations,
  Environment,
} from "@react-three/drei";

import { skills } from "../Skills3D/data";

const normalize = (str = "") =>
  str
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9]/g, "");

function Model() {
  const { scene, animations } = useGLTF("/models/keyboard5.glb");
  const { actions } = useAnimations(animations, scene);

  const skillsWithIcon = useMemo(
    () => skills.filter((skill) => Boolean(skill.icon)),
    []
  );

  const icons = useLoader(
    THREE.TextureLoader,
    skillsWithIcon.map((skill) => skill.icon)
  );

  const skillsMap = useMemo(() => {
    const map = {};

    skills.forEach((skill) => {
      const id = normalize(skill.id || skill.name);
      map[id] = { ...skill, texture: null };
    });

    skillsWithIcon.forEach((skill, index) => {
      const id = normalize(skill.id || skill.name);
      if (map[id]) map[id].texture = icons[index];
    });

    return map;
  }, [icons, skillsWithIcon]);

  useEffect(() => {
    if (!actions) return undefined;

    Object.values(actions).forEach((action) => {
      action
        .reset()
        .setEffectiveWeight(1)
        .setEffectiveTimeScale(0.8)
        .fadeIn(0.35)
        .play();
    });

    return () => {
      Object.values(actions).forEach((action) => action.stop());
    };
  }, [actions]);

  useEffect(() => {
    if (!scene) return;

    scene.traverse((child) => {
      if (!child.isMesh || !child.name || !/^key_/i.test(child.name)) return;

      const meshId = normalize(child.name.replace(/^key_/i, ""));
      const skill =
        skillsMap[meshId] ||
        skills.find((item) => normalize(item.name).includes(meshId)) ||
        null;

      if (!skill) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#888",
          roughness: 0.5,
          metalness: 0.1,
        });
        return;
      }

      const baseColor = skill.colors?.[0] || "#777";
      const emissiveColor = skill.emissive || baseColor;

      child.material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(baseColor),
        roughness: 0.32,
        metalness: 0.28,
        emissive: new THREE.Color(emissiveColor),
        emissiveIntensity: 0.16,
      });

      if (skill.texture && !child.userData.iconAdded) {
        const geom = child.geometry;
        if (!geom?.isBufferGeometry) return;

        if (!geom.boundingBox) geom.computeBoundingBox();
        const bbox = geom.boundingBox;
        const keyWidth = bbox.max.x - bbox.min.x;
        const iconSize = keyWidth * 0.45;
        const yOffset = keyWidth * 0.12;

        const iconGeo = new THREE.PlaneGeometry(iconSize, iconSize);
        const iconMat = new THREE.MeshStandardMaterial({
          map: skill.texture,
          transparent: true,
          roughness: 0.6,
          metalness: 0,
          emissive: new THREE.Color("#fff"),
          emissiveIntensity: 0.32,
        });

        const iconMesh = new THREE.Mesh(iconGeo, iconMat);
        iconMesh.rotation.x = -Math.PI / 2;
        iconMesh.position.set(
          (bbox.min.x + bbox.max.x) / 2,
          bbox.max.y + yOffset,
          (bbox.min.z + bbox.max.z) / 2
        );
        iconMesh.renderOrder = 999;

        child.add(iconMesh);
        child.userData.iconAdded = true;
      }
    });
  }, [scene, skillsMap]);

  return (
    <primitive
      object={scene}
      scale={16.5}
      position={[-0.5, 0.05, 0.9]}
      rotation={[0.65, 0.45, 0.08]}
    />
  );
}

export default function ModelTest() {
  return (
    <div style={{ width: "100%", height: "50vh" }}>
      <Canvas
        shadows={false}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.8, 2.6], fov: 42 }}
      >
        <ambientLight intensity={0.14} />

        <directionalLight
          position={[-4, 2, -3]}
          intensity={0.58}
          color="#88aaff"
        />

        <pointLight
          position={[0, 1.2, 1]}
          intensity={1.7}
          distance={5}
        />

        <Environment preset="city" />

        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/keyboard5.glb");
