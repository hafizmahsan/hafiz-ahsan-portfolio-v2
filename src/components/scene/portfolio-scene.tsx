"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

function SceneObject() {
  const group = useRef<THREE.Group>(null);
  const mesh = useRef<THREE.Mesh>(null);

  const pointer = useMemo(() => new THREE.Vector2(), []);
  const reducedMotion = useReducedMotion();
  const scrollProgress = useScrollProgress();

  useFrame((state, delta) => {
    if (!group.current || !mesh.current) {
      return;
    }

    pointer.x = THREE.MathUtils.lerp(
      pointer.x,
      state.pointer.x,
      1 - Math.pow(0.001, delta)
    );

    pointer.y = THREE.MathUtils.lerp(
      pointer.y,
      state.pointer.y,
      1 - Math.pow(0.001, delta)
    );

    const targetX = reducedMotion ? 0 : pointer.y * 0.12;
    const targetY = reducedMotion ? 0 : pointer.x * 0.18;

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetX,
      1 - Math.pow(0.001, delta)
    );

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetY,
      1 - Math.pow(0.001, delta)
    );

    const scrollRotation = reducedMotion
      ? 0
      : scrollProgress.current * Math.PI * 0.65;

    mesh.current.rotation.z = THREE.MathUtils.lerp(
      mesh.current.rotation.z,
      scrollRotation,
      1 - Math.pow(0.01, delta)
    );

    if (!reducedMotion) {
      mesh.current.rotation.x += delta * 0.08;
      mesh.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={group}>
      <Float
        speed={reducedMotion ? 0 : 1.2}
        rotationIntensity={reducedMotion ? 0 : 0.25}
        floatIntensity={reducedMotion ? 0 : 0.35}
      >
        <mesh ref={mesh} scale={1.45}>
          <icosahedronGeometry args={[1, 1]} />

          <MeshTransmissionMaterial
            backside
            samples={4}
            resolution={256}
            thickness={0.7}
            roughness={0.18}
            transmission={1}
            ior={1.45}
            chromaticAberration={0.04}
            anisotropy={0.15}
            distortion={0.12}
            distortionScale={0.2}
            temporalDistortion={0.08}
            color="#67e8f9"
          />
        </mesh>

        <mesh scale={1.7}>
          <icosahedronGeometry args={[1, 1]} />

          <meshBasicMaterial
            color="#22d3ee"
            wireframe
            transparent
            opacity={0.12}
          />
        </mesh>
      </Float>
    </group>
  );
}

export function PortfolioScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{
          position: [0, 0, 5],
          fov: 45,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <color attach="background" args={["transparent"]} />

        <ambientLight intensity={0.45} />

        <pointLight
          position={[3, 3, 4]}
          intensity={18}
          color="#67e8f9"
        />

        <pointLight
          position={[-3, -2, 2]}
          intensity={10}
          color="#6366f1"
        />

        <Stars
          radius={40}
          depth={20}
          count={reducedMotionSafeStars()}
          factor={1.5}
          saturation={0}
          fade
          speed={0.25}
        />

        <SceneObject />
      </Canvas>
    </div>
  );
}

function reducedMotionSafeStars() {
  if (typeof window === "undefined") {
    return 800;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? 250
    : 800;
}
