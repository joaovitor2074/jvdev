// ModelTest.jsx
import React, { useEffect, useMemo, Suspense } from "react";
import * as THREE from "three";

import { Canvas, useLoader } from "@react-three/fiber";
import {
    OrbitControls,
    useGLTF,
    useAnimations,
    Environment,
} from "@react-three/drei";

import { skills } from "../Skills3D/data";

/**
 * Normaliza strings para evitar erro de comparação
 * Ex: "Java Script", "javascript", "Java-Script" → "javascript"
 */
const normalize = (str = "") =>
    str
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/[^a-z0-9]/g, "");

/**
 * Componente responsável por:
 * - carregar o modelo
 * - aplicar animações
 * - colorir teclas
 * - adicionar ícones
 */
function Model() {
    const { scene, animations } = useGLTF("/models/keyboard5.glb");

    // Controle das animações do GLB
    const { actions } = useAnimations(animations, scene);

    /**
     * Filtra apenas skills que possuem ícone
     * Evita erro no TextureLoader
     */
    const skillsWithIcon = useMemo(
        () => skills.filter((s) => !!s.icon),
        []
    );

    /**
     * Carrega as texturas dos ícones
     * A ordem precisa bater com skillsWithIcon
     */
    const icons = useLoader(
        THREE.TextureLoader,
        skillsWithIcon.map((s) => s.icon)
    );

    /**
     * Cria um mapa:
     * id_normalizado → skill + texture (se existir)
     */
    const skillsMap = useMemo(() => {
        const map = {};

        // adiciona todas as skills (sem textura)
        skills.forEach((s) => {
            const id = normalize(s.id || s.name);
            map[id] = { ...s, texture: null };
        });

        // adiciona texturas somente às que têm ícone
        skillsWithIcon.forEach((s, idx) => {
            const id = normalize(s.id || s.name);
            if (map[id]) map[id].texture = icons[idx];
        });

        return map;
    }, [icons, skillsWithIcon]);

    /**
     * Ativa todas as animações do teclado
     * Ajuste de velocidade para ficar mais natural
     */
    useEffect(() => {
        if (!actions) return;

        Object.values(actions).forEach((action) => {
            action
                .reset()
                .setEffectiveWeight(1)
                .setEffectiveTimeScale(0.85) // ⬅️ velocidade (menor = mais suave)
                .fadeIn(0.4)
                .play();
        });

        return () => {
            Object.values(actions).forEach((action) => action.stop());
        };
    }, [actions]);

    /**
     * Aplica materiais e ícones às teclas
     */
    useEffect(() => {
        if (!scene) return;

        scene.traverse((child) => {
            if (!child.isMesh) return;
            if (!child.name || !/^key_/i.test(child.name)) return;

            // Extrai ID da tecla
            const meshId = normalize(child.name.replace(/^key_/i, ""));

            // Busca skill correspondente
            const skill =
                skillsMap[meshId] ||
                skills.find((s) =>
                    normalize(s.name).includes(meshId)
                ) ||
                null;

            /**
             * Caso não encontre skill:
             * aplica material neutro
             */
            if (!skill) {
                child.material = new THREE.MeshStandardMaterial({
                    color: "#888",
                    roughness: 0.5,
                    metalness: 0.1,
                });
                return;
            }

            /**
             * MATERIAL DA TECLA
             * Sempre colorida, mesmo com ícone
             */
            const baseColor = skill.colors?.[0] || "#777";
            const emissiveColor = skill.emissive || baseColor;

            child.material = new THREE.MeshStandardMaterial({
                color: new THREE.Color(baseColor),
                roughness: 0.28,        // ⬅️ ajuste de plástico premium
                metalness: 0.35,        // ⬅️ brilho leve
                emissive: new THREE.Color(emissiveColor),
                emissiveIntensity: 0.18,
            });

            /**
             * ADIÇÃO DO ÍCONE
             * O ícone é filho da tecla → anima junto
             */
            if (skill.texture && !child.userData.iconAdded) {
                const geom = child.geometry;

                if (geom?.isBufferGeometry) {
                    if (!geom.boundingBox) geom.computeBoundingBox();
                    const bbox = geom.boundingBox;

                    // Dimensões da tecla
                    const keyWidth = bbox.max.x - bbox.min.x;

                    // ⬇️ AJUSTES VISUAIS IMPORTANTES
                    const iconSize = keyWidth * 0.45; // tamanho do ícone
                    const yOffset = keyWidth * 0.12;  // altura acima da tecla

                    // Criação do plano do ícone
                    const iconGeo = new THREE.PlaneGeometry(iconSize, iconSize);
                    const iconMat = new THREE.MeshStandardMaterial({
                        map: skill.texture,
                        transparent: true,
                        roughness: 0.6,
                        metalness: 0,
                        emissive: new THREE.Color("#fff"),
                        emissiveIntensity: 0.35,
                    });

                    const iconMesh = new THREE.Mesh(iconGeo, iconMat);

                    // Mantém paralelo ao topo da tecla
                    iconMesh.rotation.x = -Math.PI / 2;

                    // Centraliza no topo
                    iconMesh.position.set(
                        (bbox.min.x + bbox.max.x) / 2,
                        bbox.max.y + yOffset,
                        (bbox.min.z + bbox.max.z) / 2
                    );

                    // Evita z-fighting
                    iconMesh.renderOrder = 999;

                    // ⬅️ ESSENCIAL: torna o ícone filho da tecla
                    child.add(iconMesh);
                    child.userData.iconAdded = true;
                }
            }
        });
    }, [scene, skillsMap]);

    return (
        <primitive
            object={scene}
            scale={16.5}                 // ⬅️ escala geral
            position={[-0.5, 0.05, 0.9]} // ⬅️ posição
            rotation={[0.65, 0.45, 0.08]}// ⬅️ ângulo premium
        />
    );
}

/**
 * Wrapper do Canvas
 * Responsável por iluminação, environment e controles
 */
export default function ModelTest() {
    return (
        <div style={{ width: "100%", height: "50vh" }}>
            <Canvas
                shadows
                dpr={[1, 2]}
                camera={{ position: [0, 0.8, 2.6], fov: 42 }}
            >
                {/* Luz ambiente suave */}
                <ambientLight intensity={0.1} />

                {/* Luz principal */}
                <directionalLight
                    position={[3, 5, 4]}
                    intensity={0}
                    castShadow
                    shadow-mapSize={[2048, 2048]}
                />

                {/* Luz de recorte */}
                <directionalLight
                    position={[-4, 2, -3]}
                    intensity={0.6}
                    color="#88aaff"
                />

                {/* Luz de preenchimento */}
                <pointLight
                    position={[0, 1.2, 1]}
                    intensity={2}
                    distance={5}
                />

                {/* Environment melhora reflexos */}
                <Environment preset="city" />

                <Suspense fallback={null}>
                    <Model />
                </Suspense>

                
            </Canvas>
        </div>
    );
}
